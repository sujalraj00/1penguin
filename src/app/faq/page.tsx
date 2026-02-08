import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FAQSection from './FAQSection';

export const metadata = {
  title: 'FAQ - 1penguin',
  description: 'Frequently asked questions about our MVP development, development projects, and AI-powered solutions.',
};

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-24">
        <FAQSection />
      </div>
      <Footer />
    </main>
  );
}
