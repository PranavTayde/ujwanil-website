"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  { name: "Ananya S.", text: "Very safe and clean. The food tastes like home!", college: "VIT Pune" },
  { name: "Priya M.", text: "Best PG in Katraj. The study environment is very calm.", college: "VIT Pune" },
  { name: "Snehal K.", text: "Management is very helpful. CCTV security gives peace of mind.", college: "VIT Pune" }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-brand-blue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">Student Reviews</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-sm"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={16} className="fill-brand-gold text-brand-gold" />)}
              </div>
              <p className="italic text-white/80 mb-6">"{rev.text}"</p>
              <div className="font-bold text-brand-gold">{rev.name}</div>
              <div className="text-xs text-white/40">{rev.college}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}