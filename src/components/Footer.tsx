
import { Facebook, Instagram, Youtube, Link } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-brown text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-light-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg font-playfair">P</span>
              </div>
              <span className="text-2xl font-playfair font-bold">PropertyWatch</span>
            </div>
            <p className="text-white/80 font-playfair leading-relaxed">
              India's trusted property monitoring service, protecting your investments 
              with professional surveillance and comprehensive reporting.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-light-green/20 rounded-full flex items-center justify-center hover:bg-light-green transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-light-green/20 rounded-full flex items-center justify-center hover:bg-light-green transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-light-green/20 rounded-full flex items-center justify-center hover:bg-light-green transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-light-green/20 rounded-full flex items-center justify-center hover:bg-light-green transition-colors">
                <Link className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-white/80 hover:text-light-green transition-colors font-playfair"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-white/80 hover:text-light-green transition-colors font-playfair"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-white/80 hover:text-light-green transition-colors font-playfair"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-white/80 hover:text-light-green transition-colors font-playfair"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li className="text-white/80 font-playfair">Land Surveillance</li>
              <li className="text-white/80 font-playfair">Property Watch</li>
              <li className="text-white/80 font-playfair">Construction Monitoring</li>
              <li className="text-white/80 font-playfair">Legal Compliance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-playfair font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-white/80 font-playfair">📞 +91 98765 43210</p>
              <p className="text-white/80 font-playfair">✉️ info@propertywatch.in</p>
              <p className="text-white/80 font-playfair">📍 New Delhi, India</p>
              <p className="text-white/80 font-playfair">🕒 24/7 Emergency Support</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 font-playfair">
            © {currentYear} PropertyWatch. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
