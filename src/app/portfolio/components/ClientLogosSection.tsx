import React from 'react';
import Icon from '@/components/ui/AppIcon';

const ClientLogosSection = () => {
  const industries = [
    {
      id: 'ind_saas',
      name: 'SaaS',
      clients: [
        { id: 'saas_techflow', name: 'TechFlow', icon: 'CpuChipIcon' },
        { id: 'saas_dataviz', name: 'DataViz', icon: 'ChartBarIcon' },
        { id: 'saas_quantum', name: 'Quantum', icon: 'CubeIcon' },
      ],
    },
    {
      id: 'ind_ecommerce',
      name: 'E-commerce',
      clients: [
        { id: 'ecom_greenleaf', name: 'GreenLeaf', icon: 'SparklesIcon' },
        { id: 'ecom_zenith', name: 'Zenith', icon: 'BoltIcon' },
        { id: 'ecom_nova', name: 'Nova', icon: 'FireIcon' },
      ],
    },
    {
      id: 'ind_fintech',
      name: 'FinTech',
      clients: [
        { id: 'fin_nexus', name: 'Nexus', icon: 'CommandLineIcon' },
        { id: 'fin_apex', name: 'Apex', icon: 'RocketLaunchIcon' },
        { id: 'fin_vertex', name: 'Vertex', icon: 'StarIcon' },
      ],
    },
    {
      id: 'ind_health',
      name: 'HealthTech',
      clients: [
        { id: 'health_pulse', name: 'Pulse', icon: 'HeartIcon' },
        { id: 'health_aurora', name: 'Aurora', icon: 'SunIcon' },
        { id: 'health_echo', name: 'Echo', icon: 'SpeakerWaveIcon' },
      ],
    },
  ];

  return (
    <section className="py-32 px-6 bg-background reveal will-animate">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">
            Industries
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-none text-foreground">
            Trusted Across Sectors
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {industries.map(industry => (
            <div key={industry.id} className="glass-card p-8 rounded-3xl">
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                {industry.name}
              </h3>
              <div className="space-y-4">
                {industry.clients.map(client => (
                  <div key={client.id} className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                      <Icon name={client.icon as any} size={20} className="text-primary" />
                    </div>
                    <span className="font-semibold text-foreground">{client.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogosSection;