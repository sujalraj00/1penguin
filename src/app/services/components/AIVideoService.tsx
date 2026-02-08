"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const AIVideoService = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const features = [
    { id: 'video_script', label: 'Script writing', icon: 'DocumentTextIcon' },
    { id: 'video_ai', label: 'AI video generation', icon: 'SparklesIcon' },
    { id: 'video_voice', label: 'Professional voiceover', icon: 'SpeakerWaveIcon' },
    { id: 'video_music', label: 'Custom music', icon: 'MusicalNoteIcon' },
    { id: 'video_edit', label: 'Expert editing', icon: 'FilmIcon' },
    { id: 'video_subtitle', label: 'Multi-language subtitles', icon: 'LanguageIcon' },
  ];

  const useCases = [
    { id: 'use_demo', label: 'Product demos', icon: 'CubeIcon' },
    { id: 'use_explainer', label: 'Explainer videos', icon: 'LightBulbIcon' },
    { id: 'use_ads', label: 'Social ads', icon: 'MegaphoneIcon' },
    { id: 'use_testimonial', label: 'Testimonials', icon: 'ChatBubbleLeftIcon' },
  ];

  return (
    <section id="ai-video" className="py-32 px-6 bg-card/30 reveal will-animate overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Video Player with Enhanced Animation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-video rounded-3xl overflow-hidden glass-card group cursor-pointer"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_16eeeb4db-1767807313530.png"
                alt="AI video creation showcase reel thumbnail"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="w-20 h-20 rounded-full bg-primary flex items-center justify-center"
              >
                <Icon
                  name={isPlaying ? 'PauseIcon' : 'PlayIcon'}
                  variant="solid"
                  size={32}
                  className="text-primary-foreground ml-1"
                />
              </motion.button>
            </div>

            {/* Animated border effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl border-2 border-primary/0 group-hover:border-primary/50"
              transition={{ duration: 0.3 }}
            />
          </motion.div>

          {/* Details with Stagger Animation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h2 className="font-display text-4xl md:text-5xl tracking-tight mb-4 text-foreground">
                AI Video Creation
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Turn scripts into studio-quality videos in 48 hours using our proprietary AI pipeline. No cameras, no crew, no hassle.
              </p>
            </motion.div>

            {/* What's Included with Hover Effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                What's Included
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.05 }}
                    whileHover={{ x: 5, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
                    onHoverStart={() => setHoveredFeature(feature.id)}
                    onHoverEnd={() => setHoveredFeature(null)}
                    className="flex items-center gap-2 text-sm text-foreground p-2 rounded-lg transition-colors"
                  >
                    <motion.div
                      animate={{
                        rotate: hoveredFeature === feature.id ? 360 : 0,
                        scale: hoveredFeature === feature.id ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon name={feature.icon as any} size={16} className="text-accent" />
                    </motion.div>
                    <span>{feature.label}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Use Cases with Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
                Perfect For
              </h3>
              <div className="flex flex-wrap gap-2">
                {useCases.map((useCase, index) => (
                  <motion.div
                    key={useCase.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + index * 0.05 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm text-foreground cursor-pointer"
                  >
                    <Icon name={useCase.icon as any} size={14} />
                    {useCase.label}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Pricing & Tech with Counter Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="grid grid-cols-2 gap-6 pt-6 border-t border-border"
            >
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Turnaround</p>
                <p className="text-2xl font-bold text-foreground">24 - 48 hrs</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2"></p>
                <p className="text-2xl font-bold text-foreground">
                   <span className="text-base text-muted-foreground"></span>
                </p>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full md:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold"
            >
              Get Started
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIVideoService;