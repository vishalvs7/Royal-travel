'use client';

import { motion } from 'framer-motion';
import { Clock, Users, ArrowRight, MapPin, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const pilgrimagePackages = [
  { title: 'Ayodhya Yatra', duration: '3 Days / 2 Nights', price: '₹8,999', location: 'Ayodhya', image: 'https://images.unsplash.com/photo-1726501604891-19fb7f7cd37b?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8QXlvZGh5YXxlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Varanasi–Ayodhya', duration: '3 Days / 2 Nights', price: '₹9,999', location: 'Varanasi', image: 'https://images.unsplash.com/photo-1627938823193-fd13c1c867dd?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFyYW5hc2l8ZW58MHx8MHx8fDA%3D' },
  { title: 'Varanasi–Ayodhya–Prayagraj', duration: '4 Days / 3 Nights', price: '₹12,999', location: 'Varanasi', image: 'https://images.unsplash.com/photo-1601750059072-b0faf504853e?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJheWFncmFqfGVufDB8fDB8fHww' },
  { title: 'Mathura–Vrindavan', duration: '2 Days / 1 Night', price: '₹5,999', location: 'Mathura', image: 'https://images.unsplash.com/photo-1756454487537-1fa7ad135349?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hdGh1cmF8ZW58MHx8MHx8fDA%3D' },
  { title: 'Mathura–Vrindavan–Govardhan', duration: '3 Days / 2 Nights', price: '₹7,999', location: 'Mathura', image: 'https://images.unsplash.com/photo-1756454487537-1fa7ad135349?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hdGh1cmF8ZW58MHx8MHx8fDA%3D' },
  { title: 'Ayodhya–Chitrakoot–Varanasi', duration: '5 Days / 4 Nights', price: '₹16,999', location: 'Ayodhya', image: 'https://images.unsplash.com/photo-1604476679223-80349206ce33?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpdHJha29vdHxlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Vaishno Devi – Katra', duration: '2 Days / 1 Night', price: '₹6,999', location: 'Katra', image: 'https://images.unsplash.com/photo-1719377678428-d9bcec6976f3?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFpc2hubyUyMGRldml8ZW58MHx8MHx8fDA%3D' },
  { title: 'Amritsar–Golden Temple–Wagah', duration: '3 Days / 2 Nights', price: '₹8,999', location: 'Amritsar', image: 'https://images.unsplash.com/photo-1609947017136-9daf32a5eb16?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW1yaXRzYXJ8ZW58MHx8MHx8fDA%3D' },
  { title: 'Haridwar–Rishikesh', duration: '3 Days / 2 Nights', price: '₹7,999', location: 'Haridwar', image: 'https://images.unsplash.com/photo-1653392083932-d5e9e7d2ccd1?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFyaWR3YXJ8ZW58MHx8MHx8fDA%3D' },
  { title: 'Haridwar–Rishikesh–Neelkanth', duration: '4 Days / 3 Nights', price: '₹10,999', location: 'Haridwar', image: 'https://images.unsplash.com/photo-1650341259809-9314b0de9268?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmlzaGlrZXNofGVufDB8fDB8fHww' },
  { title: 'Kedarnath Yatra', duration: '5 Days / 4 Nights', price: '₹16,999', location: 'Kedarnath', image: 'https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2VkYXJuYXRofGVufDB8fDB8fHww' },
  { title: 'Badrinath Yatra', duration: '5 Days / 4 Nights', price: '₹14,999', location: 'Badrinath', image: 'https://images.unsplash.com/photo-1735817984411-af719b6836c0?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGJhZHJpbmF0aHxlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Kedarnath–Badrinath Do Dham', duration: '6 Days / 5 Nights', price: '₹24,999', location: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1612438214708-f428a707dd4e?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2VkYXJuYXRofGVufDB8fDB8fHww' },
  { title: 'Yamunotri–Gangotri', duration: '6 Days / 5 Nights', price: '₹20,999', location: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1696465889052-6c8921536920?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Z2FuZ290cml8ZW58MHx8MHx8fDA%3D' },
  { title: 'Char Dham Yatra', duration: '11 Days / 10 Nights', price: '₹39,999', location: 'Uttarakhand', image: 'https://images.unsplash.com/photo-1634109282980-8d866598bc8a?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hhcmRoYW18ZW58MHx8MHx8fDA%3D' },
  { title: 'Dwarka–Somnath', duration: '4 Days / 3 Nights', price: '₹9,999', location: 'Gujarat', image: 'https://plus.unsplash.com/premium_photo-1697730467431-323d86486a4c?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd1anJhdHxlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Dwarka–Somnath–Ahmedabad', duration: '5 Days / 4 Nights', price: '₹13,999', location: 'Gujarat', image: 'https://plus.unsplash.com/premium_photo-1697730467431-323d86486a4c?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGd1anJhdHxlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Shirdi–Nashik–Trimbakeshwar', duration: '3 Days / 2 Nights', price: '₹9,999', location: 'Shirdi', image: 'https://images.unsplash.com/photo-1694667509674-676629c9d069?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmFzaGlrfGVufDB8fDB8fHww' },
  { title: 'Shirdi–Shani Shingnapur', duration: '2 Days / 1 Night', price: '₹6,999', location: 'Shirdi', image: 'https://images.unsplash.com/photo-1629640890590-7836d69c5237?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcmRpfGVufDB8fDB8fHww' },
  { title: 'Ujjain–Omkareshwar', duration: '3 Days / 2 Nights', price: '₹8,999', location: 'Ujjain', image: 'https://images.unsplash.com/photo-1658730557753-caf6bbc4a0bc?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dWpqYWlufGVufDB8fDB8fHww' },
  { title: 'Tirupati Balaji', duration: '3 Days / 2 Nights', price: '₹11,999', location: 'Tirupati', image: 'https://images.unsplash.com/photo-1741003412854-bd4b264c4af3?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlydXBhdGklMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D' },
  { title: 'Tirupati–Kanchipuram', duration: '4 Days / 3 Nights', price: '₹14,999', location: 'Tirupati', image: 'https://images.unsplash.com/photo-1741003412854-bd4b264c4af3?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dGlydXBhdGklMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D' },
  { title: 'Puri–Konark', duration: '3 Days / 2 Nights', price: '₹8,999', location: 'Puri', image: 'https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVyaXxlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Puri–Konark–Chilika', duration: '4 Days / 3 Nights', price: '₹12,999', location: 'Puri', image: 'https://images.unsplash.com/photo-1706790574525-d218c4c52b5c?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHVyaXxlbnwwfHwwfHx8MA%3D%3D' },
  { title: 'Rameshwaram–Madurai', duration: '4 Days / 3 Nights', price: '₹13,999', location: 'Rameshwaram', image: 'https://images.unsplash.com/photo-1709457171592-de4f05eb7ae7?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbWVzaHdhcmFtfGVufDB8fDB8fHww' },
  { title: 'Madurai–Rameshwaram–Kanyakumari', duration: '5 Days / 4 Nights', price: '₹17,999', location: 'Madurai', image: 'https://images.unsplash.com/photo-1692173248120-59547c3d4653?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFkdXJhaSUyMHRlbXBsZXxlbnwwfHwwfHx8MA%3D' },
  { title: 'Rameshwaram–Madurai–Kanyakumari', duration: '6 Days / 5 Nights', price: '₹20,999', location: 'Rameshwaram', image: 'https://images.unsplash.com/photo-1709457171592-de4f05eb7ae7?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHJhbWVzaHdhcmFtfGVufDB8fDB8fHww' },
  { title: 'Kamakhya–Guwahati', duration: '3 Days / 2 Nights', price: '₹8,999', location: 'Kamakhya', image: 'https://images.unsplash.com/photo-1632914697578-16d806df6a1b?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Z3V3YWhhdGl8ZW58MHx8MHx8fDA%3D' },
  { title: 'Kamakhya–Shillong', duration: '4 Days / 3 Nights', price: '₹12,999', location: 'Kamakhya', image: 'https://images.unsplash.com/photo-1646409143950-6931aa246d36?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpbGxvbmd8ZW58MHx8MHx8fDA%3D' },
  { title: 'Bodhgaya–Varanasi', duration: '4 Days / 3 Nights', price: '₹12,999', location: 'Bodhgaya', image: 'https://images.unsplash.com/photo-1627938823193-fd13c1c867dd?w=1600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dmFyYW5hc2l8ZW58MHx8MHx8fDA%3D' },
];

export default function PilgrimagePackages() {
  return (
    <>
      <Navbar />
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
              Pilgrimage
            </span>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold mt-4 mb-6">
              Sacred <span className="text-gradient">Journeys</span>
            </h1>
            <p className="text-muted-foreground">
              From the ghats of Varanasi to the shrines of Char Dham, travel with us on
              well-planned yatras that handle travel, stay and darshan arrangements end to end.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pilgrimagePackages.map((pkg, i) => (
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
                    <span className="flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {pkg.duration}
                    </span>
                    {pkg.groupSize && (
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" /> {pkg.groupSize}
                      </span>
                    )}
                  </div>
                  {pkg.highlights && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {pkg.highlights.slice(0, 3).map((h) => (
                        <span
                          key={h}
                          className="rounded-[4px] bg-white/10 px-2.5 py-0.5 text-xs text-white/70"
                        >
                          {h}
                        </span>
                      ))}
                      {pkg.highlights.length > 3 && (
                        <span className="rounded-[4px] bg-white/10 px-2.5 py-0.5 text-xs text-white/70">
                          +{pkg.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-3 border-t border-white/10">
                    <span className="text-lg font-bold text-white">
                      {pkg.price}
                      <span className="text-xs text-muted-foreground font-normal">/person</span>
                    </span>
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
