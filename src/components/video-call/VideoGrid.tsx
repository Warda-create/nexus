import React from "react";
import { VideoTile } from "./VideoTile";

interface Props {
  localStream: MediaStream | null;
  remoteStream: MediaStream | null;
}

export const VideoGrid: React.FC<Props> = ({
  localStream,
  remoteStream,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 w-full">
      <VideoTile stream={localStream} label="You" />
      <VideoTile stream={remoteStream} label="Remote User" />
    </div>
  );
};