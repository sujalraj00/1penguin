import React from 'react';
import Link from 'next/link';
import Icon from './ui/AppIcon';
import { FlipLinks } from './ui/flip-links';

const Footer = () => {
  const serviceLinks = [
    { id: 'foot_video', label: 'AI Video', href: '/services#ai-video' },
    { id: 'foot_web', label: 'Web Dev', href: '/services#web-dev' },
    { id: 'foot_app', label: 'App Dev', href: '/services#app-dev' },
    { id: 'foot_social', label: 'Social Media', href: '/services#social-media' },
    { id: 'foot_influencer', label: 'Influencer Marketing', href: '/services#influencer' },
    { id: 'foot_automation', label: 'Automation', href: '/services#automation' },
  ];

  const companyLinks = [
    { id: 'foot_about', label: 'About', href: '/homepage#about' },
    { id: 'foot_careers', label: 'Careers', href: '/homepage#careers' },
    { id: 'foot_blog', label: 'Blog', href: '/homepage#blog' },
  ];

  const legalLinks = [
    { id: 'foot_privacy', label: 'Privacy', href: '/privacy' },
    { id: 'foot_terms', label: 'Terms', href: '/terms' },
    { id: 'foot_contact', label: 'Contact', href: '/contact' },
  ];

  const socialLinks = [
    { id: 'social_linkedin', name: 'linkedin', icon: 'LinkIcon', href: 'https://www.linkedin.com/in/1penguin/' },
    { id: 'social_twitter', name: 'twitter', icon: 'AtSymbolIcon', href: 'https://twitter.com' },
    { id: 'social_instagram', name: 'instagram', icon: 'CameraIcon', href: 'https://instagram.com' },
    { id: 'social_dribbble', name: 'dribbble', icon: 'PaintBrushIcon', href: 'https://dribbble.com' },
  ];

  return (
    <footer className="border-t border-border bg-card">
     


       {/* Flip Links Section */}
      <div className="border-b border-border">
        <FlipLinks />
      </div>
    </footer>
  );
};

export default Footer;