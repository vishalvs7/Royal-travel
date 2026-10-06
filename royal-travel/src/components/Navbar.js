'use client';

import { useState } from 'react';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  {
    name: 'Packages',
    href: '#',
    dropdown: [
      { name: 'International', href: '/packages/international' },
      { name: 'Domestic', href: '/packages/domestic' },
      { name: 'Pilgrimage', href: '/packages/pilgrimage' },
    ],
  },
  { name: 'Destinations', href: '#destinations' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const pathname = usePathname();
  const onHome = pathname === '/';
  const toHref = (href) =>
    href.startsWith('#') && href !== '#' && !onHome ? `/${href}` : href;

  return (
    <nav className="fixed inset-x-0 top-0 z-50 bg-[hsl(var(--background)/.9)] backdrop-blur-xl shadow-[0_1px_15px_-3px_rgba(0,0,0,0.4)] border-b border-white/5">
      <div className="container mx-auto flex h-16 sm:h-20 items-center justify-between px-4 sm:px-8">
        <Link href="/" className="font-display text-2xl font-black text-white drop-shadow-lg tracking-tight">
          Royal Travel
        </Link>

        <div className="hidden lg:flex lg:flex-1 lg:justify-center">
          <div className="flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button className="flex items-center gap-1 px-3 py-2 text-base text-white/80 hover:text-white transition-colors rounded-[4px] hover:bg-white/10">
                    {link.name} <ChevronDown className="h-3 w-3" />
                  </button>
                  {dropdownOpen && (
                    <div className="absolute top-full left-0 mt-1 w-48 rounded-[4px] border border-border bg-card p-1.5 shadow-xl backdrop-blur-xl">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="block rounded-[4px] px-3 py-2 text-base text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={toHref(link.href)}
                  className="px-3 py-2 text-base text-white/80 hover:text-white transition-colors rounded-[4px] hover:bg-white/10"
                >
                  {link.name}
                </Link>
              )
            )}
          </div>
        </div>

        <a
          href="tel:+919899010227"
          className="ml-3 flex items-center gap-2 rounded-[4px] bg-secondary px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-secondary/90 shadow-lg shadow-secondary/30"
        >
          <Phone className="h-4 w-4" /> Call Now
        </a>

        <button
          className="lg:hidden text-white p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-card/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-4 flex flex-col items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.name}>
                  <button
                    onClick={() => setDropdownOpen(!dropdownOpen)}
                    className="flex items-center gap-1 w-full px-3 py-2.5 text-base text-white/80 hover:text-white rounded-[4px]"
                  >
                    {link.name} <ChevronDown className="h-3 w-3" />
                  </button>
                  {dropdownOpen && (
                    <div className="pl-4 flex flex-col">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className="px-3 py-2 text-base text-muted-foreground hover:text-white rounded-[4px]"
                          onClick={() => setMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={toHref(link.href)}
                  className="px-3 py-2.5 text-base text-white/80 hover:text-white rounded-[4px]"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </Link>
              )
            )}
            <a
              href="tel:+919899010227"
              className="mt-2 flex items-center justify-center gap-2 rounded-[4px] bg-secondary px-5 py-3 text-sm font-semibold text-white"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
