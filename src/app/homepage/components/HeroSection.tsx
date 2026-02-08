"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';


interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) =>
<div className="flex flex-col items-center justify-center transition-transform hover:-translate-y-1 cursor-default">
    <span className="text-xl font-bold text-foreground sm:text-2xl">{value}</span>
    <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-medium sm:text-xs">
      {label}
    </span>
  </div>;


const HeroSection = () => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const clients = [
  { id: 'client_techflow', name: 'TechFlow', icon: 'CpuChipIcon' },
  { id: 'client_dataviz', name: 'DataViz', icon: 'ChartBarIcon' },
  { id: 'client_greenleaf', name: 'GreenLeaf', icon: 'SparklesIcon' },
  { id: 'client_quantum', name: 'Quantum', icon: 'CubeIcon' },
  { id: 'client_nexus', name: 'Nexus', icon: 'CommandLineIcon' },
  { id: 'client_aurora', name: 'Aurora', icon: 'SunIcon' }];


  return (
    <div className="relative w-full bg-background text-foreground overflow-hidden min-h-screen grid-lines">
      {/* Background Image with Gradient Mask */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: "https://images.unsplash.com/photo-1600619030925-569b3b964418",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          maskImage: 'linear-gradient(180deg, transparent, black 10%, black 70%, transparent)',
          WebkitMaskImage: 'linear-gradient(180deg, transparent, black 10%, black 70%, transparent)'
        }} />


      <div className="relative z-10 mx-auto max-w-7xl px-4 pt-32 pb-20 sm:px-6 md:pt-40 md:pb-28 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8 items-start">
          {/* Left Column */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 pt-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}>

              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 backdrop-blur-sm">
                <span className="text-xs font-semibold uppercase tracking-wider text-primary flex items-center gap-2">
                  You Think. We Ship.
             
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.9] font-display"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}>

              Build.
Launch.
Validate.
              <br />
              <span className="text-gradient neon-glow">In Days.</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              className="max-w-xl text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}>
From idea to a real, clickable product.
We handle strategy, design, and development—
so you can focus on users, feedback, and growth.
              {/* AI-powered creative agency. From viral videos to intelligent automation, we craft
              digital experiences that convert. */}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}>

              <button className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/50">
                Start Your Project
                <Icon
                  name="ArrowRightIcon"
                  size={16}
                  className="transition-transform group-hover:translate-x-1" />

              </button>

              <button className="group inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-8 py-4 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:bg-card">
                <Icon name="PlayIcon" variant="solid" size={16} />
                Watch Showreel
              </button>
            </motion.div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="lg:col-span-5 space-y-6 lg:mt-12">
            <motion.div
              className="relative overflow-hidden rounded-3xl glass-card p-8 shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}>

              {/* Card Glow Effect */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/20 ring-1 ring-primary/40">
                    <Icon name="RocketLaunchIcon" size={24} className="text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold tracking-tight text-foreground">200+</div>
                    <div className="text-sm text-muted-foreground">Projects Delivered</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-3 mb-8">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Client Satisfaction</span>
                    <span className="text-foreground font-medium">98%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full w-[98%] rounded-full bg-gradient-to-r from-primary to-secondary" />
                  </div>
                </div>

                <div className="h-px w-full bg-border mb-6" />

                {/* Mini Stats Grid */}
                <div className="grid grid-cols-3 gap-4 text-center mb-8">
                  <StatItem value="3+" label="Years" />
                  <div className="w-px h-full bg-border mx-auto" />
                  <StatItem value="24/7" label="Support" />
                </div>

                {/* Tag Pills */}
                <div className="flex flex-wrap gap-2">
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-[10px] font-medium tracking-wide text-accent">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
                    </span>
                    ACTIVE
                  </div>
                  <div className="inline-flex items-center gap-1.5 rounded-full border border-warning/30 bg-warning/10 px-3 py-1 text-[10px] font-medium tracking-wide text-warning">
                    <Icon name="SparklesIcon" variant="solid" size={12} />
                    PREMIUM
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Marquee Card */}
            <motion.div
              className="relative overflow-hidden rounded-3xl glass-card py-8 backdrop-blur-xl"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}>

              <h3 className="mb-6 px-8 text-sm font-medium text-muted-foreground">
                Trusted by Industry Leaders
              </h3>

              <div
                className="relative flex overflow-hidden"
                style={{
                  maskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)',
                  WebkitMaskImage: 'linear-gradient(to right, transparent, black 20%, black 80%, transparent)'
                }}>

                <div className="animate-marquee flex gap-12 whitespace-nowrap px-4">
                  {[...clients, ...clients, ...clients].map((client, i) =>
                  <div
                    key={`${client.id}_${i}`}
                    className="flex items-center gap-2 opacity-50 transition-all hover:opacity-100 hover:scale-105 cursor-default">

                      <Icon name={client.icon as any} size={24} className="text-foreground" />
                      <span className="text-lg font-bold text-foreground tracking-tight">
                        {client.name}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>);

};

export default HeroSection;