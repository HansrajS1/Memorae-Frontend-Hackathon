import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FloatingUICard } from '../components';

const Hero = () => {
  return (
    <section className="relative bg-gray-50 pt-6 pb-25 px-6 overflow-hidden">
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#25D366]/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div className="z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 border border-yellow-300 text-xs font-semibold text-yellow-800 mb-6">
            COMING SOON: Memorae will arrive in Gmail soon!
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6">
            You are not designed
            to remember everything.
            <span className="text-green-600"> Memorae is.</span>
          </h1>
          <a href="#pricing" size="lg" className="cursor-pointer bg-[#25D366] hover:bg-[#20bd5a] text-black px-6 py-3 rounded-full font-semibold shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-105 transition-all duration-300 flex items-center gap-2 w-max">
            Try for Free <ArrowRight size={20} />
          </a>
          <div className="mt-12 flex items-center gap-4">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.95-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <p className="font-medium text-gray-600">
              <span className="font-bold text-gray-800">4.8</span> | 60k+ users worldwide
            </p>
          </div>
        </div>
        <div className="relative h-96 lg:h-auto lg:min-h-[500px]">
          <FloatingUICard className="top-0 left-10 w-64" animationDelay="0s">
            <div className="text-gray-500 text-xs font-bold uppercase mb-2">REMINDER</div>
            <p className="text-gray-800 font-semibold text-lg">Call the dentist and make an appointment</p>
            <div className="mt-3 text-sm font-medium text-blue-600">Monday, 26 | 8:00 AM</div>
          </FloatingUICard>

          <FloatingUICard className="bottom-10 right-0 w-72" animationDelay="-2s">
            <div className="text-gray-500 text-xs font-bold uppercase mb-2">LISTS</div>
            <p className="text-gray-800 font-semibold mb-2">Your pending tasks:</p>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-4 h-4 border-2 border-gray-400 rounded-sm" />
                Walk Paco 🐶
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-4 h-4 border-2 border-gray-400 rounded-sm" />
                Do the grocery shopping
              </li>
              <li className="flex items-center gap-2 text-gray-700">
                <div className="w-4 h-4 border-2 border-gray-400 rounded-sm" />
                Send a quote
              </li>
            </ul>
          </FloatingUICard>

          <FloatingUICard className="top-1/2 -translate-y-1/2 right-10 w-56" animationDelay="-4s">
             <div className="text-gray-500 text-xs font-bold uppercase mb-2">MEETING</div>
            <p className="text-gray-800 font-semibold text-lg">Meeting with new client</p>
            <div className="mt-3 text-sm font-medium text-green-600">Tuesday, 27 | 9:00 AM</div>
          </FloatingUICard>
        </div>
      </div>
    </section>
  );
};

export default Hero;