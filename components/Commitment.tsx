import React from 'react';

const Commitment: React.FC = () => {
  return (
    <section className="py-8 bg-slate-900 overflow-hidden relative border-t border-white/5">
      {/* Dark Ambient Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black opacity-80"></div>
      
      {/* Green Ambient Glow behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-green-500/10 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center" data-aos="zoom-in">
        
        <div className="flex flex-col items-center justify-center gap-3">
            
            {/* The Icon - Smaller size */}
            <div className="relative">
                <div className="absolute inset-0 bg-green-500 blur-xl opacity-40 animate-pulse"></div>
                <div className="relative w-14 h-14 rounded-full border-2 border-green-400/50 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.4)] bg-slate-900/50 backdrop-blur-sm">
                    <i className="fas fa-lock text-xl text-white drop-shadow-[0_0_15px_rgba(34,197,94,0.8)]"></i>
                </div>
            </div>

            {/* The Headline - Compact */}
            <h2 className="text-2xl md:text-3xl font-black text-white tracking-tight drop-shadow-[0_0_25px_rgba(34,197,94,0.3)]">
                מפחד <span className="text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-green-600 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]">מהתחייבות?</span>
            </h2>

            {/* The "Takhles" Text - Direct & Detailed */}
            <div className="max-w-2xl mx-auto space-y-3">
                <p className="text-xl text-white font-bold leading-relaxed">
                    תקשיב טוב. ברגע שנכנסת לנבחרת – <span className="text-green-400 underline decoration-green-500/50 underline-offset-4">אין דרך חזרה.</span>
                </p>
                <p className="text-gray-300 text-base leading-relaxed font-light">
                    אני לא נותן לך את האופציה להיכשל או לוותר לעצמך. 
                    שילמת? התחייבת? מעכשיו אני נושף לך בעורף. 
                    אני איתך בווצאפ, רואה מה אכלת, בודק איך התאמנת ולא משחרר עד שאנחנו רואים תוצאות במראה. 
                    אתה כבר לא לבד במלחמה הזאת.
                </p>
            </div>

            {/* Bottom Line */}
            <div className="mt-3 py-1 px-4 border-y border-white/10 bg-white/5 backdrop-blur-sm rounded-full">
                 <p className="text-green-400 font-bold tracking-widest uppercase text-xs">
                    אנחנו מנצחים ביחד. נקודה.
                 </p>
            </div>

        </div>
      </div>
    </section>
  );
};

export default Commitment;