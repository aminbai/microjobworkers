import { useState } from 'react';
import { Header } from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  FileText, 
  DollarSign, 
  Clock, 
  Users, 
  Tag,
  MapPin,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

export default function PostJob() {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    description: '',
    requirements: '',
    budget: '',
    budgetType: 'fixed',
    duration: '',
    skillLevel: '',
    location: '',
    skills: '',
    attachments: [],
    urgent: false,
    freelancersNeeded: '1'
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;

  const categories = [
    'Web Development',
    'Mobile Development',
    'Design & Creative',
    'Digital Marketing',
    'Content Writing',
    'Data Entry',
    'Translation',
    'Video & Animation',
    'Music & Audio',
    'Programming & Tech'
  ];

  const skillLevels = [
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'expert', label: 'Expert' }
  ];

  const durations = [
    '1-3 days',
    '3-5 days',
    '1 week',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3+ months'
  ];

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    console.log('Job Posted:', formData);
    alert('Job posted successfully!');
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="title" className="text-base font-medium">Job Title *</Label>
              <Input
                id="title"
                placeholder="e.g., Build a responsive WordPress website"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">
                Write a clear, descriptive title that explains what you need done
              </p>
            </div>

            <div>
              <Label htmlFor="category" className="text-base font-medium">Category *</Label>
              <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="description" className="text-base font-medium">Job Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe your project in detail. Include what you want to achieve, any specific requirements, and what success looks like..."
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={6}
                className="mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">
                Minimum 100 characters. Be specific about what you need.
              </p>
            </div>

            <div>
              <Label htmlFor="requirements" className="text-base font-medium">Requirements & Qualifications</Label>
              <Textarea
                id="requirements"
                placeholder="List any specific skills, experience, or qualifications needed for this job..."
                value={formData.requirements}
                onChange={(e) => handleInputChange('requirements', e.target.value)}
                rows={4}
                className="mt-2"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-medium">Budget Type *</Label>
              <RadioGroup 
                value={formData.budgetType} 
                onValueChange={(value) => handleInputChange('budgetType', value)}
                className="mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="fixed" id="fixed" />
                  <Label htmlFor="fixed">Fixed Price</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="hourly" id="hourly" />
                  <Label htmlFor="hourly">Hourly Rate</Label>
                </div>
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="budget" className="text-base font-medium">
                Budget {formData.budgetType === 'fixed' ? '(৳)' : '(৳/hour)'} *
              </Label>
              <Input
                id="budget"
                type="number"
                placeholder={formData.budgetType === 'fixed' ? 'e.g., 5000' : 'e.g., 500'}
                value={formData.budget}
                onChange={(e) => handleInputChange('budget', e.target.value)}
                className="mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">
                {formData.budgetType === 'fixed' 
                  ? 'Enter the total amount you\'re willing to pay for this project'
                  : 'Enter the hourly rate you\'re willing to pay'
                }
              </p>
            </div>

            <div>
              <Label htmlFor="duration" className="text-base font-medium">Project Duration *</Label>
              <Select value={formData.duration} onValueChange={(value) => handleInputChange('duration', value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select expected duration" />
                </SelectTrigger>
                <SelectContent>
                  {durations.map(duration => (
                    <SelectItem key={duration} value={duration}>
                      {duration}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="skillLevel" className="text-base font-medium">Required Skill Level *</Label>
              <Select value={formData.skillLevel} onValueChange={(value) => handleInputChange('skillLevel', value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select skill level" />
                </SelectTrigger>
                <SelectContent>
                  {skillLevels.map(level => (
                    <SelectItem key={level.value} value={level.value}>
                      {level.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="freelancersNeeded" className="text-base font-medium">Number of Freelancers Needed</Label>
              <Select value={formData.freelancersNeeded} onValueChange={(value) => handleInputChange('freelancersNeeded', value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1 freelancer</SelectItem>
                  <SelectItem value="2">2 freelancers</SelectItem>
                  <SelectItem value="3">3 freelancers</SelectItem>
                  <SelectItem value="5">5 freelancers</SelectItem>
                  <SelectItem value="more">More than 5</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="skills" className="text-base font-medium">Required Skills</Label>
              <Input
                id="skills"
                placeholder="e.g., WordPress, PHP, JavaScript, CSS (separate with commas)"
                value={formData.skills}
                onChange={(e) => handleInputChange('skills', e.target.value)}
                className="mt-2"
              />
              <p className="text-sm text-gray-500 mt-1">
                List the main skills required for this job
              </p>
            </div>

            <div>
              <Label htmlFor="location" className="text-base font-medium">Location Preference</Label>
              <Select value={formData.location} onValueChange={(value) => handleInputChange('location', value)}>
                <SelectTrigger className="mt-2">
                  <SelectValue placeholder="Select location preference" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="remote">Remote</SelectItem>
                  <SelectItem value="dhaka">Dhaka, Bangladesh</SelectItem>
                  <SelectItem value="chittagong">Chittagong, Bangladesh</SelectItem>
                  <SelectItem value="sylhet">Sylhet, Bangladesh</SelectItem>
                  <SelectItem value="rajshahi">Rajshahi, Bangladesh</SelectItem>
                  <SelectItem value="khulna">Khulna, Bangladesh</SelectItem>
                  <SelectItem value="barisal">Barisal, Bangladesh</SelectItem>
                  <SelectItem value="rangpur">Rangpur, Bangladesh</SelectItem>
                  <SelectItem value="anywhere">Anywhere in Bangladesh</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <Label className="text-base font-medium">Additional Options</Label>
              
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="urgent" 
                  checked={formData.urgent}
                  onCheckedChange={(checked) => handleInputChange('urgent', checked)}
                />
                <Label htmlFor="urgent" className="text-sm">
                  Mark as urgent (+৳100 for priority listing)
                </Label>
              </div>
            </div>

            <div>
              <Label className="text-base font-medium">Attachments (Optional)</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-600 mb-2">
                  Upload project files, mockups, or reference materials
                </p>
                <Button variant="outline" size="sm">
                  Choose Files
                </Button>
                <p className="text-xs text-gray-500 mt-2">
                  Supported formats: PDF, DOC, PNG, JPG (Max 10MB each)
                </p>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy-700 mb-2">Review Your Job Post</h3>
              <p className="text-gray-600">Please review your job details before publishing</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {formData.title || 'Job Title'}
                  {formData.urgent && (
                    <span className="text-sm bg-red-100 text-red-700 px-2 py-1 rounded">Urgent</span>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Category:</span> {formData.category}
                  </div>
                  <div>
                    <span className="font-medium">Budget:</span> ৳{formData.budget} ({formData.budgetType})
                  </div>
                  <div>
                    <span className="font-medium">Duration:</span> {formData.duration}
                  </div>
                  <div>
                    <span className="font-medium">Skill Level:</span> {formData.skillLevel}
                  </div>
                  <div>
                    <span className="font-medium">Location:</span> {formData.location}
                  </div>
                  <div>
                    <span className="font-medium">Freelancers:</span> {formData.freelancersNeeded}
                  </div>
                </div>
                
                <div>
                  <span className="font-medium">Description:</span>
                  <p className="text-gray-600 mt-1">{formData.description}</p>
                </div>

                {formData.requirements && (
                  <div>
                    <span className="font-medium">Requirements:</span>
                    <p className="text-gray-600 mt-1">{formData.requirements}</p>
                  </div>
                )}

                {formData.skills && (
                  <div>
                    <span className="font-medium">Required Skills:</span>
                    <p className="text-gray-600 mt-1">{formData.skills}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex">
                <AlertCircle className="w-5 h-5 text-blue-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium text-blue-900">Job Posting Fee</h4>
                  <p className="text-sm text-blue-700 mt-1">
                    Basic job posting: Free<br/>
                    {formData.urgent && 'Urgent listing: +৳100'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="pt-20">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-navy-700 mb-4">Post a Job</h1>
              <p className="text-gray-600">Find the perfect freelancer for your project</p>
            </div>

            {/* Progress Steps */}
            <div className="mb-8">
              <div className="flex items-center justify-between">
                {[1, 2, 3, 4].map((step) => (
                  <div key={step} className="flex items-center">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                      step <= currentStep 
                        ? 'bg-orange-500 text-white' 
                        : 'bg-gray-200 text-gray-600'
                    }`}>
                      {step}
                    </div>
                    {step < 4 && (
                      <div className={`h-1 w-full mx-4 ${
                        step < currentStep ? 'bg-orange-500' : 'bg-gray-200'
                      }`} />
                    )}
                  </div>
                ))}
              </div>
              
              <div className="flex justify-between mt-2 text-sm text-gray-600">
                <span>Job Details</span>
                <span>Budget & Timeline</span>
                <span>Requirements</span>
                <span>Review & Publish</span>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>
                  Step {currentStep} of {totalSteps}: {
                    currentStep === 1 ? 'Job Details' :
                    currentStep === 2 ? 'Budget & Timeline' :
                    currentStep === 3 ? 'Requirements' :
                    'Review & Publish'
                  }
                </CardTitle>
              </CardHeader>
              <CardContent>
                {renderStepContent()}
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <Button 
                variant="outline" 
                onClick={prevStep} 
                disabled={currentStep === 1}
              >
                Previous
              </Button>
              
              {currentStep < totalSteps ? (
                <Button 
                  onClick={nextStep}
                  className="bg-orange-500 hover:bg-orange-600"
                  disabled={
                    (currentStep === 1 && (!formData.title || !formData.category || !formData.description)) ||
                    (currentStep === 2 && (!formData.budget || !formData.duration || !formData.skillLevel))
                  }
                >
                  Next Step
                </Button>
              ) : (
                <Button 
                  onClick={handleSubmit}
                  className="bg-green-600 hover:bg-green-700"
                >
                  Publish Job
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
