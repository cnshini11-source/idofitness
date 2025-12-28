import React from 'react';

const WhatsAppButton: React.FC = () => {
  return (
    <a 
      href="https://wa.me/972500000000" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-50 group"
      aria-label="Contact on WhatsApp"
    >
      <div className="w-16 h-16 bg-[#25d366] rounded-full flex items-center justify-center text-white text-3xl shadow-lg transition-transform duration-300 group-hover:scale-110 animate-pulse-ring relative">
         {/* Icon */}
        <i className="fab fa-whatsapp relative z-10"></i>
      </div>
    </a>
  );
};

export default WhatsAppButton;