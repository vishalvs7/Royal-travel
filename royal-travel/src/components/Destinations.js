'use client';

import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import Link from 'next/link';

const destinations = [
  {
    name: 'Switzerland',
    tag: 'Europe',
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070',
    rating: 4.9,
  },
  {
    name: 'Maldives',
    tag: 'Asia',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1931',
    rating: 4.8,
  },
  {
    name: 'Kerala',
    tag: 'India',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069',
    rating: 4.9,
  },
  {
    name: 'Dubai',
    tag: 'UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070',
    rating: 4.7,
  },
  {
    name: 'Bali',
    tag: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938',
    rating: 4.8,
  },
  {
    name: 'Ladakh',
    tag: 'India',
    image: 'https://images.unsplash.com/photo-1602513792193-1c42f9511bef?q=80&w=2070',
    rating: 4.9,
  },
];

export default function Destinations() {
  return (
    <section id="destinations" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Destinations</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Explore{' '}
            <span className="text-gradient">Iconic Destinations</span>
          </h2>
          <p className="text-muted-foreground">
            Handpicked destinations across the globe and across India.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${dest.image}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute top-4 left-4 flex items-center gap-2">
                <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
                  {dest.tag}
                </span>
                <span className="flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {dest.rating}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h3 className="font-display text-xl font-bold text-white">{dest.name}</h3>
                <p className="text-sm text-white/70 flex items-center gap-1 mt-1">
                  <MapPin className="h-3 w-3" /> Explore Packages
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
