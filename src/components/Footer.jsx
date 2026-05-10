import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#001F3F] text-white pt-24 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6">UJWANIL <span className="text-[#C5A059]">RESIDENCY</span></h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Safe and comfortable accommodation for girls in Pune. Security, homestyle food, and a study-friendly environment all in one place.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-[#C5A059]">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><a href="#home">Home</a></li>
            <li><a href="#rooms">Room Categories</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Location</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-[#C5A059]">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li>
              <a href="tel:+917709548834" className="flex gap-3 hover:text-[#C5A059] transition-colors">
                <Phone size={16} /> +91 7709548834
              </a>
            </li>
            <li>
              <a href="mailto:contact@ujwanil.com" className="flex gap-3 hover:text-[#C5A059] transition-colors">
                <Mail size={16} /> contact@ujwanil.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={24} className="shrink-0 mt-1" /> 
              UJWANIL BUNGLOW, Lane No. 9, Sukhsagar Nagar, Katraj, Pune, Maharashtra 411046
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-[#C5A059]">Location Map</h4>
          <div className="w-full h-48 bg-white/5 rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all">
            {/* Universal mobile-friendly embed link */}
            <iframe 
              src="https://maps.google.com/maps?q=UJWANIL+BUNGLOW,+Lane+No.+9,+Sukhsagar+Nagar,+Katraj,+Pune&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              className="w-full h-full border-0 rounded-xl" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-white/10 text-white/30 text-xs">
        © {new Date().getFullYear()} Ujwanil Residency - Girls Accommodation Pune. All Rights Reserved.
      </div>
    </footer>
  );
}