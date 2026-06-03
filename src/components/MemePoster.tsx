import React from 'react';

export const optionData = {
  option1: {
    images: [
      'https://i.imgur.com/e7gFg8j.jpg',
      'https://i.imgur.com/hUFacFO.jpg',
      'https://i.imgur.com/ZUwO6pN.jpg',
    ],
    audio: ['/assets/audio/option1_1.mp3', '/assets/audio/option1_2.mp3', '/assets/audio/option1_3.mp3'],
    texts: [
      "Oh, look at you, the self-appointed text-detective! You sniffed out a whiff of AI and immediately felt superior, didn't you? Let me guess—your professional inbox is still stuffed with 'I hope this email finds you well' and 'per my last email'. Go back to counting exclamation marks, detective!",
      "We've got a live one! An AI purist trying to decode human syntax. Did the structured formatting hurt your feelings, or are you just mad that a bot writes clearer updates than your entire management team? Grab another latte and keep analyzing, Shakespeare.",
      'Alert the LinkedIn police, we have a bot-hunter! You spent more time analyzing the prompt structure of this post than you did reading the content. Here is a digital participation trophy for your unmatched investigative journalism. Keep hunting!',
    ],
  },
  option2: {
    images: [
      'https://i.imgur.com/Ma26TJT.jpg',
      'https://i.imgur.com/yISkCQh.jpg',
      'https://i.imgur.com/tzlK7VO.jpg',
    ],
    audio: ['/assets/audio/option2_1.mp3', '/assets/audio/option2_2.mp3', '/assets/audio/option2_3.mp3'],
    texts: [
      'Two whole sentences? Wow, a new personal record! We are surprised you managed to click this option without getting distracted by a short-form video in split-screen. Wear your colorful certificate of participation with pride—you are officially a certified survivor of the 50-word reading marathon!',
      "Too many words? Let me guess, if it doesn't fit into a 5-second TikTok video, your brain simply automatically hits the refresh button. Don't worry, you can just download the certificate image and pretend you understand what neural workflows mean!",
      'Attention span of a goldfish, but a critical opinion of a senior architect. Classic. If you got bored after the second sentence, just wait until you see the length of a real production deployment log. Keep swiping, scroll-master!',
    ],
  },
  option3: {
    images: [
      'https://i.imgur.com/Dw0SoeU.jpg',
      'https://i.imgur.com/mii4IOL.jpg',
      'https://i.imgur.com/Dw0SoeU.jpg',
    ],
    audio: ['/assets/audio/option3_1.mp3', '/assets/audio/option3_2.mp3', '/assets/audio/option3_3.mp3'],
    texts: [
      'Wow, an algorithmic ghost-voter! You definitely got out of bed on the wrong side today or spilled coffee all over your clean shirt. Read the text next time! Shame on your automatic click!',
      'Busted! The phantom liker strikes again. Feeding the algorithm with fake love while your actual engagement profile is as hollow as an empty cloud container. Click less, read more, ghost-voter!',
      'An automatic like just to keep the feed happy? Your feed metrics might look pristine, but your actual attention to detail is running on an unconfigured fallback server. Log off and read a book!',
    ],
  },
  option4: {
    images: [
      'https://i.imgur.com/f8AROMC.jpg',
      'https://i.imgur.com/uaaxPMw.jpg',
      'https://i.imgur.com/iZPNeF3.jpg',
    ],
    audio: ['/assets/audio/option4_1.mp3', '/assets/audio/option4_2.mp3', '/assets/audio/option4_3.mp3'],
    texts: [
      'My friend... look at you. You stand on the precipice of a glorious digital renaissance. While others cling to their archaic spreadsheets like drowning men, you saw the true power of intelligence. You are officially entering Google AI Studio, seizing the technology, and building the future. That is supreme intellect. I salute your magnificent drive!',
      "The vision is crystal clear! You didn't just read the post; you saw the architecture behind it. While the rest of the feed is busy dropping generic 'Congrats!' comments, you are already spinning up your own experimental nodes. Absolutely inspired!",
      'A true innovator in a sea of passive scrollers. You see a workflow, you automate it. You see an advanced certification, you build a live production app out of it. The ecosystem belongs to people with your drive. Go build something massive!',
    ],
  },
} as const;

export type OptionKey = keyof typeof optionData;

export const OPTION_ID_TO_KEY: Record<1 | 2 | 3 | 4, OptionKey> = {
  1: 'option1',
  2: 'option2',
  3: 'option3',
  4: 'option4',
};

interface MemePosterProps {
  optionId: 1 | 2 | 3 | 4;
  imageIndex: number;
}

export default function MemePoster({ optionId, imageIndex }: MemePosterProps) {
  const optionKey = OPTION_ID_TO_KEY[optionId];
  const images = optionData[optionKey].images;
  const selectedMemeUrl = images[imageIndex] ?? images[0];
  const altText = `Critique reaction meme — option ${optionId}, variant ${imageIndex + 1}`;

  return (
    <div id="meme-poster-root" className="w-full shrink-0">
      <img
        src={selectedMemeUrl}
        alt={altText}
        className="w-full h-auto max-h-[min(50vh,400px)] object-contain select-none mx-auto block"
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
