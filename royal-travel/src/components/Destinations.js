'use client';

import { motion } from 'framer-motion';

const destinations = [
  { name: 'Dubai', country: 'UAE', img: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070', color: 'from-amber-400 to-orange-500' },
  { name: 'Singapore', country: 'Asia', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938', color: 'from-emerald-400 to-teal-500' },
  { name: 'Malaysia', country: 'KL', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070', color: 'from-green-400 to-emerald-500' },
  { name: 'Maldives', country: 'Ocean', img: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=1931', color: 'from-cyan-400 to-blue-500' },
  { name: 'Bali', country: 'Indonesia', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=1938', color: 'from-lime-400 to-green-500' },
  { name: 'Vietnam', country: 'Ha Long', img: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2071', color: 'from-yellow-400 to-amber-500' },
  { name: 'Baku', country: 'Azerbaijan', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073', color: 'from-violet-400 to-purple-500' },
  { name: 'Georgia', country: 'Tbilisi', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070', color: 'from-rose-400 to-pink-500' },
  { name: 'Thailand', country: 'Phuket', img: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=1933', color: 'from-sky-400 to-blue-500' },
  { name: 'Hong Kong', country: 'China', img: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070', color: 'from-red-400 to-rose-500' },
  { name: 'Egypt', country: 'Cairo', img: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=2070', color: 'from-amber-500 to-yellow-600' },
  { name: 'India', country: 'Golden', img: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021', color: 'from-orange-400 to-red-500' },
  { name: 'Switzerland', country: 'Alps', img: 'https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2070', color: 'from-blue-400 to-indigo-500' },
  { name: 'Santorini', country: 'Greece', img: 'https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=1933', color: 'from-blue-300 to-cyan-500' },
];

export default function Destinations() {
  return (
    <section id="destinations" className="relative py-24 md:py-32 overflow-hidden">
      <div className="pointer-events-none absolute -left-32 top-20 h-[500px] w-[500px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-20 h-[500px] w-[500px] rounded-full bg-secondary/5 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] rounded-full bg-accent/3 blur-3xl" />
      <div className="container relative mx-auto px-6">
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-secondary">
            <span className="h-2 w-2 rounded-full bg-secondary animate-pulse" />
            Trending Destinations
          </span>
            <h2 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              What Awaits{' '}
              <span className="text-gradient">Beyond Your Borders?</span>
            </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground md:text-lg">
            From sun-soaked islands to alpine peaks — handpicked destinations, curated by our local experts.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7">
          {destinations.map((t, i) => (
            <motion.a
              key={t.name}
              href={`https://api.whatsapp.com/send/?phone=919899010227&text=${encodeURIComponent(`Hi! I want to enquire about ${t.name} tour package`)}&type=phone_number&app_absent=0`}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40, scale: 0.8 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: (i % 7) * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -12, scale: 1.05 }}
              className="group flex flex-col items-center gap-2 text-center"
            >
              <div className="relative">
                <div className={`absolute -inset-1.5 rounded-full bg-gradient-to-br ${t.color} opacity-0 blur-sm transition-all duration-500 group-hover:opacity-80 group-hover:blur-md`} />
                <div className={`absolute -inset-1 rounded-full bg-gradient-to-br ${t.color} opacity-0 transition-all duration-500 group-hover:opacity-100`} />
                <div className="relative h-20 w-20 overflow-hidden rounded-full border-[3px] border-white shadow-lg transition-all duration-500 group-hover:shadow-xl sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32">
                  <img
                    src={t.img}
                    alt={`${t.name}, ${t.country}`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />

                </div>

              </div>
              <div>
                <h3 className="font-display text-sm font-bold leading-tight md:text-base transition-colors group-hover:text-secondary">{t.name}</h3>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground md:text-[11px]">{t.country}</p>
              </div>
            </motion.a>
          ))}
        </div>
        <div className="mt-14 text-center">
          <p className="mb-4 text-sm text-muted-foreground">Tap any destination to chat with us instantly on WhatsApp</p>
          <a
            href="https://api.whatsapp.com/send/?phone=919899010227&text=Hi!%20I%20want%20to%20enquire%20about%20travel%20packages&type=phone_number&app_absent=0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-[4px] bg-gradient-to-r from-[#1b2a4a] to-[#2d4a7a] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-900/20 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-900/30"
          >
            Explore All Destinations
          </a>
        </div>
      </div>
    </section>
  );
}
