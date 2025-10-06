import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileOpen(!isMobileOpen);
  };

  // Auto-close mobile menu on desktop resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-r from-neon-purple/20 via-black/50 to-neon-cyan/20 backdrop-blur-xl border-b border-white/20 p-6 z-50 shadow-2xl slide-in glow-pulse">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo - Bigger & Pulsing */}
        <h1 className="text-4xl font-black neon-text flex items-center glow-pulse"> 
          <span className="mr-3 text-5xl"></span> {/* Bigger vortex emoji; swap for SVG */}
          Vortex 2K25
        </h1>
        {/* Desktop Menu - Bigger Links with Ripple Hovers */}
        <ul className="hidden md:flex space-x-8 items-center">
          {[
            { href: '#about', text: 'About' },
            { href: '#tracks', text: 'Tracks' },
            { href: '#schedule', text: 'Schedule' },
            // { href: '#judges', text: 'Judges' },
            { href: '#prizes', text: 'Prizes' },
            { href: '#faqs', text: 'FAQs' },
            // { href: '#gallery', text: 'Gallery' },
            { href: '#contact', text: 'Contact' },
          ].map((item) => (
            <li key={item.href} className="relative group">
              <a
                href={item.href}
                className="text-xl py-3 px-4 relative transition-all duration-500 hover:text-neon-cyan hover:scale-110"
              >
                {item.text}
                {/* Ripple Glow Underline */}
                <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-neon-purple to-neon-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm scale-110"></span>
                <span className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-neon-purple to-neon-cyan group-hover:w-full transition-all duration-500"></span>
              </a>
            </li>
          ))}
          {/* CTA Button - Bigger & Pulsing */}
          <li>
            <a
              href="#register"
              className="text-xl bg-gradient-to-r from-neon-purple to-neon-cyan text-white px-8 py-4 rounded-full font-bold relative overflow-hidden hover:scale-110 hover:shadow-2xl hover:shadow-neon-purple/50 transition-all duration-500 glow-pulse"
            >
              <span className="relative z-10">Register Now</span>
              {/* Animated Shine Overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
            </a>
          </li>
        </ul>
        {/* Mobile Hamburger - Animated Icon */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-4xl neon-text glow-pulse transition-transform duration-300 hover:scale-110"
        >
          {isMobileOpen ? '✕' : '☰'}
        </button>
      </div>
      {/* Mobile Menu - Slide-Down with Animations */}
      {isMobileOpen && (
        <ul className="md:hidden flex flex-col space-y-6 mt-6 p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 mx-4 animate-slide-down">
          {[
            { href: '#about', text: 'About' },
            { href: '#tracks', text: 'Tracks' },
            { href: '#schedule', text: 'Schedule' },
            { href: '#judges', text: 'Judges' },
            { href: '#prizes', text: 'Prizes' },
            { href: '#faqs', text: 'FAQs' },
            { href: '#gallery', text: 'Gallery' },
            { href: '#contact', text: 'Contact' },
          ].map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-lg py-4 block hover:text-neon-cyan hover:scale-105 transition-all duration-300 border-b border-white/10 last:border-b-0"
                onClick={toggleMobileMenu}
              >
                {item.text}
              </a>
            </li>
          ))}
          <li className="pt-4">
            <a
              href="#register"
              className="bg-gradient-to-r from-neon-purple to-neon-cyan text-white px-8 py-4 rounded-full font-bold text-center hover:scale-105 transition-all duration-300 glow-pulse"
              onClick={toggleMobileMenu}
            >
              Register Now
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}