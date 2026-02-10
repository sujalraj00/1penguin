// "use client";

// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import Icon from '@/components/ui/AppIcon';

// const PricingTable = () => {
//   const [hoveredPackage, setHoveredPackage] = useState<string | null>(null);

//   const packages = [
//     {
//       id: 'pkg_starter',
//       name: 'Starter',
//       price: '$3K',
//       period: '/month',
//       description: 'Perfect for startups testing the waters',
//       features: [
//         '1 service of your choice',
//         '10 deliverables per month',
//         'Email support (24hr response)',
//         'Monthly strategy call',
//         'Basic analytics dashboard',
//       ],
//       cta: 'Start Starter',
//       highlighted: false,
//     },
//     {
//       id: 'pkg_growth',
//       name: 'Growth',
//       price: '$7K',
//       period: '/month',
//       description: 'For businesses ready to scale',
//       features: [
//         '2 services of your choice',
//         '25 deliverables per month',
//         'Priority support (4hr response)',
//         'Weekly strategy calls',
//         'Advanced analytics & reporting',
//         'Dedicated account manager',
//         'Custom integrations',
//       ],
//       cta: 'Start Growth',
//       highlighted: true,
//     },
//     {
//       id: 'pkg_enterprise',
//       name: 'Enterprise',
//       price: 'Custom',
//       period: '',
//       description: 'For established brands with complex needs',
//       features: [
//         'All services included',
//         'Unlimited requests',
//         'White-glove support (1hr response)',
//         'Daily check-ins',
//         'Dedicated team of 3+',
//         'Custom workflows & automation',
//         'API access',
//         'SLA guarantee',
//       ],
//       cta: 'Contact Sales',
//       highlighted: false,
//     },
//   ];

//   return (
//     <section className="py-32 px-6 bg-card/30 reveal will-animate overflow-hidden">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//           className="mb-20 text-center"
//         >
//           <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">
//             Pricing
//           </span>
//           <h2 className="font-display text-4xl md:text-6xl tracking-tighter leading-none mb-8 text-foreground">
//             Choose Your Plan
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Transparent pricing, no hidden fees. Scale up or down as your business grows.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {packages?.map((pkg, index) => (
//             <motion.div
//               key={pkg?.id}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6, delay: index * 0.1 }}
//               whileHover={{
//                 y: -10,
//                 transition: { duration: 0.3 }
//               }}
//               onHoverStart={() => setHoveredPackage(pkg?.id)}
//               onHoverEnd={() => setHoveredPackage(null)}
//               className={`relative p-8 rounded-3xl flex flex-col justify-between h-full transition-all duration-500 ${
//                 pkg?.highlighted
//                   ? 'bg-primary text-primary-foreground shadow-2xl shadow-primary/20'
//                   : 'glass-card'
//               }`}
//               style={{
//                 transform: pkg?.highlighted ? 'scale(1.05)' : 'scale(1)',
//               }}
//             >
//               {pkg?.highlighted && (
//                 <motion.div
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ delay: 0.3 }}
//                   className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground rounded-full text-xs font-bold uppercase tracking-widest"
//                 >
//                   Most Popular
//                 </motion.div>
//               )}

//               {/* Animated glow effect on hover */}
//               {hoveredPackage === pkg?.id && !pkg?.highlighted && (
//                 <motion.div
//                   layoutId="pricing-glow"
//                   className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl"
//                   initial={{ opacity: 0 }}
//                   animate={{ opacity: 1 }}
//                   exit={{ opacity: 0 }}
//                 />
//               )}

//               <div className="relative z-10">
//                 <motion.span
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.2 + index * 0.1 }}
//                   className={`text-[10px] uppercase tracking-widest font-bold mb-4 block ${
//                     pkg?.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'
//                   }`}
//                 >
//                   {pkg?.name}
//                 </motion.span>
                
//                 <motion.h3
//                   initial={{ opacity: 0, x: -20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   transition={{ delay: 0.3 + index * 0.1 }}
//                   className={`text-3xl font-bold mb-2 ${
//                     pkg?.highlighted ? 'text-primary-foreground' : 'text-foreground'
//                   }`}
//                 >
//                   {pkg?.name}
//                 </motion.h3>
                
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.8 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ delay: 0.4 + index * 0.1 }}
//                   className={`text-5xl font-bold mb-4 ${
//                     pkg?.highlighted ? 'text-primary-foreground' : 'text-foreground'
//                   }`}
//                 >
//                   {pkg?.price}
//                   <span
//                     className={`text-sm ${
//                       pkg?.highlighted ? 'text-primary-foreground/60' : 'text-muted-foreground'
//                     }`}
//                   >
//                     {pkg?.period}
//                   </span>
//                 </motion.div>
                
//                 <motion.p
//                   initial={{ opacity: 0 }}
//                   whileInView={{ opacity: 1 }}
//                   transition={{ delay: 0.5 + index * 0.1 }}
//                   className={`text-sm mb-8 ${
//                     pkg?.highlighted ? 'text-primary-foreground/80' : 'text-muted-foreground'
//                   }`}
//                 >
//                   {pkg?.description}
//                 </motion.p>

//                 <ul className="space-y-3 mb-8">
//                   {pkg?.features?.map((feature, idx) => (
//                     <motion.li
//                       key={idx}
//                       initial={{ opacity: 0, x: -20 }}
//                       whileInView={{ opacity: 1, x: 0 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: 0.6 + index * 0.1 + idx * 0.05 }}
//                       whileHover={{ x: 5 }}
//                       className={`flex items-start gap-2 text-sm ${
//                         pkg?.highlighted ? 'text-primary-foreground' : 'text-foreground'
//                       }`}
//                     >
//                       <motion.div
//                         whileHover={{ rotate: 360, scale: 1.2 }}
//                         transition={{ duration: 0.3 }}
//                       >
//                         <Icon
//                           name="CheckCircleIcon"
//                           variant="solid"
//                           size={18}
//                           className={`mt-0.5 flex-shrink-0 ${
//                             pkg?.highlighted ? 'text-primary-foreground' : 'text-accent'
//                           }`}
//                         />
//                       </motion.div>
//                       <span>{feature}</span>
//                     </motion.li>
//                   ))}
//                 </ul>
//               </div>

//               <motion.button
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className={`w-full py-4 rounded-full font-semibold transition-all relative z-10 ${
//                   pkg?.highlighted
//                     ? 'bg-primary-foreground text-primary'
//                     : 'border-2 border-border hover:bg-primary hover:text-primary-foreground hover:border-primary'
//                 }`}
//               >
//                 {pkg?.cta}
//               </motion.button>
//             </motion.div>
//           ))}
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ delay: 0.8 }}
//           className="mt-16 text-center"
//         >
//           <p className="text-sm text-muted-foreground mb-4">
//             All plans include 30-day money-back guarantee. No lock-in contracts.
//           </p>
//           <motion.button
//             whileHover={{ x: 5 }}
//             className="text-primary font-semibold hover:underline"
//           >
//             Compare all features →
//           </motion.button>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default PricingTable;



"use client";

import React from "react";
import { motion } from "framer-motion";
import Icon from "@/components/ui/AppIcon";

const PricingTable = () => {
  const packages = [
    {
      id: "pkg_mvp",
      name: "MVP Development",
      badge: "POPULAR",
      price: "$3497",
      description: "Full-stack MVP builds for ambitious startups and founders",
      features: [
        "100 hours of development time per month",
        "Flexible hours allocation",
        "Weekly strategy calls",
        "Priority feature development",
        "Continuous maintenance & optimization",
        "Same-day emergency support",
      ],
      cta: "Book a slot",
    },
  ];

  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-24 text-center"
        >
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">
            Pricing
          </span>

          <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-8 text-foreground">
            MVP Development
          </h2>

          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Too many founders waste months just trying to get an MVP off the
            ground. We move faster, build leaner, and ship a real product in
            under a month—so you can start validating, not waiting.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <div className="grid grid-cols-1 max-w-xl mx-auto">
          {packages.map((pkg) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="
                relative rounded-3xl p-[1px]
                bg-gradient-to-br from-primary/60 via-primary/30 to-secondary/40
              "
            >
              {/* Inner card */}
              <div className="relative rounded-3xl p-10 bg-card/90 backdrop-blur-xl border border-border shadow-2xl">
                {/* Badge */}
                <div className="absolute top-6 right-6 px-3 py-1 rounded-md text-xs font-semibold uppercase tracking-wide bg-[#C47A2C] text-white shadow-md">
                  {pkg.badge}
                </div>

                {/* Title */}
                <h3 className="text-3xl font-bold mb-3 text-foreground">
                  {pkg.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-10 max-w-sm">
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mb-12">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    Starting at
                  </span>
                  <div className="mt-2 flex items-end gap-2">
                    <span className="text-5xl font-bold text-foreground">
                      {pkg.price}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      one-time
                    </span>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  onClick={() => window.open('https://calendly.com/pennnnguin3/30min', '_blank')}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    group w-full mb-12 py-4 rounded-xl font-semibold
                    bg-primary text-primary-foreground
                    flex items-center justify-center gap-3
                    shadow-lg shadow-primary/30
                  "
                >
                  {pkg.cta}
                  <motion.span
                    initial={{ x: 0 }}
                    whileHover={{ x: 4 }}
                    className="text-lg"
                  >
                    →
                  </motion.span>
                </motion.button>

                {/* Features */}
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.05 }}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <Icon
                        name="CheckCircleIcon"
                        variant="solid"
                        size={18}
                        className="text-primary mt-0.5"
                      />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingTable;
