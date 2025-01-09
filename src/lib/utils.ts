const BG_COUNT = 12;
const SONG_COUNT = 4;

export const getSecondSpeaker = (conversation: any) => {
  const uniqueSpeakers = new Set(); // To store unique speakers

  for (const item of conversation) {
    uniqueSpeakers.add(item.speaker); // Add each speaker to the set

    if (uniqueSpeakers.size === 2) {
      // Return the second speaker once two unique ones are found
      return item.speaker;
    }
  }

  return null; // Return null if there's no second speaker
};

export const getRandomBackgroundVideo = () => {
  return `assets/bg${Math.floor(Math.random() * (BG_COUNT - 1 + 1)) + 1}.mp4`;
};

export const getRandomBackgroundSong = () => {
  return `assets/song${
    Math.floor(Math.random() * (SONG_COUNT - 1 + 1)) + 1
  }.mp3`;
};

export const VOICES = [
  { id: "7S3KNdLDL7aRgBVRQb1z", sex: "m" },
  { id: "bIHbv24MWmeRgasZH58o", sex: "m" },
  { id: "SAz9YHcvj6GT2YYXdXww", sex: "f" },
  { id: "kPzsL2i3teMYv0FxEYQ6", sex: "f" },
  { id: "ZF6FPAbjXT4488VcRRnw", sex: "f" },
];
