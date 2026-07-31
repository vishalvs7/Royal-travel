'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Corporate Travel Manager',
    text: 'Royal Travel handled our entire executive retreat to Switzerland. Every detail was flawless — from the Alpine lodge to the private transfers. Highly recommend for B2B travel needs.',
    rating: 5,
  },
  {
    name: 'Rajesh Mehta',
    role: 'Travel Agency Partner',
    text: 'We have been partnering with Royal Travel for over 3 years. Their domestic India packages are exceptional, and their team is always responsive. A reliable DMC partner.',
    rating: 5,
  },
  {
    name: 'Ananya Patel',
    role: 'Family Traveler',
    text: 'Our Kerala trip was absolutely magical. The houseboat stay, the cuisine tours — everything was perfectly organized. The kids still talk about it!',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Event Organizer',
    text: 'They managed a 200-person corporate event in Dubai flawlessly. Visa processing, hotel bookings, desert safari — all seamless. True professionals.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section id="testimonials" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Testimonials</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6">
            What Our{' '}
            <span className="text-gradient">Clients Say</span>
          </h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl border border-white/10 bg-card p-8 sm:p-12 text-center"
          >
            <Quote className="h-10 w-10 mx-auto text-secondary/40 mb-6" />
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 italic">
              &ldquo;{testimonials[current].text}&rdquo;
            </p>
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="font-semibold text-white">{testimonials[current].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
          </motion.div>
          <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 sm:-translate-x-12 h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 sm:translate-x-12 h-10 w-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all">
            <ChevronRight className="h-5 w-5" />
          </button>
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`h-2 rounded-full transition-all ${i === current ? 'w-8 bg-secondary' : 'w-2 bg-white/20'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
