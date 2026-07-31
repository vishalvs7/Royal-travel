'use client';

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const steps = [
  {
    step: '01',
    title: 'Tell Us Your Dream',
    desc: 'Share your preferences, budget, and travel style with our experts.',
  },
  {
    step: '02',
    title: 'We Design the Perfect Itinerary',
    desc: 'Our team crafts a personalized plan with handpicked stays, routes, and experiences.',
  },
  {
    step: '03',
    title: 'Book with Confidence',
    desc: 'We handle flights, hotels, transport, and all logistics seamlessly.',
  },
  {
    step: '04',
    title: 'Travel & Explore',
    desc: 'Enjoy a hassle-free journey with 24/7 on-ground support.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">How It Works</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Your Journey,{' '}
            <span className="text-gradient">Simplified</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8 relative">
          <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary via-secondary to-accent" />
          {steps.map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center"
            >
              <div className="relative z-10 mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-card border border-white/10 shadow-xl">
                <span className="font-display text-2xl font-bold text-gradient">{item.step}</span>
              </div>
              <CheckCircle2 className="h-5 w-5 mx-auto text-secondary mb-3" />
              <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
