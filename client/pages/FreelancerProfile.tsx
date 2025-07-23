import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { 
  Star, 
  MapPin, 
  Calendar, 
  Clock,
  DollarSign,
  Award,
  Users,
  CheckCircle,
  MessageSquare,
  Heart,
  Share2,
  Flag,
  Download,
  Eye,
  ThumbsUp,
  Globe,
  Briefcase
} from 'lucide-react';

export default function FreelancerProfile() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState('overview');

  // Mock freelancer data
  const freelancer = {
    id: 1,
    name: 'আহমেদ রহমান',
    title: 'Full Stack Web Developer & UI/UX Designer',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    location: 'Dhaka, Bangladesh',
    memberSince: 'March 2021',
    rating: 4.9,
    totalReviews: 89,
    completedJobs: 127,
    totalEarnings: 485000,
    successRate: 96,
    responseTime: '2 hours',
    hourlyRate: 800,
    availability: 'Available',
    languages: ['Bengali (Native)', 'English (Fluent)', 'Hindi (Conversational)'],
    description: `
      I'm a passionate Full Stack Developer with over 5 years of experience in creating modern, responsive web applications. 
      I specialize in React, Node.js, MongoDB, and have a strong background in UI/UX design.

      My expertise includes:
      • Frontend: React, Vue.js, Angular, TypeScript, Tailwind CSS
      • Backend: Node.js, Express, Python, Django, REST APIs
      • Database: MongoDB, PostgreSQL, MySQL
      • Design: Figma, Adobe XD, Photoshop, Illustrator
      • Other: AWS, Docker, Git, Agile methodology

      I'm committed to delivering high-quality work on time and maintaining clear communication throughout the project lifecycle.
      Let's work together to bring your ideas to life!
    `,
    skills: [
      { name: 'React', level: 95 },
      { name: 'Node.js', level: 90 },
      { name: 'TypeScript', level: 88 },
      { name: 'MongoDB', level: 85 },
      { name: 'UI/UX Design', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'Figma', level: 85 }
    ],
    certifications: [
      {
        name: 'AWS Certified Developer',
        issuer: 'Amazon Web Services',
        date: 'December 2023',
        verified: true
      },
      {
        name: 'React Developer Certification',
        issuer: 'Meta',
        date: 'October 2023',
        verified: true
      },
      {
        name: 'Google UX Design Certificate',
        issuer: 'Google',
        date: 'August 2023',
        verified: true
      }
    ],
    portfolio: [
      {
        id: 1,
        title: 'E-commerce Platform',
        description: 'Full-stack e-commerce solution with React and Node.js',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop',
        technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
        liveUrl: '#',
        category: 'Web Development'
      },
      {
        id: 2,
        title: 'Mobile Banking App UI',
        description: 'Modern mobile banking application design',
        image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
        technologies: ['Figma', 'UI Design', 'Mobile UX'],
        liveUrl: '#',
        category: 'UI/UX Design'
      },
      {
        id: 3,
        title: 'Restaurant Management System',
        description: 'Complete restaurant management solution',
        image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop',
        technologies: ['Vue.js', 'Python', 'PostgreSQL'],
        liveUrl: '#',
        category: 'Web Development'
      }
    ],
    reviews: [
      {
        id: 1,
        client: 'সারা খান',
        clientAvatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
        rating: 5,
        date: '2 weeks ago',
        project: 'WordPress Website Development',
        comment: 'আহমেদ একজন অসাধারণ ডেভেলপার। কাজের মান অত্যন্ত ভালো এবং সময়মতো ডেলিভারি দিয়েছেন। অবশ্যই আবার কাজ করব।'
      },
      {
        id: 2,
        client: 'মোঃ করিম',
        clientAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        rating: 5,
        date: '1 month ago',
        project: 'E-commerce Platform',
        comment: 'Excellent work! Ahmed delivered exactly what we needed. His communication was clear and he was very professional throughout the project.'
      },
      {
        id: 3,
        client: 'নাদিয়া আক্তার',
        clientAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
        rating: 5,
        date: '2 months ago',
        project: 'Mobile App UI Design',
        comment: 'Outstanding designer with great attention to detail. The UI/UX design exceeded our expectations.'
      }
    ],
    workHistory: [
      {
        id: 1,
        title: 'E-commerce Website Development',
        client: 'TechMart BD',
        duration: '3 months',
        budget: 85000,
        completed: '2024-01-15',
        rating: 5
      },
      {
        id: 2,
        title: 'Restaurant POS System',
        client: 'Food Palace',
        duration: '2 months',
        budget: 65000,
        completed: '2023-12-10',
        rating: 5
      },
      {
        id: 3,
        title: 'Corporate Website Redesign',
        client: 'Business Solutions Ltd',
        duration: '1 month',
        budget: 45000,
        completed: '2023-11-20',
        rating: 4
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Profile Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Profile Header */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src={freelancer.avatar} alt={freelancer.name} />
                      <AvatarFallback className="text-2xl">{freelancer.name[0]}</AvatarFallback>
                    </Avatar>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h1 className="text-2xl font-bold text-navy-700">{freelancer.name}</h1>
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      </div>
                      <p className="text-lg text-gray-600 mb-3">{freelancer.title}</p>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {freelancer.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          Member since {freelancer.memberSince}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {freelancer.responseTime} response time
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 mb-4">
                        <div className="flex items-center">
                          <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                          <span className="font-semibold">{freelancer.rating}</span>
                          <span className="text-gray-600 ml-1">({freelancer.totalReviews} reviews)</span>
                        </div>
                        <Badge className="bg-green-100 text-green-700">
                          {freelancer.availability}
                        </Badge>
                      </div>

                      <div className="flex gap-3">
                        <Button className="bg-orange-500 hover:bg-orange-600">
                          <MessageSquare className="w-4 h-4 mr-2" />
                          Contact Me
                        </Button>
                        <Button variant="outline">
                          <Heart className="w-4 h-4 mr-2" />
                          Save
                        </Button>
                        <Button variant="outline">
                          <Share2 className="w-4 h-4 mr-2" />
                          Share
                        </Button>
                      </div>
                    </div>

                    <div className="text-right">
                      <p className="text-2xl font-bold text-navy-700">৳{freelancer.hourlyRate}/hr</p>
                      <p className="text-sm text-gray-600">Starting at</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Profile Content Tabs */}
              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                  <TabsTrigger value="history">Work History</TabsTrigger>
                </TabsList>

                {/* Overview Tab */}
                <TabsContent value="overview" className="space-y-6">
                  {/* About */}
                  <Card>
                    <CardHeader>
                      <CardTitle>About Me</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="prose max-w-none">
                        <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
                          {freelancer.description}
                        </pre>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Skills */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Skills & Expertise</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {freelancer.skills.map((skill, index) => (
                          <div key={index} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="font-medium">{skill.name}</span>
                              <span className="text-sm text-gray-600">{skill.level}%</span>
                            </div>
                            <Progress value={skill.level} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Certifications */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Certifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {freelancer.certifications.map((cert, index) => (
                          <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                                <Award className="w-5 h-5 text-blue-600" />
                              </div>
                              <div>
                                <p className="font-medium text-navy-700">{cert.name}</p>
                                <p className="text-sm text-gray-600">{cert.issuer} • {cert.date}</p>
                              </div>
                            </div>
                            {cert.verified && (
                              <Badge className="bg-green-100 text-green-700">
                                <CheckCircle className="w-3 h-3 mr-1" />
                                Verified
                              </Badge>
                            )}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Portfolio Tab */}
                <TabsContent value="portfolio" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Portfolio</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {freelancer.portfolio.map(item => (
                          <div key={item.id} className="border rounded-lg overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={item.title}
                              className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                              <div className="flex items-center justify-between mb-2">
                                <h3 className="font-semibold text-navy-700">{item.title}</h3>
                                <Badge variant="outline">{item.category}</Badge>
                              </div>
                              <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                              <div className="flex flex-wrap gap-1 mb-3">
                                {item.technologies.map(tech => (
                                  <Badge key={tech} variant="secondary" className="text-xs">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                  <Eye className="w-4 h-4 mr-1" />
                                  View Project
                                </Button>
                                <Button size="sm" variant="outline">
                                  <Globe className="w-4 h-4 mr-1" />
                                  Live Demo
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Reviews Tab */}
                <TabsContent value="reviews" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Client Reviews ({freelancer.totalReviews})</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-6">
                        {freelancer.reviews.map(review => (
                          <div key={review.id} className="border-b pb-6 last:border-b-0">
                            <div className="flex items-start space-x-4">
                              <Avatar className="w-10 h-10">
                                <AvatarImage src={review.clientAvatar} />
                                <AvatarFallback>{review.client[0]}</AvatarFallback>
                              </Avatar>
                              <div className="flex-1">
                                <div className="flex items-center justify-between mb-2">
                                  <div>
                                    <p className="font-medium text-navy-700">{review.client}</p>
                                    <p className="text-sm text-gray-600">{review.project}</p>
                                  </div>
                                  <div className="text-right">
                                    <div className="flex items-center">
                                      {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                      ))}
                                    </div>
                                    <p className="text-sm text-gray-600">{review.date}</p>
                                  </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                                <div className="flex items-center mt-3 text-sm text-gray-500">
                                  <ThumbsUp className="w-4 h-4 mr-1" />
                                  Helpful
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                {/* Work History Tab */}
                <TabsContent value="history" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Work History</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {freelancer.workHistory.map(work => (
                          <div key={work.id} className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold text-navy-700">{work.title}</h3>
                                <p className="text-gray-600">Client: {work.client}</p>
                              </div>
                              <div className="flex items-center">
                                {[...Array(work.rating)].map((_, i) => (
                                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                              </div>
                            </div>
                            <div className="grid grid-cols-3 gap-4 text-sm text-gray-600">
                              <div>Duration: {work.duration}</div>
                              <div>Budget: ৳{work.budget.toLocaleString()}</div>
                              <div>Completed: {work.completed}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Completed Jobs:</span>
                    <span className="font-medium">{freelancer.completedJobs}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Success Rate:</span>
                    <span className="font-medium">{freelancer.successRate}%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Total Earned:</span>
                    <span className="font-medium">৳{freelancer.totalEarnings.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Response Time:</span>
                    <span className="font-medium">{freelancer.responseTime}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card>
                <CardHeader>
                  <CardTitle>Languages</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {freelancer.languages.map((lang, index) => (
                      <div key={index} className="flex items-center">
                        <Globe className="w-4 h-4 mr-2 text-gray-500" />
                        <span className="text-sm">{lang}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Card */}
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Briefcase className="w-4 h-4 mr-2" />
                    Hire Me
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                </CardContent>
              </Card>

              {/* Report Profile */}
              <Card className="border-red-200">
                <CardContent className="p-4">
                  <Button variant="ghost" className="w-full text-red-600 hover:text-red-700">
                    <Flag className="w-4 h-4 mr-2" />
                    Report Profile
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
