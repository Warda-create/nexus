import React, { useEffect, useRef } from "react";

interface Props {
  stream: MediaStream | null;
  label: string;
}

export const VideoTile: React.FC<Props> = ({ stream, label }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <div className="relative bg-black rounded-lg overflow-hidden h-64">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted={label === "You"}   // IMPORTANT FIX
        className="w-full h-full object-cover"
      />

      {!stream && (
        <div className="absolute inset-0 flex items-center justify-center text-white">
          No video
        </div>
      )}

      <div className="absolute bottom-2 left-2 bg-black/60 text-white px-2 py-1 text-xs rounded">
        {label}
      </div>
    </div>
  );
};