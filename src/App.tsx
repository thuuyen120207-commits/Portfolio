import React from 'react';
import { Navbar } from './components/Navbar';
import { BackgroundVideo } from './components/BackgroundVideo';
import { HeroSection } from './components/HeroSection';
import { ProfileCard } from './components/ProfileCard';

export const App: React.FC = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white text-black flex flex-col justify-between">
      {/* Background video layer (z-0) with gradient overlays */}
      <BackgroundVideo />

      {/* Navigation bar (z-10) */}
      <Navbar />

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-start pb-24">
        {/* Hero section (z-10) */}
        <HeroSection />

        {/* Personal Profile & Content section / card (z-10) */}
        <ProfileCard />
      </main>

      {/* Minimalist Footer */}
      <footer className="relative z-10 w-full py-8 text-center text-xs text-[#6F6F6F] border-t border-black/5 bg-white/60 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} Aethera®. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Designed for <span className="text-black font-medium">Nguyễn Thu Uyên</span> — Đại học Ngoại thương (FTU)
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
