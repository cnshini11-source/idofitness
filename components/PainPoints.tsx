import React, { useState } from 'react';

const challenges = [
  {
    icon: "fa-clock",
    problem: "אין לי זמן לנשום, איך אכניס אימונים?",
    solution: "בולשיט. לכולנו יש את אותן 24 שעות. השאלה היא סדרי עדיפויות. האימונים שלי הם 45 דקות סופר-אפקטיביות. מי שרוצה תוצאות מוצא זמן, מי שלא - מוצא תירוץ."
  },
  {
    icon: "fa-pizza-slice",
    problem: "אני אוהב לאכול, לא מוכן לחיות על חסה",
    solution: "גם אני לא. אוכל זה דלק, לא אויב. בונים תפריט שכולל המבורגר, פיצה ושוקולד במינון הנכון. אם תסבול - תשבר. השיטה שלי היא היחידה שתחזיק איתה מעמד לכל החיים."
  },
  {
    icon: "fa-battery-empty",
    problem: "אין לי כוח רצון, אני תמיד נשבר באמצע",
    solution: "מוטיבציה זה לחובבנים. מקצוענים עובדים על משמעת. ועד שתבנה אותה? אני המשמעת שלך. אני לא אתן לך ליפול, גם כשלא יהיה לך חשק לקום מהספה."
  },
  {
    icon: "fa-dna",
    problem: "יש לי גנטיקה גרועה, ניסיתי הכל ושום דבר לא עובד",
    solution: "הגוף שלך לא דפוק, האסטרטגיה שלך הייתה דפוקה. אימונים גנריים מיוטיוב ודיאטות רעב לא עובדים. אנחנו נבנה מכונה לשריפת שומן שמותאמת בדיוק לפיזיולוגיה שלך."
  }
];

const PainPoints: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="py-12 relative overflow-hidden bg-slate-950">
      {/* Deep Background Layer */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black z-0"></div>
      
      {/* Mood Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-red-900/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen z-0"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10" data-aos="fade-down">
          <h2 className="text-4xl md:text-5xl font-black mb-6 drop-shadow-2xl">
            למה נכשלת <span className="relative inline-block text-red-500">
                עד היום?
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-red-500 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                </svg>
            </span>
          </h2>
          <p className="text-xl text-gray-300 font-light max-w-2xl mx-auto leading-relaxed">
            שמעתי את כל התירוצים. הנה האמת בפרצוף.
          </p>
        </div>

        {/* 
            Mobile: Flex column for sticky stacking behavior.
            Desktop: Grid for 2x2 layout.
        */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8">
          {challenges.map((item, index) => (
            <div 
              key={index}
              // Removed AOS from the wrapper to prevent sticky position conflicts
              className="group relative sticky md:static" 
              style={{ 
                  // Calculate top offset for the stacking effect on mobile
                  // Base offset (100px) + Increment per card (15px)
                  top: `calc(100px + ${index} * 15px)`,
                  zIndex: index + 1
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              {/* The Glow Effect - Red by default, Green on hover/active */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-red-500/20 to-transparent rounded-2xl blur opacity-50 group-hover:from-green-500 group-hover:to-green-900 group-hover:opacity-75 transition-all duration-500"></div>

              {/* Card Content - Solid background to cover previous cards */}
              <div className="relative bg-slate-900 h-full rounded-2xl p-8 border border-white/10 group-hover:border-green-500/30 transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xl">
                
                {/* Background Pattern inside card */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110"></div>

                <div className="relative z-10">
                    {/* Header: Icon + Problem */}
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-green-500 group-hover:text-white group-hover:border-green-400 shadow-lg transition-all duration-300">
                            <i className={`fas ${item.icon} text-red-400 group-hover:text-white text-xl transition-colors`}></i>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white leading-tight pt-1 group-hover:text-green-50 transition-colors">
                            "{item.problem}"
                        </h3>
                    </div>

                    {/* Subtle Separator */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent my-4 group-hover:via-green-500/50 transition-all duration-500"></div>

                    {/* Solution Text */}
                    <p className="text-gray-400 leading-relaxed group-hover:text-white transition-colors duration-300 text-base md:text-lg">
                        {item.solution}
                    </p>
                </div>
                
                {/* Decorative "Winning" corner indicator */}
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-2 group-hover:translate-y-0">
                    <i className="fas fa-check-circle text-green-500 text-2xl drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;