import { useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  HeadphonesIcon,
  FileText,
  AlertCircle,
  CheckCircle
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
    priority: 'normal'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      console.log('Contact form submitted:', formData);
    }, 2000);
  };

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get help via email within 24 hours',
      contact: 'support@freelancehub.com',
      action: 'Send Email'
    },
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us during business hours',
      contact: '+880 1700-000000',
      action: 'Call Now'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Chat with our support team',
      contact: 'Available 24/7',
      action: 'Start Chat'
    },
    {
      icon: HeadphonesIcon,
      title: 'WhatsApp',
      description: 'Quick support via WhatsApp',
      contact: '+880 1700-000000',
      action: 'Message Us'
    }
  ];

  const faqs = [
    {
      question: 'How do I get started as a freelancer?',
      answer: 'Simply create an account, complete your profile with skills and portfolio, then start browsing and applying for jobs that match your expertise.'
    },
    {
      question: 'What are the payment methods available?',
      answer: 'We support bKash, Nagad, Rocket, bank transfers, and international payments through PayPal and Wise for global transactions.'
    },
    {
      question: 'How does the dispute resolution work?',
      answer: 'If there\'s a disagreement between client and freelancer, our mediation team reviews the case and helps reach a fair resolution based on the project terms.'
    },
    {
      question: 'Is there a fee for using FreelanceHub?',
      answer: 'Basic registration is free. We charge a small service fee only on successful project completion: 10% for free users, 5% for Pro, and 3% for Business users.'
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <div className="pt-20">
          <div className="container mx-auto px-4 lg:px-8 py-16">
            <div className="max-w-md mx-auto text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h1 className="text-2xl font-bold text-navy-700 mb-4">
                Message Sent Successfully!
              </h1>
              <p className="text-gray-600 mb-8">
                Thank you for contacting us. We'll get back to you within 24 hours.
              </p>
              <Button 
                onClick={() => setSubmitted(false)}
                className="bg-orange-500 hover:bg-orange-600"
              >
                Send Another Message
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-600 to-navy-800 text-white py-16">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              We're here to help! Reach out to our support team for any questions or assistance.
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl text-navy-700">Send us a Message</CardTitle>
                  <p className="text-gray-600">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          placeholder="Your full name"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required
                          className="mt-2"
                        />
                      </div>
                    </div>

                    {/* Phone and Category */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          placeholder="01700000000"
                          value={formData.phone}
                          onChange={(e) => handleInputChange('phone', e.target.value)}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">Category *</Label>
                        <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)} required>
                          <SelectTrigger className="mt-2">
                            <SelectValue placeholder="Select a category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="technical">Technical Support</SelectItem>
                            <SelectItem value="billing">Billing & Payments</SelectItem>
                            <SelectItem value="account">Account Issues</SelectItem>
                            <SelectItem value="dispute">Dispute Resolution</SelectItem>
                            <SelectItem value="feature">Feature Request</SelectItem>
                            <SelectItem value="bug">Bug Report</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Subject and Priority */}
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="md:col-span-2">
                        <Label htmlFor="subject">Subject *</Label>
                        <Input
                          id="subject"
                          placeholder="Brief description of your issue"
                          value={formData.subject}
                          onChange={(e) => handleInputChange('subject', e.target.value)}
                          required
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="priority">Priority</Label>
                        <Select value={formData.priority} onValueChange={(value) => handleInputChange('priority', value)}>
                          <SelectTrigger className="mt-2">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="low">Low</SelectItem>
                            <SelectItem value="normal">Normal</SelectItem>
                            <SelectItem value="high">High</SelectItem>
                            <SelectItem value="urgent">Urgent</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        placeholder="Please provide detailed information about your inquiry..."
                        value={formData.message}
                        onChange={(e) => handleInputChange('message', e.target.value)}
                        required
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-orange-500 hover:bg-orange-600"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Sending Message...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              {/* Contact Methods */}
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {contactMethods.map((method, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-orange-100 rounded-lg">
                        <method.icon className="w-5 h-5 text-orange-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-navy-700">{method.title}</h3>
                        <p className="text-sm text-gray-600 mb-1">{method.description}</p>
                        <p className="text-sm font-medium text-orange-600">{method.contact}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Support Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-medium">9:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-medium">10:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-medium">12:00 PM - 5:00 PM</span>
                  </div>
                  <div className="mt-3 p-2 bg-blue-50 rounded text-blue-700">
                    <AlertCircle className="w-4 h-4 inline mr-1" />
                    Live chat available 24/7
                  </div>
                </CardContent>
              </Card>

              {/* Office Location */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="w-5 h-5 mr-2" />
                    Our Office
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <p className="font-medium">FreelanceHub Bangladesh</p>
                    <p>House #123, Road #456</p>
                    <p>Dhanmondi, Dhaka-1205</p>
                    <p>Bangladesh</p>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    View on Map
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-navy-700 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Find quick answers to common questions. Can't find what you're looking for? Contact us directly.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-navy-700 mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" className="px-8">
                <FileText className="w-4 h-4 mr-2" />
                View All FAQs
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
