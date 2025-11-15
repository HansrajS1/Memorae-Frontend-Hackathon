import React from 'react';
import { X } from 'lucide-react';

const PainPoints = () => {
  const points = [
    "No more mental lists",
    "No more post-its on the mirror",
    "No more missed deadlines",
    "No more missed appointments",
    "No more dead plants",
    "No more reminders on napkins"
  ];

  const scrollingPoints = [...points, ...points];

  return (
    <section className="py-24 px-6 bg-gray-900 text-white">
      <style>{`
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
          animation: scroll-vertical 40s linear infinite;
        }
      `}</style>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
    
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Your head can't take it anymore.
          </h2>

          <div className="space-y-6 text-lg text-gray-300">
            <p>
              You normalized living with your head{' '}
              <span className="text-red-400 font-medium">
                about to explode.
              </span>{' '}
              And you don't even notice anymore.
            </p>
            <p>
              There's always something pending. Something you{' '}
              <span className="text-red-400 font-medium">forget.</span>{' '}
              Something you should be doing right now... but you don't know what.
            </p>
            <p>
              You jot down things so you won't forget them. But you end up{' '}
              <span className="text-gray-500 line-through">
                forgetting why you wrote them.
              </span>{' '}
              And you start again. Over and over.
            </p>
            <p className="text-xl font-semibold text-white">
              Until you decide to let go. And someone appears who gives you back
              something you lost a long time ago:{' '}
              <span className="text-[#25D366] underline decoration-wavy">
                peace of mind.
              </span>
            </p>
          </div>
        </div>
        <div className="relative w-full max-w-md mx-auto lg:max-w-none">
          <div 
            className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-900 to-transparent z-10" 
            aria-hidden="true" 
          />
          
          <div className="h-96 overflow-hidden relative rounded-2xl bg-gray-800/50 p-6">
            <div className="animate-scroll-vertical space-y-4">
              {scrollingPoints.map((point, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 p-4 rounded-lg flex items-center gap-4 border border-gray-700 shadow-lg"
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-red-900/50 rounded-full flex items-center justify-center border-2 border-red-700">
                    <X size={18} className="text-red-400" />
                  </div>
                  <span className="text-gray-200 font-medium text-lg">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div 
            className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-gray-900 to-transparent z-10" 
            aria-hidden="true" 
          />
        </div>
      </div>
    </section>
  );
};

export default PainPoints;