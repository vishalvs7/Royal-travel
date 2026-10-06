'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, Loader2 } from 'lucide-react';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source: 'Contact Page' }),
      });
      const result = await res.json().catch(() => ({}));

      if (res.ok && result.ok) {
        form.reset();
        setStatus({ type: 'success', text: 'Thanks! Your message has been sent — we will get back to you shortly.' });
      } else {
        setStatus({ type: 'error', text: result.error || 'Something went wrong. Please try again.' });
      }
    } catch {
      setStatus({ type: 'error', text: 'Network error. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Contact</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
            Let&apos;s{' '}
            <span className="text-gradient">Plan Together</span>
          </h2>
          <p className="text-muted-foreground">
            Get in touch with our travel experts for a free consultation.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-[4px] bg-secondary/20 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Contact</p>
                <p className="text-muted-foreground">
                  <a href="tel:01141666677" className="hover:text-white transition-colors">011-41666677</a>
                  {' , '}
                  <a href="tel:+919899010227" className="hover:text-white transition-colors">+91 98990 10227</a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-[4px] bg-secondary/20 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Manager</p>
                <p className="text-muted-foreground">
                  <a href="tel:+919899308473" className="hover:text-white transition-colors">+91 98993 08473</a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-[4px] bg-secondary/20 flex items-center justify-center shrink-0">
                <Phone className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Director</p>
                <p className="text-muted-foreground">
                  <a href="tel:+919811216599" className="hover:text-white transition-colors">+91 98112 16599</a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-[4px] bg-primary/20 flex items-center justify-center shrink-0">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Email</p>
                <p className="text-muted-foreground break-all">
                  <a href="mailto:royaltravel111@gmail.com" className="hover:text-white transition-colors">royaltravel111@gmail.com</a>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-10 w-10 rounded-[4px] bg-accent/20 flex items-center justify-center shrink-0">
                <MapPin className="h-5 w-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Office</p>
                <p className="text-muted-foreground">
                  C-125, Ground Floor, Dayanand Colony, Lajpat Nagar-IV, New Delhi - 110024
                </p>
              </div>
            </div>
          </div>
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            onSubmit={handleSubmit}
            className="rounded-[4px] border border-white/10 bg-card p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-[4px] border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-[4px] border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              />
            </div>
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="w-full rounded-[4px] border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            />
            <select
              name="interest"
              className="w-full rounded-[4px] border border-input bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            >
              <option value="">I&apos;m interested in...</option>
              <option>International Packages</option>
              <option>Domestic Packages</option>
              <option>Corporate Travel</option>
              <option>Custom Itinerary</option>
            </select>
            <textarea
              rows={4}
              name="message"
              placeholder="Tell us about your dream trip..."
              className="w-full rounded-[4px] border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-[4px] bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/30 flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {status && (
              <p
                role="status"
                className={`text-sm ${status.type === 'success' ? 'text-green-400' : 'text-red-400'}`}
              >
                {status.text}
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
