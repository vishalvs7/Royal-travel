'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/70 z-10" />
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-hero z-10" />
      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm text-white/80 backdrop-blur-sm mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Premium Travel Experiences
          </div>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-white mb-6">
            Discover the World's{' '}
            <span className="text-gradient">Most Extraordinary</span> Destinations
          </h1>
          <p className="text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
            From the tranquil backwaters of Kerala to the vibrant streets of Tokyo,
            we craft bespoke travel experiences that transcend the ordinary.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/packages/international"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-base font-semibold text-primary-foreground transition-all hover:bg-primary/90 shadow-lg shadow-primary/30"
            >
              Explore International <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/packages/domestic"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 px-8 py-3.5 text-base font-semibold text-white transition-all hover:bg-white/10"
            >
              Discover India <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hidden sm:block animate-bounce">
        <ChevronDown className="h-6 w-6" />
      </div>
    </section>
  );
}
