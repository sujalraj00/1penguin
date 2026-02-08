import React from 'react';
import Icon from '@/components/ui/AppIcon';

const AutomationService = () => {
  const automations = [
    {
      id: 'auto_email',
      title: 'Email Workflows',
      description: 'Automated drip campaigns, follow-ups, and personalized sequences',
      icon: 'EnvelopeIcon',
      savings: '10 hrs/week'
    },
    {
      id: 'auto_crm',
      title: 'CRM Integration',
      description: 'Sync data across platforms, auto-update records, smart tagging',
      icon: 'CircleStackIcon',
      savings: '8 hrs/week'
    },
    {
      id: 'auto_content',
      title: 'Content Generation',
      description: 'AI-powered social posts, blog outlines, email drafts',
      icon: 'DocumentTextIcon',
      savings: '12 hrs/week'
    },
    {
      id: 'auto_data',
      title: 'Data Analysis',
      description: 'Automated reporting, trend detection, predictive insights',
      icon: 'ChartBarIcon',
      savings: '6 hrs/week'
    },
  ];

  const examples = [
    {
      id: 'ex_1',
      title: 'Auto-generate social posts from blog articles',
      description: 'Every new blog post triggers AI to create 5 social posts (Twitter, LinkedIn, Instagram) with hashtags and optimal posting times.',
    },
    {
      id: 'ex_2',
      title: 'AI chatbot for customer support',
      description: 'GPT-4 powered chatbot handles 80% of common queries, escalates complex issues to human team with full context.',
    },
  ];

  return (
    <section id="automation" className="py-32 px-6 bg-background reveal will-animate">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-4 text-foreground">
            AI Automation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Automate workflows with custom GPT integrations, save 15 hours/week. Average 40% cost reduction.
          </p>
        </div>

        {/* Automation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {automations.map(automation => (
            <div key={automation.id} className="glass-card p-8 rounded-3xl hover:scale-105 transition-transform duration-500">
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center">
                  <Icon name={automation.icon as any} size={28} className="text-primary" />
                </div>
                <div className="text-right">
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Time Saved</p>
                  <p className="text-lg font-bold text-accent">{automation.savings}</p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{automation.title}</h3>
              <p className="text-sm text-muted-foreground">{automation.description}</p>
            </div>
          ))}
        </div>

        {/* Real Examples */}
        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-8 text-center">
            Real Automation Examples
          </h3>
          <div className="space-y-6">
            {examples.map(example => (
              <div key={example.id} className="glass-card p-8 rounded-3xl">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon name="BoltIcon" size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-2">{example.title}</h4>
                    <p className="text-sm text-muted-foreground">{example.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing */}
        <div className="glass-card p-8 rounded-3xl max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Custom Automation Pricing</h3>
          <p className="text-muted-foreground mb-8">
            Every business is unique. We build custom automations tailored to your workflows.
          </p>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2"></p>
              <p className="text-3xl font-bold text-foreground"></p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2"></p>
              <p className="text-3xl font-bold text-foreground"><span className="text-base text-muted-foreground"></span></p>
            </div>
          </div>
          <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform">
            Schedule Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default AutomationService;