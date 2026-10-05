import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative z-10 flex flex-col items-center justify-center text-center px-6"
      style={{
        paddingTop: 'calc(8rem - 75px)',
        paddingBottom: '2.5rem',
      }}
    >
      {/* Headline:
          Text: "Beyond silence, we build the eternal."
          Styling: text-5xl sm:text-7xl md:text-8xl, max-w-7xl, font-normal
          Font: Instrument Serif
          Line height: 0.95
          Letter spacing: -2.46px
          Color: #000000 for main text, #6F6F6F for italic emphasized words ("silence," and "the eternal.")
          Animation: animate-fade-rise
      */}
      <h1
        className="font-serif text-5xl sm:text-7xl md:text-8xl max-w-7xl font-normal animate-fade-rise"
        style={{
          lineHeight: 0.95,
          letterSpacing: '-2.46px',
        }}
      >
        <span className="text-[#000000]">Beyond </span>
        <span className="text-[#6F6F6F] italic">silence, </span>
        <span className="text-[#000000]">we build </span>
        <span className="text-[#6F6F6F] italic">the eternal.</span>
      </h1>

      {/* Description:
          Text: "Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through the noise, we craft digital havens for deep work and pure flows."
          Styling: text-base sm:text-lg, max-w-2xl, mt-8, leading-relaxed
          Color: #6F6F6F
          Animation: animate-fade-rise-delay
      */}
      <p className="text-base sm:text-lg max-w-2xl mt-8 leading-relaxed text-[#6F6F6F] animate-fade-rise-delay">
        Building platforms for brilliant minds, fearless makers, and thoughtful souls. Through the noise, we craft digital havens for deep work and pure flows.
      </p>

      {/* Hero CTA Button:
          Text: "Begin Journey"
          Styling: rounded-full, px-14 py-5, text-base, mt-12
          Colors: black background (#000000), white text (#FFFFFF)
          Hover: scale 1.03
          Animation: animate-fade-rise-delay-2
      */}
      <a
        href="#profile"
        className="rounded-full px-14 py-5 text-base mt-12 bg-[#000000] text-[#FFFFFF] hover:scale-[1.03] transition-transform duration-200 shadow-md animate-fade-rise-delay-2 inline-block cursor-pointer"
      >
        Begin Journey
      </a>
    </section>
  );
};
