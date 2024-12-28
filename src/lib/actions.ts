"use server";

const BACKEND_BASE_URL = "http://localhost:8080";
const CONVERSATION_TEST_DATA = {
  s3URL:
    "https://podcastsb.s3.amazonaws.com/generated-audio/generated-audio/text-conversation-66ee4267-5cae-4892-b4c7-df4e5bcea4ab.mp3",
  fullTranscription: [
    {
      text: " So you helped your girlfriend with a presentation and found out she thinks you're out of her league?",
      start: 0,
      end: 4.159999847412109,
      speaker: "Buddy",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-0.mp3",
    },
    {
      text: " Yeah, I stumbled on a chat with her sister.",
      start: 0,
      end: 2.0399999618530273,
      speaker: "Dude",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-1.mp3",
    },
    {
      text: " Let's just say my ego took a nosedive.",
      start: 2.0399999618530273,
      end: 4.199999809265137,
      speaker: "Dude",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-1.mp3",
    },
    {
      text: " Ouch! What else did the sister say? She better not be dissing your fine culinary skills.",
      start: 0,
      end: 5.28000020980835,
      speaker: "Buddy",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-2.mp3",
    },
    {
      text: " She called me unambitious, said I eat like crap, and",
      start: 0,
      end: 3.1600000858306885,
      speaker: "Dude",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-3.mp3",
    },
    {
      text: " wouldn't want kids with me, what?",
      start: 3.1600000858306885,
      end: 5.360000133514404,
      speaker: "Dude",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-3.mp3",
    },
    {
      text: " Rude.",
      start: 0,
      end: 1,
      speaker: "Buddy",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-4.mp3",
    },
    {
      text: " But wait, isn't that just her inner drama queen talking?",
      start: 1,
      end: 3.5,
      speaker: "Buddy",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-4.mp3",
    },
    {
      text: " Right? And I'm keeping her happy. She even prefers 12-hour flights to visit a guy friend",
      start: 0,
      end: 5.679999828338623,
      speaker: "Dude",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-5.mp3",
    },
    {
      text: " instead of a quick hour to see me.",
      start: 5.679999828338623,
      end: 7.599999904632568,
      speaker: "Dude",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-5.mp3",
    },
    {
      text: " So she'll fly across the country but won't travel an hour to get some quality time.",
      start: 0,
      end: 4.440000057220459,
      speaker: "Buddy",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-6.mp3",
    },
    {
      text: " Sounds like she's on a one-way flight to La La Land.",
      start: 4.440000057220459,
      end: 7.079999923706055,
      speaker: "Buddy",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-6.mp3",
    },
    {
      text: " Exactly! And she thinks I won't make enough money? I mean, I'll make decent cash as a doctor.",
      start: 0,
      end: 5.28000020980835,
      speaker: "Dude",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-7.mp3",
    },
    {
      text: " Sounds like she's got some serious league issues.",
      start: 0,
      end: 2.640000104904175,
      speaker: "Buddy",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-8.mp3",
    },
    {
      text: " Dude, this is a sign. Time to break up.",
      start: 2.640000104904175,
      end: 4.960000038146973,
      speaker: "Buddy",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-8.mp3",
    },
    {
      text: " You think? I'm worried I'm overlooking things.",
      start: 0,
      end: 3.200000047683716,
      speaker: "Dude",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-9.mp3",
    },
    {
      text: " Look, would you want that kind of teammate in life?",
      start: 0,
      end: 3.2799999713897705,
      speaker: "Buddy",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-10.mp3",
    },
    {
      text: " Nope!",
      start: 3.2799999713897705,
      end: 4.28000020980835,
      speaker: "Buddy",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-10.mp3",
    },
    {
      text: " Time to score a better match!",
      start: 4.28000020980835,
      end: 5.28000020980835,
      speaker: "Buddy",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-10.mp3",
    },
    {
      text: " Alright, I'm convinced. It's a foul play on her side.",
      start: 0,
      end: 3,
      speaker: "Dude",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-11.mp3",
    },
    {
      text: " Game on. Don't let anyone make you feel less than a champ.",
      start: 0,
      end: 3.2799999713897705,
      speaker: "Buddy",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-12.mp3",
    },
    {
      text: " Subscribe for more funny chats.",
      start: 0,
      end: 2,
      speaker: "Narrator",
      s3URL:
        "https://podcastsb.s3.amazonaws.com/generated-audio/temp-audio-8dca3834-bd7b-47f6-b0ce-9a6a2e87631c-13.mp3",
    },
  ],
};

const REDDIT_STORY_TEST_DATA = {
  message: "Successfully generated short",
  url: "https://podcastsb.s3.amazonaws.com/generated-clips/dd656784-0474-47c7-ba2d-d6d78268b803.mp4",
};

const IS_TESTING = false;

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
          bgVideo: "assets/background.mp4",
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
  const { text, voiceId } = Object.fromEntries(formData.entries());

  try {
    if (!IS_TESTING) {
      const response = await fetch(`${BACKEND_BASE_URL}/generate-confession`, {
        method: "POST",
        body: JSON.stringify({
          text,
          voiceId,
          bgVideo: "assets/background.mp4",
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