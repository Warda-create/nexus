import React from "react";
import { VideoTile } from "./VideoTile";

interface Props {
  localStream?: MediaStream | null;
  remoteStream?: MediaStream | null;
}

export const VideoGrid: React.FC<Props> = ({
  localStream,
  remoteStream,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <VideoTile stream={localStream ?? null} label="You" />
      <VideoTile stream={remoteStream ?? null} label="Remote User" />
    </div>
  );
};