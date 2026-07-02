import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VisionMission from './components/VisionMission';
import Pillars from './components/Pillars';
import Membership from './components/Membership';
import ActionPlan from './components/ActionPlan';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-[#4B5563] font-sans selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <VisionMission />
        <Pillars />
        <Membership />
        <ActionPlan />
      </main>
      <Footer />
    </div>
  );
}

export default App;
