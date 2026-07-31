'use client';

import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight, MapPin, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const internationalPackages = [
  {
    title: 'Swiss Alpine Dream',
    duration: '7 Days / 6 Nights',
    groupSize: 'Up to 12',
    price: '₹1,85,000',
    location: 'Switzerland',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070',
    highlights: ['Matterhorn views', 'Lucerne lake cruise', 'Jungfraujoch', 'Swiss chocolate tour'],
  },
  {
    title: 'Maldives Paradise Escape',
    duration: '5 Days / 4 Nights',
    groupSize: 'Up to 6',
    price: '₹1,50,000',
    location: 'Maldives',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1931',
    highlights: ['Overwater villa', 'Snorkeling', 'Sunset dolphin cruise', 'Private dining'],
  },
  {
    title: 'Dubai Luxury Experience',
    duration: '6 Days / 5 Nights',
    groupSize: 'Up to 10',
    price: '₹1,25,000',
    location: 'UAE',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070',
    highlights: ['Burj Khalifa', 'Desert safari', 'Dubai Mall', 'Abra ride'],
  },
  {
    title: 'Bali Spiritual Retreat',
    duration: '6 Days / 5 Nights',
    groupSize: 'Up to 8',
    price: '₹85,000',
    location: 'Indonesia',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938',
    highlights: ['Ubud temples', 'Rice terraces', 'Surf lessons', 'Sunset at Uluwatu'],
  },
  {
    title: 'European Grand Tour',
    duration: '12 Days / 11 Nights',
    groupSize: 'Up to 15',
    price: '₹3,50,000',
    location: 'Italy, France, Spain',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020',
    highlights: ['Colosseum', 'Eiffel Tower', 'Sagrada Familia', 'Venice gondola'],
  },
  {
    title: 'Thailand Beach & Culture',
    duration: '7 Days / 6 Nights',
    groupSize: 'Up to 10',
    price: '₹65,000',
    location: 'Thailand',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1939',
    highlights: ['Phi Phi Islands', 'Grand Palace', 'Night markets', 'Thai massage'],
  },
];

export default function InternationalPackages() {
  return (
    <>
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">International</span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
              Explore the{' '}
              <span className="text-gradient">World</span>
            </h1>
            <p className="text-muted-foreground">
              From the Alps to the tropics — explore our handpicked international travel packages.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internationalPackages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-2xl border border-white/10 bg-card overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${pkg.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-3 right-3 flex items-center gap-1 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {pkg.rating}
                  </div>
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs text-white/80 bg-black/40 rounded-full px-3 py-1 backdrop-blur-sm">
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
                      <span key={h} className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/70">{h}</span>
                    ))}
                    {pkg.highlights.length > 3 && (
                      <span className="rounded-full bg-white/10 px-2.5 py-0.5 text-xs text-white/70">+{pkg.highlights.length - 3} more</span>
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
