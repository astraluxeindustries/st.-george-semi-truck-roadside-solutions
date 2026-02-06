import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CalendarCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-32 pb-20 overflow-hidden bg-brand-blue">
      
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center h-full">
        
        {/* Left Column: Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white space-y-8"
        >
          <div>
            <div className="inline-block px-4 py-1.5 mb-4 rounded-full bg-white/10 border border-white/20 text-brand-orange font-semibold text-sm uppercase tracking-wider">
              Serving Mesquite, NV to Hurricane, UT
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
              24/7 Semi-Truck <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-yellow-300">Roadside Repair.</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-blue-100 max-w-xl leading-relaxed">
            If you're in a <strong className="text-white">Semi-Truck BROKE DOWN</strong> somewhere between Mesquite, Nevada and Hurricane, Utah, call us or click the button below. Fill out the short form and we will come to the rescue!
          </p>

          <div className="bg-white/10 backdrop-blur-sm border-l-4 border-brand-orange p-4 rounded-r-lg max-w-lg">
             <p className="text-sm font-medium text-white">
               <span className="text-brand-orange font-bold">WARNING:</span> The buttons on this website work like magic to get you back on the road quick!
             </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact-form" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-brand-orange hover:bg-brand-orangeHover text-white rounded-lg font-bold text-lg shadow-lg shadow-brand-orange/30 transition-all"
            >
              <CalendarCheck size={20} />
              Book Mobile Tech
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="tel:+14354147339" 
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-gray-100 text-brand-blue rounded-lg font-bold text-lg shadow-lg transition-all"
            >
              <Phone size={20} className="text-brand-orange" fill="currentColor" />
              Call Us Now
            </motion.a>
          </div>
        </motion.div>

        {/* Right Column: Image with Frame */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:block h-full min-h-[600px] w-full"
        >
          {/* Outer Decorative Frame (from screenshot) */}
          <div className="absolute inset-0 border border-blue-400/20 rounded-lg"></div>
          
          {/* Inner Image Container (Centered) */}
          <div className="absolute inset-12 flex items-center justify-center">
             <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-gray-900 border border-white/10">
                {/* Stock Image Filler */}
                <img 
                  src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                  alt="Semi Truck Roadside" 
                  className="w-full h-full object-cover"
                />
                
                {/* Floating Status Badge */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 0.5 }}
                  className="absolute bottom-8 left-8 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-xl flex items-center gap-4 border border-gray-100"
                >
                   <div className="relative flex items-center justify-center w-10 h-10 bg-green-100 rounded-full">
                     <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                   </div>
                   <div>
                     <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Status</p>
                     <p className="text-brand-blue font-bold text-sm">Techs Available Now</p>
                   </div>
                </motion.div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;