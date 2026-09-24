'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Phone, Mail, MapPin, Loader2 } from 'lucide-react';

export default function PopupForm() {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setOpen(false); }, 1500);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="popup-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            key="popup-modal"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg overflow-hidden rounded-[4px] bg-card shadow-2xl border border-white/10"
          >
            <button
              onClick={() => setOpen(false)}
              className="absolute top-4 right-4 h-8 w-8 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all z-10"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="px-8 pt-6 pb-2">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Book Your Dream Vacation
              </h2>
              <p className="mt-1 text-sm text-white/70">
                Fill in the details below and we&apos;ll get back to you shortly.
              </p>
            </div>
            <form onSubmit={handleSubmit} className="p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-[4px] border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  required
                  className="w-full rounded-[4px] border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full rounded-[4px] border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <select className="w-full rounded-[4px] border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">I&apos;m interested in...</option>
                <option>International Packages</option>
                <option>Domestic Packages</option>
                <option>Corporate Travel</option>
                <option>Custom Itinerary</option>
              </select>
              <textarea
                rows={4}
                placeholder="Tell us about your dream trip..."
                className="w-full rounded-[4px] border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
              />
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-2"><Phone className="h-4 w-4 text-secondary" /> +91 99999 99999</span>
                <span className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" /> info@royaltravel.com</span>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-[4px] bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-70"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
