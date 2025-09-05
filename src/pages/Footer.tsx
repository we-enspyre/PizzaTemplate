import { Mail, Phone, MapPin } from "lucide-react";
import enspyreLogo from "@/assets/enspyre-logo.svg"; // adjust path if needed

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        
        {/* Contact Info */}
        <div className="space-y-3 mb-6 md:mb-0">
          <div className="flex items-center text-white/80">
            <Mail className="w-4 h-4 mr-3 text-gold" />
            hello@pizza.com
          </div>
          <div className="flex items-center text-white/80">
            <Phone className="w-4 h-4 mr-3 text-gold" />
            +45 12 34 56 78
          </div>
          <div className="flex items-center text-white/80">
            <MapPin className="w-4 h-4 mr-3 text-gold" />
            Aarhus, Denmark
          </div>
        </div>

        {/* Logo */}
        <div className="flex items-center text-white/60 text-sm">
          <img
            src={enspyreLogo}
            alt="Enspyre Logo"
            className="w-6 h-6 rounded-full mx-2"
          />
          ENSPYRE
        </div>
      </div>
    </footer>
  );
};

export default Footer;
