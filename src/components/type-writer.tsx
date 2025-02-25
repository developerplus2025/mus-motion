"use client";

import React, { useState, useEffect } from "react";

interface TypewriterProps {
  prompts: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  delayBetweenPrompts?: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  prompts,
  typingSpeed = 50,
  erasingSpeed = 30,
  delayBetweenPrompts = 1000,
}) => {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (currentText.length < prompts[currentPromptIndex].length) {
        timeout = setTimeout(() => {
          setCurrentText(
            prompts[currentPromptIndex].slice(0, currentText.length + 1),
          );
        }, typingSpeed);
      } else {
        timeout = setTimeout(() => setIsTyping(false), delayBetweenPrompts);
      }
    } else {
      if (currentText.length > 0) {
        timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, erasingSpeed);
      } else {
        setCurrentPromptIndex((prevIndex) => (prevIndex + 1) % prompts.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [
    currentText,
    isTyping,
    currentPromptIndex,
    prompts,
    typingSpeed,
    erasingSpeed,
    delayBetweenPrompts,
  ]);

  return (
    <div className="relative top-1/2 flex h-20 -translate-y-1/2 items-center text-center font-sans text-4xl font-bold text-black">
      {currentText}
      <span className="ml-1 animate-pulse cursor-pointer">|</span>
    </div>
  );
};
