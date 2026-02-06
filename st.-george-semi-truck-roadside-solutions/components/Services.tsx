import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Search, Truck } from 'lucide-react';

const services = [
  {
    title: "Roadside Assistance",
    description: "Immediate support for tire changes, fuel delivery, and lockouts.",
    image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Truck className="w-6 h-6" />
  },
  {
    title: "Roadside Diagnosis",
    description: "Advanced computer diagnostics to identify engine and electrical issues on the spot.",
    image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Search className="w-6 h-6" />
  },
  {
    title: "Roadside Repair",
    description: "Full mechanical repairs including air lines, brakes, and cooling systems.",
    image: "https://images.unsplash.com/photo-1632823469860-200d81b4f447?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    icon: <Wrench className="w-6 h-6" />
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold text-brand-blue mb-4">What We Offer</h2>
          <div className="w-20 h-1 bg-brand-orange mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-600 leading-relaxed">
            We offer immediate Roadside Assistance for Semi Trucks. If you're traveling down I-15 and need road repair assistance, give us a chance to get you back on the road ASAP!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-brand-blue/20 group-hover:bg-brand-blue/0 transition-colors z-10"></div>
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm p-2 rounded-lg text-brand-orange shadow-sm">
                  {service.icon}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-brand-blue transition-colors">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <a href="#contact-form" className="inline-flex items-center text-brand-orange font-bold uppercase text-sm tracking-wide group-hover:gap-2 transition-all">
                  Book Service <span className="ml-1">&rarr;</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;