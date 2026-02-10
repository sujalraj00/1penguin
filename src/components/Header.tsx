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

  // Close menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { id: 'nav_home', label: 'HOME', href: '/homepage' },
    { id: 'nav_services', label: 'SERVICES', href: '/services' },
    { id: 'nav_portfolio', label: 'PORTFOLIO', href: '/portfolio' },
    { id: 'nav_faq', label: 'FAQ', href: '/faq' },
    { id: 'nav_contact', label: 'CONTACT', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  return (
    <>
      {/* Desktop Header */}
      <nav
        className={`hidden md:flex fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl px-4 py-3 items-center justify-between rounded-full transition-all duration-300 ${
          isScrolled ? 'glass-card shadow-2xl' : 'bg-card/60 backdrop-blur-md border border-border/50'
        }`}
      >
        {/* Logo */}
        <Link href="/homepage" className="flex items-center gap-3 flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <Icon name="SparklesIcon" variant="solid" size={20} className="text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-foreground">
            1penguin
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
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
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Link href="/contact" className="px-6 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-semibold hover:scale-105 active:scale-95 transition-transform">
            Start Project
          </Link>
        </div>
      </nav>

      {/* Mobile Header */}
      <nav
        className={`md:hidden fixed top-0 left-0 right-0 z-50 w-full px-4 py-3 flex items-center justify-between transition-all duration-300 ${
          isScrolled || isMobileMenuOpen ? 'bg-card/95 backdrop-blur-md shadow-lg border-b border-border/50' : 'bg-card/60 backdrop-blur-md border-b border-border/30'
        }`}
      >
        {/* Logo */}
        <Link href="/homepage" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
            <Icon name="SparklesIcon" variant="solid" size={18} className="text-primary-foreground" />
          </div>
          <span className="font-display font-bold text-base tracking-tight text-foreground">
            1penguin
          </span>
        </Link>

        {/* Mobile Menu Controls */}
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 hover:bg-muted rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            <Icon
              name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
              size={24}
              className="text-foreground"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Drawer */}
          <div className="fixed top-16 left-0 right-0 bg-card border-b border-border/50 shadow-lg z-40 md:hidden overflow-hidden">
            <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-6 space-y-1">
              {navLinks.map(link => (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActive(link.href)
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 mt-2 border-t border-border/50">
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="w-full px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Start Project
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;