import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const WebAppDevService = () => {
  const techStack = [
  { id: 'tech_nextjs', label: 'Next.js 15', icon: 'CodeBracketIcon' },
  { id: 'tech_react', label: 'React Native', icon: 'DevicePhoneMobileIcon' },
  { id: 'tech_typescript', label: 'TypeScript', icon: 'CommandLineIcon' },
  { id: 'tech_tailwind', label: 'Tailwind CSS', icon: 'PaintBrushIcon' },
  { id: 'tech_supabase', label: 'Supabase', icon: 'CircleStackIcon' }];


  const caseStudies = [
  {
    id: 'case_saas',
    title: 'DataViz SaaS Platform',
    metric: '',
    description: 'Built with Next.js 15, AI-powered data visualization',
    imgSrc: "/assets/images/uiux.jpeg",
    alt: 'DataViz dashboard showing analytics graphs and charts'
  },
  {
    id: 'case_ecommerce',
    title: 'GreenLeaf E-commerce',
    metric: '',
    description: 'Mobile-first e-commerce experience with product browsing, cart flow, and conversion-optimized UI.',
        imgSrc: "/assets/images/ecom_app_.png",

    alt: 'GreenLeaf e-commerce product page with modern design'
  },
  {
    id: 'case_app',
    title: 'TechFlow Marketing Website',
    metric: '',
    description: 'High-conversion marketing website designed for product launches and brand positioning.',
         imgSrc: '/assets/portfolioimg/home.webp',
    alt: 'TechFlow mobile app interface on smartphone screen'
  }];


  return (
    <section id="web-dev" className="py-32 px-6 bg-background reveal will-animate">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-4 text-foreground">
            Web & App Development
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Launch scalable web apps with Next.js 15, TypeScript, and AI-powered UX optimization. Native iOS/Android apps with React Native.
          </p>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6 text-center">
            Tech Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech) =>
            <div key={tech.id} className="flex items-center gap-2 px-6 py-3 rounded-full glass-card">
                <Icon name={tech.icon as any} size={20} className="text-primary" />
                <span className="text-sm font-medium text-foreground">{tech.label}</span>
              </div>
            )}
          </div>
        </div>

        {/* Case Studies Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {caseStudies.map((study) =>
          <div key={study.id} className="group glass-card rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-500">
              <div className="aspect-video overflow-hidden">
                <AppImage
                src={study.imgSrc}
                alt={study.alt}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-bold text-lg text-foreground">{study.title}</h4>
                  <span className="text-accent font-bold text-sm">{study.metric}</span>
                </div>
                <p className="text-sm text-muted-foreground">{study.description}</p>
              </div>
            </div>
          )}
        </div>

        {/* Pricing & Process */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 glass-card p-8 rounded-3xl">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Process
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-foreground">
                <Icon name="CheckCircleIcon" variant="solid" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Design → Development → Testing → Launch (8-12 weeks)</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <Icon name="CheckCircleIcon" variant="solid" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <span>Source code, hosting setup, documentation included</span>
              </li>
              <li className="flex items-start gap-2 text-foreground">
                <Icon name="CheckCircleIcon" variant="solid" size={20} className="text-accent mt-0.5 flex-shrink-0" />
                <span>30-day post-launch support & monitoring</span>
              </li>
            </ul>
          </div>
          <div>
            {/* <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-4">
              Pricing
            </h3> */}
            <div className="space-y-4">
              {/* <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">Web Development</span>
                <span className="font-bold text-foreground">From $500</span>
              </div> */}
              {/* <div className="flex justify-between items-center py-3 border-b border-border">
                <span className="text-foreground">App Development</span>
                <span className="font-bold text-foreground">From $1K</span>
              </div> */}
              <button className="w-full mt-6 px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform">
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default WebAppDevService;