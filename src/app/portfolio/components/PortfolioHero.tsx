"use client";

import React from 'react';
import { motion } from 'framer-motion';

const PortfolioHero = () => {
  const stats = [
    { value: '70+', label: 'Projects' },
    { value: '94%', label: 'Satisfaction' },
    { value: '10+', label: 'Industries' },
    { value: '3x', label: 'Avg Growth' },
  ];

  return (
    <section className="pt-40 pb-20 px-6 bg-background reveal will-animate overflow-hidden">
      <div className="max-w-7xl mx-auto text-center relative">
        {/* Animated background elements */}
        <motion.div
          className="absolute top-0 left-1/3 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-20 right-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.4, 0.2, 0.4],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6 relative z-10"
        >
          Our Work
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-none mb-8 text-foreground relative z-10"
        >
          Work That Speaks<br />
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
            For Itself
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-12 relative z-10"
        >
          200+ projects delivered. Real results. Real clients. Explore our case studies and see the impact we've created for brands like yours.
        </motion.p>

        {/* Quick Stats with Counter Animation */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto relative z-10">
          {stats?.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3 + index * 0.1,
                ease: "easeOut"
              }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="p-6 rounded-2xl glass-card"
            >
              <motion.p
                className="text-4xl font-bold text-foreground mb-2"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  delay: 0.5 + index * 0.1,
                  type: "spring",
                  stiffness: 200
                }}
              >
                {stat?.value}
              </motion.p>
              <p className="text-sm text-muted-foreground">{stat?.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;