
const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-beige/30 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brown">
                Why Choose PropertyWatch?
              </h2>
              <p className="text-lg text-brown/70 font-playfair leading-relaxed">
                With over a decade of experience in property management and surveillance, 
                PropertyWatch has become India's trusted partner for property protection 
                and monitoring services.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-light-green rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-brown mb-2">
                    Expert Team
                  </h3>
                  <p className="text-brown/70 font-playfair">
                    Our certified professionals bring years of experience in property 
                    management, legal compliance, and security systems.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-light-green rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-brown mb-2">
                    Technology-Driven
                  </h3>
                  <p className="text-brown/70 font-playfair">
                    Advanced monitoring systems, GPS tracking, and real-time reporting 
                    ensure comprehensive coverage of your properties.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-light-green rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
                <div>
                  <h3 className="text-xl font-playfair font-semibold text-brown mb-2">
                    Pan-India Coverage
                  </h3>
                  <p className="text-brown/70 font-playfair">
                    From metropolitan cities to remote rural areas, our network 
                    spans across all major states and territories in India.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-brown/20">
              <div>
                <div className="text-3xl font-playfair font-bold text-light-green mb-2">10+</div>
                <div className="text-brown/70 font-playfair">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-playfair font-bold text-light-green mb-2">50+</div>
                <div className="text-brown/70 font-playfair">Cities Covered</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                alt="Professional property monitoring"
                className="rounded-lg shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80"
                alt="Land surveillance technology"
                className="rounded-lg shadow-lg mt-8"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
