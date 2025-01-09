"use server";

import { getRandomBackgroundSong, getRandomBackgroundVideo } from "./utils";

const BACKEND_BASE_URL = "http://localhost:8080";
const CONVERSATION_TEST_DATA = {
  s3URL:
    "https://podcastsb.s3.amazonaws.com/generated-audio/generated-audio/text-conversation-99e3b31f-2c26-4331-ad00-7a80a0b8b9b2.mp3",
  fullTranscription: [
    {
      text: " So, you know how I agreed to babysit for New Year's Eve?",
      start: 0,
      end: 2.799999952316284,
      speaker: "Snarky Sister",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-0.mp3",
    },
    {
      text: " Yeah, you're a hero for watching my kids.",
      start: 0,
      end: 2.640000104904175,
      speaker: "Clueless Brother",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-1.mp3",
    },
    {
      text: " Hero? More like babysitting Cinderella at a disrespect ball.",
      start: 0,
      end: 3.359999895095825,
      speaker: "Snarky Sister",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-2.mp3",
    },
    {
      text: " Come on, it was just one night.",
      start: 0,
      end: 2,
      speaker: "Clueless Brother",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-3.mp3",
    },
    {
      text: " One night, it turned into a toddler sleepover from hell.",
      start: 0,
      end: 3.880000114440918,
      speaker: "Snarky Sister",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-4.mp3",
    },
    {
      text: " But I paid you double! That's a bonus!",
      start: 0,
      end: 2,
      speaker: "Clueless Brother",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-5.mp3",
    },
    {
      text: " Yeah, but I still missed the countdown.",
      start: 0,
      end: 2,
      speaker: "Snarky Sister",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-6.mp3",
    },
    {
      text: " I could have been sipping champagne, not toddler tears.",
      start: 2,
      end: 4.800000190734863,
      speaker: "Snarky Sister",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-6.mp3",
    },
    {
      text: " What's the big deal? My kids love you.",
      start: 0,
      end: 2.4000000953674316,
      speaker: "Clueless Brother",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-7.mp3",
    },
    {
      text: " They love me more when I'm not stuck babysitting on New Year's.",
      start: 0,
      end: 2.7200000286102295,
      speaker: "Snarky Sister",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-8.mp3",
    },
    {
      text: " I'm done!",
      start: 2.7200000286102295,
      end: 3.5199999809265137,
      speaker: "Snarky Sister",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-8.mp3",
    },
    {
      text: " You're being too tough. Family helps family.",
      start: 0,
      end: 3,
      speaker: "Clueless Brother",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-9.mp3",
    },
    {
      text: " Family listens to plans, too.",
      start: 0,
      end: 1.6399999856948853,
      speaker: "Snarky Sister",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-10.mp3",
    },
    {
      text: " Next time, I'm out.",
      start: 1.6399999856948853,
      end: 3.8399999141693115,
      speaker: "Snarky Sister",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-10.mp3",
    },
    {
      text: " But what if I can't find anyone?",
      start: 0,
      end: 2,
      speaker: "Clueless Brother",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-11.mp3",
    },
    {
      text: " Then you better start training those kids for a babysitting gig!",
      start: 0,
      end: 3,
      speaker: "Snarky Sister",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-12.mp3",
    },
    {
      text: " Subscribe for more chats.",
      start: 0,
      end: 2,
      speaker: "Narrator",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-ad2c90fd-fc8d-4875-b29b-37407598b028-13.mp3",
    },
  ],
};
const REDDIT_STORY_TEST_DATA = {
  message: "Successfully generated short",
  url: "https://podcastsb.s3.amazonaws.com/generated-clips/dd656784-0474-47c7-ba2d-d6d78268b803.mp4",
};

const IS_TESTING = true;

export const generateConversation = async (
  prevState: FormState,
  formData: FormData
) => {
  const { text } = Object.fromEntries(formData.entries());

  try {
    if (!IS_TESTING) {
      const response = await fetch(
        `${BACKEND_BASE_URL}/generate-text-conversation-and-audio`,
        {
          method: "POST",
          body: JSON.stringify({ text }),
          headers: { "Content-Type": "application/json" },
        }
      );

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "Something went wrong");
      }

      const { message, s3URL, fullTranscription } = await response.json();

      return {
        message,
        data: { s3URL, fullTranscription },
        error: "",
      };
    } else {
      return {
        message: "Successfully generated text conversation",
        data: CONVERSATION_TEST_DATA,
        error: "",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Something went wrong",
      data: {},
      message: "",
    };
  }
};

export const generateRedditStory = async (
  prevState: FormState,
  formData: FormData
) => {
  const { text, voiceId } = Object.fromEntries(formData.entries());

  try {
    if (!IS_TESTING) {
      const response = await fetch(`${BACKEND_BASE_URL}/generate-short`, {
        method: "POST",
        body: JSON.stringify({
          text,
          voiceId,
          bgVideo: getRandomBackgroundVideo(),
          bgSound: getRandomBackgroundSong(),
        }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "Something went wrong");
      }

      const { message, url } = await response.json();

      return {
        message,
        data: { url },
        error: "",
      };
    } else {
      console.log(text);
      console.log(voiceId);
      return {
        message: "Successfully generated text conversation",
        data: REDDIT_STORY_TEST_DATA,
        error: "",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Something went wrong",
      data: {},
      message: "",
    };
  }
};

export const generateConfession = async (
  prevState: FormState,
  formData: FormData
) => {
  const { text, voiceId, isVerbatim } = Object.fromEntries(formData.entries());

  try {
    if (!IS_TESTING) {
      const response = await fetch(`${BACKEND_BASE_URL}/generate-confession`, {
        method: "POST",
        body: JSON.stringify({
          text,
          voiceId,
          bgVideo: getRandomBackgroundVideo(),
          bgSound: getRandomBackgroundSong(),
          isVerbatim,
        }),

        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || "Something went wrong");
      }

      const { message, url } = await response.json();

      return {
        message,
        data: { url },
        error: "",
      };
    } else {
      return {
        message: "Successfully generated text conversation",
        data: REDDIT_STORY_TEST_DATA,
        error: "",
      };
    }
  } catch (error) {
    console.error(error);
    return {
      error: "Something went wrong",
      data: {},
      message: "",
    };
  }
};
