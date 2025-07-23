import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { 
  Search, 
  Filter, 
  MapPin, 
  Clock, 
  DollarSign, 
  Star,
  Briefcase,
  User
} from 'lucide-react';

export default function BrowseJobs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDuration, setSelectedDuration] = useState('all');
  const [selectedSkillLevel, setSelectedSkillLevel] = useState('all');

  // Mock job data
  const jobs = [
    {
      id: 1,
      title: 'WordPress Website Design',
      description: 'Need a modern, responsive WordPress website for my business. Must be mobile-friendly and SEO optimized.',
      budget: 1500,
      category: 'web-development',
      duration: '1-2 weeks',
      skillLevel: 'intermediate',
      employer: 'Tech Solutions BD',
      location: 'Dhaka, Bangladesh',
      postedTime: '2 hours ago',
      proposals: 8,
      rating: 4.8,
      tags: ['WordPress', 'Responsive Design', 'SEO'],
      urgent: false
    },
    {
      id: 2,
      title: 'Logo Design for Startup',
      description: 'Looking for a creative logo designer to create a modern logo for our tech startup. Need multiple concepts and revisions.',
      budget: 800,
      category: 'design',
      duration: '3-5 days',
      skillLevel: 'expert',
      employer: 'Innovation Hub',
      location: 'Remote',
      postedTime: '5 hours ago',
      proposals: 15,
      rating: 4.9,
      tags: ['Logo Design', 'Branding', 'Illustrator'],
      urgent: true
    },
    {
      id: 3,
      title: 'Social Media Content Creation',
      description: 'Need engaging content for Facebook and Instagram. Must understand Bengali market and create culturally relevant posts.',
      budget: 2000,
      category: 'marketing',
      duration: '1 month',
      skillLevel: 'intermediate',
      employer: 'Digital Marketing Pro',
      location: 'Chittagong, Bangladesh',
      postedTime: '1 day ago',
      proposals: 12,
      rating: 4.7,
      tags: ['Social Media', 'Content Creation', 'Bengali'],
      urgent: false
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Develop a React Native app for food delivery. Need both iOS and Android versions with payment integration.',
      budget: 8000,
      category: 'mobile-development',
      duration: '2-3 months',
      skillLevel: 'expert',
      employer: 'FoodTech BD',
      location: 'Sylhet, Bangladesh',
      postedTime: '3 days ago',
      proposals: 6,
      rating: 4.6,
      tags: ['React Native', 'Mobile App', 'Payment Integration'],
      urgent: false
    },
    {
      id: 5,
      title: 'Data Entry and Processing',
      description: 'Need someone to process and organize large datasets. Must be accurate and detail-oriented.',
      budget: 500,
      category: 'data-entry',
      duration: '1 week',
      skillLevel: 'beginner',
      employer: 'Research Institute',
      location: 'Remote',
      postedTime: '6 hours ago',
      proposals: 25,
      rating: 4.5,
      tags: ['Data Entry', 'Excel', 'Data Processing'],
      urgent: true
    },
    {
      id: 6,
      title: 'Bengali to English Translation',
      description: 'Translate business documents from Bengali to English. Must maintain professional tone and accuracy.',
      budget: 1200,
      category: 'translation',
      duration: '1-2 weeks',
      skillLevel: 'intermediate',
      employer: 'Global Communications',
      location: 'Remote',
      postedTime: '12 hours ago',
      proposals: 18,
      rating: 4.8,
      tags: ['Translation', 'Bengali', 'English'],
      urgent: false
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'web-development', label: 'Web Development' },
    { value: 'mobile-development', label: 'Mobile Development' },
    { value: 'design', label: 'Design & Creative' },
    { value: 'marketing', label: 'Digital Marketing' },
    { value: 'data-entry', label: 'Data Entry' },
    { value: 'translation', label: 'Translation' },
    { value: 'writing', label: 'Content Writing' }
  ];

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || job.category === selectedCategory;
    const matchesBudget = job.budget >= priceRange[0] && job.budget <= priceRange[1];
    const matchesDuration = selectedDuration === 'all' || job.duration === selectedDuration;
    const matchesSkillLevel = selectedSkillLevel === 'all' || job.skillLevel === selectedSkillLevel;

    return matchesSearch && matchesCategory && matchesBudget && matchesDuration && matchesSkillLevel;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        {/* Page Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-4 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-navy-700 mb-4">Browse Jobs</h1>
            <p className="text-gray-600">Find the perfect micro-job that matches your skills</p>
            
            {/* Search Bar */}
            <div className="mt-6 flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Search for jobs, skills, or keywords..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12"
                />
              </div>
              <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 h-12">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    <Filter className="w-5 h-5 mr-2" />
                    Filters
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Category Filter */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Category
                    </label>
                    <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {categories.map(category => (
                          <SelectItem key={category.value} value={category.value}>
                            {category.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Budget Range (৳{priceRange[0]} - ৳{priceRange[1]})
                    </label>
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={10000}
                      min={0}
                      step={100}
                      className="mt-2"
                    />
                  </div>

                  {/* Duration */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Duration
                    </label>
                    <Select value={selectedDuration} onValueChange={setSelectedDuration}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Durations</SelectItem>
                        <SelectItem value="1-3 days">1-3 days</SelectItem>
                        <SelectItem value="3-5 days">3-5 days</SelectItem>
                        <SelectItem value="1 week">1 week</SelectItem>
                        <SelectItem value="1-2 weeks">1-2 weeks</SelectItem>
                        <SelectItem value="1 month">1 month</SelectItem>
                        <SelectItem value="2-3 months">2-3 months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Skill Level */}
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">
                      Skill Level
                    </label>
                    <Select value={selectedSkillLevel} onValueChange={setSelectedSkillLevel}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="all">All Levels</SelectItem>
                        <SelectItem value="beginner">Beginner</SelectItem>
                        <SelectItem value="intermediate">Intermediate</SelectItem>
                        <SelectItem value="expert">Expert</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      setSearchQuery('');
                      setPriceRange([0, 5000]);
                      setSelectedCategory('all');
                      setSelectedDuration('all');
                      setSelectedSkillLevel('all');
                    }}
                  >
                    Clear Filters
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Jobs List */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6">
                <p className="text-gray-600">
                  Showing {filteredJobs.length} jobs
                </p>
                <Select defaultValue="newest">
                  <SelectTrigger className="w-48">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="oldest">Oldest First</SelectItem>
                    <SelectItem value="budget-high">Highest Budget</SelectItem>
                    <SelectItem value="budget-low">Lowest Budget</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-6">
                {filteredJobs.map(job => (
                  <Card key={job.id} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex justify-between items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Link 
                              to={`/job/${job.id}`}
                              className="text-xl font-semibold text-navy-700 hover:text-orange-500 transition-colors"
                            >
                              {job.title}
                            </Link>
                            {job.urgent && (
                              <Badge className="bg-red-100 text-red-700">Urgent</Badge>
                            )}
                          </div>
                          
                          <p className="text-gray-600 mb-4 line-clamp-2">
                            {job.description}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-4">
                            {job.tags.map(tag => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>

                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <DollarSign className="w-4 h-4 mr-1" />
                              ৳{job.budget.toLocaleString()}
                            </div>
                            <div className="flex items-center">
                              <Clock className="w-4 h-4 mr-1" />
                              {job.duration}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="w-4 h-4 mr-1" />
                              {job.location}
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-1" />
                              {job.proposals} proposals
                            </div>
                          </div>
                        </div>

                        <div className="text-right ml-6">
                          <div className="flex items-center mb-2">
                            <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                            <span className="text-sm font-medium">{job.rating}</span>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{job.employer}</p>
                          <p className="text-xs text-gray-500">{job.postedTime}</p>
                        </div>
                      </div>

                      <div className="flex justify-between items-center pt-4 border-t">
                        <Badge variant="outline" className="capitalize">
                          {job.skillLevel}
                        </Badge>
                        
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">
                            Save Job
                          </Button>
                          <Link to={`/job/${job.id}`}>
                            <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                              Apply Now
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {filteredJobs.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Search className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">No jobs found</h3>
                  <p className="text-gray-500">Try adjusting your filters or search terms</p>
                </div>
              )}

              {/* Pagination */}
              {filteredJobs.length > 0 && (
                <div className="flex justify-center mt-8">
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" disabled>
                      Previous
                    </Button>
                    <Button size="sm" className="bg-orange-500 text-white">1</Button>
                    <Button variant="outline" size="sm">2</Button>
                    <Button variant="outline" size="sm">3</Button>
                    <Button variant="outline" size="sm">
                      Next
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
