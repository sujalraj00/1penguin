import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceHero from './components/ServiceHero';
import AIVideoService from './components/AIVideoService';
import WebAppDevService from './components/WebAppDevService';
import SocialInfluencerService from './components/SocialInfluencerService';
import AutomationService from './components/AutomationService';
import PricingTable from './components/PricingTable';

export const metadata: Metadata = {
  title: 'Services - 1Penguin | AI Video, MVP , Automation',
  description: 'Explore OnePenguin\'s full-service offerings: AI video creation, web/app development, social media management, influencer marketing, and AI automation. Transparent pricing, proven results.',
  keywords: 'AI video creation, web development services, app development, social media management, influencer marketing, AI automation, digital agency services',
};

export default function ServicesPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Header />
      <ServiceHero />
         <WebAppDevService />
      <AIVideoService />
   
      <SocialInfluencerService />
      <AutomationService />
      <PricingTable />
      <Footer />
    </main>
  );
}