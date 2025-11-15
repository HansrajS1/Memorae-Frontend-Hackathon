import React from 'react';
import {
  Header,
  Hero,
  PainPoints,
  SocialProofStats,
  HowItWorks,
  Superpowers,
  Testimonials,
  Manifesto,
  Pricing,
  FAQ,
  Footer,
  DemoVideo
} from './sections';

export default function App() {
  return (
    <div className="bg-white font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <DemoVideo />
        <SocialProofStats />
        <HowItWorks />
        <Superpowers />
        <Testimonials />
        <Manifesto />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}