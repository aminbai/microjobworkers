import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { 
  CheckCircle, 
  Star, 
  Users, 
  Shield, 
  Zap, 
  TrendingUp, 
  Clock, 
  DollarSign,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export default function Index() {
  const [pricingToggle, setPricingToggle] = useState('monthly');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const features = [
    {
      icon: Zap,
      title: 'Instant Job Access',
      description: 'Sign up and start working today with instant access to thousands of micro jobs.'
    },
    {
      icon: Users,
      title: 'Full Customization',
      description: 'Build your freelancer profile or job posting exactly the way you want it.'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Withdraw earnings via trusted methods with our secure payment system.'
    },
    {
      icon: Star,
      title: 'Verified Work History',
      description: 'Build trust with ratings, success rate tracking, and verified level progression.'
    },
    {
      icon: TrendingUp,
      title: 'Smart Matching',
      description: 'AI-powered task feed that matches you with jobs based on your skills and preferences.'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Get help whenever you need it with our round-the-clock customer support team.'
    }
  ];

  const plans = [
    {
      name: 'Free',
      price: { monthly: 0, annual: 0 },
      description: 'Perfect for getting started',
      features: [
        'Up to 5 job applications per month',
        'Basic profile customization',
        'Standard support',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'Pro',
      price: { monthly: 29, annual: 290 },
      description: 'Best for active freelancers',
      features: [
        'Unlimited job applications',
        'Advanced profile features',
        'Priority support',
        'Advanced analytics',
        'Featured profile listing',
        'Skill verification badges'
      ],
      popular: true
    },
    {
      name: 'Business',
      price: { monthly: 99, annual: 990 },
      description: 'For teams and agencies',
      features: [
        'Everything in Pro',
        'Team management tools',
        'White-label solutions',
        'API access',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Rashida Ahmed',
      role: 'Graphic Designer',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=64&h=64&fit=crop&crop=face',
      rating: 5,
      content: 'FreelanceHub changed my life! I went from struggling to find work to having a steady stream of clients. The platform is incredibly user-friendly.'
    },
    {
      name: 'Mohammad Rahman',
      role: 'Content Writer',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
      rating: 5,
      content: 'The AI matching system is brilliant. I get job recommendations that actually match my skills and interests. Highly recommend!'
    },
    {
      name: 'Fatima Khan',
      role: 'Digital Marketer',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=64&h=64&fit=crop&crop=face',
      rating: 5,
      content: 'As a business owner, FreelanceHub helps me find quality freelancers quickly. The verification system gives me confidence in my hires.'
    }
  ];

  const faqs = [
    {
      question: 'How quickly can I start earning?',
      answer: 'You can start applying for jobs immediately after completing your profile. Many freelancers land their first project within 24-48 hours of joining.'
    },
    {
      question: 'What payment methods are supported?',
      answer: 'We support bKash, Nagad, Rocket, bank transfers, and international payment methods like PayPal and Wise for global clients.'
    },
    {
      question: 'Is there a commission fee?',
      answer: 'We charge a small service fee only when you successfully complete a project. Free users pay 10%, Pro users pay 5%, and Business users pay 3%.'
    },
    {
      question: 'How does the verification system work?',
      answer: 'Freelancers can verify their skills through tests, portfolio reviews, and client feedback. Verified badges help you stand out to potential clients.'
    },
    {
      question: 'Can I work with international clients?',
      answer: 'Absolutely! Our platform connects you with clients from around the world, giving you access to global opportunities and competitive rates.'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-600 via-navy-700 to-navy-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '60px 60px'
          }} />
        </div>
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              ফ্রিল্যান্সিং এর নতুন পথ
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              নিয়োগকর্তা ও কর্মীদের জন্য একসাথে তৈরি একটি মাইক্রো-জব ইকোসিস্টেম
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-md transition-all transform hover:scale-105">
                  Get Started
                </Button>
              </Link>
              <Link to="/browse-jobs">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-700 px-8 py-4 text-lg font-semibold rounded-md transition-all">
                  Browse Jobs
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-lg font-semibold text-gray-600 mb-6">Trusted by professionals at</h3>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              <div className="h-12 w-24 bg-gray-400 rounded flex items-center justify-center">
                <span className="font-bold text-white">Daraz</span>
              </div>
              <div className="h-12 w-24 bg-gray-400 rounded flex items-center justify-center">
                <span className="font-bold text-white">Pathao</span>
              </div>
              <div className="h-12 w-24 bg-gray-400 rounded flex items-center justify-center">
                <span className="font-bold text-white">bKash</span>
              </div>
              <div className="h-12 w-24 bg-gray-400 rounded flex items-center justify-center">
                <span className="font-bold text-white">Grameenphone</span>
              </div>
              <div className="h-12 w-24 bg-gray-400 rounded flex items-center justify-center">
                <span className="font-bold text-white">BRAC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
              Why Choose FreelanceHub?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed in the freelance economy, all in one platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow p-6">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-orange-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-navy-700">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get started in just three simple steps
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-orange-200 hidden md:block" />
              
              <div className="space-y-12">
                {[
                  {
                    step: '01',
                    title: 'Create Profile',
                    description: 'Sign up as employer or freelancer and build your professional profile with skills, portfolio, and experience.'
                  },
                  {
                    step: '02',
                    title: 'Post or Browse Jobs',
                    description: 'Employers post jobs with clear requirements. Freelancers browse and apply to projects that match their expertise.'
                  },
                  {
                    step: '03',
                    title: 'Get Paid',
                    description: 'Complete tasks, get approved by clients, and receive secure payments through multiple trusted methods.'
                  }
                ].map((item, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-6">
                      {item.step}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-navy-700 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
              Start free and upgrade as you grow
            </p>
            
            {/* Pricing Toggle */}
            <div className="flex items-center justify-center mb-12">
              <span className={`mr-3 ${pricingToggle === 'monthly' ? 'text-navy-700 font-semibold' : 'text-gray-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setPricingToggle(pricingToggle === 'monthly' ? 'annual' : 'monthly')}
                className="relative w-14 h-8 bg-gray-200 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <div className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-sm transition-transform ${pricingToggle === 'annual' ? 'translate-x-7' : 'translate-x-1'}`} />
              </button>
              <span className={`ml-3 ${pricingToggle === 'annual' ? 'text-navy-700 font-semibold' : 'text-gray-500'}`}>
                Annual
              </span>
              {pricingToggle === 'annual' && (
                <Badge className="ml-2 bg-orange-100 text-orange-700">Save 17%</Badge>
              )}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative border-2 ${plan.popular ? 'border-orange-500 shadow-xl scale-105' : 'border-gray-200'} rounded-xl p-6`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-orange-500 text-white px-4 py-1">
                    Most Popular
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-navy-700 mb-2">
                    {plan.name}
                  </CardTitle>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-navy-700">
                      ${plan.price[pricingToggle as keyof typeof plan.price]}
                    </span>
                    <span className="text-gray-500 ml-1">
                      /{pricingToggle === 'monthly' ? 'month' : 'year'}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full py-3 ${plan.popular ? 'bg-orange-500 hover:bg-orange-600 text-white' : 'bg-navy-100 hover:bg-navy-200 text-navy-700'}`}
                    size="lg"
                  >
                    Choose Plan
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
              What Our Users Say
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied freelancers and employers
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            <Card className="bg-white shadow-xl border-0 p-8">
              <CardContent className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl text-gray-700 mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-navy-700">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].role}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
            
            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-orange-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to know to get started
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold text-navy-700 hover:text-orange-500 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-600 to-navy-800">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Freelance Journey?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join thousands of professionals who are already earning on FreelanceHub
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/signup">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-md transition-all transform hover:scale-105">
                Get Started Today
              </Button>
            </Link>
            <Link to="/browse-jobs">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-navy-700 px-8 py-4 text-lg font-semibold rounded-md transition-all">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-navy-900 text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">F</span>
                </div>
                <span className="font-bold text-xl text-white">FreelanceHub</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-4">
                বাংলাদেশের প্রথম এবং বৃহত্তম মাইক্রো-জব প্ল্যাটফর্ম। প্রতিভাবান ফ্রিল্যান্সারদের সাথে গুণগত কাজের সেতুবন্ধন।
              </p>
              <div className="flex space-x-4">
                <Link to="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <Link to="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Link>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">ফ্রিল্যান্সারদের জন্য</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/browse-jobs" className="hover:text-orange-400 transition-colors">কাজ খুঁজুন</Link></li>
                <li><Link to="/dashboard" className="hover:text-orange-400 transition-colors">ড্যাশবোর্ড</Link></li>
                <li><Link to="/freelancer/1" className="hover:text-orange-400 transition-colors">প্রোফাইল দেখুন</Link></li>
                <li><Link to="/signup" className="hover:text-orange-400 transition-colors">যোগ দিন</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">নিয়োগকর্তাদের জন্য</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/post-job" className="hover:text-orange-400 transition-colors">কাজ পোস্ট করুন</Link></li>
                <li><Link to="/employer-dashboard" className="hover:text-orange-400 transition-colors">ড্যাশবোর্ড</Link></li>
                <li><Link to="/browse-jobs" className="hover:text-orange-400 transition-colors">ফ্রিল্যান্সার খুঁজুন</Link></li>
                <li><Link to="/signup" className="hover:text-orange-400 transition-colors">একাউন্ট খুলুন</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-lg mb-4">সাপোর্ট ও তথ্য</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/about" className="hover:text-orange-400 transition-colors">আমাদের সম্পর্কে</Link></li>
                <li><Link to="/contact" className="hover:text-orange-400 transition-colors">যোগাযোগ</Link></li>
                <li><Link to="/login" className="hover:text-orange-400 transition-colors">লগইন</Link></li>
                <li><Link to="#" className="hover:text-orange-400 transition-colors">সাহায্য কেন্দ্র</Link></li>
                <li><Link to="#" className="hover:text-orange-400 transition-colors">নীতিমালা</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FreelanceHub. সর্বস্���ত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
