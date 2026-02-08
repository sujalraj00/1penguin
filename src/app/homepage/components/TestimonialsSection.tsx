"use client";

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const SQRT_5000 = Math.sqrt(5000);

interface Testimonial {
  tempId: number;
  testimonial: string;
  by: string;
  imgSrc: string;
}

const TestimonialsSection = () => {
  const [cardSize, setCardSize] = useState(365);
  const [testimonialsList, setTestimonialsList] = useState<Testimonial[]>([
    {
      tempId: 0,
      testimonial: "OnePenguin created 50 AI videos for our product launch. We hit 1M views in 2 weeks.",
      by: "Sarah Chen, CEO at TechFlow",
      imgSrc: "https://i.pravatar.cc/150?img=1"
    },
    {
      tempId: 1,
      testimonial: "Their web dev team built our SaaS platform in 8 weeks. Now serving 10K users.",
      by: "Marcus Rodriguez, CTO at DataViz",
      imgSrc: "https://i.pravatar.cc/150?img=2"
    },
    {
      tempId: 2,
      testimonial: "Social media management increased our engagement by 280%. Worth every penny.",
      by: "Emily Watson, Marketing Director at GreenLeaf",
      imgSrc: "https://i.pravatar.cc/150?img=3"
    },
    {
      tempId: 3,
      testimonial: "The AI automation saved us 15 hours per week. ROI was immediate.",
      by: "David Kim, Operations Manager at Quantum",
      imgSrc: "https://i.pravatar.cc/150?img=4"
    },
      {
      tempId: 4,
      testimonial: "Finally, a team that understands both tech and business.",
      by: "David Kim, Operations Manager at Quantum",
      imgSrc: "https://i.pravatar.cc/150?img=4"
    },
      {
      tempId: 5,
      testimonial: "The AI automation saved us 15 hours per week. ROI was immediate.",
      by: "David Kim, Operations Manager at Quantum",
      imgSrc: "https://i.pravatar.cc/150?img=4"
    },

    {
      tempId: 6,
      testimonial: "They don’t overpromise. They deliver What stood out was how honest they were about what we needed—and what we didn’t. The MVP helped us raise our first round of funding.",
      by: "Ananya Verma, Co-Founder",
      imgSrc: "https://i.pravatar.cc/150?img=4"
    },
  ]);

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList];
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) return;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) return;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }
    setTestimonialsList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)");
      setCardSize(matches ? 365 : 290);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return (
    <section className="py-32 px-6 bg-background reveal will-animate">
      <div className="max-w-7xl mx-auto mb-20 text-center">
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">
          Client Success
        </span>
        <h2 className="font-display text-4xl md:text-7xl tracking-tighter leading-none text-foreground">
          Real Results, Real Clients
        </h2>
      </div>

      <div
  className="relative w-full overflow-hidden bg-card/20 rounded-3xl flex items-center justify-center"
  style={{ height: 600 }}
>

        {testimonialsList.map((testimonial, index) => {
          const position = testimonialsList.length % 2
            ? index - (testimonialsList.length + 1) / 2
            : index - testimonialsList.length / 2;
          
          const isCenter = position === 0;

          return (
            <div
              key={testimonial.tempId}
              onClick={() => handleMove(position)}
              className={`absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out ${
                isCenter 
                  ? 'z-10 bg-primary text-primary-foreground border-primary' 
                  : 'z-0 bg-card text-card-foreground border-border hover:border-primary/50'
              }`}
              style={{
                width: cardSize,
                height: cardSize,
                clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
                transform: `
                  translate(-50%, -50%) 
                  translateX(${(cardSize / 1.5) * position}px)
                  translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
                  rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
                `,
                boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--color-border))" : "0px 0px 0px 0px transparent"
              }}
            >
              <span
                className="absolute block origin-top-right rotate-45 bg-border"
                style={{
                  right: -2,
                  top: 48,
                  width: SQRT_5000,
                  height: 2
                }}
              />
              <AppImage
                src={testimonial.imgSrc}
                alt={`${testimonial.by.split(',')[0]} testimonial photo`}
                className="mb-4 h-14 w-12 bg-muted object-cover object-top"
                style={{
                  boxShadow: "3px 3px 0px hsl(var(--color-background))"
                }}
              />
              <h3 className={`text-base sm:text-xl font-medium ${
                isCenter ? 'text-primary-foreground' : 'text-foreground'
              }`}>
                "{testimonial.testimonial}"
              </h3>
              <p className={`absolute bottom-8 left-8 right-8 mt-2 text-sm italic ${
                isCenter ? 'text-primary-foreground/80' : 'text-muted-foreground'
              }`}>
                - {testimonial.by}
              </p>
            </div>
          );
        })}

        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
          <button
            onClick={() => handleMove(-1)}
            className="flex h-14 w-14 items-center justify-center text-foreground transition-colors
           bg-card border-2 border-border
           hover:bg-primary hover:text-primary-foreground hover:border-primary
           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"

            aria-label="Previous testimonial"
          >
            <Icon name="ChevronLeftIcon" size={24} />
          </button>
          <button
            onClick={() => handleMove(1)}
            className="flex h-14 w-14 items-center justify-center text-foreground transition-colors
           bg-card border-2 border-border
           hover:bg-primary hover:text-primary-foreground hover:border-primary
           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"

            aria-label="Next testimonial"
          >
            <Icon name="ChevronRightIcon" size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;