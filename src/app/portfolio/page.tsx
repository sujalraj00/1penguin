import React from 'react';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PortfolioHero from './components/PortfolioHero';
import FeaturedCaseStudies from './components/FeaturedCaseStudies';
import PortfolioGallery from './components/PortfolioGallery';
import ClientLogosSection from './components/ClientLogosSection';
import AwardsSection from './components/AwardsSection';

export const metadata: Metadata = {
  title: 'Portfolio - 1Penguin',
  description: 'Explore OnePenguin\'s portfolio of 200+ successful projects. Case studies featuring 1M+ video views, 10K users, 280% engagement growth. Real work, real results.',
  keywords: 'portfolio, case studies, project showcase, client work, digital agency results, AI video portfolio, web development projects',
};

export default function PortfolioPage() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Header />
      <PortfolioHero />

      <PortfolioGallery />

     
      <Footer />
    </main>
  );
}