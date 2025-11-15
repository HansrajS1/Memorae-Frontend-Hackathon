import React from 'react';
import { Linkedin, Twitter, Youtube, Instagram, ArrowRight, Facebook } from 'lucide-react';

const FooterBrand = () => {
  return (
    <footer className="relative bg-gradient-to-br from-[#0D1A2B] via-[#0F2238] to-[#0D1A2B] text-gray-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-16 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            memorae <br />
            You just live. <br />
            <span className="text-green-400">Memorae remembers.</span>
          </h2>
          <p className="text-lg text-gray-400 mb-8">
            Your to-do list asked us for help. Here we are. 
          </p>
          <a href="#pricing" className="px-6 w-60 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto bg-[#25D366] hover:bg-[#20bd5a] text-black shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-105">
            Try Memorae for Free
            <ArrowRight size={20} />
          </a>
        </div>
        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://www.linkedin.com/company/memorae-ai/" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors"><Linkedin size={22} /></a>
          <a href="https://www.youtube.com/@memoraeAi" target="_blank" rel="noopener noreferrer" className="hover:text-green-400 transition-colors"><Youtube size={22} /></a>
          <a href="https://www.facebook.com/memoraeai/" className="hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer"><Facebook size={22} /></a>
          <a href="https://www.instagram.com/memorae.ai/" className="hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer"><Instagram size={22} /></a>
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm">
          <p className="mb-4 md:mb-0">© {new Date().getFullYear()} Genera Capital SLU. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="https://memorae.ai/privacy-policy/" className="font-medium hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
            <a href="https://memorae.ai/terms/" className="font-medium hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
            <a href="https://memorae.ai/cookies-settings/" className="font-medium hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer">Cookie Settings</a>
            <a href="https://memorae.ai/legal-notice/" className="font-medium hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer">Legal Notice</a>
            <a href="https://memorae.ai/communications/" className="font-medium hover:text-green-400 transition-colors" target="_blank" rel="noopener noreferrer">Communication Channels</a>
          </div>
        </div>
      </div>
      <div className="absolute w-72 h-72 bg-purple-500 rounded-full -bottom-24 -left-24 blur-3xl opacity-30" />
      <div className="absolute w-96 h-96 bg-green-500 rounded-full -top-32 -right-32 blur-3xl opacity-20" />
    </footer>
  );
};

export default FooterBrand;
