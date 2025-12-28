import React from 'react';

interface HeroProps {
    onCtaClick: (e: React.MouseEvent) => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  const stats = [
    { number: "120+", label: "מתאמנים מרוצים" },
    { number: "5", label: "שנות ניסיון" },
    { number: "100%", label: "התאמה אישית" },
    { number: "24/7", label: "ליווי בוואטסאפ" }
  ];

  return (
    <section 
      className="relative min-h-screen flex flex-col justify-center text-center px-4 overflow-hidden"
    >
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        {/* The Main Image */}
        <div 
          className="absolute inset-0 bg-cover bg-no-repeat transition-transform duration-1000 scale-105"
          style={{ 
            backgroundImage: "url('https://i.imgur.com/IS4UbzA.jpeg')",
            backgroundPosition: 'center 20%' // Adjust focus to the upper body/face
          }}
        />
        
        {/* Darkening layers for text readability */}
        <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-transparent to-slate-900" />
        
        {/* The "Halo" Effect - Green Glow from center */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-500/20 via-slate-900/40 to-slate-900 opacity-80 pointer-events-none" />
      </div>

      {/* Main Content - Pushed up slightly to accommodate stats */}
      <div className="relative z-10 max-w-4xl mx-auto mt-auto mb-auto pt-20" data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-5xl md:text-8xl font-black mb-6 leading-tight drop-shadow-2xl">
          הגיע הזמן לגרסה <br />
          <span className="bg-gradient-to-r from-green-400 to-emerald-300 bg-clip-text text-transparent drop-shadow-sm filter">
            הכי טובה שלך
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-lg">
          אימונים מותאמים אישית, ליווי תזונתי צמוד ומעטפת מקצועית שתביא אותך לתוצאות שחלמת עליהן.
        </p>

        {/* New Challenge Text */}
        <div className="mb-10 flex flex-col gap-1 md:gap-2" data-aos="fade-up" data-aos-delay="200">
            <p className="text-gray-400 font-medium text-lg md:text-xl tracking-wide">
                אם אתה מחפש משהו קל – <span className="opacity-70 border-b border-gray-600/50 pb-0.5">תמשיך לגלול.</span>
            </p>
            <p className="text-white font-black text-xl md:text-2xl tracking-wide drop-shadow-md">
                אם אתה מחפש שינוי – <span className="text-green-500">זה מתחיל כאן.</span>
            </p>
        </div>
        
        <div className="flex justify-center items-center mb-12">
          <button 
            onClick={onCtaClick}
            className="w-full md:w-auto bg-green-600 text-white px-12 py-5 rounded-full text-xl font-bold hover:bg-green-500 transition-all duration-300 shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] hover:scale-105 border border-green-400/20"
          >
            גלה את השיטה המלאה
          </button>
        </div>
      </div>

      {/* Integrated Stats Section - Bottom of Hero */}
      <div className="relative z-20 w-full bg-slate-900/70 backdrop-blur-md border-t border-white/10 mt-auto">
        <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/10 divide-x-reverse">
                {stats.map((stat, index) => (
                    <div key={index} className="p-2" data-aos="fade-up" data-aos-delay={300 + (index * 100)}>
                        <div className="text-3xl md:text-5xl font-black text-green-500 mb-2 drop-shadow-lg">{stat.number}</div>
                        <div className="text-gray-200 font-bold text-sm md:text-base tracking-wide uppercase">{stat.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;