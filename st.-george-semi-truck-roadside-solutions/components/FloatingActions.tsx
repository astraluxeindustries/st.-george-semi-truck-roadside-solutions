import React from 'react';
import { Phone } from 'lucide-react';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 md:hidden">
      <a 
        href="tel:+14354147339"
        className="flex items-center justify-center w-14 h-14 bg-blue-600 text-white rounded-full shadow-lg shadow-blue-600/40 hover:bg-blue-700 transition-all animate-bounce"
      >
        <Phone size={24} fill="currentColor" />
      </a>
    </div>
  );
};

export default FloatingActions;