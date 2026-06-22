import { useRef, useState } from "react";

export const useWebRTC = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [remoteStream, setRemoteStream] = useState<MediaStream | null>(null);

  const peerConnection = useRef<RTCPeerConnection | null>(null);

  // Start camera
  const startStream = async () => {
    const mediaStream = await navigator.mediaDevices.getUserMedia({
    video: true,
    audio: true,
  });

  setStream(mediaStream);
  return mediaStream;
  };

  // Create peer connection (REAL WebRTC native)
  const createPeer = async (initiator: boolean, mediaStream: MediaStream) => {
    const pc = new RTCPeerConnection({
      iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
    });

    peerConnection.current = pc;

    // Add local tracks
    mediaStream.getTracks().forEach((track) => {
      pc.addTrack(track, mediaStream);
    });

    // Receive remote stream
    pc.ontrack = (event) => {
      setRemoteStream(event.streams[0]);
    };

    return pc;
  };

  // Offer / Answer (for later signaling server)
  const createOffer = async () => {
    const pc = peerConnection.current!;
    const offer = await pc.createOffer();
    await pc.setLocalDescription(offer);
    return offer;
  };

  const createAnswer = async () => {
    const pc = peerConnection.current!;
    const answer = await pc.createAnswer();
    await pc.setLocalDescription(answer);
    return answer;
  };

  const addAnswer = async (answer: RTCSessionDescriptionInit) => {
    const pc = peerConnection.current!;
    await pc.setRemoteDescription(answer);
  };

  const stopCall = () => {
    stream?.getTracks().forEach((t) => t.stop());
    peerConnection.current?.close();
    setStream(null);
    setRemoteStream(null);
  };

  return {
    stream,
    remoteStream,
    startStream,
    createPeer,
    createOffer,
    createAnswer,
    addAnswer,
    stopCall,
  };
};