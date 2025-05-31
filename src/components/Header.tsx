
import { useState } from 'react';
import { Menu, Link } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-beige/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-light-green rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg font-playfair">P</span>
            </div>
            <span className="text-2xl font-playfair font-bold text-brown">PropertyWatch</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-brown hover:text-light-green transition-colors font-playfair"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-brown hover:text-light-green transition-colors font-playfair"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-brown hover:text-light-green transition-colors font-playfair"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-brown hover:text-light-green transition-colors font-playfair"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-light-green hover:bg-light-green/90 text-white font-playfair"
            >
              Get Quote
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-brown"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-brown/20 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-brown hover:text-light-green transition-colors font-playfair text-left"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-brown hover:text-light-green transition-colors font-playfair text-left"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-brown hover:text-light-green transition-colors font-playfair text-left"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-brown hover:text-light-green transition-colors font-playfair text-left"
              >
                Contact
              </button>
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-light-green hover:bg-light-green/90 text-white font-playfair w-full"
              >
                Get Quote
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
