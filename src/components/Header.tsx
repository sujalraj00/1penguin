"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from './ui/AppIcon';
import { ThemeToggle } from './ui/theme-toggle';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal logic for .reveal.will-animate elements
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -60px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll('.reveal.will-animate');
    revealElements.forEach(el => observer.observe(el));

    return () => {
      revealElements.forEach(el => observer.unobserve(el));
    };
  }, [pathname]); // Re-run when pathname changes

  const navLinks = [
    { id: 'nav_home', label: 'Homepage', href: '/homepage' },
    { id: 'nav_services', label: 'Services', href: '/services' },
    { id: 'nav_portfolio', label: 'Portfolio', href: '/portfolio' },
    { id: 'nav_faq', label: 'FAQ', href: '/faq' },
    { id: 'nav_contact', label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl px-4 py-3 flex items-center justify-between rounded-full transition-all duration-300 ${
        isScrolled ? 'glass-card shadow-2xl' : 'bg-card/60 backdrop-blur-md border border-border/50'
      }`}
    >
      {/* Logo */}
      <Link href="/homepage" className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
          <Icon name="SparklesIcon" variant="solid" size={20} className="text-primary-foreground" />
        </div>
        <span className="font-display font-bold text-xl tracking-tight text-foreground">
          1penguin
        </span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
        {navLinks.map(link => (
          <Link
            key={link.id}
            href={link.href}
            className={`transition-colors hover:text-foreground relative ${
              isActive(link.href) ? 'text-foreground' : ''
            }`}
          >
            {link.label}
            {isActive(link.href) && (
              <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary rounded-full" />
            )}
          </Link>
        ))}
      </div>

      {/* CTA Button and Theme Toggle */}
      <div className="hidden md:flex items-center gap-4">
        <ThemeToggle />
        <button className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-transform">
          Start Project
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        className="md:hidden p-2"
        aria-label="Toggle menu"
      >
        <Icon
          name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
          size={24}
          className="text-foreground"
        />
      </button>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {navLinks.map(link => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-2xl font-semibold transition-colors ${
                isActive(link.href) ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle className="mt-4" />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-full text-lg font-semibold"
          >
            Start Project
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;