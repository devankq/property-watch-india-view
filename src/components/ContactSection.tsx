
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    property_type: '',
    location: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for your inquiry. Our team will contact you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        property_type: '',
        location: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-beige/50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-brown mb-4">
            Get Your Free Consultation
          </h2>
          <p className="text-lg text-brown/70 max-w-2xl mx-auto font-playfair">
            Ready to protect your property investment? Contact us today for a comprehensive 
            monitoring solution tailored to your needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="shadow-2xl border-0 animate-slide-in-left">
            <CardHeader>
              <CardTitle className="text-2xl font-playfair text-brown">Send Us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-playfair text-brown mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-brown/30 focus:border-light-green font-playfair"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-playfair text-brown mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-brown/30 focus:border-light-green font-playfair"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-playfair text-brown mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="border-brown/30 focus:border-light-green font-playfair"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="property_type" className="block text-sm font-playfair text-brown mb-2">
                      Property Type *
                    </label>
                    <select
                      id="property_type"
                      name="property_type"
                      required
                      value={formData.property_type}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-brown/30 rounded-md focus:outline-none focus:border-light-green font-playfair bg-white"
                    >
                      <option value="">Select property type</option>
                      <option value="residential">Residential Property</option>
                      <option value="commercial">Commercial Property</option>
                      <option value="agricultural">Agricultural Land</option>
                      <option value="industrial">Industrial Property</option>
                      <option value="vacant_land">Vacant Land</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="location" className="block text-sm font-playfair text-brown mb-2">
                    Property Location *
                  </label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    required
                    value={formData.location}
                    onChange={handleInputChange}
                    className="border-brown/30 focus:border-light-green font-playfair"
                    placeholder="City, State"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-playfair text-brown mb-2">
                    Additional Details
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="border-brown/30 focus:border-light-green font-playfair min-h-[120px]"
                    placeholder="Tell us about your monitoring requirements..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-light-green hover:bg-light-green/90 text-white font-playfair text-lg py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="shadow-lg border-0 bg-gradient-to-br from-light-green/10 to-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-playfair font-bold text-brown mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-light-green rounded-full"></div>
                    <span className="font-playfair text-brown">
                      📞 +91 98765 43210
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-light-green rounded-full"></div>
                    <span className="font-playfair text-brown">
                      ✉️ info@propertywatch.in
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-light-green rounded-full"></div>
                    <span className="font-playfair text-brown">
                      📍 New Delhi, India
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg border-0 bg-gradient-to-br from-brown/10 to-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-playfair font-bold text-brown mb-6">
                  Business Hours
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between font-playfair text-brown">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between font-playfair text-brown">
                    <span>Saturday</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between font-playfair text-brown">
                    <span>Sunday</span>
                    <span>Emergency Only</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
