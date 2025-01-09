"use client";

import { getSecondSpeaker } from "@/lib/utils";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { BiSignal4 } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import {
  GoChevronLeft,
  GoChevronRight,
  GoDeviceCameraVideo,
} from "react-icons/go";

function ChatContainer({
  transcription,
  start,
}: {
  transcription: TextMessage[];
  start: boolean;
}) {
  const [localTranscription, setLocalTranscription] = useState<TextMessage[]>(
    []
  );
  const chatsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (transcription.length && start) {
      let cumulativeDelay = 0;
      const timers: NodeJS.Timeout[] = [];

      transcription.forEach((chat, index) => {
        // Check if the previous message had the same speaker
        const previousChat = transcription[index - 1];
        const isSameSpeaker =
          previousChat && previousChat.speaker === chat.speaker;

        // Adjust delay based on whether the speaker changes
        const delay = isSameSpeaker
          ? (chat.end - chat.start - 0.1) * 1000
          : (chat.end - chat.start - 0.2) * 1000;

        const timer = setTimeout(() => {
          setLocalTranscription((prev) => {
            // Play notification sounds only at the start or end
            if (index === 0) {
              new Audio("/assets/sentmessage_1.mp3").play();
            } else if (index === transcription.length - 1) {
              new Audio("/assets/notification.mp3").play();
            }
            return [...prev, chat];
          });
        }, cumulativeDelay);

        timers.push(timer);
        cumulativeDelay += delay;
      });

      // Cleanup timers on unmount or re-render
      return () => timers.forEach(clearTimeout);
    }
  }, [transcription, start]);

  // Scroll to bottom whenever localTranscription changes
  useEffect(() => {
    if (localTranscription.length && chatsRef.current) {
      chatsRef.current.scrollTop =
      chatsRef.current.scrollHeight;
    }
  }, [localTranscription]);

  return (
    <div className="bg-black/90 h-fit max-h-[50%] w-[80%] max-w-[400px] m-auto rounded-2xl flex flex-col shadow-[5px_5px_5px_rgba(0,0,0,.5)]">
      <div className="bg-[var(--ios-gray)] p-2 rounded-2xl rounded-bl-none rounded-br-none  border-b border-b-[var(--ios-gray-3)]">
        <div className="text-white flex justify-between items-end">
          <span className="text-sm mb-[-3px] font-semibold">16:20</span>
          <div className="flex gap-[2px] items-end">
            <BiSignal4 size="1.2rem" />
            <span className="mb-[-3px] text-sm mr-[4px] font-medium">7G</span>
            <img src="/assets/battery.png" className="w-[30px] h-[15px]" />
          </div>
        </div>
        <div className="flex justify-between  pt-2.5">
          <GoChevronLeft size="2rem" color="var(--ios-blue)" />
          <div className="flex flex-col items-center">
            <img src="/assets/user.png" className="w-[3rem]" />
            <div className="flex items-center mt-[-3px]">
              <span className="text-xs text-white font-medium">
                {getSecondSpeaker(transcription) || "Name"}
              </span>
              <GoChevronRight size=".75rem" color="var(--ios-gray-2)" />
            </div>
          </div>
          <GoDeviceCameraVideo size="2rem" color="var(--ios-blue)" />
        </div>
      </div>
      <div className="p-2 max-h-[90%] overflow-y-auto" ref={chatsRef}>
        {localTranscription.length <= 0 && <span></span>}
        {localTranscription.map((chat, idx) => {
          // Determine speaker's style dynamically
          const speakerStyle = (() => {
            const styles = [
              {
                bg: "bg-[var(--ios-blue-2)] ml-auto",
                label: "Speaker 1",
              },
              {
                bg: "bg-[var(--ios-gray)] mr-auto",
                label: "Speaker 2",
              },
            ];
            const speakerIndex = Array.from(
              new Set(transcription.map((item) => item.speaker))
            ).indexOf(chat.speaker);
            return styles[speakerIndex] || styles[styles.length - 1];
          })();

          // Determine margin
          const marginTop =
            idx > 0 && transcription[idx - 1].speaker === chat.speaker
              ? "mt-2" // 1rem for same speaker
              : "mt-4"; // 2rem for different speakers

          if (chat.speaker === "Narrator")
            return (
              <span
                key={`${chat.text}-${chat.speaker}`}
                className={clsx(
                  "text-sm p-2 rounded-xl max-w-[80%] w-fit text-black flex items-center gap-1",
                  "bg-white mx-auto",
                  marginTop
                )}
              >
                {chat.text} <FaYoutube color="red" size="1.2rem" />
              </span>
            );
          return (
            <div
              key={`${chat.text}-${idx}`}
              className={clsx(
                "text-sm p-2 rounded-xl max-w-[80%] w-fit text-white",
                speakerStyle.bg,
                marginTop
              )}
            >
              {chat.text}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ChatContainer;
