'use client';

import { useState, useEffect, useRef } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938',
    country: 'Indonesia',
    tagline: 'Indonesia is famous for its stunning beaches, ancient temples, vibrant nightlife, and lush emerald rice terraces that captivate every traveler.',
  },
  {
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073',
    country: 'Azerbaijan',
    tagline: 'Azerbaijan blends ancient Silk Road heritage with modern architecture, towering flame towers, and rich cultural treasures waiting to be explored.',
  },
  {
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2072',
    country: 'France',
    tagline: 'France offers romance, world-renowned cuisine, timeless fashion, iconic landmarks, and the enchanting charm that makes Paris a dream destination.',
  },
  {
    image: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=1933',
    country: 'Greece',
    tagline: 'Greece features whitewashed villages clinging to dramatic cliffs, crystal-clear azure waters, and the timeless allure of the Mediterranean coast.',
  },
  {
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2071',
    country: 'Italy',
    tagline: 'Italy delights with romantic gondola rides through Venice canals, rolling Tuscan vineyards, timeless art, and unforgettable culinary experiences.',
  },
  {
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1931',
    country: 'Maldives',
    tagline: 'The Maldives boasts pristine turquoise lagoons, luxury overwater villas, breathtaking sunsets, and some of the most beautiful beaches on Earth.',
  },
];

const slideVariants = {
  enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (direction) => ({ x: direction > 0 ? -100 : 100, opacity: 0 }),
};

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const direction = useRef(1);

  useEffect(() => {
    const timer = setInterval(() => {
      direction.current = 1;
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => {
    direction.current = -1;
    setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  };
  const next = () => {
    direction.current = 1;
    setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));
  };

  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      <AnimatePresence mode="wait" custom={direction.current}>
        <motion.div
          key={current}
          custom={direction.current}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${slides[current].image}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </motion.div>
      </AnimatePresence>
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/20 via-transparent to-black/70" />
      <div className="container relative z-20 mx-auto px-6 pt-32 pb-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -80, opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-[4px] border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm mb-6">
              <span className="h-2 w-2 rounded-[4px] bg-emerald-400 animate-pulse" />
              Trending Destinations
            </div>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6">
              {slides[current].country}
            </h1>
            <p className="text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
              {slides[current].tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/packages/international"
                className="inline-flex items-center gap-2 rounded-[4px] bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 shadow-lg shadow-primary/30"
              >
                Explore International <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/packages/domestic"
                className="inline-flex items-center gap-2 rounded-[4px] border-2 border-white/40 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
              >
                Discover India <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-[4px] border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 h-10 w-10 rounded-[4px] border border-white/20 bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 transition-all"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={`dot-${i}`}
            onClick={() => setCurrent(i)}
            className={`h-2 rounded-[4px] transition-all ${i === current ? 'w-8 bg-white' : 'w-2 bg-white/30'}`}
          />
        ))}
      </div>

      <div className="absolute bottom-4 right-4 sm:right-8 z-30 text-white/40 text-xs">
        {current + 1} / {slides.length}
      </div>
    </section>
  );
}
