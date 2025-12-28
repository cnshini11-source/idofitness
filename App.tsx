import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Transformations from './components/Transformations';
import Empowerment from './components/Empowerment';
import Commitment from './components/Commitment';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import TheFix from './components/TheFix';
import LeadCapturePage from './components/LeadCapturePage';

// Declare AOS types since we are loading it via CDN
declare global {
  interface Window {
    AOS: {
      init: (options?: any) => void;
    };
  }
}

const App: React.FC = () => {
  const [showLeadCapture, setShowLeadCapture] = useState(false);

  useEffect(() => {
    // Initialize AOS animation library
    if (window.AOS) {
      window.AOS.init({
        duration: 800,
        once: true,
        easing: 'ease-out-cubic',
      });
    }
  }, []);

  useEffect(() => {
    // Re-trigger animations when view changes
    if (window.AOS) {
      setTimeout(() => {
        window.AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-out-cubic',
        });
      }, 100);
    }
    // Scroll to top when switching views
    window.scrollTo(0,0);
  }, [showLeadCapture]);

  const handleNavigateToCapture = (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    setShowLeadCapture(true);
  };

  const handleBackToHome = () => {
    setShowLeadCapture(false);
  };

  if (showLeadCapture) {
    return <LeadCapturePage onBack={handleBackToHome} />;
  }

  return (
    <div className="relative min-h-screen bg-slate-900 text-white selection:bg-green-500 selection:text-white">
      <Navbar onCtaClick={handleNavigateToCapture} />
      <main>
        <Hero onCtaClick={handleNavigateToCapture} />
        {/* Stats moved inside Hero */}
        <Transformations />
        <Empowerment />
        <About />
        <TheFix onCtaClick={handleNavigateToCapture} />
        <Contact />
        <Commitment />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;