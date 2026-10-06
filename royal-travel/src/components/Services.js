'use client';

import { motion } from 'framer-motion';
import { Plane, Building2, Ship, Car, Map, Shield, BookUser, Stamp, Banknote } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Flight Bookings',
    desc: 'Best rates on domestic & international airlines with 24/7 support.',
    gradient: 'from-blue-400 to-blue-500',
  },
  {
    icon: Building2,
    title: 'Hotel Reservations',
    desc: 'Curated stays from luxury resorts to boutique hotels worldwide.',
    gradient: 'from-emerald-400 to-emerald-500',
  },
  {
    icon: Ship,
    title: 'Cruise Packages',
    desc: 'All-inclusive cruise experiences across the Mediterranean, Caribbean & more.',
    gradient: 'from-cyan-400 to-cyan-500',
  },
  {
    icon: Car,
    title: 'Ground Transport',
    desc: 'Luxury transfers, private chauffeurs, and fleet rentals.',
    gradient: 'from-amber-400 to-amber-500',
  },
  {
    icon: Map,
    title: 'Custom Itineraries',
    desc: 'Bespoke travel plans tailored to your preferences and budget.',
    gradient: 'from-violet-400 to-violet-500',
  },
  {
    icon: Shield,
    title: 'Travel Insurance',
    desc: 'Comprehensive coverage for worry-free travel.',
    gradient: 'from-rose-400 to-rose-500',
  },
  {
    icon: BookUser,
    title: 'Passport Assistance',
    desc: 'Support for new applications, renewals and document verification.',
    gradient: 'from-indigo-400 to-indigo-500',
  },
  {
    icon: Stamp,
    title: 'Visa Service',
    desc: 'Tourist and business visa processing for destinations worldwide.',
    gradient: 'from-teal-400 to-teal-500',
  },
  {
    icon: Banknote,
    title: 'Forex Assistance',
    desc: 'Foreign currency, travel cards and hassle-free forex exchange.',
    gradient: 'from-orange-400 to-orange-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Our Services</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
            End-to-End{' '}
            <span className="text-gradient">Travel Solutions</span>
          </h2>
          <p className="text-muted-foreground">
            From flight bookings to ground handling, we manage every detail of your journey.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative rounded-[16px] border border-white/10 glass p-8 hover:border-white/20 shadow-lg shadow-black/20 transition-all duration-300"
            >
              <div className={`h-14 w-14 rounded-[16px] bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6`}>
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
