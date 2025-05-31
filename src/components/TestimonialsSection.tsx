
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      text: "PropertyWatch has been monitoring our family land in Punjab for 3 years. Their detailed reports and prompt alerts have saved us from multiple encroachment attempts.",
      rating: 5
    },
    {
      name: "Priya Sharma",
      location: "Bangalore, Karnataka",
      text: "Excellent service! They helped us track our construction project in Goa remotely. The weekly photo reports were incredibly detailed and professional.",
      rating: 5
    },
    {
      name: "Amit Patel",
      location: "Ahmedabad, Gujarat",
      text: "Professional team with great attention to detail. Their legal compliance monitoring service helped us avoid costly mistakes during our property development.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brown mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-brown/70 max-w-2xl mx-auto font-playfair">
            Trusted by property owners across India for reliable monitoring and protection services.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg animate-fade-in bg-gradient-to-br from-beige/20 to-white"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <div key={i} className="w-5 h-5 text-yellow-400">
                      ⭐
                    </div>
                  ))}
                </div>
                <p className="text-brown/80 font-playfair italic leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="pt-4 border-t border-brown/10">
                  <div className="font-playfair font-semibold text-brown">
                    {testimonial.name}
                  </div>
                  <div className="text-brown/60 font-playfair text-sm">
                    {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
