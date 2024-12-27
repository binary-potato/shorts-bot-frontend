"use client";

import { generateConversation } from "@/lib/actions";
import { EMPTY_FORM_STATE } from "@/lib/form-utils";
import { Dispatch, SetStateAction, useActionState, useEffect } from "react";

function GenerateConversationForm({
  setTranscription,
  setAudioURL,
  setStart,
}: {
  setTranscription: Dispatch<SetStateAction<TextMessage[]>>;
  setAudioURL: Dispatch<SetStateAction<string>>;
  setStart: Dispatch<SetStateAction<boolean>>;
}) {
  const [state, action, pending] = useActionState(
    generateConversation,
    EMPTY_FORM_STATE
  );

  useEffect(() => {
    if (!state.error) {
      setTranscription(state.data.fullTranscription || []);
      setAudioURL(state.data.s3URL);
      console.log(state.data);
    }
  }, [state]);
  return (
    <form className="grid grid-cols-1 gap-4" action={action}>
      <div className="flex flex-col">
        <label htmlFor="text">Text to be converted to conversation</label>
        <textarea name="text" placeholder="Enter text" className="border" />
      </div>
      <button
        className="bg-black text-white w-fit"
        type="submit"
        disabled={pending}
        onClick={() => {
          setStart(false);
          setAudioURL("");
          setTranscription([]);
        }}
      >
        {pending ? "Generating..." : "Generate conversation"}
      </button>
    </form>
  );
}

export default GenerateConversationForm;
