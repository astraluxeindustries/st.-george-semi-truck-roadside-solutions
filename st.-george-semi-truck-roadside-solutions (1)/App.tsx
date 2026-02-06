import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Header scrolled={scrolled} />
      <main className="flex-grow">
        <Hero />
        <Services />
        <Testimonials />
        <div id="contact-form">
          <ContactForm />
        </div>
        <BottomCTA />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
};

export default App;