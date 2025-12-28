import React from 'react';

const About: React.FC = () => {
  const features = [
    {
      icon: "fa-crosshairs",
      title: "תוכנית תפורה למידות שלך",
      desc: "אנחנו לא עושים 'העתק-הדבק' מהאינטרנט. אני בודק בדיוק מה המטרה שלך, כמה זמן פנוי יש לך ביומן ומה אתה אוהב לאכול. לפי זה אני בונה לך מסלול מדויק שפשוט אי אפשר ליפול בו.",
      delay: 0
    },
    {
      icon: "fa-eye",
      title: "פיקוח צמוד (באמת)",
      desc: "אני לא נעלם אחרי התשלום. אני איתך בוואטסאפ, עובר על המשקלים שהרמת, בודק את האוכל שלך ומתקן כשצריך. קשה לך? שלח הודעה. נשברת? אני שם להרים אותך. אין מצב שאתה לבד.",
      delay: 100
    },
    {
      icon: "fa-brain",
      title: "לא רק 'תעשה' - תבין",
      desc: "אני לא סתם נותן הוראות. אני מלמד אותך איך הגוף עובד, למה בחרנו בתרגיל הזה ואיך האוכל משפיע עליך. הידע הזה נשאר איתך לכל החיים, כדי שיום אחד תוכל לשמור על התוצאות גם בלעדיי.",
      delay: 200
    },
    {
      icon: "fa-pizza-slice",
      title: "אוכלים הכל (כולל פיצה)",
      desc: "דיאטה זה לא עונש. בא לך המבורגר? שוקולד? אין בעיה. אני אלמד אותך איך לשלב את המאכלים שאתה אוהב בתוך התפריט ועדיין לראות קוביות בבטן. אפשר להנות מהחיים וגם להיראות טוב.",
      delay: 300
    }
  ];

  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden scroll-mt-20">
      
      {/* --- Deep Tech Background --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Cyber Grid Pattern */}
          <div 
            className="absolute inset-0 opacity-10"
            style={{ 
                backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}
          ></div>
          
          {/* Deep Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-900/10 via-black/80 to-black"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <div className="text-center mb-24 relative" data-aos="fade-down">
            {/* Glowing orb behind title */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-green-500/20 blur-[60px] rounded-full pointer-events-none"></div>
            
            <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-4 relative z-10">
                לא מאמן. <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 drop-shadow-[0_0_15px_rgba(34,197,94,0.4)]">
                    השותף שלך.
                </span>
            </h2>
            <p className="text-gray-400 text-lg font-light max-w-2xl mx-auto">
                המערכת שתחבר את כל הנקודות ותביא אותך ליעד.
            </p>
        </div>

        {/* --- The Connected System Layout --- */}
        <div className="relative">
            
            {/* The Central Spine / Backbone (Desktop: Center, Mobile: Left) */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 md:-translate-x-1/2 overflow-hidden h-full z-0 rounded-full">
                {/* The Moving Energy Beam */}
                <div className="absolute top-0 left-0 w-full h-[30%] bg-gradient-to-b from-transparent via-green-500 to-transparent animate-[scan_3s_linear_infinite] shadow-[0_0_20px_rgba(34,197,94,0.8)]"></div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-16 md:gap-y-24 md:gap-x-24">
                {features.map((item, index) => {
                    // Even index = Left Column (on desktop), Odd index = Right Column (on desktop)
                    // Mobile: Always right of the line
                    const isEven = index % 2 === 0;

                    return (
                        <div 
                            key={index}
                            className={`relative pl-24 md:pl-0 group ${isEven ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}
                            data-aos={isEven ? "fade-left" : "fade-right"} 
                            data-aos-delay={item.delay}
                        >
                            {/* --- Connectors (Circuit Lines) --- */}
                            
                            {/* Desktop Connector - Now subtle green by default to match cards */}
                            <div className={`hidden md:block absolute top-10 h-[2px] bg-white/10 w-12 transition-all duration-500 group-hover:bg-green-500/50 group-hover:shadow-[0_0_10px_rgba(34,197,94,0.3)]
                                ${isEven ? 'right-0 -mr-[1px] origin-right' : 'left-0 -ml-[1px] origin-left'}
                            `}>
                                {/* Node Dot at the spine */}
                                <div className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-slate-900 border border-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)] z-10
                                    ${isEven ? '-right-1.5' : '-left-1.5'}
                                `}></div>
                            </div>

                            {/* Mobile Connector */}
                            <div className="md:hidden absolute left-8 top-10 w-16 h-[2px] bg-white/10 group-hover:bg-green-500/50 transition-colors">
                                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-green-500 -ml-1 shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                            </div>

                            {/* --- The Card (Updated: Always Lit) --- */}
                            <div className="relative transition-transform duration-500 hover:-translate-y-2">
                                
                                {/* The Interesting Black-Green Halo (Backdrop) */}
                                <div className="absolute -inset-[1px] bg-gradient-to-br from-green-900 via-black to-green-900 rounded-2xl blur-sm opacity-100 shadow-[0_0_40px_-10px_rgba(34,197,94,0.3)]"></div>
                                
                                {/* The Card Content - Solid & Lit */}
                                <div className="relative bg-slate-950 rounded-2xl p-8 border border-green-500/20 shadow-[inset_0_0_40px_rgba(0,0,0,0.9),0_0_15px_rgba(34,197,94,0.1)] h-full overflow-hidden">
                                    
                                    {/* Inner Ambient Top Light */}
                                    <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-green-500/5 to-transparent pointer-events-none"></div>

                                    <div className={`flex flex-col gap-4 relative z-10 ${isEven ? 'md:items-end' : 'md:items-start'}`}>
                                        
                                        {/* Icon Box - Always Green & Lit */}
                                        <div className="w-16 h-16 rounded-xl bg-black border border-green-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                                            <i className={`fas ${item.icon} text-2xl text-green-400 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)]`}></i>
                                        </div>

                                        {/* Text */}
                                        <div>
                                            <h3 className="text-xl md:text-2xl font-bold text-white mb-3 drop-shadow-md">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>

        {/* Bottom Connection Fade */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[2px] h-24 bg-gradient-to-b from-white/5 to-transparent"></div>
      </div>

      <style>{`
        @keyframes scan {
            0% { top: -30%; opacity: 0; }
            20% { opacity: 1; }
            80% { opacity: 1; }
            100% { top: 130%; opacity: 0; }
        }
      `}</style>
    </section>
  );
};

export default About;