import React, { useState } from 'react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-10 w-full">
      <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        {/* Logo: "Aethera®" (with registered trademark symbol as superscript) */}
        <a href="#" className="font-serif text-3xl tracking-tight text-[#000000] select-none hover:opacity-80 transition-opacity">
          Aethera<sup className="text-sm font-normal align-super">®</sup>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-10 text-sm">
          <a
            href="#home"
            className="text-[#000000] font-medium transition-colors hover:text-black"
          >
            Home
          </a>
          <a
            href="#studio"
            className="text-[#6F6F6F] transition-colors hover:text-black"
          >
            Studio
          </a>
          <a
            href="#about"
            className="text-[#6F6F6F] transition-colors hover:text-black"
          >
            About
          </a>
          <a
            href="#journal"
            className="text-[#6F6F6F] transition-colors hover:text-black"
          >
            Journal
          </a>
          <a
            href="#contact"
            className="text-[#6F6F6F] transition-colors hover:text-black"
          >
            Reach Us
          </a>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center">
          <a
            href="#profile"
            className="rounded-full px-6 py-2.5 text-sm bg-[#000000] text-white hover:scale-[1.03] transition-transform duration-200 shadow-sm"
          >
            Begin Journey
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-black focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden px-8 py-4 bg-white/95 backdrop-blur-md border-b border-black/10 flex flex-col space-y-4 text-sm animate-fade-rise">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#000000] font-medium"
          >
            Home
          </a>
          <a
            href="#studio"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#6F6F6F] hover:text-black"
          >
            Studio
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#6F6F6F] hover:text-black"
          >
            About
          </a>
          <a
            href="#journal"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#6F6F6F] hover:text-black"
          >
            Journal
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[#6F6F6F] hover:text-black"
          >
            Reach Us
          </a>
          <a
            href="#profile"
            onClick={() => setMobileMenuOpen(false)}
            className="rounded-full px-6 py-2.5 text-center text-sm bg-[#000000] text-white hover:scale-[1.03] transition-transform duration-200"
          >
            Begin Journey
          </a>
        </div>
      )}
    </header>
  );
};
