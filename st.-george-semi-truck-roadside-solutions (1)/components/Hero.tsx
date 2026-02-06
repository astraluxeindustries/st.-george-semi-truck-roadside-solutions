import React from 'react';
import { motion } from 'framer-motion';
import { Phone, CalendarCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center pt-32 pb-0 overflow-hidden bg-brand-blue">
      
      {/* Background Pattern/Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 to-transparent"></div>
      </div>
      
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-orange rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10 grid lg:grid-cols-2 gap-12 items-end min-h-full">
        
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

        {/* Right Column: Single Container Image */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden lg:flex items-end h-full w-full max-w-lg mx-auto"
        >
          {/* Main Image Container - The border is now directly on this container */}
          <div className="relative w-full h-full overflow-visible bg-transparent">
             
             {/* 
                IMAGE REPLACEMENT INSTRUCTIONS:
                To replace this image, simply change the 'src' attribute below.
                Using 'object-cover' ensures the image fills the entire border area without empty spaces.
             */}
             <img 
               src="/images/tmp3oc9c13w.webp" 
               alt="Professional Mechanic" 
               className="w-full h-full object-cover object-bottom lg:translate-y-32"
             />
             
             {/* Floating Status Badge */}
             <motion.div 
               initial={{ x: -20, opacity: 0 }}
               animate={{ x: 0, opacity: 1 }}
               transition={{ delay: 1, duration: 0.5 }}
               className="absolute top-[60%] -translate-y-1/2 left-0 bg-white/95 backdrop-blur-sm p-4 rounded-3xl shadow-2xl flex items-center gap-5 border-y border-r border-gray-100 max-w-sm transform scale-50 transition-all hover:scale-95 z-20"
             >
                <div className="relative flex items-center justify-center w-20 h-20 bg-green-100 rounded-full flex-shrink-0">
                  <div className="w-5 h-5 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">Status</p>
                  <p className="text-brand-blue font-extrabold text-xl leading-none">Techs Available Now</p>
                </div>
             </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
