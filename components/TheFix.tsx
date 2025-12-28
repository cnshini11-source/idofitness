import React from 'react';

interface TheFixProps {
    onCtaClick: (e: React.MouseEvent) => void;
}

const TheFix: React.FC<TheFixProps> = ({ onCtaClick }) => {
  const items = [
    {
      topic: "הגישה",
      badTitle: "חיפשת קיצורי דרך",
      badDesc: "קנית אבקות, האמנת לחרטות בטיקטוק וציפית לריבועים תוך שבוע. העדפת לשקר לעצמך במקום להסתכל למציאות בעיניים.",
      goodTitle: "עבודה שחורה",
      goodDesc: "אין קסמים. יש ביולוגיה, יש זיעה ויש תוכנית. אנחנו מפסיקים לחלום ומתחילים לקרוע את התחת בצורה חכמה.",
      icon: "fa-wand-magic-sparkles"
    },
    {
      topic: "התזונה",
      badTitle: "מעגל ההרעבה",
      badDesc: "צמת כל היום על חסה, ובלילה המקרר התפוצץ. הגוף נכנס לסטרס, אגר שומן, ואתה נשברת פיזית ומנטלית.",
      goodTitle: "מתדלקים מנועים",
      goodDesc: "אוכלים כדי להרזות. דלק איכותי שמעיר את המטבוליזם. לא תהיה רעב לרגע, והגוף יפסיק להילחם בך.",
      icon: "fa-utensils"
    },
    {
      topic: "המנטליות",
      badTitle: "ויתור עצמי",
      badDesc: "'היה לי יום קשה', 'נתחיל בראשון'. ברגע הראשון של אי נוחות - ויתרת. כשאין מי שמחזיק אותך קצר - קל להיעלם.",
      goodTitle: "חומת מגן",
      goodDesc: "מהיום אתה לא לבד. כשאין כוח - אני מרים. כשאתה מחפש תירוץ - אני מבטל אותו. אנחנו בונים משמעת ברזל.",
      icon: "fa-shield-halved"
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden border-t border-white/5">
        {/* Background FX */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black"></div>
        
        <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="text-center mb-16" data-aos="fade-down">
                <span className="inline-block py-1 px-3 rounded bg-white/5 border border-white/10 text-gray-500 text-[10px] font-bold tracking-widest uppercase mb-4 backdrop-blur-sm">
                    Reality Check
                </span>
                <h2 className="text-4xl md:text-6xl font-black text-white leading-tight drop-shadow-2xl">
                    למה זה <span className="relative inline-block text-red-600 px-2">
                        לא עבד
                        <svg className="absolute w-full h-3 bottom-0 left-0 text-red-600 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                             <line x1="0" y1="5" x2="100" y2="5" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                        </svg>
                    </span> 
                    לך?
                </h2>
                <p className="text-xl text-gray-400 mt-4 max-w-2xl mx-auto">
                    ואיך אנחנו הולכים לתקן את זה <span className="text-green-500 font-bold">אחת ולתמיד.</span>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
                {items.map((item, index) => (
                    <div 
                        key={index} 
                        className="group relative rounded-3xl"
                        data-aos="fade-up"
                        data-aos-delay={index * 100}
                    >
                        {/* Container Shape */}
                        <div className="bg-slate-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 h-full flex flex-col relative">
                            
                            {/* --- TOP SECTION (BAD) --- */}
                            <div className="relative p-6 pb-12 bg-gradient-to-b from-red-950/20 to-slate-900/50 transition-all duration-500 border-b border-white/5">
                                {/* Side Halo Glow (Red) */}
                                <div className="absolute top-0 right-0 bottom-0 w-[2px] bg-gradient-to-b from-red-500/80 to-transparent shadow-[0_0_15px_rgba(220,38,38,0.6)]"></div>
                                <div className="absolute top-0 left-0 bottom-0 w-[2px] bg-gradient-to-b from-red-500/80 to-transparent shadow-[0_0_15px_rgba(220,38,38,0.6)]"></div>
                                
                                <span className="relative z-10 text-[10px] font-black text-red-400 uppercase tracking-widest mb-2 block border border-red-500/30 inline-block px-2 py-0.5 rounded bg-red-950/30">
                                    הטעות
                                </span>
                                
                                <h3 className="relative z-10 text-xl font-bold text-white mb-2 drop-shadow-md">
                                    {item.badTitle}
                                </h3>
                                
                                <p className="relative z-10 text-gray-300 text-sm leading-relaxed font-light">
                                    {item.badDesc}
                                </p>
                            </div>

                            {/* --- CONNECTOR ICON (Alive & Moving) --- */}
                            <div className="relative h-0 z-20">
                                <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2">
                                    {/* Main Container Size */}
                                    <div className="w-20 h-20 relative flex items-center justify-center">
                                        
                                        {/* 1. The Rotating Red/Green Border */}
                                        {/* This div spins. It has a gradient from red (top) to green (bottom) */}
                                        <div className="absolute inset-0 rounded-full bg-gradient-to-b from-red-500 via-transparent to-green-500 p-[3px] animate-[spin_3s_linear_infinite] shadow-[0_0_20px_rgba(255,255,255,0.2)] opacity-80">
                                            <div className="w-full h-full bg-slate-900 rounded-full"></div> 
                                            {/* Inner matte to hide the center of the gradient div, leaving only border */}
                                        </div>

                                        {/* 2. Static Inner Circle */}
                                        <div className="absolute inset-1 bg-slate-900 rounded-full border border-white/10 flex items-center justify-center shadow-inner z-10">
                                            {/* Icon - Pulse effect */}
                                            <i className={`fas ${item.icon} text-2xl text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-gray-400 relative z-20 drop-shadow-[0_2px_4px_rgba(0,0,0,1)] animate-pulse`}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* --- BOTTOM SECTION (GOOD) --- */}
                            <div className="relative p-6 pt-12 bg-gradient-to-t from-green-950/20 to-slate-900/50 flex-1 border-t border-white/5">
                                {/* Side Halo Glow (Green) */}
                                <div className="absolute bottom-0 right-0 top-0 w-[2px] bg-gradient-to-t from-green-500/80 to-transparent shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>
                                <div className="absolute bottom-0 left-0 top-0 w-[2px] bg-gradient-to-t from-green-500/80 to-transparent shadow-[0_0_15px_rgba(34,197,94,0.6)]"></div>

                                <span className="relative z-10 text-[10px] font-black text-green-400 uppercase tracking-widest mb-2 block border border-green-500/30 inline-block px-2 py-0.5 rounded bg-green-950/30 shadow-[0_0_10px_rgba(34,197,94,0.1)]">
                                    התיקון
                                </span>
                                
                                <h3 className="relative z-10 text-xl font-bold text-white mb-2 drop-shadow-md">
                                    {item.goodTitle}
                                </h3 >
                                
                                <p className="relative z-10 text-gray-300 text-sm leading-relaxed font-light">
                                    {item.goodDesc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            <div className="mt-16 text-center" data-aos="zoom-in">
                <button 
                    onClick={onCtaClick}
                    className="inline-block py-4 px-12 bg-white text-slate-900 font-black text-lg rounded-full shadow-[0_0_20px_rgba(255,255,255,0.1)] 
                    hover:bg-gradient-to-r hover:from-[#22c55e] hover:via-[#ef4444] hover:to-[#22c55e] hover:text-white 
                    hover:bg-[length:200%_auto] hover:animate-shine hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] 
                    transition-all duration-300 hover:scale-105 border-2 border-transparent hover:border-white/20"
                >
                    אני רוצה לתקן את זה עכשיו
                </button>
            </div>
        </div>
    </section>
  );
};

export default TheFix;