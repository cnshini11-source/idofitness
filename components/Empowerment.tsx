import React from 'react';

const Empowerment: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative border-t border-white/5 overflow-hidden">
      
      {/* Background Image Layer - Preserved */}
      <div className="absolute inset-0 z-0 pointer-events-none">
          <div 
            className="absolute inset-0 bg-cover bg-no-repeat opacity-40 md:opacity-50"
            style={{ 
                backgroundImage: "url('https://i.imgur.com/ROWRU1F.jpeg')",
                backgroundPosition: 'center 20%'
            }}
          ></div>
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-slate-900/50 to-slate-900"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-down">
            <h2 className="text-5xl md:text-8xl font-black mb-4 text-white drop-shadow-2xl tracking-tight leading-none">
                נעים מאוד, <br className="md:hidden" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600">אני עידן.</span>
            </h2>
            <p className="text-xl md:text-3xl text-gray-200 font-bold mt-4 tracking-wide shadow-black drop-shadow-lg">
                השותף שלך למסע.
            </p>
        </div>

        {/* Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Right Column (in RTL): Text Content */}
            <div className="order-2 lg:order-1 relative" data-aos="fade-right">
                <div className="absolute -right-6 top-0 bottom-0 w-1 bg-gradient-to-b from-green-500 via-green-500/20 to-transparent opacity-50 hidden lg:block"></div>

                <div className="space-y-8">
                    <h3 className="text-3xl md:text-4xl font-black text-white leading-tight">
                        כולנו היינו שם. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">מתחילים בשיא ונשברים.</span>
                    </h3>

                    <div className="text-lg md:text-xl text-gray-300 font-light leading-relaxed space-y-6">
                        <p>
                            מתחילים להתאמן עם דרייב ואז אתה מוצא את עצמך ב-1 בלילה <strong className="text-white font-bold">מפרק את המקרר לחתיכות.</strong>
                            <br />
                            זה קרה לי, ואני בטוח שלהרבה ממי שנמצא כאן.
                        </p>
                        
                        <div className="border-r-4 border-green-500 pr-6 py-1">
                             <p className="text-white font-medium text-xl italic">
                                "הסיבה זה לא בגלל שאתה בן אדם חלש או מטומטם. זה בגלל שאין תוכנית מסודרת."
                            </p>
                        </div>

                        <p>
                            אין כיוון ברור. אתה לוקח סרטון משם, תוכנית משם, ונהיה לך <strong className="text-white">סלט בראש במקום בצלחת.</strong>
                            <br/><br/>
                            אני כאן לתת לך כיוון. לתת לך את כל הכלים והדרייב להמשיך למרות הקושי, <span className="bg-green-500/20 text-green-400 font-bold px-1 rounded">ולא להרעיב את עצמך.</span>
                        </p>

                        <p className="text-xl md:text-2xl font-black text-white mt-6 drop-shadow-lg">
                            אם אני יצאתי מהלופ הזה - <span className="text-green-500 border-b-2 border-green-500/50 pb-1">גם אתה יכול.</span>
                        </p>
                    </div>

                    <div className="pt-4 flex items-center gap-4">
                         <div className="h-px w-20 bg-green-500"></div>
                         <span className="text-green-500 font-bold tracking-widest uppercase text-sm">האמת הפשוטה</span>
                    </div>
                </div>
            </div>

            {/* Left Column (in RTL): Guarantee Box - MODIFIED VERSION */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end" data-aos="fade-left">
                {/* Reduced width from max-w-md to max-w-sm */}
                <div className="relative group w-full max-w-sm perspective-1000">
                    
                    {/* The Falling Sign - Guarantee Badge */}
                    <div className="absolute -top-10 -right-4 z-40 transform rotate-12 transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110 origin-top-center drop-shadow-[0_20px_20px_rgba(0,0,0,0.8)]">
                        <div className="relative bg-gradient-to-br from-red-600 to-red-700 text-white px-5 py-3 rounded-xl shadow-xl border-2 border-red-400/50 flex flex-col items-center">
                            {/* Pin */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-200 rounded-full shadow-inner border border-gray-400 z-50"></div>
                            
                            <p className="text-center leading-none">
                                <span className="block text-xs font-bold opacity-90 mb-1 tracking-wide">תקשיב טוב:</span>
                                <span className="block text-xl font-black uppercase tracking-tight drop-shadow-md">
                                    אתה משלם<br/>
                                    <span className="text-yellow-300 drop-shadow">רק על התוצאה</span>
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Outer Neon Glow - Kept for atmosphere */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-500 via-emerald-400 to-green-600 rounded-3xl opacity-50 blur-xl group-hover:opacity-80 group-hover:blur-2xl transition-all duration-700 animate-pulse-slow"></div>
                    
                    {/* The Box Container - Removed spinning border div */}
                    <div className="relative bg-[#0a0a0a] rounded-3xl overflow-hidden shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]">
                        
                        {/* Inner Content Background - Increased border visibility slightly since spinner is gone */}
                        <div className="relative h-full bg-slate-900/95 backdrop-blur-xl rounded-3xl p-6 pb-10 text-center border border-white/10 shadow-[inset_0_0_30px_rgba(0,0,0,0.6)]">
                            
                            {/* Spotlight Effect inside box */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-green-500/10 via-transparent to-transparent pointer-events-none"></div>

                            {/* Content */}
                            <div className="relative z-10 flex flex-col items-center">
                                
                                {/* Label */}
                                <div className="mb-5">
                                    <span className="inline-block py-1.5 px-4 rounded-full bg-green-500/10 border border-green-500/40 text-green-400 text-[10px] font-black tracking-[0.3em] uppercase shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                                        ההתחייבות שלי
                                    </span>
                                </div>

                                {/* Main Heading Area - Adjusted Font Sizes for Smaller Box */}
                                <div className="mb-2 leading-none">
                                    <span className="block text-2xl font-bold text-gray-100 mb-0 drop-shadow-md">תן לי</span>
                                    
                                    {/* The Explosive Number */}
                                    <div className="relative inline-block my-1 py-2">
                                        {/* Back Glow Layer - Reduced size */}
                                        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-green-500 blur-3xl opacity-60 text-[8rem] font-black pointer-events-none">60</span>
                                        
                                        {/* Main Text - Reduced from 7.5rem/9rem to 6.5rem/8rem */}
                                        <div className="relative flex items-baseline justify-center">
                                            <span className="text-[6.5rem] md:text-[8rem] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-green-100 to-green-500 drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] z-10 leading-[0.9]">
                                                60
                                            </span>
                                            <span className="absolute bottom-5 -right-5 text-xl font-black text-slate-900 bg-green-500 px-2 py-0.5 rounded shadow-[0_0_15px_rgba(34,197,94,0.8)] transform -rotate-6 z-20 border-2 border-white">
                                                יום
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-xl md:text-2xl font-black text-white leading-tight mb-5 drop-shadow-lg">
                                    ואני משנה לך את <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 drop-shadow-[0_0_10px_rgba(34,197,94,0.5)]">הגוף.</span>
                                </p>

                                {/* Separator Line */}
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-green-500/30 to-transparent mb-6"></div>

                                {/* No BS Text */}
                                <p className="text-gray-300 font-medium text-base md:text-lg leading-relaxed mb-6">
                                    בלי אותיות קטנות. בלי סיפורים.<br/>
                                    <strong className="text-white text-lg md:text-xl drop-shadow-md border-b-2 border-red-500/50">תוצאות פסיכיות או כלום.</strong>
                                </p>

                                {/* The Badge - "Full Responsibility" */}
                                <div className="relative group/badge cursor-default">
                                    <div className="absolute inset-0 bg-green-500 blur-xl opacity-20 group-hover/badge:opacity-40 transition-opacity duration-300"></div>
                                    <div className="relative bg-slate-950 border-2 border-green-500/50 rounded-xl px-6 py-3 shadow-[0_0_30px_rgba(34,197,94,0.15)] hover:shadow-[0_0_50px_rgba(34,197,94,0.3)] hover:border-green-400 transition-all duration-300 hover:-translate-y-1">
                                        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                                        <div className="flex items-center justify-center gap-2">
                                            <i className="fas fa-shield-alt text-green-500 text-xl animate-pulse"></i>
                                            <span className="text-xl md:text-2xl font-black italic tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-white to-green-300 drop-shadow-[0_0_8px_rgba(34,197,94,0.8)]">
                                                באחריות מלאה.
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Empowerment;