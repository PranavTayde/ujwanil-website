"use client";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-brand-blue/60 z-10" />
      <img 
        src="/images/building-main.jpeg" 
        className="absolute inset-0 w-full h-full object-cover" 
        alt="Ujwanil Residency Building" 
      />
      
      <div className="relative z-20 text-center px-6">
        <motion.span 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-brand-gold font-semibold tracking-[0.3em] uppercase mb-4 block"
        >
          Luxury Living for Students
        </motion.span>
        <motion.h1 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl font-bold text-white mb-6"
        >
          UJWANIL <span className="text-brand-gold">RESIDENCY</span>
        </motion.h1>
        <motion.p 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          Safe & Comfortable Accommodation in Sukhsagar Nagar, Katraj. 
          The perfect environment for your academic success.
        </motion.p>
        <motion.div 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col md:flex-row gap-4 justify-center"
        >
          <button className="bg-brand-gold text-brand-blue px-10 py-4 rounded-xl font-bold hover:gold-shadow transition-all">
            BOOK A VISIT
          </button>
          <button className="glass text-white px-10 py-4 rounded-xl font-bold hover:bg-white/20 transition-all">
            VIEW GALLERY
          </button>
        </motion.div>
      </div>
    </section>
  );
}