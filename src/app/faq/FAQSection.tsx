// "use client";

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Icon from "@/components/ui/AppIcon";

// const faqs = [
//   {
//     category: "MVP Development",
//     items: [
//       {
//         q: "What is included in MVP development?",
//         a: "Our MVP development covers product strategy, UI/UX design, full-stack development, testing, deployment, and post-launch support. The goal is to launch a scalable, production-ready product quickly.",
//       },
//       {
//         q: "How long does it take to build an MVP?",
//         a: "Most MVPs are completed within 6–10 weeks, depending on feature scope, integrations, and feedback cycles.",
//       },
//       {
//         q: "Can I scale the MVP after launch?",
//         a: "Yes. We build MVPs with scalability in mind, making it easy to add features, handle more users, and evolve into a full product.",
//       },
//     ],
//   },
//   {
//     category: "Development Projects",
//     items: [
//       {
//         q: "Do you work with existing codebases?",
//         a: "Absolutely. We can audit, refactor, optimize, and extend existing applications while maintaining code quality and performance.",
//       },
//       {
//         q: "What tech stack do you use?",
//         a: "We primarily use Next.js, React, TypeScript, Tailwind CSS, Node.js, and modern cloud infrastructure. The stack is always chosen based on project needs.",
//       },
//       {
//         q: "Is ongoing maintenance included?",
//         a: "Yes. We offer continuous maintenance, performance optimization, and feature updates as part of our development plans.",
//       },
//     ],
//   },
//   {
//     category: "AI Video Generation",
//     items: [
//       {
//         q: "What is AI video generation?",
//         a: "AI video generation uses machine learning models to create videos from text, images, or prompts. This includes explainer videos, marketing content, and social media assets.",
//       },
//       {
//         q: "Can I customize the AI-generated videos?",
//         a: "Yes. You can control style, pacing, voice, visuals, branding, and output formats to match your product or campaign.",
//       },
//       {
//         q: "Are AI videos suitable for commercial use?",
//         a: "Yes. We ensure outputs are suitable for commercial usage, depending on the selected model and licensing requirements.",
//       },
//     ],
//   },
// ];

// const FAQSection = () => {
//   const [openItem, setOpenItem] = useState<string | null>(null);

//   return (
//     <section
//       id="faq"
//       className="py-32 px-6 bg-card/30 reveal will-animate"
//     >
//       <div className="max-w-5xl mx-auto">
//         {/* Header */}
//         <div className="mb-20 text-center">
//           <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">
//             FAQ
//           </span>
//           <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-6 text-foreground">
//             Frequently Asked Questions
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Everything you need to know about MVPs, development projects, and AI-powered solutions.
//           </p>
//         </div>

//         {/* FAQ Content */}
//         <div className="space-y-16">
//           {faqs.map((group, groupIndex) => (
//             <div key={group.category}>
//               <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
//                 {group.category}
//               </h3>

//               <div className="space-y-4">
//                 {group.items.map((item, index) => {
//                   const id = `${groupIndex}-${index}`;
//                   const isOpen = openItem === id;

//                   return (
//                     <div
//                       key={id}
//                       className="glass-card rounded-2xl overflow-hidden"
//                     >
//                       <button
//                         onClick={() =>
//                           setOpenItem(isOpen ? null : id)
//                         }
//                         className="w-full flex items-center justify-between px-6 py-5 text-left"
//                       >
//                         <span className="font-medium text-foreground">
//                           {item.q}
//                         </span>
//                         <motion.div
//                           animate={{ rotate: isOpen ? 45 : 0 }}
//                           transition={{ duration: 0.2 }}
//                         >
//                           <Icon
//                             name="PlusIcon"
//                             size={20}
//                             className="text-primary"
//                           />
//                         </motion.div>
//                       </button>

//                       <AnimatePresence initial={false}>
//                         {isOpen && (
//                           <motion.div
//                             initial={{ height: 0, opacity: 0 }}
//                             animate={{ height: "auto", opacity: 1 }}
//                             exit={{ height: 0, opacity: 0 }}
//                             transition={{ duration: 0.3, ease: "easeInOut" }}
//                             className="px-6 pb-5"
//                           >
//                             <p className="text-sm text-muted-foreground leading-relaxed">
//                               {item.a}
//                             </p>
//                           </motion.div>
//                         )}
//                       </AnimatePresence>
//                     </div>
//                   );
//                 })}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FAQSection;


"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Icon from "@/components/ui/AppIcon";

const faqs = [
  {
    category: "MVP Development",
    items: [
      {
        q: "Do you code everything or use no-code / low-code tools?",
        a: "Yes, we code everything from scratch using a modern AI-first tech stack: Next.js, Supabase, TailwindCSS, powered by tools like Cursor and Claude Code. We’ve experimented with low-code platforms before, but they’re rarely scalable for real-world products. They also become slower to customize as features grow. Thanks to AI, writing code is now faster than ever—and gives you clean, scalable, production-grade results.",
      },
      {
        q: "How long does MVP development take?",
        a: "Most MVPs are delivered in 21 days. That includes planning your core features, building the full frontend and backend, and launching a live, testable product. If your project has more complexity or additional features, it may take 4–5 weeks. We’re always transparent about timelines from day one—the speed comes from our structured AI-assisted workflow, not cutting corners.",
      },
      {
        q: "What’s included in the MVP package?",
        a: "Everything you need to launch fast: 3–4 core product features (authentication, payments, dashboards, etc.), a working web app that’s hosted and live, a clean and responsive landing page, and minimal UI design. We skip traditional design tools like Figma to move faster, but your product still looks sharp. Custom UI/UX design can be added if needed.",
      },
      {
        q: "My product has 10–15 core features. Can we build all of them?",
        a: "That’s not an MVP—and that’s okay. Our job is to help you focus. We guide you in defining the leanest version of your product that can still validate the idea. Usually that means building 3–4 essential features and launching fast. We then help you plan future phases so you scale based on real user feedback, not assumptions.",
      },
      {
        q: "What happens after the MVP is done?",
        a: "Once your MVP is shipped, you have two clear options. You can move to a monthly retainer where we act as your dev team and continue building based on user feedback. Or we can hand over the entire codebase—written in industry-standard tools—so any developer can take it forward easily. We also help ensure a smooth handoff with clean, documented code.",
      },
    ],
  },
  {
    category: "Development Projects",
    items: [
      {
        q: "Do you work with existing products or codebases?",
        a: "Yes. We frequently work with existing applications—auditing code, improving performance, refactoring architecture, and shipping new features without disrupting your users.",
      },
      {
        q: "Can you handle long-term development and maintenance?",
        a: "Absolutely. Many clients work with us on an ongoing basis for feature development, infrastructure improvements, and continuous optimization.",
      },
    ],
  },
  {
    category: "AI Video Generation",
    items: [
      {
        q: "What is AI video generation?",
        a: "AI video generation uses machine learning models to create videos from text, images, or structured prompts. It’s commonly used for marketing videos, explainers, social media content, and product demos.",
      },
      {
        q: "Can AI-generated videos be customized?",
        a: "Yes. You can customize the style, pacing, visuals, voiceovers, branding, and formats to match your product or campaign needs.",
      },
      {
        q: "Are AI-generated videos suitable for commercial use?",
        a: "Yes. We ensure the tools and outputs we use are suitable for commercial usage, depending on licensing and model constraints.",
      },
    ],
  },
];

const FAQSection = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <section
      id="faq"
      className="py-32 px-6 bg-card/30 reveal will-animate"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-20 text-center">
          <span className="text-primary font-bold tracking-[0.4em] uppercase text-[10px] block mb-6">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-6xl tracking-tight mb-6 text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Clear answers about MVPs, development projects, and AI-powered solutions.
          </p>
        </div>

        {/* FAQ Groups */}
        <div className="space-y-16">
          {faqs.map((group, groupIndex) => (
            <div key={group.category}>
              <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-6">
                {group.category}
              </h3>

              <div className="space-y-4">
                {group.items.map((item, index) => {
                  const id = `${groupIndex}-${index}`;
                  const isOpen = openId === id;

                  return (
                    <div
                      key={id}
                      className="glass-card rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenId(isOpen ? null : id)}
                        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:opacity-80 transition-opacity"
                      >
                        <span className="font-medium text-foreground">
                          {item.q}
                        </span>
                        <motion.div
                          animate={{ rotate: isOpen ? 45 : 0 }}
                          transition={{ duration: 0.15, ease: "easeOut" }}
                        >
                          <Icon
                            name="PlusIcon"
                            size={20}
                            className="text-primary flex-shrink-0"
                          />
                        </motion.div>
                      </button>

                      {/* OPTIMIZED SMOOTH EXPAND */}
                      <AnimatePresence initial={false} mode="wait">
                        {isOpen && (
                          <motion.div
                            key="content"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{
                              duration: 0.2,
                              ease: "easeInOut",
                            }}
                            className="px-6 pb-6"
                          >
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {item.a}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
