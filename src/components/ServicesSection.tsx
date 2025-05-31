
import { Search, Home, Settings, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Search,
      title: "Land Surveillance",
      description: "Comprehensive monitoring of your land parcels with regular site visits and detailed photographic documentation.",
      features: ["Weekly site visits", "Photo documentation", "Boundary verification", "Encroachment alerts"]
    },
    {
      icon: Home,
      title: "Property Watch",
      description: "Professional monitoring of residential and commercial properties to ensure security and maintenance standards.",
      features: ["24/7 monitoring", "Security assessment", "Maintenance tracking", "Tenant verification"]
    },
    {
      icon: Settings,
      title: "Construction Monitoring",
      description: "Track your construction projects with progress reports, quality checks, and timeline management.",
      features: ["Progress tracking", "Quality inspections", "Timeline management", "Cost monitoring"]
    },
    {
      icon: Shield,
      title: "Legal Compliance",
      description: "Ensure your properties meet all legal requirements with our compliance monitoring and documentation services.",
      features: ["Document verification", "Compliance checks", "Legal updates", "Court representation"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brown mb-4">
            Our Professional Services
          </h2>
          <p className="text-lg text-brown/70 max-w-2xl mx-auto font-playfair">
            Comprehensive property monitoring solutions tailored to protect your investments 
            and ensure peace of mind across India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 animate-fade-in bg-gradient-to-br from-white to-beige/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-light-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-8 h-8 text-light-green" />
                </div>
                <CardTitle className="text-xl font-playfair text-brown">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-4">
                <p className="text-brown/70 font-playfair">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-sm text-brown/60 font-playfair flex items-center">
                      <div className="w-2 h-2 bg-light-green rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
