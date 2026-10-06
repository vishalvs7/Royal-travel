'use client';

import { motion } from 'framer-motion';
import { Globe, Users, Award, HeadphonesIcon } from 'lucide-react';

const stats = [
  { icon: Globe, value: '50+', label: 'Countries' },
  { icon: Users, value: '10K+', label: 'Happy Travelers' },
  { icon: Award, value: '12+', label: 'Years Experience' },
  { icon: HeadphonesIcon, value: '24/7', label: 'Support' },
];

export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">About Us</span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6 leading-tight">
              Crafting Unforgettable Journeys Since{' '}
              <span className="text-gradient">2012</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Royal Travel DMC is a premier destination management company dedicated to
              curating exceptional travel experiences. From handling complex logistics to
              designing bespoke itineraries, we ensure every journey is seamless and memorable.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With our office in New Delhi, our team of 100+ travel professionals
              brings local expertise and global standards to every trip we design.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-[4px] overflow-hidden">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070')` }}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-center rounded-[4px] border border-white/10 bg-card/50 p-6"
            >
              <stat.icon className="h-8 w-8 mx-auto text-secondary mb-3" />
              <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
