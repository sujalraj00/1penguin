"use client";

import React from "react";
import { motion } from "framer-motion";
import Icon from "@/components/ui/AppIcon";

const services = [
  { id: "video", icon: "VideoCameraIcon", label: "AI Video" },
  { id: "web", icon: "CodeBracketIcon", label: "Web Dev" },
  { id: "app", icon: "DevicePhoneMobileIcon", label: "App Dev" },
  { id: "mvp", icon: "SparklesIcon", label: "MVP Build" },
  { id: "automation", icon: "CpuChipIcon", label: "Automation" },
  { id: "ai", icon: "BoltIcon", label: "AI Systems" },
];

const ServiceHero = () => {
  return (
    <section className="pt-40 pb-24 px-6 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">

        {/* Ambient background glow */}
        <motion.div
          aria-hidden
          className="absolute -top-32 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-primary/10 rounded-full blur-[120px]"
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Eyebrow */}
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-primary font-semibold tracking-[0.35em] uppercase text-[10px] block mb-6"
        >
          Our Services
        </motion.span>

        {/* Heading */}
        {/* <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          
          className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.95] mb-8"
        >
          Services That Scale
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-foreground to-muted-foreground">
            Your Product
          </span>
        </motion.h1> */}
<motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-8 text-foreground relative z-10"
        >
          Services that Scale<br />
          <motion.span
            className="text-muted-foreground/60"
            animate={{
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            Your Product
          </motion.span>
        </motion.h1>


        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-20"
        >
          Web, apps, MVPs, and AI automation—built to launch fast and scale with confidence.
        </motion.p>

        {/* Services */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
              whileHover={{ y: -6 }}
              className="group rounded-2xl border border-border bg-card/60 backdrop-blur-md px-4 py-6 transition-shadow hover:shadow-lg"
            >
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 group-hover:bg-primary/25 transition-colors">
                <Icon
                  name={service.icon as any}
                  size={22}
                  className="text-primary"
                />
              </div>
              <span className="text-xs font-medium text-foreground">
                {service.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
