"use server";

const BACKEND_BASE_URL = "http://localhost:8080";

export const generateConversation = async (
  prevState: FormState,
  formData: FormData
) => {
  const { text } = Object.fromEntries(formData.entries());

  try {
    // const response = await fetch(
    //   `${BACKEND_BASE_URL}/generate-text-conversation-and-audio`,
    //   {
    //     method: "POST",
    //     body: JSON.stringify({ text }),
    //     headers: { "Content-Type": "application/json" },
    //   }
    // );

    // if (!response.ok) {
    //   const error = await response.text();
    //   throw new Error(error || "Something went wrong");
    // }

    // const { message, s3URL, fullTranscription } = await response.json();

    // return {
    //   message,
    //   data: { s3URL, fullTranscription },
    //   error: "",
    // };
    return {
      message: "Success",
      data: {
        s3URL:
          "https://podcastsb.s3.amazonaws.com/generated-audio/generated-audio/text-conversation-e6878bda-cac2-4e22-8f95-87c297f8bcb4.mp3",
        fullTranscription: [
          {
            text: " So, how's the volunteer thing going? Ready to wear that president crown?",
            start: 0,
            end: 4,
            speaker: "Sam",
          },
          {
            text: " You won't believe what just happened. I ran for president and lost by one vote.",
            start: 0,
            end: 4.639999866485596,
            speaker: "Alex",
          },
          {
            text: " Wait, one vote? That's like losing a game of rock-paper-scissors to a rock. What happened?",
            start: 0,
            end: 6.239999771118164,
            speaker: "Sam",
          },
          {
            text: " Some newbie named Alex decided to crash the party last minute.",
            start: 0,
            end: 3.4800000190734863,
            speaker: "Alex",
          },
          {
            text: " Who even does that?",
            start: 3.4800000190734863,
            end: 4.440000057220459,
            speaker: "Alex",
          },
          {
            text: " Sounds like an episode of Survivor the Volunteer Edition.",
            start: 0,
            end: 3.759999990463257,
            speaker: "Sam",
          },
          {
            text: " What a twist.",
            start: 3.759999990463257,
            end: 4.559999942779541,
            speaker: "Sam",
          },
          {
            text: " Right?",
            start: 0,
            end: 1,
            speaker: "Alex",
          },
          {
            text: " And then the election got even crazier.",
            start: 1,
            end: 2.880000114440918,
            speaker: "Alex",
          },
          {
            text: " Turns out 9 votes for me didn't get counted due to a computer glitch.",
            start: 2.880000114440918,
            end: 6.320000171661377,
            speaker: "Alex",
          },
          {
            text: " I technically won.",
            start: 6.320000171661377,
            end: 7.159999847412109,
            speaker: "Alex",
          },
          {
            text: " Oof, so you're now the ghost president nobody knows about?",
            start: 0,
            end: 3.359999895095825,
            speaker: "Sam",
          },
          {
            text: " Exactly! But instead of celebrating my non-presidency, they want me to step down to guide these newbies.",
            start: 0,
            end: 6.320000171661377,
            speaker: "Alex",
          },
          {
            text: " Like, excuse me? I put in the work, not my fault they're clueless.",
            start: 6.320000171661377,
            end: 9.760000228881836,
            speaker: "Alex",
          },
          {
            text: " So what's the plan? Become a volunteer ninja and vanish into thin air?",
            start: 0,
            end: 4.320000171661377,
            speaker: "Sam",
          },
          {
            text: " Pretty much. I'm dropping all leadership roles. They can either sink or swim without me.",
            start: 0,
            end: 4.800000190734863,
            speaker: "Alex",
          },
          {
            text: " I love it. Let them learn the hard way, like a crash course in leadership, literally.",
            start: 0,
            end: 4.800000190734863,
            speaker: "Sam",
          },
          {
            text: " Totally. And when they come crying for help, I'll be like,",
            start: 0,
            end: 2.799999952316284,
            speaker: "Alex",
          },
          {
            text: " my title is former president, not miracle worker.",
            start: 2.799999952316284,
            end: 5.599999904632568,
            speaker: "Alex",
          },
          {
            text: " Subscribe for more funny chats",
            start: 0,
            end: 2,
            speaker: "Narrator",
          },
        ],
      },
      error: "",
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Something went wrong",
      data: {},
      message: "",
    };
  }
};
