'use client';

import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const packages = [
  {
    title: 'Swiss Alpine Dream',
    type: 'International',
    duration: '7 Days / 6 Nights',
    groupSize: 'Up to 12',
    price: '₹1,85,000',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070',
    href: '/packages/international',
  },
  {
    title: 'Kerala Backwaters Retreat',
    type: 'Domestic',
    duration: '5 Days / 4 Nights',
    groupSize: 'Up to 8',
    price: '₹35,000',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069',
    href: '/packages/domestic',
  },
  {
    title: 'Dubai Luxury Escape',
    type: 'International',
    duration: '6 Days / 5 Nights',
    groupSize: 'Up to 10',
    price: '₹1,25,000',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070',
    href: '/packages/international',
  },
  {
    title: 'Ladakh Adventure',
    type: 'Domestic',
    duration: '8 Days / 7 Nights',
    groupSize: 'Up to 10',
    price: '₹55,000',
    image: 'https://images.unsplash.com/photo-1602513792193-1c42f9511bef?q=80&w=2070',
    href: '/packages/domestic',
  },
];

export default function Packages() {
  return (
    <section id="packages" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Packages</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
            Featured{' '}
            <span className="text-gradient">Travel Packages</span>
          </h2>
          <p className="text-muted-foreground">
            Curated experiences for every kind of traveler — both domestic and international.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-[4px] border border-white/10 bg-card overflow-hidden hover:border-white/20 transition-all duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${pkg.image}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className={`absolute top-3 right-3 rounded-[4px] px-3 py-1 text-xs font-semibold backdrop-blur-sm ${pkg.type === 'International' ? 'bg-secondary text-white' : 'bg-primary text-primary-foreground'}`}>
                  {pkg.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-white mb-3">{pkg.title}</h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {pkg.duration}</span>
                  <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {pkg.groupSize}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">{pkg.price}<span className="text-xs text-muted-foreground font-normal">/person</span></span>
                  <Link href={pkg.href} className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                    Details <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/packages/international" className="inline-flex items-center gap-2 rounded-[4px] border border-white/20 px-8 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-all">
            View All Packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
