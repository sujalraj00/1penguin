import React from 'react';
import Icon from '@/components/ui/AppIcon';

const AwardsSection = () => {
  const awards = [
    {
      id: 'award_top10',
      title: 'Top 10 Digital Agencies 2025',
      organization: 'Agency Awards',
      icon: 'TrophyIcon',
      year: '2025',
    },
    {
      id: 'award_ai',
      title: 'Best Use of AI in Marketing',
      organization: 'MarTech Summit',
      icon: 'SparklesIcon',
      year: '2025',
    },
    {
      id: 'award_webby',
      title: 'Webby Nominee - Video Production',
      organization: 'The Webby Awards',
      icon: 'FilmIcon',
      year: '2024',
    },
    {
      id: 'award_innovation',
      title: 'Innovation in Automation',
      organization: 'Tech Innovators Forum',
      icon: 'LightBulbIcon',
      year: '2024',
    },
  ];

  return (
    <section className="py-32 px-6 bg-card/30 reveal will-animate">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 text-center">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">
            Recognition
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-none text-foreground">
            Awards & Recognition
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {awards.map(award => (
            <div key={award.id} className="glass-card p-8 rounded-3xl text-center hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mx-auto mb-6">
                <Icon name={award.icon as any} size={32} className="text-accent" />
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">{award.year}</div>
              <h3 className="text-lg font-bold text-foreground mb-2">{award.title}</h3>
              <p className="text-sm text-muted-foreground">{award.organization}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;