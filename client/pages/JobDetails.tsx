import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Star, 
  User, 
  Calendar,
  FileText,
  Heart,
  Share2,
  Flag,
  CheckCircle,
  AlertCircle,
  Upload
} from 'lucide-react';

export default function JobDetails() {
  const { id } = useParams();
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [applicationData, setApplicationData] = useState({
    coverLetter: '',
    proposedBudget: '',
    deliveryTime: '',
    attachments: []
  });

  // Mock job data (in real app, this would be fetched based on id)
  const job = {
    id: 1,
    title: 'WordPress Website Design',
    description: `
      I need a modern, responsive WordPress website for my digital marketing agency. The website should be professional, fast-loading, and optimized for search engines.

      Key Requirements:
      • Modern and professional design
      • Fully responsive (mobile, tablet, desktop)
      • SEO optimized
      • Fast loading speed
      • Contact forms integration
      • Social media integration
      • Blog section
      • Portfolio/case studies section
      • Admin training included

      Design Preferences:
      • Clean and minimalist design
      • Modern color scheme (blue and white)
      • Professional typography
      • High-quality images and graphics

      Technical Requirements:
      • Latest WordPress version
      • Premium theme customization
      • Plugin integration
      • SSL certificate setup
      • Backup system
      • Security optimization

      Deliverables:
      • Fully functional WordPress website
      • Admin panel access and training
      • Documentation
      • 30 days post-launch support
    `,
    budget: 15000,
    budgetType: 'fixed',
    category: 'Web Development',
    duration: '2-3 weeks',
    skillLevel: 'intermediate',
    employer: {
      name: 'Digital Marketing Pro',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
      rating: 4.8,
      reviewsCount: 47,
      location: 'Dhaka, Bangladesh',
      memberSince: 'January 2022',
      jobsPosted: 23,
      hireRate: 89
    },
    location: 'Remote',
    postedTime: '2 hours ago',
    proposals: 8,
    tags: ['WordPress', 'Web Design', 'Responsive Design', 'SEO'],
    urgent: false,
    verified: true,
    saved: false
  };

  const similarJobs = [
    {
      id: 2,
      title: 'E-commerce Website Development',
      budget: 25000,
      duration: '1 month',
      proposals: 12
    },
    {
      id: 3,
      title: 'Landing Page Design',
      budget: 8000,
      duration: '1 week',
      proposals: 6
    },
    {
      id: 4,
      title: 'WordPress Customization',
      budget: 5000,
      duration: '3-5 days',
      proposals: 15
    }
  ];

  const handleApplicationSubmit = () => {
    console.log('Application submitted:', applicationData);
    alert('Application submitted successfully!');
    setShowApplicationForm(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Job Header */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h1 className="text-2xl font-bold text-navy-700">{job.title}</h1>
                        {job.urgent && (
                          <Badge className="bg-red-100 text-red-700">Urgent</Badge>
                        )}
                        {job.verified && (
                          <Badge className="bg-green-100 text-green-700">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {job.tags.map(tag => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2 ml-4">
                      <Button variant="outline" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="w-4 h-4" />
                      </Button>
                      <Button variant="outline" size="sm">
                        <Flag className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="flex items-center text-sm">
                      <DollarSign className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="font-medium">৳{job.budget.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="w-4 h-4 mr-2 text-gray-500" />
                      <span>{job.duration}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <User className="w-4 h-4 mr-2 text-gray-500" />
                      <span>{job.proposals} proposals</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button 
                      className="bg-orange-500 hover:bg-orange-600 flex-1"
                      onClick={() => setShowApplicationForm(true)}
                    >
                      Apply Now
                    </Button>
                    <Button variant="outline">
                      Save Job
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Job Description */}
              <Card>
                <CardHeader>
                  <CardTitle>Job Description</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose max-w-none">
                    <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
                      {job.description}
                    </pre>
                  </div>
                </CardContent>
              </Card>

              {/* Application Form */}
              {showApplicationForm && (
                <Card className="border-orange-200 bg-orange-50">
                  <CardHeader>
                    <CardTitle className="text-orange-700">Submit Your Application</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="coverLetter">Cover Letter</Label>
                      <Textarea
                        id="coverLetter"
                        placeholder="Tell the client why you're the best fit for this project..."
                        value={applicationData.coverLetter}
                        onChange={(e) => setApplicationData(prev => ({...prev, coverLetter: e.target.value}))}
                        rows={6}
                        className="mt-2"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="proposedBudget">Your Proposed Budget (৳)</Label>
                        <Input
                          id="proposedBudget"
                          type="number"
                          placeholder="15000"
                          value={applicationData.proposedBudget}
                          onChange={(e) => setApplicationData(prev => ({...prev, proposedBudget: e.target.value}))}
                          className="mt-2"
                        />
                      </div>
                      <div>
                        <Label htmlFor="deliveryTime">Delivery Time</Label>
                        <Input
                          id="deliveryTime"
                          placeholder="e.g., 2 weeks"
                          value={applicationData.deliveryTime}
                          onChange={(e) => setApplicationData(prev => ({...prev, deliveryTime: e.target.value}))}
                          className="mt-2"
                        />
                      </div>
                    </div>

                    <div>
                      <Label>Attachments (Optional)</Label>
                      <div className="mt-2 border-2 border-dashed border-orange-300 rounded-lg p-4 text-center">
                        <Upload className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                        <p className="text-sm text-gray-600 mb-2">Upload portfolio samples or relevant files</p>
                        <Button variant="outline" size="sm">Choose Files</Button>
                      </div>
                    </div>

                    <div className="flex gap-3 pt-4">
                      <Button onClick={handleApplicationSubmit} className="bg-orange-500 hover:bg-orange-600">
                        Submit Application
                      </Button>
                      <Button variant="outline" onClick={() => setShowApplicationForm(false)}>
                        Cancel
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      Posted {job.postedTime}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <User className="w-4 h-4 mr-2" />
                      {job.proposals} freelancers have applied
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Clock className="w-4 h-4 mr-2" />
                      Client is typically responsive within a few hours
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Client Information */}
              <Card>
                <CardHeader>
                  <CardTitle>About the Client</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center mb-4">
                    <img
                      src={job.employer.avatar}
                      alt={job.employer.name}
                      className="w-12 h-12 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-semibold text-navy-700">{job.employer.name}</h3>
                      <div className="flex items-center text-sm text-gray-600">
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                        {job.employer.rating} ({job.employer.reviewsCount} reviews)
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Location:</span>
                      <span>{job.employer.location}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Member since:</span>
                      <span>{job.employer.memberSince}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Jobs posted:</span>
                      <span>{job.employer.jobsPosted}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hire rate:</span>
                      <span>{job.employer.hireRate}%</span>
                    </div>
                  </div>

                  <Button variant="outline" className="w-full mt-4">
                    View Client Profile
                  </Button>
                </CardContent>
              </Card>

              {/* Job Stats */}
              <Card>
                <CardHeader>
                  <CardTitle>Job Stats</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Proposals:</span>
                      <span className="font-medium">{job.proposals}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Category:</span>
                      <span className="font-medium">{job.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Skill Level:</span>
                      <span className="font-medium capitalize">{job.skillLevel}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Budget Type:</span>
                      <span className="font-medium capitalize">{job.budgetType}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Similar Jobs */}
              <Card>
                <CardHeader>
                  <CardTitle>Similar Jobs</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {similarJobs.map(similarJob => (
                    <div key={similarJob.id} className="border-b pb-3 last:border-b-0">
                      <Link 
                        to={`/job/${similarJob.id}`}
                        className="font-medium text-navy-700 hover:text-orange-500 text-sm"
                      >
                        {similarJob.title}
                      </Link>
                      <div className="flex justify-between text-xs text-gray-600 mt-1">
                        <span>৳{similarJob.budget.toLocaleString()}</span>
                        <span>{similarJob.proposals} proposals</span>
                      </div>
                    </div>
                  ))}
                  
                  <Link to="/browse-jobs">
                    <Button variant="outline" size="sm" className="w-full">
                      View All Jobs
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Warning Box */}
              <Card className="border-yellow-200 bg-yellow-50">
                <CardContent className="p-4">
                  <div className="flex">
                    <AlertCircle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-yellow-800 mb-1">Stay Safe</h4>
                      <p className="text-sm text-yellow-700">
                        Never share personal information or payment details outside of FreelanceHub platform.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
