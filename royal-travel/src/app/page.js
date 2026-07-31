import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Partners from '@/components/Partners';
import About from '@/components/About';
import Services from '@/components/Services';
import Destinations from '@/components/Destinations';
import Packages from '@/components/Packages';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Partners />
      <About />
      <Services />
      <Destinations />
      <Packages />
      <Experience />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}
