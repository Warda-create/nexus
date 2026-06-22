import React, { useState } from "react";
import { Button } from "../../components/ui/Button";
import { VideoGrid } from "../../components/video-call/VideoGrid";
import { useWebRTC } from "../../hooks/useWebRTC";

export const VideoCallPage = () => {
  const { stream, remoteStream, startStream, stopCall } = useWebRTC();
  const [inCall, setInCall] = useState(false);
  const [loading, setLoading] = useState(false);

  const startCall = async () => {
    setLoading(true);

    try {
      const media = await startStream();

  console.log("STREAM STARTED:", media);

  setInCall(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const endCall = () => {
    stopCall();
    setInCall(false);
  };
  console.log("LOCAL STREAM:", stream);
console.log("REMOTE STREAM:", remoteStream);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Live Video Call</h1>

        {!inCall ? (
          <Button onClick={startCall} disabled={loading}>
            {loading ? "Starting..." : "Start Call"}
          </Button>
        ) : (
          <Button variant="error" onClick={endCall}>
            End Call
          </Button>
        )}
      </div>

      <div className="bg-black p-4 rounded-lg">
        {inCall ? (
          <VideoGrid localStream={stream} remoteStream={remoteStream} />
        ) : (
          <div className="text-white text-center py-20">
            Click “Start Call” to begin video call
          </div>
        )}
      </div>
    </div>
    
  );
  console.log("LOCAL STREAM:", stream);
console.log("REMOTE STREAM:", remoteStream);
};