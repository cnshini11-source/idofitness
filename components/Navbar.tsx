import React, { useState, useEffect } from 'react';

interface NavbarProps {
    onCtaClick: (e: React.MouseEvent) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/90 backdrop-blur-md shadow-lg py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          onClick={scrollToTop}
          className="text-2xl font-black tracking-tighter select-none cursor-pointer hover:scale-105 transition-transform"
          title="חזרה לראש העמוד"
        >
          IDAN<span className="text-green-500">FIT</span>
        </div>
        
        <div className="hidden md:flex gap-8 font-medium items-center">
          {/* About link removed */}
          <button 
            onClick={onCtaClick}
            className="bg-green-600 px-6 py-2 rounded-full hover:bg-green-500 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-green-900/20 text-white"
          >
            התחל עכשיו
          </button>
        </div>

        {/* Mobile Menu Button Removed per request */}
      </div>
    </nav>
  );
};

export default Navbar;