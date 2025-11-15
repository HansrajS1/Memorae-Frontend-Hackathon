import React from 'react';
import { MessageSquarePlus, HardDrive, Search, Lightbulb } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    { 
      name: "Capture Instantly", 
      description: "Send a message, a voice note, or a screenshot. Memorae intelligently remembers it all, so you don't have to.",
      icon: MessageSquarePlus 
    },
    { 
      name: "Organize Automatically", 
      description: "Your ideas, links, and conversations are not just stored; they're smartly grouped by context, people, and intent.",
      icon: HardDrive
    },
    { 
      name: "Recover Without Searching", 
      description: "Simply tell Memorae what you want to retrieve. It instantly finds and displays the exact memory you need, no digging required.",
      icon: Search 
    },
    { 
      name: "Act Intelligently", 
      description: "Beyond remembering, Memorae empowers you with timely reminders, proactive suggestions, and automatic follow-ups.",
      icon: Lightbulb 
    },
  ];

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-blue-200 to-pink-200 opacity-30 animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Seamlessly <span className="text-green-600">Capture</span>, <span className="text-blue-600">Organize</span>, <span className="text-purple-600">Remember</span>, and <span className="text-red-600">Act</span>
          </h2>
          <p className="text-xl text-gray-700">
            Memorae transforms your scattered thoughts into structured memories that drive action, enhance focus, and bring ultimate peace of mind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 pointer lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div 
              key={step.name} 
              className="group relative flex flex-col cursor-pointer items-center text-center p-8 rounded-2xl shadow-xl border border-gray-100 backdrop-blur-md bg-white/70 hover:bg-white/90 transition-all duration-500 ease-in-out transform hover:-translate-y-3 hover:scale-105 hover:shadow-2xl"
              style={{ animation: `fadeInUp 0.6s ease ${i * 0.2}s both` }}
            >
              <div className="absolute -top-6 -left-6 md:-top-8 md:-left-8 text-7xl font-extrabold text-gray-300 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                0{i + 1}
              </div>
              <div className="mb-6 z-10 p-5 rounded-full bg-gradient-to-br from-green-500 to-blue-500 text-white shadow-lg group-hover:from-purple-600 group-hover:to-pink-600 transition-all duration-500 transform group-hover:scale-125 group-hover:rotate-6">
                <step.icon size={40} strokeWidth={2} />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-green-700 transition-colors duration-300">
                  {step.name}
                </h3>
                <p className="text-base text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-green-400 transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorks;
