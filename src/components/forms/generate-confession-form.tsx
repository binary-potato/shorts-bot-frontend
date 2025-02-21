"use client";

import { generateConfession, generateRedditStory } from "@/lib/actions";
import { EMPTY_FORM_STATE } from "@/lib/form-utils";
import { VOICES } from "@/lib/utils";
import { useActionState, useEffect, useState } from "react";



function GenerateConfessionForm() {
  const [state, action, pending] = useActionState(
    generateConfession,
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
          defaultValue={""}
        >
          <option disabled value="">
            Select a voice
          </option>
          {VOICES.map((voice) => {
            let maleCount = 0,
              femaleCount = 0;

            if (voice.sex === "m") {
              maleCount++;
            } else {
              femaleCount++;
            }
            return (
              <option key={voice.id} value={voice.id}>
                {voice.sex === "m"
                  ? `Male ${maleCount}`
                  : `Female ${femaleCount}`}
              </option>
            );
          })}
        </select>
      </div>
      <div className="flex flex-col">
        <label htmlFor="isVerbatim">Verbatim</label>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex gap-1">
            <input type="radio" name="isVerbatim" value={"t"} required/>
            <span>Yes</span>
          </span>
          <span className="flex gap-1">
            <input type="radio" name="isVerbatim" value={"f"} defaultChecked required/>
            <span>No</span>
          </span>
        </div>
      </div>
      {!videoSrc && (
        <button
          className="bg-black text-white w-fit p-2 rounded-full mx-auto"
          type="submit"
          disabled={pending}
        >
          {pending ? "Generating..." : "Generate confession"}
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

export default GenerateConfessionForm;
