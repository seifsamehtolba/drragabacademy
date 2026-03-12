"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const YOUTUBE_VIDEO_ID = "t1mKjil2h0Q";
const THUMBNAIL_URL = "/images/video-thumbnail.jpg";
const THUMBNAIL_FALLBACK = "/images/video-thumbnail.jpg";

// YouTube player state: -1=unstarted, 0=ended, 1=playing, 2=paused, 3=buffering, 5=cued
type YTPlayerState = number;

interface YTPlayer {
  playVideo: () => void;
  pauseVideo: () => void;
  getCurrentTime: () => number;
  getDuration: () => number;
  getPlayerState: () => YTPlayerState;
  seekTo: (seconds: number) => void;
  setVolume: (volume: number) => void;
  getVolume: () => number;
  setPlaybackQuality?: (quality: string) => void;
  destroy: () => void;
}

declare global {
  interface Window {
    YT?: {
      Player: new (
        element: HTMLElement,
        config: {
          videoId: string;
          playerVars?: Record<string, number | string>;
          events?: {
            onReady?: (e: { target: YTPlayer }) => void;
            onStateChange?: (e: { data: number; target: YTPlayer }) => void;
          };
        }
      ) => YTPlayer;
    };
    onYouTubeIframeAPIReady?: () => void;
  }
}

function formatTime(seconds: number): string {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export function ThemedVideoPlayer() {
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(100);
  const [showControls, setShowControls] = useState(true);
  const [thumbnailError, setThumbnailError] = useState(false);
  const [apiReady, setApiReady] = useState(false);
  const playerRef = useRef<YTPlayer | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Load YouTube API
  useEffect(() => {
    if (window.YT?.Player) {
      setApiReady(true);
      return;
    }
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScript = document.getElementsByTagName("script")[0];
    firstScript.parentNode?.insertBefore(tag, firstScript);
    window.onYouTubeIframeAPIReady = () => setApiReady(true);
  }, []);

  // Initialize player when API is ready
  useEffect(() => {
    if (!apiReady || !containerRef.current) return;

    const player = new window.YT!.Player(containerRef.current, {
      videoId: YOUTUBE_VIDEO_ID,
      playerVars: {
        controls: 0,
        modestbranding: 1,
        rel: 0,
        showinfo: 0,
        iv_load_policy: 3,
        fs: 0,
        playsinline: 1,
        disablekb: 1,
      },
      events: {
        onReady: (e) => {
          playerRef.current = e.target;
          setDuration(e.target.getDuration());
          setIsReady(true);
        },
        onStateChange: (e) => {
          if (e.data === 1) setIsPlaying(true);
          else if (e.data === 2) setIsPlaying(false);
          // Set highest quality when buffering or playing (1=playing, 3=buffering)
          if ((e.data === 1 || e.data === 3) && e.target.setPlaybackQuality) {
            try {
              e.target.setPlaybackQuality("hd1080");
            } catch {
              try {
                e.target.setPlaybackQuality("highres");
              } catch {
                // Quality not available, ignore
              }
            }
          }
        },
      },
    });

    return () => {
      playerRef.current?.destroy();
      playerRef.current = null;
    };
  }, [apiReady]);

  // Update progress when playing
  useEffect(() => {
    if (!isReady || !playerRef.current) return;

    const interval = setInterval(() => {
      const player = playerRef.current;
      if (!player) return;

      const state = player.getPlayerState();
      if (state === 1) {
        setCurrentTime(player.getCurrentTime());
        setDuration(player.getDuration());
      } else if (state === 0) {
        setIsPlaying(false);
      }
    }, 250);

    return () => clearInterval(interval);
  }, [isReady, isPlaying]);

  const togglePlayPause = useCallback(() => {
    const player = playerRef.current;
    if (!player) return;

    const state = player.getPlayerState();
    if (state === 1) {
      player.pauseVideo();
      setIsPlaying(false);
    } else {
      player.playVideo();
      setIsPlaying(true);
    }
  }, []);

  const handleProgressClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const player = playerRef.current;
      if (!player || !progressRef.current) return;

      const rect = progressRef.current.getBoundingClientRect();
      const percent = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
      const seekTo = percent * duration;
      player.seekTo(seekTo);
      setCurrentTime(seekTo);
    },
    [duration]
  );

  const handleVolumeChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const val = Number(e.target.value);
      setVolume(val);
      playerRef.current?.setVolume(val);
    },
    []
  );

  const toggleFullscreen = useCallback(() => {
    const wrapper = progressRef.current?.closest(".themed-video-wrapper");
    if (!wrapper) return;

    if (!document.fullscreenElement) {
      wrapper.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  }, []);

  const resetControlsTimeout = useCallback(() => {
    setShowControls(true);
    if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) setShowControls(false);
      controlsTimeoutRef.current = null;
    }, 3000);
  }, [isPlaying]);

  useEffect(() => {
    if (!isPlaying) setShowControls(true);
    return () => {
      if (controlsTimeoutRef.current) clearTimeout(controlsTimeoutRef.current);
    };
  }, [isPlaying]);

  return (
    <div className="themed-video-wrapper relative w-full max-w-2xl">
      {/* Minimalist browser frame */}
      <div className="rounded-t-xl overflow-hidden shadow-2xl border border-white/20 bg-gray-200/80 backdrop-blur-sm">
        {/* Browser chrome - top bar */}
        <div className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-300/50">
          {/* Traffic light dots */}
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400/80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
            <span className="w-3 h-3 rounded-full bg-green-400/80" />
          </div>
          {/* URL bar */}
          <div className="flex-1 flex justify-center">
            <span className="text-xs text-gray-600 font-medium">watch.drragab.com</span>
          </div>
          {/* Window controls */}
          <div className="flex gap-2 text-gray-500">
            <span className="text-sm">─</span>
            <span className="text-sm">□</span>
            <span className="text-sm">✕</span>
          </div>
        </div>
        {/* Video container - mouse events on wrapper so controls stay visible when hovering controls */}
        <div
          className="relative aspect-video overflow-hidden group"
          onMouseMove={resetControlsTimeout}
          onMouseLeave={() => isPlaying && setShowControls(false)}
        >
        {/* Player container - YouTube API renders iframe here */}
        <div
          ref={containerRef}
          className="absolute inset-0 w-full h-full bg-black"
        />
        {/* Overlay to hide YouTube logo in bottom-right corner */}
        <div
          className="absolute bottom-0 right-0 w-28 h-12 bg-gradient-to-tl from-black/95 to-transparent z-[6] pointer-events-none"
          aria-hidden
        />

        {/* Click overlay - captures clicks above iframe for play/pause */}
        <div
          className="absolute inset-0 z-[5] cursor-pointer"
          style={{ pointerEvents: isReady ? "auto" : "none" }}
          onClick={(e) => {
            if ((e.target as HTMLElement).closest("[data-controls]")) return;
            if (isReady) togglePlayPause();
          }}
        />

        {/* Thumbnail overlay before ready */}
        <AnimatePresence>
          {!isReady && (
            <motion.div
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0"
            >
              <div className="absolute inset-0">
                <Image
                  src={thumbnailError ? THUMBNAIL_FALLBACK : THUMBNAIL_URL}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 80vw, 672px"
                  className="object-cover"
                  onError={() => setThumbnailError(true)}
                />
              </div>
              <div className="absolute inset-0 bg-[var(--teal-dark)]/60" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 animate-pulse" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Center play button overlay (when paused) - bg covers YouTube pause overlay */}
        <AnimatePresence>
          {isReady && !isPlaying && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={togglePlayPause}
              className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer bg-black/40"
            >
              <motion.div
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/95 shadow-xl flex items-center justify-center ring-4 ring-[var(--accent-orange)]/80 hover:ring-[var(--accent-orange)] transition-all"
              >
                <svg
                  className="w-8 h-8 sm:w-10 sm:h-10 text-[var(--teal-primary)] ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            </motion.button>
          )}
        </AnimatePresence>

        {/* Custom controls bar */}
        <AnimatePresence>
          {isReady && (
            <motion.div
              data-controls
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: showControls ? 1 : 0,
                y: showControls ? 0 : 20,
              }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent pt-12 pb-3 px-4 z-20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Progress bar */}
              <div
                ref={progressRef}
                onClick={handleProgressClick}
                className="h-1.5 bg-white/30 rounded-full cursor-pointer mb-3 group/progress hover:h-2 transition-all"
              >
                <div
                  className="h-full bg-[var(--accent-orange)] rounded-full transition-all"
                  style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                />
              </div>

              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <button
                    onClick={togglePlayPause}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
                    aria-label="Play or Pause Video"
                  >
                    {isPlaying ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    )}
                  </button>
                  <span className="text-white/90 text-sm font-medium tabular-nums">
                    {formatTime(currentTime)} / {formatTime(duration)}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1.5">
                    <svg className="w-5 h-5 text-white/90" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                    </svg>
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={volume}
                      onChange={handleVolumeChange}
                      className="w-16 h-1 accent-[var(--accent-orange)] cursor-pointer"
                    />
                  </div>
                  <button
                    onClick={toggleFullscreen}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 transition-colors text-white"
                    aria-label="Toggle Fullscreen Mode"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" />
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
