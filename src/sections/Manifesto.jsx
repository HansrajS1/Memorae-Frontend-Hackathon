import React from 'react';
import { Bell } from 'lucide-react';
const FloatingUICard = ({ children, className = '' }) => (
  <div 
    className={`bg-gray-800/60 backdrop-blur-lg border border-white/10 rounded-2xl p-4 shadow-xl ${className}`}
  >
    {children}
  </div>
);

const Manifesto = () => {
  return (
    <section className="py-24 px-6 bg-[#0B0F19] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Forgetfulness won't win twice.
          </h2>
          <p className="text-xl text-gray-400">
            We didn't come to create another app. The world doesn't need more productivity tools. It needs fewer things in the head.
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8 items-center">
        
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-green-400">
              We don't organize lives: we decompress them.
            </h3>
            <p className="text-gray-300">
              Chaos isn't solved with more systems, but by removing friction. Memorae converts messages into tasks, audios into text, and ideas into action... Without you having to think twice.
            </p>
            <p className="text-gray-300">
              Memorae doesn't download: <span className="font-medium text-white">it integrates</span>.
              <br/>
              It doesn't demand effort: <span className="font-medium text-white">it eliminates it</span>.
            </p>
          </div>
          
          <div className="relative h-96 space-y-4">
            <FloatingUICard className="w-64 relative z-10 animate-[float_6s_ease-in-out_infinite]">
              <div className="text-gray-400 text-xs font-bold uppercase mb-2">REMINDER</div>
              <p className="text-white font-semibold">Call the dentist and make an appointment</p>
              <div className="mt-2 text-sm font-medium text-blue-400">Monday, 26 | 8:00 AM</div>
            </FloatingUICard>
            
            <FloatingUICard className="w-72 ml-auto relative z-10 animate-[float_6s_ease-in-out_2s_infinite]">
              <div className="text-gray-400 text-xs font-bold uppercase mb-2">LISTS</div>
              <p className="text-white font-semibold mb-2">Your pending tasks:</p>
              <ul className="space-y-1.5 text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-3.5 h-3.5 border-2 border-gray-500 rounded-sm" />
                  Walk Paco 🐶
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-3.5 h-3.5 border-2 border-gray-500 rounded-sm" />
                  Do the grocery shopping
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="w-3.5 h-3.5 border-2 border-gray-500 rounded-sm" />
                  Send a quote
                </li>
              </ul>
            </FloatingUICard>

            <FloatingUICard className="w-56 relative z-10 animate-[float_6s_ease-in-out_4s_infinite]">
              <div className="text-gray-400 text-xs font-bold uppercase mb-2">MEETING</div>
              <p className="text-white font-semibold">Meeting with new client</p>
              <div className="mt-2 text-sm font-medium text-green-400">Tuesday, 27 | 9:00 AM</div>
            </FloatingUICard>
            
            <div className="absolute inset-0 bg-purple-600 opacity-10 blur-[100px] rounded-full" />
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-purple-400">
              We don't sell features: we sell clarity.
            </h3>
            <p className="text-xl font-bold text-white">
              And clarity is power.
            </p>
            <div className="text-gray-300 space-y-4">
              <p>
                We are not an app. We are a change of logic.
              </p>
              <p className="font-medium text-white">
                What we are creating doesn't exist.
              </p>
              <p>
                We don't add functions. We are building a mental operating system.
                A new category, a new habit, a new way of living: with a clear head and life under control.
              </p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 mt-24 pt-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <div className="space-y-10">
              <div>
                <h3 className="text-2xl font-semibold text-green-400 mb-3">
                  Forgetfulness is our enemy.
                </h3>
                <p className="text-lg text-gray-400">
                  We don't compete with other apps. We compete with everything that escapes you. With the important things that never happen. With the <span className="text-white font-medium">mental load that exhausts you.</span>
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-purple-400 mb-3">
                  We don't design for you to look at it.
                </h3>
                <p className="text-lg text-gray-400">
                  We design for you <span className="text-white font-medium">not to even notice it</span>. Memorae doesn't seek attention. It acts just when you need it and disappears afterwards.
                </p>
              </div>
            </div>

            <div className="relative flex items-center justify-center">
   
              <div className="absolute w-96 h-96 bg-green-600 opacity-10 blur-[120px] rounded-full" />
              
              {/* Notification Card */}
              <FloatingUICard className="relative z-10 w-full max-w-md transform transition-all duration-300 hover:scale-105">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center border border-green-500">
                    <Bell size={20} className="text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">Your 4:00 PM Reminder</h4>
                    <p className="text-sm text-gray-400">Just in time.</p>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700">
                  <p className="text-lg text-gray-200">
                    "Remember to send the report to your boss today before 4:00 PM."
                  </p>
                </div>
                
   
                <div className="text-right text-xs text-gray-500 mt-3">
                  17:45
                </div>
              </FloatingUICard>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Manifesto;