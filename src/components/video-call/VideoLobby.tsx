import React, { useState } from "react";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";

interface Props {
  onJoin: (roomId: string) => void;
}

export const VideoLobby: React.FC<Props> = ({ onJoin }) => {
  const [roomId, setRoomId] = useState("");

  const handleJoin = () => {
    if (!roomId.trim()) return;
    onJoin(roomId);
  };

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="bg-white shadow-md rounded-xl p-6 w-full max-w-md space-y-4">
        
        <h2 className="text-xl font-bold text-center">
          Join Video Meeting
        </h2>

        <Input
          placeholder="Enter Room ID (e.g. nexus-123)"
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        />

        <Button onClick={handleJoin} fullWidth>
          Join Call
        </Button>
      </div>
    </div>
  );
};