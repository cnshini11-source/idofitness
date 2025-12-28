import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    goal: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    alert(`תודה על פנייתך, ${formData.name}! עידן יחזור אליך בהקדם.`);
    setFormData({ name: '', phone: '', goal: '' });
  };

  return (
    <section id="contact" className="py-12 bg-slate-900 relative scroll-mt-20">
      {/* Decorative background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl font-black mb-6" data-aos="fade-up">מוכן לקחת את הצעד הראשון?</h2>
        <p className="text-gray-400 mb-10 text-lg" data-aos="fade-up" data-aos-delay="100">
          תשאיר פרטים ועידן יחזור אליך בהקדם.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4" data-aos="zoom-in" data-aos-delay="200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="relative group">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="שם מלא" 
                required
                className="w-full bg-slate-800/80 border border-white/20 p-4 rounded-xl focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-white placeholder-gray-400 font-medium"
              />
            </div>
            
            <div className="relative group">
              <input 
                type="tel" 
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="טלפון" 
                required
                className="w-full bg-slate-800/80 border border-white/20 p-4 rounded-xl focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all text-white placeholder-gray-400 font-medium"
              />
            </div>
          </div>
          
          <div className="relative group">
            <select 
              name="goal"
              value={formData.goal}
              onChange={handleChange}
              required
              className="w-full bg-slate-800/80 border border-white/20 p-4 rounded-xl focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-all appearance-none cursor-pointer font-bold text-lg"
              style={{ 
                  color: formData.goal ? '#ffffff' : '#9ca3af',
                  // Ensure dropdown options have dark background on all browsers
                  backgroundImage: 'none' 
              }}
            >
              <option value="" disabled className="bg-slate-900 text-gray-400">מה המטרה שלך?</option>
              <option value="summer_tone" className="bg-slate-900 text-white py-2">🔥 להתחטב לפני הקיץ</option>
              <option value="muscle_gain" className="bg-slate-900 text-white py-2">💪 עליה במסת שריר</option>
              <option value="fat_loss" className="bg-slate-900 text-white py-2">⚖️ להוריד שומן</option>
            </select>
            
            {/* Custom arrow icon for select */}
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-green-500">
              <i className="fas fa-chevron-down text-lg"></i>
            </div>
          </div>
          
          <button 
            type="submit"
            className="w-full bg-green-600 hover:bg-green-500 text-white py-4 rounded-xl font-black text-xl transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] hover:scale-[1.02] active:scale-95 mt-6 border border-green-400/30"
          >
            אני מוכן. בוא נצא לדרך 🚀
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;