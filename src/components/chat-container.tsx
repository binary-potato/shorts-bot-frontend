"use client";

import clsx from "clsx";
import { FaPlus, FaMicrophone } from "react-icons/fa";
import {
  GoChevronLeft,
  GoChevronRight,
  GoDeviceCameraVideo,
} from "react-icons/go";

function ChatContainer() {
  const chats = [
    { user: "1", text: "Hello there" },
    { user: "2", text: "Ah, general Kenobi" },
  ];

  return (
    <div className="bg-black h-screen max-w-screen-md relative">
      <div className="flex justify-between bg-[var(--ios-gray)] p-2 pt-2.5">
        <GoChevronLeft size="2rem" color="var(--ios-blue)" />
        <div className="flex flex-col items-center">
          <img src="/assets/user.png" className="w-[3rem]" />
          <div className="flex items-center mt-[-3px]">
            <span className="text-xs text-white font-medium">Name</span>
            <GoChevronRight size=".75rem" color="var(--ios-gray-2)" />
          </div>
        </div>
        <GoDeviceCameraVideo size="2rem" color="var(--ios-blue)" />
      </div>
      <div className="p-2">
        <div className="flex flex-col gap-4">
          {chats.map((chat, idx) => (
            <div
              key={`${chat}${idx}`}
              className={clsx(
                "text-white text-sm p-2 rounded-xl max-w-[80%]",
                {
                  "bg-[var(--ios-blue-2)] ml-auto": chat.user === "1",
                },
                {
                  "bg-[var(--ios-gray)] mr-auto": chat.user === "2",
                }
              )}
            >
              {chat.text}
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 flex gap-2 left-2 right-2 items-center">
          <span className="bg-[var(--ios-gray)] flex items-center justify-center rounded-full w-7 h-7">
            <FaPlus color="rgb(99,99,102)" size="0.75rem" />
          </span>
          <div className="bg-black border-[1px] border-[var(--ios-gray)] rounded-full w-[90%] py-1 px-3 flex justify-between">
            <input
              type="text"
              placeholder="Message"
              className="text-sm bg-transparent"
            />
            <FaMicrophone color="var(--ios-gray-3)" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatContainer;
