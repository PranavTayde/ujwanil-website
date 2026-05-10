import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Amenities from "../components/Amenities";
import RoomCards from "../components/RoomCards";

import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      
      {/* 1. Hero Section (id="home") */}
      <Hero />

      <div className="relative z-10 bg-white">
        
        {/* 2. About Section (id="about") */}
        <section id="about" className="py-16 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-20">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <img 
                  src="/images/building-main.jpeg" 
                  alt="Ujwanil Residency Exterior" 
                  className="rounded-3xl shadow-xl w-full h-[400px] md:h-[550px] object-cover relative z-10"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h4 className="text-brand-gold font-bold tracking-widest uppercase text-sm mb-3">
                Accomodation for Girls
              </h4>
              <h2 className="text-4xl font-bold text-brand-blue mb-6 leading-tight">
                Safe & Comfortable Stay <br /> in Katraj, Pune
              </h2>
              <p className="text-slate-700 text-lg mb-8 leading-relaxed">
                Ujwanil Residency provides clean and safe accommodation for girls in Sukhsagar Nagar, Katraj. 
                Located just 1.5 km from VIT and nearby colleges, we offer a peaceful environment 
                specifically designed for students and working women. We provide spacious rooms, 
                quality homestyle food.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  <span className="font-semibold text-brand-blue">CCTV Secured</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  <span className="font-semibold text-brand-blue">Homestyle Food</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  <span className="font-semibold text-brand-blue">Quiet for Study</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-brand-gold" />
                  <span className="font-semibold text-brand-blue">1.5 KM from Colleges</span>
                </div>
              </div>

              <a href="tel:+917709548834" className="inline-block bg-brand-blue text-white px-10 py-4 rounded-xl font-bold hover:bg-brand-gold hover:text-brand-blue transition-all duration-300 shadow-lg">
                Call to Inquire
              </a>
            </div>
          </div>
        </section>

        {/* 3. Amenities Section (Updated with all pamphlet facilities) */}
        <Amenities />

        {/* 4. Room Categories (id="rooms") */}
        <RoomCards />

        {/* 5. Gallery Section (id="gallery")
        <Gallery /> */}

        {/* 6. Testimonials Section */}
        <Testimonials />

        {/* 7. Footer (id="contact") */}
        <Footer />
        
      </div>
    </main>
  );
}