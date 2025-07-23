import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';
import { 
  Plus, 
  Eye, 
  Edit, 
  Trash2,
  Star,
  Users,
  FileText,
  Clock,
  DollarSign,
  TrendingUp,
  MessageSquare,
  Download,
  Filter,
  Search
} from 'lucide-react';

export default function EmployerDashboard() {
  const [selectedTab, setSelectedTab] = useState('overview');

  // Mock employer data
  const employerData = {
    name: 'Digital Marketing Pro',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
    companyName: 'TechSolutions Bangladesh',
    memberSince: 'January 2022',
    location: 'Dhaka, Bangladesh',
    totalJobsPosted: 23,
    activeJobs: 5,
    completedJobs: 18,
    totalSpent: 285000,
    avgRating: 4.8,
    responseRate: 95
  };

  const stats = [
    {
      title: 'Active Jobs',
      value: '5',
      change: '+2',
      icon: FileText,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Spent',
      value: '৳2,85,000',
      change: '+15%',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Applications',
      value: '47',
      change: '+8',
      icon: Users,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Success Rate',
      value: '92%',
      change: '+3%',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const postedJobs = [
    {
      id: 1,
      title: 'WordPress Website Design',
      budget: 15000,
      duration: '2-3 weeks',
      status: 'active',
      applications: 12,
      posted: '2 days ago',
      category: 'Web Development',
      urgent: false
    },
    {
      id: 2,
      title: 'Mobile App Development',
      budget: 45000,
      duration: '2 months',
      status: 'in_progress',
      applications: 8,
      posted: '1 week ago',
      category: 'Mobile Development',
      urgent: true
    },
    {
      id: 3,
      title: 'Logo Design Package',
      budget: 8000,
      duration: '5 days',
      status: 'completed',
      applications: 25,
      posted: '1 month ago',
      category: 'Design',
      urgent: false
    },
    {
      id: 4,
      title: 'Social Media Management',
      budget: 20000,
      duration: '3 months',
      status: 'active',
      applications: 15,
      posted: '3 days ago',
      category: 'Marketing',
      urgent: false
    }
  ];

  const recentApplications = [
    {
      id: 1,
      jobTitle: 'WordPress Website Design',
      applicant: {
        name: 'আহমেদ রহমান',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
        rating: 4.9,
        completedJobs: 47,
        proposedBudget: 14000,
        deliveryTime: '2 weeks'
      },
      appliedDate: '2 hours ago',
      status: 'pending'
    },
    {
      id: 2,
      jobTitle: 'Mobile App Development',
      applicant: {
        name: 'সারা খান',
        avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=40&h=40&fit=crop&crop=face',
        rating: 4.8,
        completedJobs: 23,
        proposedBudget: 42000,
        deliveryTime: '7 weeks'
      },
      appliedDate: '5 hours ago',
      status: 'pending'
    },
    {
      id: 3,
      jobTitle: 'Social Media Management',
      applicant: {
        name: 'মোঃ করিম',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
        rating: 4.7,
        completedJobs: 31,
        proposedBudget: 18000,
        deliveryTime: '2 weeks'
      },
      appliedDate: '1 day ago',
      status: 'shortlisted'
    }
  ];

  const activeProjects = [
    {
      id: 1,
      title: 'E-commerce Platform Development',
      freelancer: 'রফিক উদ্দিন',
      budget: 65000,
      progress: 75,
      deadline: '2024-03-15',
      status: 'On Track'
    },
    {
      id: 2,
      title: 'Brand Identity Design',
      freelancer: 'নাদিয়া আক্তার',
      budget: 12000,
      progress: 90,
      deadline: '2024-02-20',
      status: 'Review'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-700';
      case 'in_progress':
        return 'bg-blue-100 text-blue-700';
      case 'completed':
        return 'bg-gray-100 text-gray-700';
      case 'pending':
        return 'bg-yellow-100 text-yellow-700';
      case 'shortlisted':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src={employerData.avatar}
                alt={employerData.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h1 className="text-2xl font-bold text-navy-700 mb-1">
                  Welcome back, {employerData.name}!
                </h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <span>{employerData.companyName}</span>
                  <span>•</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    {employerData.avgRating} Rating
                  </div>
                  <span>•</span>
                  <span>{employerData.totalJobsPosted} Jobs Posted</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Link to="/post-job">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Post New Job
                </Button>
              </Link>
              <Button variant="outline">
                <Eye className="w-4 h-4 mr-2" />
                View Profile
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                      <p className="text-2xl font-bold text-navy-700">{stat.value}</p>
                      <p className={`text-sm ${stat.color} flex items-center mt-1`}>
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {stat.change} from last month
                      </p>
                    </div>
                    <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                      <stat.icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Main Content Tabs */}
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="jobs">Posted Jobs</TabsTrigger>
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="projects">Active Projects</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Applications */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Recent Applications</CardTitle>
                    <Button variant="outline" size="sm">View All</Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentApplications.slice(0, 3).map(app => (
                        <div key={app.id} className="flex items-center justify-between p-3 border rounded-lg">
                          <div className="flex items-center space-x-3">
                            <Avatar className="w-10 h-10">
                              <AvatarImage src={app.applicant.avatar} />
                              <AvatarFallback>{app.applicant.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-navy-700">{app.applicant.name}</p>
                              <p className="text-sm text-gray-600">{app.jobTitle}</p>
                              <div className="flex items-center text-xs text-gray-500 mt-1">
                                <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                                {app.applicant.rating} • {app.applicant.completedJobs} jobs
                              </div>
                            </div>
                          </div>
                          <Badge className={getStatusColor(app.status)}>
                            {app.status}
                          </Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Active Projects */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Active Projects</CardTitle>
                    <Button variant="outline" size="sm">View All</Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {activeProjects.map(project => (
                        <div key={project.id} className="space-y-3 p-3 border rounded-lg">
                          <div className="flex justify-between items-start">
                            <div>
                              <p className="font-medium text-navy-700">{project.title}</p>
                              <p className="text-sm text-gray-600">Freelancer: {project.freelancer}</p>
                            </div>
                            <Badge variant="outline">{project.status}</Badge>
                          </div>
                          <div className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span>Progress</span>
                              <span>{project.progress}%</span>
                            </div>
                            <Progress value={project.progress} className="h-2" />
                          </div>
                          <div className="flex justify-between text-sm text-gray-600">
                            <span>Budget: ৳{project.budget.toLocaleString()}</span>
                            <span>Due: {project.deadline}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <Link to="/post-job">
                      <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                        <Plus className="w-6 h-6 mb-2" />
                        Post New Job
                      </Button>
                    </Link>
                    <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                      <Search className="w-6 h-6 mb-2" />
                      Find Freelancers
                    </Button>
                    <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                      <MessageSquare className="w-6 h-6 mb-2" />
                      Messages
                    </Button>
                    <Button variant="outline" className="w-full h-20 flex flex-col items-center justify-center">
                      <Download className="w-6 h-6 mb-2" />
                      Reports
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Posted Jobs Tab */}
            <TabsContent value="jobs" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Posted Jobs</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Link to="/post-job">
                      <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                        <Plus className="w-4 h-4 mr-2" />
                        Post Job
                      </Button>
                    </Link>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {postedJobs.map(job => (
                      <div key={job.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="font-semibold text-navy-700">{job.title}</h3>
                              {job.urgent && (
                                <Badge className="bg-red-100 text-red-700">Urgent</Badge>
                              )}
                            </div>
                            <p className="text-sm text-gray-600">{job.category}</p>
                          </div>
                          <Badge className={getStatusColor(job.status)}>
                            {job.status.replace('_', ' ')}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 mb-4">
                          <div>Budget: ৳{job.budget.toLocaleString()}</div>
                          <div>Duration: {job.duration}</div>
                          <div>Applications: {job.applications}</div>
                          <div>Posted: {job.posted}</div>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" variant="outline">
                            <Eye className="w-4 h-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="w-4 h-4 mr-1" />
                            Edit
                          </Button>
                          <Button size="sm" variant="outline">
                            <Users className="w-4 h-4 mr-1" />
                            Applications ({job.applications})
                          </Button>
                          {job.status === 'active' && (
                            <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                              <Trash2 className="w-4 h-4 mr-1" />
                              Close
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Applications Tab */}
            <TabsContent value="applications" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Job Applications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentApplications.map(app => (
                      <div key={app.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-navy-700 mb-1">{app.jobTitle}</h3>
                            <p className="text-sm text-gray-600">Applied {app.appliedDate}</p>
                          </div>
                          <Badge className={getStatusColor(app.status)}>
                            {app.status}
                          </Badge>
                        </div>

                        <div className="flex items-center space-x-4 mb-4">
                          <Avatar className="w-12 h-12">
                            <AvatarImage src={app.applicant.avatar} />
                            <AvatarFallback>{app.applicant.name[0]}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1">
                            <p className="font-medium text-navy-700">{app.applicant.name}</p>
                            <div className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                              {app.applicant.rating} • {app.applicant.completedJobs} jobs completed
                            </div>
                          </div>
                          <div className="text-right text-sm">
                            <p className="font-medium">৳{app.applicant.proposedBudget.toLocaleString()}</p>
                            <p className="text-gray-600">{app.applicant.deliveryTime}</p>
                          </div>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                            View Proposal
                          </Button>
                          <Button size="sm" variant="outline">
                            Message
                          </Button>
                          {app.status === 'pending' && (
                            <>
                              <Button size="sm" variant="outline" className="text-green-600">
                                Shortlist
                              </Button>
                              <Button size="sm" variant="outline" className="text-red-600">
                                Decline
                              </Button>
                            </>
                          )}
                          {app.status === 'shortlisted' && (
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Hire
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Active Projects Tab */}
            <TabsContent value="projects" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Active Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {activeProjects.map(project => (
                      <div key={project.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-navy-700">{project.title}</h3>
                            <p className="text-gray-600">Freelancer: {project.freelancer}</p>
                          </div>
                          <Badge variant="outline">{project.status}</Badge>
                        </div>
                        
                        <div className="space-y-3 mb-4">
                          <div className="flex justify-between text-sm">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} />
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-4">
                          <div>Budget: ৳{project.budget.toLocaleString()}</div>
                          <div>Deadline: {project.deadline}</div>
                        </div>

                        <div className="flex gap-2">
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                            View Project
                          </Button>
                          <Button size="sm" variant="outline">
                            Message Freelancer
                          </Button>
                          <Button size="sm" variant="outline">
                            Request Update
                          </Button>
                          {project.status === 'Review' && (
                            <Button size="sm" className="bg-green-600 hover:bg-green-700">
                              Approve & Pay
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
