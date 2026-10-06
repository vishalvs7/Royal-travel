'use client';

import { motion } from 'framer-motion';
import { Plane, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerLinks = {
  QuickLinks: [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Destinations', href: '#destinations' },
    { name: 'Contact', href: '#contact' },
  ],
  Packages: [
    { name: 'International Packages', href: '/packages/international' },
    { name: 'Domestic Packages', href: '/packages/domestic' },
    { name: 'Pilgrimage Packages', href: '/packages/pilgrimage' },
    { name: 'Custom Itineraries', href: '#contact' },
  ],
  Support: [
    { name: 'FAQs', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Cancellation Policy', href: '#' },
  ],
};

export default function Footer() {
  const pathname = usePathname();
  const onHome = pathname === '/';
  const toHref = (href) =>
    href.startsWith('#') && href !== '#' && !onHome ? `/${href}` : href;
  return (
    <footer className="border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Plane className="h-6 w-6 text-primary" />
              <span className="font-display text-xl font-bold text-white">Royal Travel</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Premium destination management company crafting unforgettable travel experiences across India and 50+ countries.
            </p>
            <div className="flex gap-3">
              {['FB', 'IG', 'TW', 'LI'].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="h-9 w-9 rounded-[4px] border border-white/10 flex items-center justify-center text-xs text-muted-foreground hover:text-white hover:border-white/30 transition-all"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display text-base font-bold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={toHref(link.href)}
                      className="text-sm text-muted-foreground hover:text-white transition-colors inline-flex items-center gap-1"
                    >
                      {link.name} <ArrowUpRight className="h-3 w-3" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Royal Travel. All rights reserved.</p>
          <p>Designed and Developed by Growphile Solutions</p>
        </div>
      </div>
    </footer>
  );
}
