'use client';

import { Phone } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a
      href="tel:+919999999999"
      className="fixed bottom-5 right-5 z-50 grid h-12 w-12 md:h-14 md:w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-shadow"
    >
      <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      <Phone className="h-5 w-5 md:h-6 md:w-6 relative z-10" />
    </a>
  );
}
