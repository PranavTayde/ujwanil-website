import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["300", "400", "600", "700"],
  variable: '--font-poppins'
});

export const metadata = {
  title: "UJWANIL RESIDENCY | Premium Girls PG in Katraj, Pune",
  description: "Safe, Comfortable, and Luxurious Accommodation for Girls in Katraj, Pune near Bharati Vidyapeeth. CCTV Secured with Homestyle Food.",
  keywords: "Girls PG in Katraj Pune, Girls Hostel near Bharati Vidyapeeth, Safe Girls PG in Pune",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.className} antialiased`}>
        {children}
        {/* Floating WhatsApp Button */}
        <a 
          href="https://wa.me/917709548834" 
          target="_blank" 
          className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-2xl hover:scale-110 transition-transform"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" className="w-6 h-6" />
        </a>
      </body>
    </html>
  );
}