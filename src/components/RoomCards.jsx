"use client";
import { motion } from "framer-motion";

const images = [
  { src: "/images/building-main.jpeg", title: "Building Exterior" },
  { src: "/images/room-double.jpeg", title: "Comfortable triple Sharing" },
  { src: "/images/gallery-1.jpeg", title: "Clean Washrooms" },
  // Add more as you upload them
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-blue">Property Gallery</h2>
          <p className="text-slate-500 mt-2">Take a virtual tour of your next home</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 0.98 }}
              className="relative h-72 rounded-2xl overflow-hidden group cursor-pointer"
            >
              <img src={img.src} alt={img.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-blue/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white font-semibold">{img.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}