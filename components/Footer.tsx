import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-slate-950 border-t border-white/5 text-gray-500 text-sm relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 pb-8 border-b border-white/5">
            <div className="text-center md:text-right">
                <p className="font-bold text-gray-300 text-lg">IDANFIT - בונים את הגרסה הכי חזקה שלך</p>
                <p className="text-xs text-gray-600 mt-1">© 2024 כל הזכויות שמורות.</p>
            </div>
            
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-500 hover:text-white transition-all duration-300 hover:scale-110 shadow-lg border border-white/5 group">
                  <i className="fab fa-instagram text-lg group-hover:animate-pulse"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all duration-300 hover:scale-110 shadow-lg border border-white/5">
                  <i className="fab fa-facebook-f text-lg"></i>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-black hover:text-white hover:border-white/20 transition-all duration-300 hover:scale-110 shadow-lg border border-white/5">
                  <i className="fab fa-tiktok text-lg"></i>
              </a>
            </div>
        </div>

        {/* Credit Line - LEVI (Revamped) */}
        <div className="pt-10 pb-4 text-center flex justify-center">
            <a 
                href="https://cnshini11-source.github.io/levi-studio/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative inline-block cursor-pointer"
            >
                
                {/* Background Glow Effect */}
                <div className="absolute -inset-4 bg-green-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                <div className="relative flex flex-col items-center gap-1 transition-transform duration-300 group-hover:-translate-y-1">
                    <span className="text-xs font-bold tracking-[0.2em] text-gray-600 group-hover:text-green-400 transition-colors uppercase">
                        נבנה ועוצב ע"י
                    </span>
                    
                    <div className="relative">
                        <span className="text-4xl md:text-5xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-gray-400 via-gray-100 to-gray-500 group-hover:from-white group-hover:via-green-200 group-hover:to-emerald-400 transition-all duration-500 drop-shadow-2xl">
                            LEVI
                        </span>
                        
                        {/* Animated Underline */}
                        <div className="absolute -bottom-1 left-0 w-0 h-[3px] bg-green-500 group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                        
                        {/* Tech Decor Elements */}
                        <i className="fas fa-bolt absolute -right-6 top-1/2 -translate-y-1/2 text-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 text-sm animate-pulse"></i>
                        <i className="fas fa-code absolute -left-6 top-1/2 -translate-y-1/2 text-green-500 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-100 text-sm"></i>
                    </div>
                </div>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;