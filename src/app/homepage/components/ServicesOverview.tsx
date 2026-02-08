"use client";

import React from 'react';
import { GlowingEffectDemo } from '@/components/ui/glowing-effect-demo';

const ServicesOverview = () => {
  return (
    <section className="py-32 px-6 bg-card/30 reveal will-animate">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">
            What We Do
          </span>
          <h2 className="font-display text-4xl md:text-7xl tracking-tighter leading-none mb-8 text-foreground">
            Services That Scale
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </div>

        <div className="mx-auto mb-16 max-w-2xl text-center">
  <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
    Too many teams spend months stuck in planning.
    <br />
    <span className="text-foreground font-medium">
      We move fast, build lean, and ship working products —
    </span>
    <br />
    so you can validate early, not wait.
  </p>
</div>


        {/* New service UI using GlowingEffect demo */}
        <GlowingEffectDemo />
      </div>
    </section>
  );
};

export default ServicesOverview;