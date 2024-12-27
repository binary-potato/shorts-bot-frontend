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
