"use client";

import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Client {
  id: string;
  name: string;
  icon: string;
}

const ClientLogoWall = () => {
  const clients: Client[] = [
    { id: 'client_techflow', name: 'TechFlow', icon: 'CpuChipIcon' },
    { id: 'client_dataviz', name: 'DataViz', icon: 'ChartBarIcon' },
    { id: 'client_greenleaf', name: 'GreenLeaf', icon: 'SparklesIcon' },
    { id: 'client_quantum', name: 'Quantum', icon: 'CubeIcon' },
    { id: 'client_nexus', name: 'Nexus', icon: 'CommandLineIcon' },
    { id: 'client_aurora', name: 'Aurora', icon: 'SunIcon' },
    { id: 'client_zenith', name: 'Zenith', icon: 'BoltIcon' },
    { id: 'client_vertex', name: 'Vertex', icon: 'StarIcon' },
    { id: 'client_pulse', name: 'Pulse', icon: 'HeartIcon' },
    { id: 'client_apex', name: 'Apex', icon: 'RocketLaunchIcon' },
    { id: 'client_nova', name: 'Nova', icon: 'FireIcon' },
    { id: 'client_echo', name: 'Echo', icon: 'SpeakerWaveIcon' },
  ];

  return (
    <section className="py-32 px-6 bg-background overflow-hidden reveal will-animate">
      <div className="max-w-7xl mx-auto mb-12 text-center">
        <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">
          Trusted By
        </span>
        <h2 className="font-display text-3xl md:text-5xl tracking-tighter leading-none text-foreground">
          Industry Leaders Choose Us
        </h2>
      </div>

      <div
        className="relative flex overflow-hidden py-8"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="animate-marquee flex gap-16 whitespace-nowrap">
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={`${client.id}_${i}`}
              className="flex items-center gap-3 opacity-40 transition-all hover:opacity-100 hover:scale-110 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                <Icon name={client.icon as any} size={24} className="text-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground tracking-tight">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>


      <div
        className="relative flex overflow-hidden py-8"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        <div className="animate-marquee flex gap-16 whitespace-nowrap"
        style={{ animationDirection: 'reverse' }}>
          {[...clients, ...clients, ...clients].map((client, i) => (
            <div
              key={`${client.id}_${i}`}
              className="flex items-center gap-3 opacity-40 transition-all hover:opacity-100 hover:scale-110 cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center">
                <Icon name={client.icon as any} size={24} className="text-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground tracking-tight">
                {client.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogoWall;