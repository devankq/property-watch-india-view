
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-beige to-beige/80 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-brown leading-tight">
                Protect Your Property
                <span className="text-light-green block">Investments</span>
              </h1>
              <p className="text-lg md:text-xl text-brown/80 leading-relaxed font-playfair">
                Professional land and property monitoring services across India. 
                We safeguard your valuable assets with comprehensive surveillance 
                and detailed reporting systems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-light-green hover:bg-light-green/90 text-white font-playfair text-lg px-8 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Start Monitoring
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="border-brown text-brown hover:bg-brown hover:text-white font-playfair text-lg px-8 py-6 rounded-lg transition-all duration-300"
              >
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-brown/20">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-playfair font-bold text-light-green">500+</div>
                <div className="text-brown/70 font-playfair">Properties Monitored</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-playfair font-bold text-light-green">24/7</div>
                <div className="text-brown/70 font-playfair">Surveillance</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-playfair font-bold text-light-green">98%</div>
                <div className="text-brown/70 font-playfair">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="animate-slide-in-right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600&q=80"
                alt="Property monitoring and surveillance"
                className="rounded-2xl shadow-2xl w-full h-auto"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border-l-4 border-light-green">
                <div className="text-2xl font-playfair font-bold text-brown">100%</div>
                <div className="text-brown/70 font-playfair">Secure Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
