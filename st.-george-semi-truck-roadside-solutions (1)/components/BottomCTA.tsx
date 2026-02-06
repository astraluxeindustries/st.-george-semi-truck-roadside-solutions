import React from 'react';
import { Phone, Truck, Check } from 'lucide-react';
import { motion } from 'framer-motion';

const BottomCTA: React.FC = () => {
  return (
    <section className="bg-brand-orange py-24 relative overflow-hidden">
       {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-orangeHover to-brand-orange transform -skew-y-1 origin-top-left scale-105"></div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text and Buttons */}
          <div className="space-y-8 text-white">
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight tracking-tight">
              We've Got You!<br/>
              We will get you back on the road asap!
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
               <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact-form" 
                  className="bg-white text-brand-orange px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
                >
                  <Truck size={20} className="stroke-2" />
                  Get Me Back On The Road
               </motion.a>
               <motion.a 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="tel:+14354147339" 
                  className="bg-brand-blue text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:bg-brand-darkBlue transition-colors flex items-center justify-center gap-2"
                >
                  <Phone size={20} fill="currentColor" />
                  Click Here to Call Us Now
               </motion.a>
            </div>
          </div>
          
          {/* Right Side: Trust Indicators */}
          <div className="flex justify-center lg:justify-end">
             <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 max-w-md w-full shadow-2xl transform hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/20 pb-4">Why Drivers Trust Us</h3>
                <ul className="space-y-4">
                  {[
                    "24/7 Emergency Response",
                    "Heavy-Duty & Semi-Truck Specialists",
                    "Locally Owned & Operated",
                    "Fast Dispatch Times",
                    "Fair, Upfront Pricing"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-white font-medium text-lg">
                      <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-white text-brand-orange flex items-center justify-center shadow-sm">
                        <Check size={14} strokeWidth={4} />
                      </div>
                      <span className="leading-tight text-shadow-sm">{item}</span>
                    </li>
                  ))}
                </ul>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;