import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Destinations from '@/components/Destinations';
import About from '@/components/About';
import Services from '@/components/Services';
import Packages from '@/components/Packages';
import Experience from '@/components/Experience';
import Testimonials from '@/components/Testimonials';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PopupForm from '@/components/PopupForm';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Destinations />
      <About />
      <Services />
      <Packages />
      <Experience />
      <Testimonials />
      <Gallery />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <PopupForm />
    </>
  );
}
