"use client";

import React, { useState, useEffect } from "react";

interface FlipLinkProps {
  children: string;
  href: string;
}

const FlipLink = ({ children, href }: FlipLinkProps) => {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if dark mode is active
    const prefersDark = document.documentElement.classList.contains('dark');
    setIsDark(prefersDark);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const isDarkMode = document.documentElement.classList.contains('dark');
      setIsDark(isDarkMode);
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden whitespace-nowrap text-4xl font-black uppercase sm:text-7xl md:text-8xl lg:text-9xl"
      style={{
        lineHeight: 0.75,
        color: isDark ? "#F9F9E7" : "#1A1A1A",
        transition: "color 0.3s ease",
      }}
    >
      <div className="flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[110%]"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
      <div className="absolute inset-0 flex">
        {children.split("").map((letter, i) => (
          <span
            key={i}
            className="inline-block translate-y-[110%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 text-primary"
            style={{
              transitionDelay: `${i * 25}ms`,
            }}
          >
            {letter}
          </span>
        ))}
      </div>
    </a>
  );
};

export const FlipLinks = () => {
  return (
    <section className="flex flex-col items-start gap-2 bg-background w-full py-20 px-8">
      <FlipLink href="https://x.com/">Twitter</FlipLink>
      <FlipLink href="https://www.linkedin.com/in/1penguin/">Linkedin</FlipLink>
    
      <FlipLink href="https://www.instagram.com/1penguinnn/">Instagram</FlipLink>
    </section>
  );
};


export default FlipLink;