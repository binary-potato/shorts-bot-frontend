"use client";

import { generateRedditStory } from "@/lib/actions";
import { EMPTY_FORM_STATE } from "@/lib/form-utils";
import { useActionState, useEffect, useState } from "react";

const VOICES = [
  { id: "7S3KNdLDL7aRgBVRQb1z", sex: "m" },
  { id: "bIHbv24MWmeRgasZH58o", sex: "m" },
  { id: "SAz9YHcvj6GT2YYXdXww", sex: "f" },
  { id: "kPzsL2i3teMYv0FxEYQ6", sex: "f" },
  { id: "ZF6FPAbjXT4488VcRRnw", sex: "f" },
];

function GenerateRedditStoryForm() {
  const [state, action, pending] = useActionState(
    generateRedditStory,
    EMPTY_FORM_STATE
  );
  const [videoSrc, setVideoSrc] = useState("");

  useEffect(() => {
    if (!state.error) {
      setVideoSrc(state.data.url);
    }
  }, [state]);
  return (
    <form className="grid grid-cols-1 gap-4" action={action}>
      <div className="flex flex-col">
        <label htmlFor="text">Post</label>
        <textarea
          name="text"
          placeholder="Paste a post..."
          className="border rounded-3xl px-4 py-2 min-h-[120px] text-sm"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="text">Voice</label>
        <select
          className="w-fit border p-2 rounded-3xl text-sm"
          name="voiceId"
          required
        >
          <option selected disabled value="">
            Select a voice
          </option>
          {VOICES.map((voice, idx) => {
            let maleCount = 0,
              femaleCount = 0;

            if (voice.sex === "m") {
              maleCount++;
            } else {
              femaleCount++;
            }
            return (
              <option key={voice.id} value={voice.id}>
                {voice.sex === "m" ? `Male ${idx}` : `Female ${idx}`}
              </option>
            );
          })}
        </select>
      </div>
      {!videoSrc && (
        <button
          className="bg-black text-white w-fit p-2 rounded-full mx-auto"
          type="submit"
          disabled={pending}
        >
          {pending ? "Generating..." : "Generate story"}
        </button>
      )}

      {videoSrc && (
        <div className="flex flex-col gap-4">
          <button
            className="bg-red-500 text-white w-fit p-2 rounded-full mx-auto"
            type="submit"
            onClick={() => setVideoSrc("")}
          >
            Reset
          </button>
          <video
            controls
            className="m-auto w-full h-full object-cover rounded-3xl"
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </form>
  );
}

export default GenerateRedditStoryForm;
