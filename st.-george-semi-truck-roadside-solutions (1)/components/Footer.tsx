import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-8">
        
        {/* Top Footer: Map & Info Block */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-center">
          <div className="space-y-6">
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">24/7 Semi-Truck Roadside Assistance <span className="text-brand-orange">That Never Sleeps.</span></h3>
            {/* Map Placeholder */}
            <div className="w-full h-64 bg-gray-800 rounded-2xl overflow-hidden relative group border border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Service Area Map St George" 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-60 transition-opacity"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="bg-black/80 backdrop-blur-sm p-4 rounded-xl border border-gray-700 shadow-xl">
                        <div className="flex items-center gap-2 text-brand-orange mb-1">
                            <MapPin size={20} fill="currentColor" />
                            <span className="font-bold">Service Area</span>
                        </div>
                        <p className="text-sm text-gray-300">St. George • Mesquite • Hurricane</p>
                    </div>
                </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center lg:items-end w-full">
             {/* Call To Action Box */}
             <div className="w-full bg-gray-900/50 border border-gray-800 rounded-2xl p-8 lg:p-10 backdrop-blur-sm hover:border-brand-orange/30 transition-colors">
                <h4 className="text-2xl md:text-3xl font-bold text-white mb-3">Need Help Right Now?</h4>
                <p className="text-lg text-gray-300 mb-6">24/7 Semi-Truck Roadside Assistance</p>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-300 mb-8 font-medium">
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span> Fast response</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span> Local technicians</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand-orange"></span> Heavy-duty capable</span>
                </div>

                <a 
                  href="tel:+14354147339" 
                  className="flex items-center justify-center gap-3 bg-brand-orange hover:bg-brand-orangeHover text-white px-6 py-4 rounded-xl font-bold text-lg shadow-lg shadow-brand-orange/20 transition-all transform hover:-translate-y-1"
                >
                  <Phone size={24} fill="currentColor" />
                  <span>Call Now (435) 414-7339</span>
                </a>
             </div>
          </div>
        </div>

        <hr className="border-gray-800 mb-10" />

        {/* Bottom Footer: Contact & Legal */}
        <div className="grid md:grid-cols-3 gap-8 text-sm text-gray-400">
            <div className="space-y-4">
                <p>&copy; 2026 St. George Semi Truck Roadside Solutions, LLC. <br/>All Rights Reserved.</p>
            </div>
            
            <div className="space-y-4 md:text-center">
                <div className="flex items-center md:justify-center gap-2 hover:text-white transition-colors">
                    <Mail size={16} />
                    <a href="mailto:Stgeorgeroadside@gmail.com">Stgeorgeroadside@gmail.com</a>
                </div>
                <div className="flex items-center md:justify-center gap-2 hover:text-white transition-colors">
                    <Phone size={16} />
                    <a href="tel:+14354147339">(435) 414-7339</a>
                </div>
            </div>

            <div className="space-y-4 md:text-right">
                <a href="#" className="block hover:text-brand-orange transition-colors">Terms and Conditions</a>
                <a href="#" className="block hover:text-brand-orange transition-colors">Privacy Policy</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;