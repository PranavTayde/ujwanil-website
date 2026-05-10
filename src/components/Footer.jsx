import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-blue text-white pt-24 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="lg:col-span-1">
          <h2 className="text-2xl font-bold mb-6">UJWANIL <span className="text-brand-gold">RESIDENCY</span></h2>
          <p className="text-white/60 text-sm leading-relaxed">
            Premium accommodation for girls in Pune. Safety, comfort, and a study-friendly environment all in one place.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-brand-gold">Quick Links</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li><a href="#home">Home</a></li>
            <li><a href="#rooms">Room Categories</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#contact">Location</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-brand-gold">Contact Us</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex gap-3"><Phone size={16} /> +91 7709548834</li>
            <li className="flex gap-3"><Mail size={16} /> contact@ujwanil.com</li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="shrink-0" /> 
              Ujwanil, Lane No. 9, Sukhsagar Nagar Part-2, Katraj, Pune – 411046
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-brand-gold">Location Map</h4>
          <div className="w-full h-48 bg-white/5 rounded-2xl overflow-hidden border border-white/10 grayscale hover:grayscale-0 transition-all">
            {/* Replace the URL with your actual Google Maps Embed link */}
           <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.5878195695186!2d73.86995851070938!3d18.457014571040258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2ebba6cc02607%3A0x3f9f1ebcb86206e7!2sUjwanil%20Girls%20PG!5e0!3m2!1sen!2sus!4v1778440574574!5m2!1sen!2sus" 
  className="w-full h-full border-0 rounded-xl" 
  allowFullScreen="" 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
          </div>
        </div>
      </div>
      <div className="text-center pt-8 border-t border-white/10 text-white/30 text-xs">
        © 2026 Ujwanil Residency - Girls Accommodation Pune. All Rights Reserved.
      </div>
    </footer>
  );
}