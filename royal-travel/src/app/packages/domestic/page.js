'use client';

import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight, MapPin, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const domesticPackages = [
  {
    title: 'Goa – North & South Goa',
    duration: '4 Days / 3 Nights',
    price: '₹11,999',
    location: 'Goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=2074',
  },
  {
    title: 'Himachal – Shimla & Manali',
    duration: '6 Days / 5 Nights',
    price: '₹12,999',
    location: 'Himachal Pradesh',
    image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=2070',
  },
  {
    title: 'Kashmir – Srinagar, Gulmarg & Pahalgam',
    duration: '6 Days / 5 Nights',
    price: '₹14,999',
    location: 'Kashmir',
    image: 'https://images.unsplash.com/photo-1598091383021-15ddea10925d?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2FzaG1pcnxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Rajasthan – Jaipur, Jodhpur & Udaipur',
    duration: '7 Days / 6 Nights',
    price: '₹17,999',
    location: 'Rajasthan',
    image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=2070',
  },
  {
    title: 'Kerala – Munnar, Alleppey & Kochi',
    duration: '6 Days / 5 Nights',
    price: '₹17,999',
    location: 'Kerala',
    image: 'https://images.unsplash.com/photo-1593693397690-362cb9666fc2?q=80&w=2069',
  },
  {
    title: 'Uttarakhand – Mussoorie, Rishikesh & Nainital',
    duration: '6 Days / 5 Nights',
    price: '₹15,999',
    location: 'Uttarakhand',
    image: 'https://images.unsplash.com/photo-1601821139990-9fc929db79ce?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dXR0YXJha2hhbmR8ZW58MHx8MHx8fDA%3D',
  },
  {
    title: 'Sikkim – Gangtok & Pelling',
    duration: '6 Days / 5 Nights',
    price: '₹21,999',
    location: 'Sikkim',
    image: 'https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2lra2ltfGVufDB8fDB8fHww',
  },
  {
    title: 'Meghalaya – Shillong, Cherrapunji & Dawki',
    duration: '6 Days / 5 Nights',
    price: '₹22,999',
    location: 'Meghalaya',
    image: 'https://images.unsplash.com/photo-1521437620269-f477f5437820?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWVnaGFsYXlhfGVufDB8fDB8fHww',
  },
  {
    title: 'Ladakh – Leh, Nubra & Pangong',
    duration: '7 Days / 6 Nights',
    price: '₹22,999',
    location: 'Ladakh',
    image: 'https://images.unsplash.com/photo-1602513792193-1c42f9511bef?q=80&w=2070',
  },
  {
    title: 'Andaman – Port Blair, Havelock & Neil',
    duration: '6 Days / 5 Nights',
    price: '₹22,999',
    location: 'Andaman & Nicobar',
    image: 'https://images.unsplash.com/photo-1544550581-5f7ceaf7f1b2?q=80&w=2070',
  },
  {
    title: 'Gujarat – Rann of Kutch, Dwarka & Somnath',
    duration: '6 Days / 5 Nights',
    price: '₹15,999',
    location: 'Gujarat',
    image: 'https://plus.unsplash.com/premium_photo-1697730467431-323d86486a4c?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd1anJhdHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Odisha – Bhubaneswar, Puri & Konark',
    duration: '6 Days / 5 Nights',
    price: '₹16,999',
    location: 'Odisha',
    image: 'https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8b2Rpc2hhfGVufDB8fDB8fHww',
  },
  {
    title: 'Arunachal Pradesh – Tawang',
    duration: '7 Days / 6 Nights',
    price: '₹21,999',
    location: 'Arunachal Pradesh',
    image: 'https://images.unsplash.com/photo-1597074866923-dc0589150358?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YXJ1bmFjaGFsJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Madhya Pradesh – Khajuraho, Orchha & Jabalpur',
    duration: '6 Days / 5 Nights',
    price: '₹16,999',
    location: 'Madhya Pradesh',
    image: 'https://images.unsplash.com/photo-1606298855672-3efb63017be8?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFkaHlhJTIwcHJhZGVzaHxlbnwwfHwwfHx8MA%3D%3D',
  },
  {
    title: 'Uttar Pradesh – Agra, Mathura & Varanasi',
    duration: '6 Days / 5 Nights',
    price: '₹15,999',
    location: 'Uttar Pradesh',
    image: 'https://images.unsplash.com/photo-1756454487537-1fa7ad135349?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hdGh1cmF8ZW58MHx8MHx8fDA%3D',
  },
];

export default function DomesticPackages() {
  return (
    <>
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">Domestic</span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
              Explore{' '}
              <span className="text-gradient">Incredible India</span>
            </h1>
            <p className="text-muted-foreground">
              Discover the diverse landscapes, rich culture, and timeless heritage of India with our curated domestic packages.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {domesticPackages.map((pkg, i) => (
              <motion.div
                key={pkg.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group rounded-[4px] border border-white/10 bg-card overflow-hidden hover:border-white/20 transition-all duration-300"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${pkg.image}')` }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  {pkg.rating && (
                    <div className="absolute top-3 right-3 flex items-center gap-1 rounded-[4px] bg-white/95 px-3 py-1 text-xs font-semibold text-gray-900 backdrop-blur-sm">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" /> {pkg.rating}
                    </div>
                  )}
                  <div className="absolute bottom-3 left-3 flex items-center gap-1 text-xs text-white/80 bg-black/40 rounded-[4px] px-3 py-1 backdrop-blur-sm">
                    <MapPin className="h-3 w-3" /> {pkg.location}
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-bold text-white mb-2">{pkg.title}</h3>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {pkg.duration}</span>
                    {pkg.groupSize && (
                      <span className="flex items-center gap-1"><Users className="h-3 w-3" /> {pkg.groupSize}</span>
                    )}
                  </div>
                  {pkg.highlights && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {pkg.highlights.slice(0, 3).map((h) => (
                        <span key={h} className="rounded-[4px] bg-white/10 px-2.5 py-0.5 text-xs text-white/70">{h}</span>
                      ))}
                      {pkg.highlights.length > 3 && (
                        <span className="rounded-[4px] bg-white/10 px-2.5 py-0.5 text-xs text-white/70">+{pkg.highlights.length - 3} more</span>
                      )}
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <span className="text-lg font-bold text-white">{pkg.price}<span className="text-xs text-muted-foreground font-normal">/person</span></span>
                    <a
                      href={`https://api.whatsapp.com/send/?phone=919899010227&text=${encodeURIComponent(`Hi! I want to enquire about the ${pkg.title} package (${pkg.duration} at ${pkg.price}/person). Please share the details.`)}&type=phone_number&app_absent=0`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      Enquire Now <ArrowRight className="h-3 w-3" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
