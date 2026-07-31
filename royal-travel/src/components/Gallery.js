'use client';

import { motion } from 'framer-motion';

const galleryImages = [
  'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1935',
  'https://images.unsplash.com/photo-1530789253388-582c4b6d0b0a?q=80&w=2070',
  'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2073',
  'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070',
  'https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=1933',
  'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2071',
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Gallery</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            Moments That{' '}
            <span className="text-gradient">Inspire</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className={`rounded-2xl overflow-hidden ${i === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
            >
              <div
                className="w-full h-64 md:h-full min-h-[200px] bg-cover bg-center hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('${img}')` }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
