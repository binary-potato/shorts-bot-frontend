"use client";

import ChatContainer from "@/components/chat-container";
import GenerateConversationForm from "@/components/forms/generate-conversation-form";
import { useEffect, useRef, useState } from "react";

function PageContainer() {
  const [transcription, setTranscription] = useState<TextMessage[]>([]);
  const [audioURL, setAudioURL] = useState("");
  const [start, setStart] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (start) {
      videoRef.current?.play();
    }
  }, [start]);
  return (
    <div className="grid grid-cols-2 h-screen">
      <div>
        <GenerateConversationForm
          setTranscription={setTranscription}
          setStart={setStart}
          setAudioURL={setAudioURL}
        />
        {audioURL && (
          <audio
            src={audioURL}
            controls
            autoPlay
            onPlay={() => setStart(true)}
          />
        )}
      </div>
      <div className="relative flex max-h-screen">
        <video
          ref={videoRef}
          loop
          muted
          className="absolute right-0 left-0 m-auto inset-0 w-full h-full object-cover z-[-1]"
        >
          <source src="/assets/background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <ChatContainer transcription={transcription} start={start} />
      </div>
    </div>
  );
}

export default PageContainer;
