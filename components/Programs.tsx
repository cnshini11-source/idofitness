import React from 'react';

const Programs: React.FC = () => {
  return (
    <section id="programs" className="py-20 px-6 bg-slate-900 relative scroll-mt-20">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full max-h-[500px] bg-green-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-black mb-16 text-center" data-aos="fade-down">
          התוכניות <span className="text-green-500">שלנו</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1: 1-on-1 */}
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-white/10 hover:border-green-500 transition-all duration-300 group hover:-translate-y-2" data-aos="fade-up">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 text-3xl mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <i className="fas fa-dumbbell"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">אימון אישי 1-על-1</h3>
                <p className="text-gray-400 mb-6">עבודה ממוקדת על הטכניקה והיעדים שלך בסטודיו מאובזר.</p>
                <ul className="text-sm text-gray-300 space-y-3 mb-8">
                    <li className="flex items-center gap-2"><i className="fas fa-check text-green-500"></i> ליווי צמוד בכל חזרה</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check text-green-500"></i> בניית תוכנית בהתאמה מלאה</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check text-green-500"></i> דגש על טכניקה ומניעת פציעות</li>
                </ul>
                <a href="#contact" className="block w-full py-3 rounded-xl border border-green-500 text-green-500 text-center font-bold hover:bg-green-500 hover:text-white transition-all">
                    אני מעוניין
                </a>
            </div>

            {/* Card 2: Online (Featured) */}
            <div className="bg-slate-800 p-8 rounded-3xl border border-green-500 relative transform md:-translate-y-4 shadow-2xl shadow-green-900/20" data-aos="fade-up" data-aos-delay="100">
                <span className="absolute -top-4 right-1/2 translate-x-1/2 bg-green-500 text-slate-900 text-xs font-black px-4 py-1 rounded-full uppercase tracking-wider">הכי מבוקש</span>
                <div className="w-16 h-16 bg-green-500 rounded-2xl flex items-center justify-center text-white text-3xl mb-6 shadow-lg shadow-green-500/30">
                    <i className="fas fa-mobile-screen-button"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">ליווי אונליין Premium</h3>
                <p className="text-gray-400 mb-6">המעטפת המקצועית שלי אצלך בכיס, מכל מקום ובכל זמן.</p>
                <ul className="text-sm text-gray-300 space-y-3 mb-8">
                    <li className="flex items-center gap-2"><i className="fas fa-check text-green-500"></i> אפליקציית אימונים מתקדמת</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check text-green-500"></i> מעקב שקילות ומדדים שבועי</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check text-green-500"></i> זמינות 24/7 בוואטסאפ לכל שאלה</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check text-green-500"></i> התאמות תפריט ותוכנית בזמן אמת</li>
                </ul>
                <a href="#contact" className="block w-full py-3 rounded-xl bg-green-600 text-white text-center font-bold hover:bg-green-500 transition-all shadow-lg hover:shadow-green-500/25">
                    אני רוצה להתחיל
                </a>
            </div>

            {/* Card 3: Nutrition */}
            <div className="bg-slate-800/50 p-8 rounded-3xl border border-white/10 hover:border-green-500 transition-all duration-300 group hover:-translate-y-2" data-aos="fade-up" data-aos-delay="200">
                <div className="w-16 h-16 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 text-3xl mb-6 group-hover:bg-green-500 group-hover:text-white transition-colors">
                    <i className="fas fa-apple-whole"></i>
                </div>
                <h3 className="text-2xl font-bold mb-4">ייעוץ תזונה</h3>
                <p className="text-gray-400 mb-6">תפריט גמיש שלא יגרום לך לסבול, אלא להנות מהדרך.</p>
                <ul className="text-sm text-gray-300 space-y-3 mb-8">
                    <li className="flex items-center gap-2"><i className="fas fa-check text-green-500"></i> מותאם לאורח החיים שלך</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check text-green-500"></i> מתכונים קלים וטעימים</li>
                    <li className="flex items-center gap-2"><i className="fas fa-check text-green-500"></i> אסטרטגיות להתמודדות עם חשקים</li>
                </ul>
                <a href="#contact" className="block w-full py-3 rounded-xl border border-green-500 text-green-500 text-center font-bold hover:bg-green-500 hover:text-white transition-all">
                    אני מעוניין
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;