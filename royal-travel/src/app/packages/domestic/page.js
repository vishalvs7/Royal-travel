'use client';

import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight, MapPin, Star } from 'lucide-react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const domesticPackages = [
  {
    title: 'Kerala Backwaters Retreat',
    duration: '5 Days / 4 Nights',
    groupSize: 'Up to 8',
    price: '₹35,000',
    location: 'Kerala',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069',
    highlights: ['Houseboat stay', 'Kerala cuisine tour', 'Ayurveda spa', 'Tea plantation visit'],
  },
  {
    title: 'Ladakh Adventure Expedition',
    duration: '8 Days / 7 Nights',
    groupSize: 'Up to 10',
    price: '₹55,000',
    location: 'Ladakh',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1602513792193-1c42f9511bef?q=80&w=2070',
    highlights: ['Khardung La pass', 'Pangong Lake', 'Monastery tours', 'Camping under stars'],
  },
  {
    title: 'Goa Beach Holiday',
    duration: '4 Days / 3 Nights',
    groupSize: 'Up to 6',
    price: '₹22,000',
    location: 'Goa',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074',
    highlights: ['Beach resorts', 'Water sports', 'Sunset cruise', 'Portuguese heritage walk'],
  },
  {
    title: 'Rajasthan Royal Heritage',
    duration: '7 Days / 6 Nights',
    groupSize: 'Up to 12',
    price: '₹48,000',
    location: 'Rajasthan',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070',
    highlights: ['Palace stays', 'Desert safari', 'Folk performances', 'Fort visits'],
  },
  {
    title: 'Himachal Mountain Escape',
    duration: '6 Days / 5 Nights',
    groupSize: 'Up to 8',
    price: '₹32,000',
    location: 'Himachal Pradesh',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070',
    highlights: ['Shimla & Manali', 'River rafting', 'Paragliding', 'Apple orchards'],
  },
  {
    title: 'Andaman Island Getaway',
    duration: '6 Days / 5 Nights',
    groupSize: 'Up to 8',
    price: '₹45,000',
    location: 'Andaman & Nicobar',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f1b2?q=80&w=2070',
    highlights: ['Scuba diving', 'Sea walking', 'Cellular Jail', 'Havelock beach'],
  },
];

export default function DomesticPackages() {
  return (
    <>
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Domestic</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
              Explore{' '}
              <span className="text-gradient">Incredible India</span>
            </h1>
            <p className="text-muted-foreground">
              Discover the diverse landscapes, rich culture, and timeless heritage of India with our curated domestic packages.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domesticPackages.map((pkg, i) => (
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
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-[4px] bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {pkg.rating}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs text-white/80 bg-black/40 rounded-[4px] px-3 py-1 backdrop-blur-sm">
                    <MapPin className="h-3 w-3" /> {pkg.location}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white mb-2">{pkg.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {pkg.duration}</span>
                    <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {pkg.groupSize}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {pkg.highlights.slice(0, 3).map((h) => (
                      <span key={h} className="rounded-[4px] bg-white/10 px-2.5 py-0.5 text-xs text-white/70">{h}</span>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <span className="rounded-[4px] bg-white/10 px-2.5 py-0.5 text-xs text-white/70">+{pkg.highlights.length - 3} more</span>
                    )}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <span className="text-lg font-bold text-white">{pkg.price}<span className="text-xs text-muted-foreground font-normal">/person</span></span>
                    <button className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors">
                      Enquire Now <ArrowRight className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
