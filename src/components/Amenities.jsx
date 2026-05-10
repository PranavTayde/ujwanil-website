"use client";
import { 
  Home, Utensils, Zap, Droplets, Clock, 
  Brush, Bike, ShieldCheck, BookOpen, Wifi, MapPin 
} from "lucide-react";
import { motion } from "framer-motion";

const facilities = [
  { icon: <Home />, text: "Spacious and well ventilated rooms" },
  { icon: <Utensils />, text: "Hygienic and homestyle quality food" },
  { icon: <Zap />, text: "Hot water facility" },
  { icon: <Droplets />, text: "UV + RO drinking water" },
  { icon: <Clock />, text: "24 hours water supply" },
  { icon: <Brush />, text: "Daily room cleaning" },
  { icon: <Bike />, text: "2 Wheeler parking" },
  { icon: <ShieldCheck />, text: "CCTV security" },
  { icon: <BookOpen />, text: "Clean, calm and safe environment for study" },
  { icon: <Wifi />, text: "Wifi Facility" },
  { icon: <MapPin />, text: "Located nearby college (1.5 KM)" },
];

export default function Amenities() {
  return (
    <section id="amenities" className="py-20 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#001F3F] mb-4 uppercase tracking-tight">
            Our Facilities
          </h2>
          <div className="w-24 h-1.5 bg-[#C5A059] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facilities.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md"
            >
              <div className="text-[#C5A059] bg-[#001F3F]/5 p-3 rounded-xl">
                {item.icon}
              </div>
              <span className="font-semibold text-slate-700 leading-tight">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}