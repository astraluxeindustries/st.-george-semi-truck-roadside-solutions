import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const reviews = [
  {
    name: "John D.",
    role: "Long Haul Driver",
    text: "Blew a turbo near Mesquite at 2AM. These guys were out there in under an hour. Pricing was fair and the tech knew his stuff.",
    stars: 5
  },
  {
    name: "Sarah M.",
    role: "Logistics Manager",
    text: "We use St. George Roadside for all our fleet issues in Southern Utah. Professional, quick, and they communicate well.",
    stars: 5
  },
  {
    name: "Mike R.",
    role: "Independent Owner-Op",
    text: "Saved my load! Had an electrical failure on the I-15. Tech diagnosed it quickly and got me rolling. Highly recommend.",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-brand-orange relative overflow-hidden">
       {/* Background Decoration */}
       <div className="absolute inset-0 bg-gradient-to-b from-brand-orange to-brand-orangeHover z-0"></div>
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
       </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">See What Our Drivers Say</h2>
          <p className="text-lg text-blue-50 font-medium">Real drivers, real results.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl shadow-xl relative transform hover:-translate-y-2 transition-all duration-300"
            >
              <Quote className="absolute top-8 right-8 text-brand-orange/10 w-12 h-12 rotate-180" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 mb-8 italic leading-relaxed font-medium">"{review.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue font-bold text-xl border border-blue-100">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">{review.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;