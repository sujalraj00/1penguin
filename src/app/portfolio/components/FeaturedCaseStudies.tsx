"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import AppImage from '@/components/ui/AppImage';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  services: string[];
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    role: string;
    imgSrc: string;
  };
  beforeImg: string;
  afterImg: string;
}

const FeaturedCaseStudies = () => {
  const [hoveredResult, setHoveredResult] = useState<string | null>(null);

  const caseStudies: CaseStudy[] = [
    {
      id: 'case_techflow',
      title: 'TechFlow Product Launch',
      client: 'TechFlow',
      services: ['AI Video', 'Social Media'],
      challenge: 'New SaaS product with zero brand awareness. Needed to generate 5K signups in 30 days.',
      solution: 'Created 10 AI explainer videos showcasing product features, launched 60-day social media campaign with daily posts, partnered with 15 micro-influencers in tech space.',
      results: [
        { metric: 'Video Views', value: '1M+', description: 'Across all platforms in 2 weeks' },
        { metric: 'Signups', value: '5K+', description: 'Target achieved in 30 days' },
        { metric: 'ARR', value: '$200K', description: 'Within 3 months of launch' },
      ],
      testimonial: {
        quote: 'OnePenguin created 50 AI videos for our product launch. We hit 1M views in 2 weeks. The quality was studio-grade, and the turnaround was incredible.',
        author: 'Sarah Chen',
        role: 'CEO at TechFlow',
        imgSrc: 'https://i.pravatar.cc/150?img=1',
      },
      beforeImg: 'https://img.rocket.new/generatedImages/rocket_gen_img_1851a1432-1768487527873.png',
      afterImg: 'https://img.rocket.new/generatedImages/rocket_gen_img_1851a1432-1768487527873.png',
    },
    {
      id: 'case_dataviz',
      title: 'DataViz SaaS Platform',
      client: 'DataViz',
      services: ['Web Development'],
      challenge: 'Legacy PHP application with poor UX, slow performance, and high bounce rate. Needed complete rebuild.',
      solution: 'Rebuilt platform with Next.js 15, implemented AI-powered data visualization engine, designed intuitive dashboard with real-time updates.',
      results: [
        { metric: 'Users', value: '10K', description: 'Active users in 6 months' },
        { metric: 'Performance', value: '50%', description: 'Faster load times' },
        { metric: 'Rating', value: '4.8/5', description: 'App store rating' },
      ],
      testimonial: {
        quote: 'Their web dev team built our SaaS platform in 8 weeks. Now serving 10K users with zero downtime. The Next.js architecture scales beautifully.',
        author: 'Marcus Rodriguez',
        role: 'CTO at DataViz',
        imgSrc: 'https://i.pravatar.cc/150?img=2',
      },
      beforeImg: 'https://img.rocket.new/generatedImages/rocket_gen_img_116007a55-1766593240507.png',
      afterImg: 'https://img.rocket.new/generatedImages/rocket_gen_img_116007a55-1766593240507.png',
    },
    {
      id: 'case_greenleaf',
      title: 'GreenLeaf E-commerce Growth',
      client: 'GreenLeaf',
      services: ['Social Media', 'Influencer Marketing'],
      challenge: 'Low social engagement (1% rate), poor conversion (1%), struggling to stand out in crowded e-commerce space.',
      solution: '90-day social media overhaul with daily posts, stories, and reels. Partnered with 20 micro-influencers for authentic product reviews.',
      results: [
        { metric: 'Engagement', value: '280%', description: 'Increase across all platforms' },
        { metric: 'Conversion', value: '3.5%', description: 'Up from 1%' },
        { metric: 'Revenue', value: '$500K', description: 'Attributed to campaigns' },
      ],
      testimonial: {
        quote: 'Social media management increased our engagement by 280%. Worth every penny. The influencer partnerships were game-changing.',
        author: 'Emily Watson',
        role: 'Marketing Director at GreenLeaf',
        imgSrc: 'https://i.pravatar.cc/150?img=3',
      },
      beforeImg: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d31ae0cc-1768209880909.png',
      afterImg: 'https://img.rocket.new/generatedImages/rocket_gen_img_1d31ae0cc-1768209880909.png',
    },
  ];

  return (
    <section className="py-32 px-6 bg-background reveal will-animate">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">
            Featured Projects
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-none text-foreground">
            Success Stories
          </h2>
        </motion.div>

        <div className="space-y-32">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-8 md:p-12 rounded-3xl"
            >
              {/* Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="mb-12"
              >
                <div className="flex flex-wrap gap-2 mb-4">
                  {study.services.map((service, idx) => (
                    <motion.span
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + idx * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-xs font-medium text-primary"
                    >
                      {service}
                    </motion.span>
                  ))}
                </div>
                <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-4">{study.title}</h3>
                <p className="text-lg text-muted-foreground">{study.client}</p>
              </motion.div>

              {/* Before/After Images with Hover Effect */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-video rounded-2xl overflow-hidden"
                >
                  <div className="absolute top-4 left-4 px-3 py-1 bg-muted/80 backdrop-blur-sm rounded-full text-xs font-bold uppercase z-10">
                    Before
                  </div>
                  <AppImage
                    src={study.beforeImg}
                    alt={`${study.client} before OnePenguin services`}
                    className="w-full h-full object-cover grayscale"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  className="relative aspect-video rounded-2xl overflow-hidden"
                >
                  <div className="absolute top-4 left-4 px-3 py-1 bg-accent/80 backdrop-blur-sm rounded-full text-xs font-bold uppercase text-accent-foreground z-10">
                    After
                  </div>
                  <AppImage
                    src={study.afterImg}
                    alt={`${study.client} after OnePenguin services showing improved results`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              {/* Challenge & Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
              >
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Challenge</h4>
                  <p className="text-foreground leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">Solution</h4>
                  <p className="text-foreground leading-relaxed">{study.solution}</p>
                </div>
              </motion.div>

              {/* Results with Animated Cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="mb-12"
              >
                <h4 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">Results</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {study.results.map((result, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8, y: 20 }}
                      whileInView={{ opacity: 1, scale: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + idx * 0.1 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      onHoverStart={() => setHoveredResult(`${study.id}-${idx}`)}
                      onHoverEnd={() => setHoveredResult(null)}
                      className="p-6 rounded-2xl bg-card border border-border relative overflow-hidden"
                    >
                      {hoveredResult === `${study.id}-${idx}` && (
                        <motion.div
                          layoutId="result-glow"
                          className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                        />
                      )}
                      <div className="relative z-10">
                        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                          {result.metric}
                        </p>
                        <motion.p
                          className="text-4xl font-bold text-accent mb-2"
                          animate={{
                            scale: hoveredResult === `${study.id}-${idx}` ? 1.1 : 1,
                          }}
                          transition={{ duration: 0.2 }}
                        >
                          {result.value}
                        </motion.p>
                        <p className="text-sm text-muted-foreground">{result.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="p-8 rounded-2xl bg-primary/10 border border-primary/20"
              >
                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <AppImage
                      src={study.testimonial.imgSrc}
                      alt={`${study.testimonial.author} photo`}
                      className="w-16 h-16 rounded-full object-cover flex-shrink-0"
                    />
                  </motion.div>
                  <div>
                    <p className="text-foreground leading-relaxed mb-4 italic">"{study.testimonial.quote}"</p>
                    <p className="font-bold text-foreground">{study.testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{study.testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;