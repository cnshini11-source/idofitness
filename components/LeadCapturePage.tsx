import React, { useState } from 'react';

interface LeadCapturePageProps {
  onBack: () => void;
}

const LeadCapturePage: React.FC<LeadCapturePageProps> = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    age: '',
    goal: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`ברוך הבא לנבחרת, ${formData.name}. אנחנו יוצרים איתך קשר בהקדם.`);
    onBack(); // Go back to home after submit styling
  };

  return (
    <div className="fixed inset-0 z-[100] bg-slate-950 overflow-y-auto min-h-screen flex flex-col">
      {/* Sporty Background Elements */}
      <div className="fixed inset-0 z-0">
          {/* Real Gym Image Background */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')" }}
          ></div>
          
          {/* Heavy Overlay for text readability */}
          <div className="absolute inset-0 bg-slate-950/85 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/80 to-slate-950/90"></div>
          
          {/* Green Accents */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-500/10 blur-[120px] rounded-full opacity-40"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[100px] rounded-full opacity-30"></div>
      </div>

      {/* Navigation / Back Button */}
      <div className="relative z-50 p-6 flex justify-between items-center">
        <button 
            onClick={onBack}
            className="flex items-center gap-2 text-gray-300 hover:text-green-400 transition-all duration-300 group font-bold tracking-wide"
        >
            <i className="fas fa-arrow-right transform group-hover:-translate-x-1 transition-transform"></i>
            <span>חזרה אחורה</span>
        </button>
        <div className="text-xl font-black tracking-tighter">
            IDAN<span className="text-green-500">FIT</span>
        </div>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row max-w-7xl mx-auto w-full relative z-10 p-6 lg:p-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: The "Speech" */}
        <div className="flex-1 flex flex-col justify-center" data-aos="fade-left">
            <div className="inline-block mb-6">
                <span className="py-1 px-3 border border-green-500/40 rounded bg-green-500/10 text-green-400 text-xs font-bold tracking-[0.2em] uppercase backdrop-blur-sm shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                    צעד ראשון הושלם
                </span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight drop-shadow-xl">
                אני רואה שבחרת <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-l from-green-400 to-emerald-200 filter drop-shadow-[0_0_10px_rgba(34,197,94,0.4)]">
                    לעשות שינוי.
                </span>
            </h1>

            <div className="space-y-6 text-lg md:text-xl text-gray-200 font-light leading-relaxed border-r-4 border-green-500 pl-6 pr-6 bg-slate-900/40 py-4 rounded-l-xl backdrop-blur-sm">
                <p>
                    תקשיב, זה לא מובן מאליו.
                    הרוב המוחלט של האנשים שנכנסו לאתר הזה? הם המשיכו לגלול. הם בחרו להישאר באזור הנוחות שלהם. הם בחרו להמשיך להתלונן ששום דבר לא עובד להם.
                </p>
                <p className="text-white font-bold text-xl">
                    אתה עצרת. אתה לחצת.
                </p>
                <p>
                    זה אומר שיש לך את הניצוץ הזה שחיפשתי. את ההבנה שמגיע לך יותר מהבינוניות שסובבת אותך.
                    אני לא מחפש למכור לך חלומות. אני מחפש אנשים שמוכנים לעבוד קשה, שמוכנים להקשיב, ושרעבים לתוצאות.
                </p>
                <p>
                    אם אתה מוכן להתחייב לתהליך - אני מתחייב להביא אותך ליעד. <br/>
                    <span className="text-green-400 font-bold text-2xl mt-2 block">עכשיו הכדור בידיים שלך.</span>
                </p>
            </div>
        </div>

        {/* Right Side: The Form - Sexier Glassmorphism */}
        <div className="flex-1 flex items-center justify-center lg:justify-end w-full" data-aos="fade-right" data-aos-delay="200">
            <div className="w-full max-w-md bg-slate-900/60 backdrop-blur-2xl border border-white/10 p-8 md:p-10 rounded-3xl shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden group hover:border-green-500/30 transition-all duration-500">
                
                {/* Subtle sheen animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>

                <h2 className="text-3xl font-black text-white mb-2 tracking-tight">בוא נצא לדרך <span className="text-3xl">🚀</span></h2>
                <p className="text-gray-400 text-sm mb-8 font-medium">מלא את הפרטים ונבדוק התאמה לתוכנית.</p>

                <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
                    <div className="space-y-1">
                        <label className="text-xs font-bold text-green-400 uppercase tracking-wider ml-1">שם מלא</label>
                        <input 
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full bg-slate-950/50 border border-slate-700/50 p-4 rounded-xl text-white focus:border-green-500 focus:bg-slate-900 focus:ring-1 focus:ring-green-500 outline-none transition-all placeholder-gray-600 font-medium"
                            placeholder="איך קוראים לך?"
                            required
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                            <label className="text-xs font-bold text-green-400 uppercase tracking-wider ml-1">טלפון</label>
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className="w-full bg-slate-950/50 border border-slate-700/50 p-4 rounded-xl text-white focus:border-green-500 focus:bg-slate-900 focus:ring-1 focus:ring-green-500 outline-none transition-all placeholder-gray-600 font-medium"
                                placeholder="050..."
                                required
                            />
                        </div>
                        <div className="space-y-1">
                             <label className="text-xs font-bold text-green-400 uppercase tracking-wider ml-1">גיל</label>
                            <input 
                                type="number" 
                                name="age"
                                value={formData.age}
                                onChange={handleChange}
                                className="w-full bg-slate-950/50 border border-slate-700/50 p-4 rounded-xl text-white focus:border-green-500 focus:bg-slate-900 focus:ring-1 focus:ring-green-500 outline-none transition-all placeholder-gray-600 font-medium"
                                placeholder="25"
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-1">
                        <label className="text-xs font-bold text-green-400 uppercase tracking-wider ml-1">המטרה העיקרית</label>
                        <div className="relative">
                            <select 
                                name="goal"
                                value={formData.goal}
                                onChange={handleChange}
                                className="w-full bg-slate-950/50 border border-slate-700/50 p-4 rounded-xl text-white focus:border-green-500 focus:bg-slate-900 focus:ring-1 focus:ring-green-500 outline-none transition-all cursor-pointer appearance-none font-medium"
                                required
                            >
                                <option value="" disabled className="text-gray-500">בחר מטרה...</option>
                                <option value="tone">🔥 חיטוב וירידה באחוזי שומן</option>
                                <option value="mass">💪 עלייה במסת שריר</option>
                                <option value="strength">⚡ שיפור ביצועים וכוח</option>
                                <option value="lifestyle">🥗 אורח חיים בריא</option>
                            </select>
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none text-green-500">
                                <i className="fas fa-chevron-down"></i>
                            </div>
                        </div>
                    </div>

                    <button 
                        type="submit"
                        className="w-full py-4 mt-6 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-500 hover:to-green-400 text-white font-black text-lg rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300 transform hover:scale-[1.02] active:scale-98 uppercase tracking-wide border border-green-400/20"
                    >
                        שלח פרטים ושרייין מקום
                    </button>
                    
                    <p className="text-center text-[10px] text-gray-500 mt-4 flex items-center justify-center gap-2">
                        <i className="fas fa-lock text-green-500/50"></i> הפרטים שלך מאובטחים ב-100%
                    </p>
                </form>
            </div>
        </div>

      </div>
    </div>
  );
};

export default LeadCapturePage;
