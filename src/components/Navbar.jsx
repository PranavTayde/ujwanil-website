"use client";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${
      scrolled || mobileMenuOpen ? "bg-[#001F3F] py-3 shadow-lg" : "bg-transparent py-6"
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        
        {/* Logo Image & Text */}
        <a href="#home" className="flex items-center gap-3">
          <img 
            src="/images/logo-gold.jpg" 
            alt="Ujwanil Residency Logo" 
            className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-full" 
          />
          <div className="flex flex-col md:flex-row md:gap-1.5 leading-none">
            <span className="text-white font-bold text-xl md:text-2xl tracking-tighter">UJWANIL</span>
            <span className="text-[#C5A059] font-bold text-xl md:text-2xl tracking-tighter">RESIDENCY</span>
          </div>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-white/90 text-xs font-bold uppercase tracking-[0.2em]">
          <a href="#home" className="hover:text-[#C5A059] transition-colors">Home</a>
          <a href="#about" className="hover:text-[#C5A059] transition-colors">About</a>
          {/* Changed href from #rooms to #gallery here */}
          <a href="#gallery" className="hover:text-[#C5A059] transition-colors">Rooms</a>
          <a href="#contact" className="hover:text-[#C5A059] transition-colors">Contact</a>
          <a href="tel:+917709548834" className="bg-[#C5A059] text-[#001F3F] px-6 py-2.5 rounded-full flex items-center gap-2 hover:bg-white transition-all scale-95 hover:scale-100">
            <Phone size={14} /> CALL NOW
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#001F3F] border-t border-white/10 px-6 py-8 flex flex-col gap-6 text-white animate-in slide-in-from-top duration-300">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold">Home</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold">About</a>
          {/* Changed href from #rooms to #gallery here as well */}
          <a href="#gallery" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold">Rooms</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg font-bold">Contact</a>
          <a href="tel:+917709548834" className="bg-[#C5A059] text-[#001F3F] p-4 rounded-xl flex justify-center items-center gap-3 font-bold">
            <Phone size={20} /> CALL NOW
          </a>
        </div>
      )}
    </nav>
  );
}