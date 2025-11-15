import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Button } from '../components';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  const CheckItem = ({ children }) => (
    <li className="flex items-center gap-3 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
      <Check size={16} className="text-green-500" />
      <span className="text-gray-700">{children}</span>
    </li>
  );

  return (
    <section id="pricing" className="py-24 px-6 bg-gradient-to-br from-gray-50 via-indigo-50 to-purple-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-200 via-blue-200 to-pink-200 opacity-10 animate-pulse"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <h1 className="text-2xl h-20 md:text-6xl font-extrabold text-gray-900 mb-4 bg-gradient-to-r from-green-500 via-blue-500 to-pink-500 text-transparent bg-clip-text">
            Your chaos, your plan
          </h1>
          <p className="text-lg text-gray-700">Choose how you want Memorae to help you not lose your head.</p>
        </div>
        <div className="flex justify-center items-center gap-4 mb-10">
          <span className={`font-medium ${!isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>Monthly</span>
          <button
            onClick={() => setIsAnnual(!isAnnual)}
            className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${isAnnual ? 'bg-green-600' : 'bg-gray-300'} shadow-inner`}
          >
            <span
              className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 transform ${isAnnual ? 'translate-x-6' : 'translate-x-0'} shadow-md`}
            />
          </button>
          <span className={`font-medium ${isAnnual ? 'text-gray-900' : 'text-gray-500'}`}>
            Annual <span className="text-green-600">(-40%)</span>
          </span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-stretch">
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-blue-500 text-transparent bg-clip-text mb-2">Pro</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-extrabold text-gray-900">
                ${isAnnual ? "2.99" : "4.99"}
              </span>
              <span className="text-gray-500">/ month</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">{isAnnual ? "Billed $35.88 annually" : "Billed monthly"}</p>
            <Button variant="outline" className="w-full cursor-pointer mb-8">Try for Free</Button>
            <ul className="space-y-3">
              <CheckItem>Unlimited reminders</CheckItem>
              <CheckItem>Memory everywhere</CheckItem>
              <CheckItem>Multi-calendar integration</CheckItem>
              <CheckItem>Memory trunk</CheckItem>
              <CheckItem>Create & manage lists</CheckItem>
            </ul>
          </div>
          <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl border-2 border-green-500 flex flex-col relative transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-green-500 to-pink-500 text-transparent bg-clip-text mb-2">Supernova</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-extrabold text-gray-900">
                ${isAnnual ? "8.99" : "14.99"}
              </span>
              <span className="text-gray-500">/ month</span>
            </div>
            <p className="text-sm text-gray-500 mb-6">{isAnnual ? "Billed $107.88 annually" : "Billed monthly"}</p>
            <Button variant="primary" className="w-full cursor-pointer mb-8">Try for Free</Button>
            <ul className="space-y-3">
              <CheckItem>Everything in Pro, plus:</CheckItem>
              <CheckItem>Friend-to-friend reminders</CheckItem>
              <CheckItem>Image actions</CheckItem>
              <CheckItem>Daily briefing</CheckItem>
              <CheckItem>Full control dashboard</CheckItem>
              <CheckItem>Priority support</CheckItem>
              <CheckItem>Long-term memory</CheckItem>
            </ul>
          </div>
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-200 flex flex-col transition-all duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-2xl">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text mb-2">Lifetime</h3>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-extrabold text-gray-900">
                $199.00
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-6">One-time payment. Save over $900 in 5 years.</p>
            <Button variant="secondary" className="w-full cursor-pointer mb-8">Activate Now</Button>
            <ul className="space-y-3">
              <CheckItem>All Supernova features</CheckItem>
              <CheckItem>No subscriptions</CheckItem>
              <CheckItem>Feature priority</CheckItem>
              <CheckItem>Long-term memory</CheckItem>
            </ul>
          </div>
        </div>
        <div className="text-center mt-12 text-gray-700 text-sm">
          <strong>14-day money-back guarantee.</strong> Try it for free. Then you have a full 14 days to request a complete refund. No questions asked.
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Pricing;
