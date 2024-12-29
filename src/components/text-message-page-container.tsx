"use client";

import ChatContainer from "@/components/chat-container";
import GenerateConversationForm from "@/components/forms/generate-conversation-form";
import { getRandomBackgroundSong, getRandomBackgroundVideo } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

function PageContainer() {
  const [transcription, setTranscription] = useState<TextMessage[]>([]);
  const [audioURL, setAudioURL] = useState("");
  const [start, setStart] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const audio = new Audio(getRandomBackgroundSong());
    if (start) {
      videoRef.current?.play();
      audio.volume = 0.2;
      audio.play();
    } else {
      audio.pause();
      videoRef.current?.pause();
    }
  }, [start]);
  return (
    <div className="grid grid-cols-2 h-screen">
      <div className="p-4 overflow-y-auto">
        <h1 className="text-2xl font-semibold text-center mb-4">
          Create Text Story Short
        </h1>
        <GenerateConversationForm
          setTranscription={setTranscription}
          setStart={setStart}
          setAudioURL={setAudioURL}
        />
        {audioURL && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold">Audio</h2>
            <audio
              ref={audioRef}
              src={audioURL}
              controls
              onPause={(e) => {
                e.preventDefault(); // Prevent default pause behavior
                if (audioRef.current && !audioRef.current.ended) {
                  audioRef.current.play(); // Resume playback
                }
              }}
              onPlay={() => setStart(true)}
              onEnded={() => {
                console.log("ended");
                setStart(false);
              }}
            />
          </div>
        )}
        {transcription.length > 0 && (
          <div className="mt-4">
            <h2 className="text-xl font-semibold">Transcription</h2>
            <ul className="text-sm flex flex-col gap-1">
              {transcription.map((element, idx) => (
                <li
                  key={`${element}${idx}`}
                  className="flex gap-2 items-center"
                >
                  <div>
                    <span className="font-semibold">{element.speaker}</span>:
                    <span>{element.text}</span>
                  </div>

                  <span className="text-xs text-gray-600">
                    {Math.round(element.end - element.start)}s
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="relative flex max-h-screen">
        <video
          ref={videoRef}
          loop
          muted
          className="absolute right-0 left-0 m-auto inset-0 w-full h-full object-cover z-[-1]"
        >
          <source src={getRandomBackgroundVideo()} />
          Your browser does not support the video tag.
        </video>
        <ChatContainer transcription={transcription} start={start} />
      </div>
    </div>
  );
}

export default PageContainer;
