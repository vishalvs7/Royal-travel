'use client';

import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight, MapPin, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const internationalPackages = [
  {
    title: 'Dubai – City + Desert Safari',
    duration: '5 Days / 4 Nights',
    price: '₹24,999',
    location: 'UAE',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070',
  },
  {
    title: 'Thailand – Bangkok & Pattaya',
    duration: '5 Days / 4 Nights',
    price: '₹21,999',
    location: 'Thailand',
    image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=1939',
  },
  {
    title: 'Singapore',
    duration: '5 Days / 4 Nights',
    price: '₹29,999',
    location: 'Singapore',
    image: 'https://images.unsplash.com/photo-1775306963755-8897be3967bb?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHNpbmdhcG9yZXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Malaysia – Kuala Lumpur & Genting',
    duration: '5 Days / 4 Nights',
    price: '₹23,999',
    location: 'Malaysia',
    image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFsYXlzaWF8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Bali – Kuta & Ubud',
    duration: '5 Days / 4 Nights',
    price: '₹25,999',
    location: 'Indonesia',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938',
  },
  {
    title: 'Vietnam – Hanoi & Halong Bay',
    duration: '6 Days / 5 Nights',
    price: '₹27,999',
    location: 'Vietnam',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2071',
  },
  {
    title: 'Sri Lanka – Colombo, Kandy & Bentota',
    duration: '6 Days / 5 Nights',
    price: '₹24,999',
    location: 'Sri Lanka',
    image: 'https://images.unsplash.com/photo-1612862862126-865765df2ded?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3JpbGFua2F8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Maldives – Island Resort',
    duration: '4 Days / 3 Nights',
    price: '₹32,999',
    location: 'Maldives',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1931',
  },
  {
    title: 'Mauritius',
    duration: '6 Days / 5 Nights',
    price: '₹39,999',
    location: 'Mauritius',
    image: 'https://images.unsplash.com/photo-1513415277900-a62401e19be4?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWF1cml0aXVzfGVufDB8fDB8fHww',
  },
  {
    title: 'Azerbaijan – Baku',
    duration: '5 Days / 4 Nights',
    price: '₹26,999',
    location: 'Azerbaijan',
    image: 'https://images.unsplash.com/photo-1689189044045-7cb0767e5cf1?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmFrdXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Georgia – Tbilisi & Gudauri',
    duration: '6 Days / 5 Nights',
    price: '₹31,999',
    location: 'Georgia',
    image: 'https://images.unsplash.com/photo-1563284223-333497472e88?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2VvcmdpYXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Armenia – Yerevan',
    duration: '5 Days / 4 Nights',
    price: '₹29,999',
    location: 'Armenia',
    image: 'https://images.unsplash.com/photo-1600758208050-a22f17dc5bb9?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJtZW5pYXxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Turkey – Istanbul & Cappadocia',
    duration: '7 Days / 6 Nights',
    price: '₹49,999',
    location: 'Turkey',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dHVya2V5fGVufDB8fDB8fHww',
  },
  {
    title: 'Egypt – Cairo & Nile',
    duration: '6 Days / 5 Nights',
    price: '₹42,999',
    location: 'Egypt',
    image: 'https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWd5cHR8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Europe – Paris & Switzerland',
    duration: '8 Days / 7 Nights',
    price: '₹69,999',
    location: 'France & Switzerland',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020',
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
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
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
                className="group rounded-[4px] border border-white/10 bg-card overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${pkg.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {pkg.rating && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 rounded-[4px] bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {pkg.rating}
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs text-white/80 bg-black/40 rounded-[4px] px-3 py-1 backdrop-blur-sm">
                    <MapPin className="h-3 w-3" /> {pkg.location}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white mb-2">{pkg.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {pkg.duration}</span>
                    {pkg.groupSize && (
                      <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {pkg.groupSize}</span>
                    )}
                  </div>
                  {pkg.highlights && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {pkg.highlights.slice(0, 3).map((h) => (
                        <span key={h} className="rounded-[4px] bg-white/10 px-2.5 py-0.5 text-xs text-white/70">{h}</span>
                      ))}
                      {pkg.highlights.length > 3 && (
                        <span className="rounded-[4px] bg-white/10 px-2.5 py-0.5 text-xs text-white/70">+{pkg.highlights.length - 3} more</span>
                      )}
                    </div>
                  )}
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
