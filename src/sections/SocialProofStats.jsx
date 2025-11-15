import React, { useEffect, useState } from 'react';

const StatCard = ({ value, label, gradient }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(value.replace(/\D/g, ""), 10);
    if (!end) return;

    const duration = 2000; 
    const stepTime = Math.abs(Math.floor(duration / end));
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="group p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 border border-gray-100">
      <div
        className={`text-4xl font-extrabold bg-gradient-to-r ${gradient} text-transparent bg-clip-text mb-2 transition-transform duration-500 group-hover:scale-110`}
      >
        {value.includes("+") ? `+${count}` : count}
      </div>
      <div className="text-indigo-700 group-hover:text-indigo-900 text-sm font-medium transition-colors duration-300">
        {label}
      </div>
    </div>
  );
};

const SocialProofStats = () => (
  <section className="py-20 relative bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-100 overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-blue-200 to-pink-200 opacity-20 animate-pulse"></div>

    <div className="max-w-7xl mx-auto px-6 relative z-10">
      <div className="text-2xl md:text-3xl font-bold mb-14 text-center text-indigo-900">
        Your head can't take it any more. <br />
        <span className="text-pink-600">Luckily, now you have help.</span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-8  cursor-pointer text-center">
        <StatCard value="+60000" label="people already living with a peaceful mind" gradient="from-green-500 to-pink-500" />
        <StatCard value="+45" label="countries" gradient="from-blue-500 to-pink-400" />
        <StatCard value="+5000000" label="reminders sent" gradient="from-purple-500 to-pink-500" />
        <StatCard value="+100" label="languages" gradient="from-indigo-500 to-pink-400" />
      </div>
    </div>
  </section>
);

export default SocialProofStats;
