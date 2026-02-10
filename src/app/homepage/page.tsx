import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import ServicesOverview from './components/ServicesOverview';
import TestimonialsSection from './components/TestimonialsSection';
import ProcessSection from './components/ProcessSection';
import ClientLogoWall from './components/ClientLogoWall';
import CTASection from './components/CTASection';

export const metadata: Metadata = {
  title: '1Penguin - AI-Powered Creative Agency',
  description: 'Building tomorrow\'s brands today. AI video creation, web/app development, social media management, influencer marketing, and automation services.',
  keywords: 'AI agency, video creation, web development, app development, social media, influencer marketing, automation',
};

export default function Homepage() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesOverview />
      <TestimonialsSection />
      <ProcessSection />
      <ClientLogoWall />
      <CTASection />
      <Footer />
    </main>
  );
}