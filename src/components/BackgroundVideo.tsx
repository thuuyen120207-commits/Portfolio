import React, { useEffect, useRef, useState } from 'react';

export const BackgroundVideo: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [opacity, setOpacity] = useState<number>(0);
  const animationFrameRef = useRef<number | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const checkFade = () => {
      if (video && video.duration) {
        const currentTime = video.currentTime;
        const duration = video.duration;
        const fadeDuration = 0.5;

        // Fade in over 0.5s at the start
        if (currentTime < fadeDuration) {
          setOpacity(Math.max(0, Math.min(1, currentTime / fadeDuration)));
        }
        // Fade out over 0.5s before the end
        else if (currentTime > duration - fadeDuration) {
          setOpacity(Math.max(0, Math.min(1, (duration - currentTime) / fadeDuration)));
        }
        // Fully visible in between
        else {
          setOpacity(1);
        }
      }

      animationFrameRef.current = requestAnimationFrame(checkFade);
    };

    animationFrameRef.current = requestAnimationFrame(checkFade);

    const handleEnded = () => {
      setOpacity(0);
      setTimeout(() => {
        if (video) {
          video.currentTime = 0;
          video.play().catch((err) => {
            console.warn("Autoplay playback error:", err);
          });
        }
      }, 100);
    };

    video.addEventListener('ended', handleEnded);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  return (
    <div
      className="absolute pointer-events-none z-0 overflow-hidden"
      style={{
        top: '300px',
        inset: 'auto 0 0 0',
        height: 'calc(100% - 300px)',
        minHeight: '600px',
      }}
    >
      <video
        ref={videoRef}
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_083109_283f3553-e28f-428b-a723-d639c617eb2b.mp4"
        autoPlay
        muted
        playsInline
        className="w-full h-full object-cover transition-opacity duration-100 ease-linear"
        style={{ opacity }}
      />
      {/* Gradient overlays: absolute inset-0 bg-gradient-to-b from-background via-transparent to-background positioned over the video */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
    </div>
  );
};
