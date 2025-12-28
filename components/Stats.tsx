import React from 'react';

interface StatItemProps {
  number: string;
  label: string;
  delay: number;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, delay }) => (
  <div data-aos="zoom-in" data-aos-delay={delay} className="p-4">
    <div className="text-4xl md:text-5xl font-black text-green-500 mb-2">{number}</div>
    <div className="text-gray-400 font-medium">{label}</div>
  </div>
);

const Stats: React.FC = () => {
  return (
    <section className="py-12 bg-slate-900 border-y border-white/5 relative z-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x divide-white/5 divide-x-reverse">
        <StatItem number="120+" label="מתאמנים מרוצים" delay={0} />
        <StatItem number="5" label="שנות ניסיון" delay={100} />
        <StatItem number="100%" label="התאמה אישית" delay={200} />
        <StatItem number="24/7" label="ליווי בוואטסאפ" delay={300} />
      </div>
    </section>
  );
};

export default Stats;