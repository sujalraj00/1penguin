"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  imgSrc: string;
  alt: string;
  link?: string;
}

const PortfolioGallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'AI Video', 'Web Dev', 'App Dev', 'Social Media', 'Automation'];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 'port_1',
      title: 'TechFlow Product Video',
      category: 'AI Video',
        imgSrc: '/assets/portfolioimg/ai_auto.webp',
      alt: 'TechFlow AI-generated product explainer video thumbnail',
    },
    {
      id: 'port_2',
      title: 'DataViz Dashboard',
      category: 'Web Dev',
      imgSrc: '/assets/portfolioimg/puff.png',
      alt: 'DataViz analytics dashboard interface screenshot',
    },
    {
      id: 'port_3',
      title: 'GreenLeaf Instagram Campaign',
      category: 'Social Media',
      imgSrc: '/assets/portfolioimg/white.webp',
      alt: 'GreenLeaf Instagram post grid showing engagement metrics',
    },
    {
      id: 'port_4',
      title: 'Quantum Mobile App',
      category: 'App Dev',
      imgSrc: '/assets/images/magic.jpeg',
      alt: 'Quantum mobile app interface on smartphone',
    },
    {
      id: 'port_5',
      title: 'Nexus Email Automation',
      category: 'Automation',
      imgSrc: '/assets/portfolioimg/face.png',
      alt: 'Nexus email workflow automation diagram',
    },
    {
      id: 'port_6',
      title: 'Aurora Explainer Video',
      category: 'AI Video',
      imgSrc: '/assets/images/eagle.png',
      alt: 'Aurora explainer video scene with animated graphics',
    },
    {
      id: 'port_7',
      title: 'Zenith E-commerce Site',
      category: 'Web Dev',
      imgSrc: '/assets/portfolioimg/coffee.png',
      
      alt: 'Zenith e-commerce product page layout',
    },
    {
      id: 'port_8',
      title: 'Pulse Social Ads',
      category: 'Social Media',
      imgSrc: '/assets/portfolioimg/dev.webp',
      alt: 'Pulse social media ad campaign creative',
    },
    {
      id: 'port_9',
      title: 'Apex Fitness App',
      category: 'App Dev',
      imgSrc: '/assets/portfolioimg/fin.webp',
      alt: 'Apex fitness tracking app interface',
    },
    {
      id: 'port_10',
      title: 'Nova CRM Integration',
      category: 'Automation',
      imgSrc: '/assets/portfolioimg/auto.webp',
      alt: 'Nova CRM automation workflow visualization',
    },
    {
      id: 'port_11',
      title: 'Echo Brand Video',
      category: 'AI Video',
      imgSrc: '/assets/portfolioimg/home.webp',
      alt: 'Echo brand storytelling video frame',
    },
    {
      id: 'port_12',
      title: 'Vertex SaaS Platform',
      category: 'Web Dev',
      imgSrc: '/assets/portfolioimg/club.jpeg',
      alt: 'Vertex SaaS platform dashboard view',
    },
  ];

  const filteredItems =
    activeFilter === 'All' ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <section className="py-32 px-6 bg-card/30 reveal will-animate">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">
            All Projects
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-none text-foreground mb-8">
            Portfolio Gallery
          </h2>
        </motion.div>

        {/* Filters with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {filters.map((filter, index) => (
            <motion.button
              key={filter}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === filter
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-card text-foreground hover:border-primary hover:text-primary'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        {/* Masonry Grid with AnimatePresence */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                  layout: { duration: 0.4 }
                }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative aspect-[4/3] rounded-2xl overflow-hidden glass-card cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  className="w-full h-full"
                >
                  <AppImage
                    src={item.imgSrc}
                    alt={item.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6"
                >
                  <motion.span
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-xs uppercase tracking-widest text-primary mb-2"
                  >
                    {item.category}
                  </motion.span>
                  <motion.h3
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="text-xl font-bold text-white"
                  >
                    {item.title}
                  </motion.h3>
                </motion.div>

                {/* Animated border on hover */}
                <motion.div
                  className="absolute inset-0 border-2 border-primary/0 rounded-2xl pointer-events-none"
                  whileHover={{ borderColor: 'rgba(139, 92, 246, 0.5)' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioGallery;