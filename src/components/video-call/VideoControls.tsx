import React from "react";
import { Button } from "../ui/Button";
import { Mic, MicOff, Video, VideoOff, PhoneOff, Monitor } from "lucide-react";

interface Props {
  isMuted: boolean;
  isVideoOff: boolean;
  onToggleMute: () => void;
  onToggleVideo: () => void;
  onEndCall: () => void;
  onShareScreen?: () => void;
}

export const VideoControls: React.FC<Props> = ({
  isMuted,
  isVideoOff,
  onToggleMute,
  onToggleVideo,
  onEndCall,
  onShareScreen,
}) => {
  return (
    <div className="flex items-center justify-center gap-3 p-4 bg-gray-900 rounded-xl">
      
      {/* Mute */}
      <Button
        onClick={onToggleMute}
        variant={isMuted ? "error" : "secondary"}
      >
        {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
      </Button>

      {/* Video */}
      <Button
        onClick={onToggleVideo}
        variant={isVideoOff ? "error" : "secondary"}
      >
        {isVideoOff ? <VideoOff size={18} /> : <Video size={18} />}
      </Button>

      {/* Screen Share */}
      {onShareScreen && (
        <Button onClick={onShareScreen} variant="accent">
          <Monitor size={18} />
        </Button>
      )}

      {/* End Call */}
      <Button onClick={onEndCall} variant="error">
        <PhoneOff size={18} />
      </Button>
    </div>
  );
};