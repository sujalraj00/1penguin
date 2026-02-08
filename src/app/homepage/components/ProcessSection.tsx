import React from 'react';
import { RadialOrbitalTimelineDemo } from '@/components/ui/radial-orbital-timeline-demo';

const ProcessSection = () => {
  return (
    <section className="py-32 px-6 bg-background reveal will-animate">
      
      <RadialOrbitalTimelineDemo />
    </section>
  );
};

export default ProcessSection;


// import React from 'react';
// import Icon from '@/components/ui/AppIcon';
//  import { RadialOrbitalTimelineDemo } from '@/components/ui/radial-orbital-timeline-demo';
// interface ProcessStep {
//   id: string;
//   number: string;
//   title: string;
//   description: string;
//   icon: string;
//   details: string[];
// }

// const ProcessSection = () => {
//   const steps: ProcessStep[] = [
//     {
//       id: 'step_discover',
//       number: '01',
//       title: 'Discover',
//       description: 'Understanding your vision and goals',
//       icon: 'MagnifyingGlassIcon',
//       details: [
//         '60-min strategy call',
//         'Detailed project brief',
//         'Timeline & pricing within 24 hours'
//       ]
//     },
//     {
//       id: 'step_create',
//       number: '02',
//       title: 'Create',
//       description: 'Bringing your vision to life',
//       icon: 'SparklesIcon',
//       details: [
//         'Weekly progress updates',
//         'Collaborative Figma/GitHub',
//         'Unlimited revisions in scope'
//       ]
//     },
//     {
//       id: 'step_launch',
//       number: '03',
//       title: 'Launch',
//       description: 'Delivering excellence, ensuring success',
//       icon: 'RocketLaunchIcon',
//       details: [
//         'Comprehensive testing & QA',
//         'Deployment support',
//         '30-day post-launch monitoring'
//       ]
//     }
//   ];

//   return (
//     <section className="py-32 px-6 bg-card/30 reveal will-animate">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-20 text-center">
//           <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">
//             Our Process
//           </span>
//           <h2 className="font-display text-4xl md:text-7xl tracking-tighter leading-none mb-8 text-foreground">
//             How We Work
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             A transparent, collaborative approach that ensures your project succeeds from day one.
//           </p>
//         </div>


//       <RadialOrbitalTimelineDemo />

        
//       </div>
//     </section>
//   );
// };

// export default ProcessSection;