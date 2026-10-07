'use client';

import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const packages = [
  {
    title: 'Mauritius',
    type: 'International',
    duration: '6 Days / 5 Nights',
    price: '₹39,999',
    image: 'https://images.unsplash.com/photo-1513415277900-a62401e19be4?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF1cml0aXVzfGVufDB8fDB8fHww',
  },
  {
    title: 'Europe – Paris & Switzerland',
    type: 'International',
    duration: '8 Days / 7 Nights',
    price: '₹69,999',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020',
  },
  {
    title: 'Uttarakhand – Mussoorie, Rishikesh & Nainital',
    type: 'Domestic',
    duration: '6 Days / 5 Nights',
    price: '₹15,999',
    image: 'https://images.unsplash.com/photo-1601821139990-9fc929db79ce?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Char Dham Yatra',
    type: 'Pilgrimage',
    duration: '11 Days / 10 Nights',
    price: '₹39,999',
    image: 'https://images.unsplash.com/photo-1634109282980-8d866598bc8a?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcmRoYW18ZW58MHx8MHx8fDA%3D',
  },
];

const badgeStyles = {
  International: 'bg-secondary text-white',
  Domestic: 'bg-primary text-primary-foreground',
  Pilgrimage: 'bg-accent text-accent-foreground',
};

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
                <span className={`absolute top-3 right-3 rounded-[4px] px-3 py-1 text-xs font-semibold backdrop-blur-sm ${badgeStyles[pkg.type]}`}>
                  {pkg.type}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-white mb-3">{pkg.title}</h3>
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {pkg.duration}</span>
                  {pkg.groupSize && (
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {pkg.groupSize}</span>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-white">{pkg.price}<span className="text-xs text-muted-foreground font-normal">/person</span></span>
                  <a
                    href={`https://api.whatsapp.com/send/?phone=919899010227&text=${encodeURIComponent(`Hi! I want to enquire about the ${pkg.title} package (${pkg.duration} at ${pkg.price}/person). Please share the details.`)}&type=phone_number&app_absent=0`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  >
                    Details <ArrowRight className="h-3 w-3" />
                  </a>
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
