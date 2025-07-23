import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Target, 
  Award, 
  Shield,
  Heart,
  Globe,
  TrendingUp,
  CheckCircle,
  Star,
  Quote
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function About() {
  const stats = [
    {
      number: '50,000+',
      label: 'Active Freelancers',
      description: 'Skilled professionals ready to work'
    },
    {
      number: '25,000+',
      label: 'Completed Projects',
      description: 'Successfully delivered with quality'
    },
    {
      number: '10,000+',
      label: 'Happy Clients',
      description: 'Satisfied employers worldwide'
    },
    {
      number: '৳2.5 Crore+',
      label: 'Total Earnings',
      description: 'Paid out to freelancers'
    }
  ];

  const values = [
    {
      icon: Shield,
      title: 'Trust & Security',
      description: 'We ensure secure payments and protect both freelancers and clients with our robust verification system.'
    },
    {
      icon: Heart,
      title: 'Community First',
      description: 'Building a supportive community where freelancers and employers can grow together and achieve success.'
    },
    {
      icon: Target,
      title: 'Quality Focus',
      description: 'We maintain high standards by connecting skilled professionals with quality projects and fair compensation.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Connecting Bangladeshi talent with opportunities worldwide while supporting local economic growth.'
    }
  ];

  const team = [
    {
      name: 'করিম রহমান',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
      description: 'Former tech executive with 15+ years experience in digital transformation and startup ecosystem.'
    },
    {
      name: 'ফাতিমা খান',
      role: 'Chief Technology Officer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face',
      description: 'Software architect and AI specialist, passionate about building scalable platforms for freelancers.'
    },
    {
      name: 'রফিক উদ্দিন',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
      description: 'Operations expert focused on creating seamless experiences for both freelancers and employers.'
    },
    {
      name: 'নাদিয়া আক্তার',
      role: 'Head of Community',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
      description: 'Community builder dedicated to supporting freelancer growth and fostering positive relationships.'
    }
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Platform Launch',
      description: 'FreelanceHub launched with 100 beta users and first successful project completion.'
    },
    {
      year: '2022',
      title: 'Major Growth',
      description: 'Reached 10,000 registered users and processed over ৳50 lakh in payments.'
    },
    {
      year: '2023',
      title: 'Feature Expansion',
      description: 'Launched mobile app, advanced matching algorithm, and expanded to 50+ skill categories.'
    },
    {
      year: '2024',
      title: 'Market Leader',
      description: 'Became Bangladesh\'s leading micro-job platform with 50,000+ active users.'
    }
  ];

  const testimonials = [
    {
      name: 'আহমেদ হাসান',
      role: 'Freelance Developer',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face',
      quote: 'FreelanceHub changed my life completely. From struggling to find clients to having a steady income, this platform gave me the opportunity to showcase my skills and build a successful freelance career.'
    },
    {
      name: 'সারা খান',
      role: 'Startup Founder',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face',
      quote: 'As a startup founder, finding quality talent quickly was crucial. FreelanceHub connected me with amazing freelancers who helped build our MVP in record time.'
    },
    {
      name: 'রহিম উদ্দিন',
      role: 'Digital Agency Owner',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face',
      quote: 'The quality of freelancers on FreelanceHub is exceptional. We\'ve completed over 100 projects through this platform and the results have always exceeded our expectations.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-navy-600 to-navy-800 text-white py-20">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              আমাদের সম্পর্কে
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              বাংলাদেশের প্রথম এবং বৃহত্তম মাইক্রো-জব প্ল্যাটফর্ম, যেখানে প্রতিভাবান ফ্রিল্যান্সাররা 
              তাদের স্বপ্ন পূরণ করে এবং ব্যবসায়িক প্রতিষ্ঠানগুলো সঠিক সমাধান পায়।
            </p>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-6">
                  আমাদের মিশন
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  FreelanceHub এর মূল লক্ষ্য হলো বাংলাদেশের দক্ষ মানুষদের জন্য একটি নিরাপদ, 
                  স্বচ্ছ এবং লাভজনক কর্মক্ষেত্র তৈরি করা। আমরা বিশ্বাস করি যে প্রতিটি মানুষের 
                  প্রতিভা আছে এবং সঠিক সুযোগ পেলে তারা অসাধারণ কিছু করতে পারে।
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  আমাদের প্ল্যাটফর্মের মাধ্যমে আমরা ফ্রিল্যান্সারদের আর্থিক স্বাধীনতা অর্জনে 
                  সহায়তা করি এবং ব্যবসায়িক প্রতিষ্ঠান��ুলোকে গুণগত সেবা প্রদান করি।
                </p>
              </div>
              <div className="bg-orange-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-navy-700 mb-4">আমাদের ভিশন</h3>
                <p className="text-gray-700 leading-relaxed">
                  ২০৩০ সালের মধ্যে দক্ষিণ এশিয়ার সবচেয়ে বিশ্বস্ত এবং প্রভাবশালী 
                  ফ্রিল্যান্স প্ল্যাটফর্ম হয়ে ওঠা। আমরা চাই বাংলাদেশি প্রতিভা বিশ্বব্যাপী 
                  পরিচিত হোক এবং আমাদের দেশের অর্থনৈতিক উন্নয়নে গুরুত্বপূর্ণ ভূমিকা পালন করুক।
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
                আমাদের সফলতার গল্প
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                সংখ্যায় আমাদের যাত্রা এবং অগ্রগতি
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <div className="text-3xl md:text-4xl font-bold text-orange-500 mb-2">
                      {stat.number}
                    </div>
                    <div className="text-lg font-semibold text-navy-700 mb-1">
                      {stat.label}
                    </div>
                    <div className="text-sm text-gray-600">
                      {stat.description}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
                আমাদের মূল্যবোধ
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                যে নীতি ও মূল্যবোধের ভিত্তিতে আমরা কাজ করি
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-navy-700 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
                আমাদের যাত্রাপথ
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                FreelanceHub এর শুরু থেকে আজ পর্যন্ত
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-orange-200 hidden md:block" />
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div key={index} className="relative flex items-start">
                      <div className="flex-shrink-0 w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-8">
                        {milestone.year}
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-navy-700 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="py-20 bg-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-700 mb-4">
                আমাদের টিম
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                যারা FreelanceHub কে এগিয়ে নিয়ে যাচ্ছেন
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center border-0 shadow-lg">
                  <CardContent className="p-6">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                    />
                    <h3 className="text-lg font-semibold text-navy-700 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-orange-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="py-20 bg-navy-600 text-white">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                আমাদের কমিউনিটির কথা
              </h2>
              <p className="text-xl text-gray-200 max-w-2xl mx-auto">
                যারা FreelanceHub ব্যবহার করে তাদের অভিজ্ঞতা
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="bg-white text-navy-700">
                  <CardContent className="p-6">
                    <Quote className="w-8 h-8 text-orange-500 mb-4" />
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <p className="font-semibold text-navy-700">
                          {testimonial.name}
                        </p>
                        <p className="text-sm text-gray-600">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              আমাদের সাথে যুক���ত হন
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              FreelanceHub এর অংশ হয়ে আপনার ক্যারিয়ার কিংবা ব্যবসার নতুন অধ্যায় শুরু করুন
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/signup">
                <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 text-lg">
                  ফ্রিল্যান্সার হিসেবে যোগ দিন
                </Button>
              </Link>
              <Link to="/post-job">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 text-lg">
                  কাজ পোস্ট করুন
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
