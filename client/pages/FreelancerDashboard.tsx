import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { 
  DollarSign, 
  TrendingUp, 
  Clock, 
  Star,
  Eye,
  FileText,
  CheckCircle,
  Calendar,
  User,
  Plus,
  Filter,
  Download
} from 'lucide-react';

export default function FreelancerDashboard() {
  const [selectedFilter, setSelectedFilter] = useState('all');

  // Mock user data
  const userData = {
    name: 'আহমেদ রহমান',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=64&h=64&fit=crop&crop=face',
    rating: 4.9,
    completedJobs: 47,
    totalEarnings: 125000,
    level: 'Expert',
    successRate: 96,
    responseTime: '2 hours'
  };

  const stats = [
    {
      title: 'Total Earnings',
      value: '৳1,25,000',
      change: '+12%',
      icon: DollarSign,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Active Projects',
      value: '3',
      change: '+1',
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Completed Jobs',
      value: '47',
      change: '+5',
      icon: CheckCircle,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      title: 'Success Rate',
      value: '96%',
      change: '+2%',
      icon: TrendingUp,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    }
  ];

  const applications = [
    {
      id: 1,
      jobTitle: 'WordPress Website Design',
      client: 'Digital Marketing Pro',
      appliedDate: '2 days ago',
      proposedBudget: 15000,
      status: 'pending',
      statusColor: 'bg-yellow-100 text-yellow-700'
    },
    {
      id: 2,
      jobTitle: 'Logo Design for Startup',
      client: 'Innovation Hub',
      appliedDate: '5 days ago',
      proposedBudget: 8000,
      status: 'accepted',
      statusColor: 'bg-green-100 text-green-700'
    },
    {
      id: 3,
      jobTitle: 'Social Media Content',
      client: 'Creative Agency',
      appliedDate: '1 week ago',
      proposedBudget: 5000,
      status: 'rejected',
      statusColor: 'bg-red-100 text-red-700'
    }
  ];

  const activeProjects = [
    {
      id: 1,
      title: 'E-commerce Website Development',
      client: 'Fashion Store BD',
      deadline: '2024-02-15',
      progress: 75,
      budget: 25000,
      status: 'In Progress'
    },
    {
      id: 2,
      title: 'Mobile App UI Design',
      client: 'Tech Startup',
      deadline: '2024-02-20',
      progress: 45,
      budget: 18000,
      status: 'In Progress'
    },
    {
      id: 3,
      title: 'Brand Identity Package',
      client: 'Local Business',
      deadline: '2024-02-10',
      progress: 90,
      budget: 12000,
      status: 'Review'
    }
  ];

  const earnings = [
    {
      month: 'January 2024',
      amount: 45000,
      jobs: 8,
      growth: 15
    },
    {
      month: 'December 2023',
      amount: 39000,
      jobs: 7,
      growth: 8
    },
    {
      month: 'November 2023',
      amount: 36000,
      jobs: 6,
      growth: 12
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div className="flex items-center mb-4 md:mb-0">
              <img
                src={userData.avatar}
                alt={userData.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h1 className="text-2xl font-bold text-navy-700 mb-1">
                  Welcome back, {userData.name}!
                </h1>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                    {userData.rating} Rating
                  </div>
                  <span>•</span>
                  <span>{userData.level} Level</span>
                  <span>•</span>
                  <span>{userData.completedJobs} Jobs Completed</span>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Link to="/browse-jobs">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  <Plus className="w-4 h-4 mr-2" />
                  Find New Jobs
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
              <TabsTrigger value="applications">Applications</TabsTrigger>
              <TabsTrigger value="projects">Active Projects</TabsTrigger>
              <TabsTrigger value="earnings">Earnings</TabsTrigger>
            </TabsList>

            {/* Overview Tab */}
            <TabsContent value="overview" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                {/* Recent Applications */}
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>Recent Applications</CardTitle>
                    <Link to="#applications">
                      <Button variant="outline" size="sm">View All</Button>
                    </Link>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {applications.slice(0, 3).map(app => (
                        <div key={app.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                          <div>
                            <p className="font-medium text-navy-700">{app.jobTitle}</p>
                            <p className="text-sm text-gray-600">{app.client}</p>
                          </div>
                          <Badge className={app.statusColor}>
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
                      {activeProjects.slice(0, 3).map(project => (
                        <div key={project.id} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <p className="font-medium text-navy-700">{project.title}</p>
                            <span className="text-sm text-gray-600">{project.progress}%</span>
                          </div>
                          <Progress value={project.progress} className="h-2" />
                          <p className="text-sm text-gray-600">Due: {project.deadline}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Profile Completion */}
              <Card>
                <CardHeader>
                  <CardTitle>Profile Completion</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Profile completion</span>
                      <span className="font-medium">85%</span>
                    </div>
                    <Progress value={85} className="h-3" />
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Basic Info
                      </div>
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Skills
                      </div>
                      <div className="flex items-center text-green-600">
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Portfolio
                      </div>
                      <div className="flex items-center text-orange-600">
                        <Clock className="w-4 h-4 mr-2" />
                        Certifications
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Applications Tab */}
            <TabsContent value="applications" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Job Applications</CardTitle>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {applications.map(app => (
                      <div key={app.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-semibold text-navy-700">{app.jobTitle}</h3>
                            <p className="text-gray-600">Client: {app.client}</p>
                          </div>
                          <Badge className={app.statusColor}>
                            {app.status}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                          <div>Applied: {app.appliedDate}</div>
                          <div>Proposed Budget: ৳{app.proposedBudget.toLocaleString()}</div>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <Button size="sm" variant="outline">View Details</Button>
                          {app.status === 'pending' && (
                            <Button size="sm" variant="outline">Withdraw</Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Projects Tab */}
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
                            <p className="text-gray-600">Client: {project.client}</p>
                          </div>
                          <Badge variant="outline">{project.status}</Badge>
                        </div>
                        
                        <div className="space-y-2 mb-4">
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
                            Message Client
                          </Button>
                          <Button size="sm" variant="outline">
                            Submit Work
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Earnings Tab */}
            <TabsContent value="earnings" className="space-y-6">
              <div className="grid lg:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Monthly Earnings</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {earnings.map((earning, index) => (
                        <div key={index} className="flex justify-between items-center py-2 border-b last:border-b-0">
                          <div>
                            <p className="font-medium">{earning.month}</p>
                            <p className="text-sm text-gray-600">{earning.jobs} jobs completed</p>
                          </div>
                          <div className="text-right">
                            <p className="font-bold text-navy-700">৳{earning.amount.toLocaleString()}</p>
                            <p className="text-sm text-green-600">+{earning.growth}%</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Earnings Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Available Balance</span>
                        <span className="font-bold text-green-600">৳12,500</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pending Payments</span>
                        <span className="font-medium">৳8,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Total Withdrawn</span>
                        <span className="font-medium">৳1,04,500</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between text-lg">
                        <span className="font-medium">Total Earned</span>
                        <span className="font-bold text-navy-700">৳1,25,000</span>
                      </div>
                      <Button className="w-full bg-orange-500 hover:bg-orange-600">
                        Withdraw Earnings
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
