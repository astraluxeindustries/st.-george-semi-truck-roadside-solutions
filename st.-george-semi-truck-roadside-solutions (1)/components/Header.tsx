import React, { useState } from 'react';
import { Phone, MessageSquare, Menu, X, Instagram } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  scrolled: boolean;
}

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo / Brand Name */}
        <div className="flex items-center gap-2">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className={`font-extrabold text-xl md:text-2xl tracking-tight leading-tight ${
              scrolled ? 'text-brand-blue' : 'text-white'
            }`}
          >
            St. George <span className={scrolled ? 'text-brand-orange' : 'text-brand-orange'}>Semi Truck</span><br className="hidden md:block" /> Roadside Solutions
          </motion.div>
        </div>

        {/* Desktop Navigation & Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="#" className={`text-sm font-medium hover:text-brand-orange transition-colors ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>Home</a>
          <a href="#services" className={`text-sm font-medium hover:text-brand-orange transition-colors ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>Services</a>
          <a href="#reviews" className={`text-sm font-medium hover:text-brand-orange transition-colors ${scrolled ? 'text-gray-700' : 'text-white/90'}`}>Reviews</a>
          
          <div className="flex items-center gap-3 ml-4">
             <a href="https://instagram.com" target="_blank" rel="noreferrer" className={`p-2 rounded-full transition-colors ${scrolled ? 'bg-gray-100 text-brand-blue hover:bg-gray-200' : 'bg-white/20 text-white hover:bg-white/30'}`}>
                <Instagram size={20} />
             </a>
             <a href="sms:+14354147339" className={`p-2 rounded-full transition-colors ${scrolled ? 'bg-gray-100 text-brand-blue hover:bg-gray-200' : 'bg-white/20 text-white hover:bg-white/30'}`}>
                <MessageSquare size={20} />
             </a>
             <a href="tel:+14354147339" className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white px-5 py-2.5 rounded-full font-bold shadow-lg transform hover:-translate-y-0.5 transition-all">
                <Phone size={18} fill="currentColor" />
                <span>(435) 414-7339</span>
             </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className={`lg:hidden p-2 rounded-md ${scrolled ? 'text-brand-blue' : 'text-white'}`}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              <a href="#" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Home</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Services</a>
              <a href="#reviews" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Reviews</a>
              <a href="#contact-form" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-gray-800">Contact</a>
              <div className="flex gap-4 mt-2">
                <a href="tel:+14354147339" className="flex-1 flex justify-center items-center gap-2 bg-brand-orange text-white py-3 rounded-lg font-bold">
                  <Phone size={18} fill="currentColor" /> Call Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;