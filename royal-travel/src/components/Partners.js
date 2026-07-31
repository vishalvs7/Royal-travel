'use client';

import { motion } from 'framer-motion';

const partners = [
  'Marriott', 'Hilton', 'Emirates', 'Qatar Airways', 'MakeMyTrip', 'Booking.com'
];

export default function Partners() {
  return (
    <section className="py-16 border-y border-white/10">
      <div className="container mx-auto px-6">
        <p className="text-center text-sm uppercase tracking-widest text-muted-foreground mb-8">
          Trusted by Leading Travel Brands
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {partners.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-xl sm:text-2xl font-bold text-white/20 hover:text-white/40 transition-colors tracking-tight"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
