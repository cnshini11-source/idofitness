import React, { useState, useRef } from 'react';

const Transformations: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const results = [
    {
      name: "אורן, 29",
      achievement: "ירידה של 22 ק״ג",
      quote: "״הייתי בדיוק איפה שאתם היום. השינוי מתחיל כשמפסיקים לחפש קיצורי דרך.״",
      combinedImage: "https://i.imgur.com/i61XoCB.png" 
    },
    {
      name: "דניאל, 32",
      achievement: "העלאת מסת שריר וחיטוב",
      quote: "״ניסיתי הכל לבד, שום דבר לא עבד. הליווי הצמוד והדיוק בטכניקה עשו את ההבדל.״",
      combinedImage: "https://i.imgur.com/YNCqArj.jpeg" 
    },
    {
      name: "רון, 24",
      achievement: "קוביות בבטן לראשונה בחייו",
      quote: "״התהליך היה מאתגר אבל מספק. עידן היה שם בכל רגע משבר כדי להרים אותי.״",
      combinedImage: "https://i.imgur.com/Mv2dSTW.jpeg"
    }
  ];

  // Manual Navigation
  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % results.length);
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + results.length) % results.length);
  };

  // Touch Handlers for Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const getCardStyle = (index: number) => {
    const isActive = index === activeIndex;
    const isNext = index === (activeIndex + 1) % results.length;
    const isPrev = index === (activeIndex - 1 + results.length) % results.length;

    // Reduced scale for a smaller look
    let baseClass = "absolute top-0 left-0 w-full h-full transition-all duration-500 ease-out transform shadow-2xl rounded-xl overflow-hidden bg-slate-900 border border-green-500/30 cursor-pointer";
    
    if (isActive) {
        return `${baseClass} z-20 scale-100 opacity-100 translate-x-0 shadow-[0_0_30px_rgba(34,197,94,0.3)] border-green-500`;
    } else if (isNext) {
        return `${baseClass} z-10 scale-90 opacity-40 blur-[1px] translate-x-[60%] md:translate-x-[50%]`;
    } else if (isPrev) {
        return `${baseClass} z-10 scale-90 opacity-40 blur-[1px] -translate-x-[60%] md:-translate-x-[50%]`;
    }
    return `${baseClass} opacity-0 pointer-events-none`; 
  };

  return (
    <section className="py-12 bg-slate-900 border-t border-white/5 relative overflow-hidden">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         <div 
            className="absolute inset-0 bg-cover bg-center opacity-60 md:opacity-70"
            style={{ backgroundImage: "url('https://i.imgur.com/tu6v7E2.jpeg')" }}
         ></div>
         <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-slate-900"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-8" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-black mb-2 drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)]">
            תוצאות <span className="text-green-500 drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]">מדברות</span>
          </h2>
          <p className="text-base md:text-lg text-white font-bold drop-shadow-md max-w-xl mx-auto bg-black/30 backdrop-blur-sm p-2 rounded-lg inline-block">
            החלק כדי לראות עוד
          </p>
        </div>

        {/* 3D Carousel Container - Reduced Height to 360px on mobile */}
        <div 
            className="relative h-[360px] md:h-[400px] max-w-xs md:max-w-lg mx-auto perspective-1000 touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {results.map((item, index) => (
                <div 
                    key={index} 
                    className={getCardStyle(index)}
                    onClick={() => {
                        // Allow clicking side cards to navigate
                        if (index === (activeIndex + 1) % results.length) nextSlide();
                        if (index === (activeIndex - 1 + results.length) % results.length) prevSlide();
                    }}
                >
                    {/* Image Area - Adjusted percentage */}
                    <div className="h-[55%] relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/90 z-10"></div>
                        <img 
                            src={(item as any).combinedImage} 
                            alt={`${item.name} לפני ואחרי`} 
                            className="w-full h-full object-cover object-top"
                            draggable="false"
                        />
                        <div className="absolute bottom-2 right-3 z-20">
                            <span className="bg-green-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-lg">
                                {item.name}
                            </span>
                        </div>
                    </div>
                  
                    {/* Content Area - Compact padding */}
                    <div className="h-[45%] p-4 flex flex-col justify-between bg-slate-900/95 backdrop-blur-xl">
                        <div>
                            <div className="flex text-green-500 text-[9px] gap-0.5 mb-1.5">
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </div>
                            
                            <div className="mb-1">
                                <span className="text-green-500 font-bold block mb-0.5 text-[9px] uppercase tracking-wide opacity-80">ההישג:</span>
                                <h3 className="text-white font-bold text-base md:text-lg leading-tight">{item.achievement}</h3>
                            </div>
                        </div>
                        
                        <div className="relative mt-1">
                            <i className="fas fa-quote-right text-green-500/20 text-xl absolute -top-1 -right-1"></i>
                            <p className="text-gray-300 italic text-xs leading-relaxed relative z-10 pr-2 line-clamp-3">
                            "{item.quote}"
                            </p>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation Arrows (Desktop) */}
            <div className="absolute inset-y-0 -left-12 -right-12 hidden md:flex items-center justify-between pointer-events-none z-30">
                <button 
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full bg-slate-900/80 text-green-500 border border-green-500/50 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all pointer-events-auto backdrop-blur-sm shadow-lg"
                >
                    <i className="fas fa-chevron-right text-base"></i>
                </button>
                <button 
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full bg-slate-900/80 text-green-500 border border-green-500/50 flex items-center justify-center hover:bg-green-500 hover:text-white transition-all pointer-events-auto backdrop-blur-sm shadow-lg"
                >
                    <i className="fas fa-chevron-left text-base"></i>
                </button>
            </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center gap-2 mt-6">
            {results.map((_, i) => (
                <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                        i === activeIndex 
                        ? 'w-8 bg-green-500' 
                        : 'w-1.5 bg-slate-700 hover:bg-slate-500'
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                ></button>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Transformations;