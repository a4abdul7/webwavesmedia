'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Send, CheckCircle, Globe, Smartphone, Search, TrendingUp, Users, Zap, Target, BarChart } from 'lucide-react';

interface FormData {
  // Step 1: Project Type
  projectType: string;
  services: string[];
  
  // Step 2: Company Info
  companyName: string;
  industry: string;
  companySize: string;
  website: string;
  
  // Step 3: Project Details
  projectGoals: string[];
  timeline: string;
  budget: string;
  description: string;
  
  // Step 4: Contact Info
  name: string;
  email: string;
  phone: string;
  preferredContact: string;
}

const services = [
  { id: 'seo', name: 'SEO Optimization', icon: Search },
  { id: 'ppc', name: 'PPC Advertising', icon: Target },
  { id: 'social', name: 'Social Media Marketing', icon: Users },
  { id: 'content', name: 'Content Marketing', icon: TrendingUp },
  { id: 'web', name: 'Web Development', icon: Globe },
  { id: 'mobile', name: 'Mobile App Development', icon: Smartphone },
  { id: 'analytics', name: 'Analytics & Reporting', icon: BarChart },
  { id: 'automation', name: 'Marketing Automation', icon: Zap },
];

const projectGoals = [
  'Increase website traffic',
  'Generate more leads',
  'Improve brand awareness',
  'Boost online sales',
  'Enhance user experience',
  'Expand market reach',
  'Improve conversion rates',
  'Build customer loyalty'
];

export default function GetQuotePage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    projectType: '',
    services: [],
    companyName: '',
    industry: '',
    companySize: '',
    website: '',
    projectGoals: [],
    timeline: '',
    budget: '',
    description: '',
    name: '',
    email: '',
    phone: '',
    preferredContact: 'email'
  });

  const totalSteps = 4;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }));
  };

  const handleGoalToggle = (goal: string) => {
    setFormData(prev => ({
      ...prev,
      projectGoals: prev.projectGoals.includes(goal)
        ? prev.projectGoals.filter(g => g !== goal)
        : [...prev.projectGoals, goal]
    }));
  };

  const handleSubmit = () => {
    // Send email directly to sales@webwavesmedia.com
    const emailData = {
      to: 'sales@webwavesmedia.com',
      subject: `Quote Request - ${formData.companyName}`,
      body: `
New Quote Request from ${formData.name}

COMPANY INFORMATION:
- Company: ${formData.companyName}
- Industry: ${formData.industry}
- Company Size: ${formData.companySize}
- Website: ${formData.website}

PROJECT DETAILS:
- Project Type: ${formData.projectType}
- Services Needed: ${formData.services.map(s => services.find(srv => srv.id === s)?.name).join(', ')}
- Project Goals: ${formData.projectGoals.join(', ')}
- Timeline: ${formData.timeline}
- Budget Range: ${formData.budget}
- Description: ${formData.description}

CONTACT INFORMATION:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Preferred Contact: ${formData.preferredContact}

Please provide a custom quote for this project.
      `.trim()
    };

    // Create a form and submit it to send email
    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'mailto:sales@webwavesmedia.com';
    form.style.display = 'none';
    
    const subjectInput = document.createElement('input');
    subjectInput.name = 'subject';
    subjectInput.value = emailData.subject;
    form.appendChild(subjectInput);
    
    const bodyInput = document.createElement('input');
    bodyInput.name = 'body';
    bodyInput.value = emailData.body;
    form.appendChild(bodyInput);
    
    document.body.appendChild(form);
    form.submit();
    document.body.removeChild(form);
    
    // Show success message
    alert('Quote request sent successfully! Our team will contact you within 24 hours.');
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">What type of project do you have?</h2>
              <p className="text-gray-600">Select the primary focus of your project</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { id: 'new-business', name: 'New Business Launch', desc: 'Starting a new business or product' },
                { id: 'growth', name: 'Business Growth', desc: 'Scaling existing operations' },
                { id: 'rebrand', name: 'Rebranding', desc: 'Updating brand identity and presence' },
                { id: 'digital-transformation', name: 'Digital Transformation', desc: 'Modernizing digital presence' }
              ].map((type) => (
                <motion.div
                  key={type.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    formData.projectType === type.id
                      ? 'border-blue-500 bg-blue-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  onClick={() => setFormData(prev => ({ ...prev, projectType: type.id }))}
                >
                  <h3 className="font-semibold text-gray-900">{type.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{type.desc}</p>
                </motion.div>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Which services do you need?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {services.map((service) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={service.id}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`p-3 border-2 rounded-lg cursor-pointer transition-all text-center ${
                        formData.services.includes(service.id)
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => handleServiceToggle(service.id)}
                    >
                      <Icon className="w-6 h-6 mx-auto mb-2 text-blue-600" />
                      <p className="text-sm font-medium text-gray-900">{service.name}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        );

      case 2:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Tell us about your company</h2>
              <p className="text-gray-600">Help us understand your business better</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.companyName}
                  onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                  placeholder="Your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.industry}
                  onChange={(e) => setFormData(prev => ({ ...prev, industry: e.target.value }))}
                >
                  <option value="">Select industry</option>
                  <option value="technology">Technology</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="finance">Finance</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="education">Education</option>
                  <option value="real-estate">Real Estate</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Size</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.companySize}
                  onChange={(e) => setFormData(prev => ({ ...prev, companySize: e.target.value }))}
                >
                  <option value="">Select size</option>
                  <option value="startup">Startup (1-10 employees)</option>
                  <option value="small">Small Business (11-50 employees)</option>
                  <option value="medium">Medium Business (51-200 employees)</option>
                  <option value="large">Large Enterprise (200+ employees)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Current Website</label>
                <input
                  type="url"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.website}
                  onChange={(e) => setFormData(prev => ({ ...prev, website: e.target.value }))}
                  placeholder="https://yourwebsite.com"
                />
              </div>
            </div>
          </motion.div>
        );

      case 3:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Project Details</h2>
              <p className="text-gray-600">Share more about your project requirements</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What are your main goals?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {projectGoals.map((goal) => (
                  <motion.div
                    key={goal}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`p-3 border-2 rounded-lg cursor-pointer transition-all text-center ${
                      formData.projectGoals.includes(goal)
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => handleGoalToggle(goal)}
                  >
                    <p className="text-sm font-medium text-gray-900">{goal}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Project Timeline</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.timeline}
                  onChange={(e) => setFormData(prev => ({ ...prev, timeline: e.target.value }))}
                >
                  <option value="">Select timeline</option>
                  <option value="asap">ASAP (Rush project)</option>
                  <option value="1-month">Within 1 month</option>
                  <option value="2-3-months">2-3 months</option>
                  <option value="3-6-months">3-6 months</option>
                  <option value="6-months-plus">6+ months</option>
                  <option value="flexible">Flexible timeline</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.budget}
                  onChange={(e) => setFormData(prev => ({ ...prev, budget: e.target.value }))}
                >
                  <option value="">Select budget range</option>
                  <option value="under-5k">Under $5,000</option>
                  <option value="5k-15k">$5,000 - $15,000</option>
                  <option value="15k-50k">$15,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-plus">$100,000+</option>
                  <option value="discuss">Prefer to discuss</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Project Description</label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={formData.description}
                onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
                placeholder="Tell us more about your project, challenges, and specific requirements..."
              />
            </div>
          </motion.div>
        );

      case 4:
        return (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-6"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Contact Information</h2>
              <p className="text-gray-600">How can we reach you with your custom quote?</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Contact Method</label>
                <select
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.preferredContact}
                  onChange={(e) => setFormData(prev => ({ ...prev, preferredContact: e.target.value }))}
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone</option>
                  <option value="both">Both Email & Phone</option>
                </select>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="font-semibold text-blue-900 mb-2">Ready to Submit</h3>
                  <p className="text-blue-800 text-sm">
                    Our team will review your requirements and provide a custom quote within 24 hours. 
                    All quotes are tailored specifically to your project needs and business goals.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        );

      default:
        return null;
    }
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.projectType && formData.services.length > 0;
      case 2:
        return formData.companyName.trim() !== '';
      case 3:
        return formData.projectGoals.length > 0;
      case 4:
        return formData.name.trim() !== '' && formData.email.trim() !== '';
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Get Your Custom Quote</h1>
          <p className="text-xl text-gray-600">
            Tell us about your project and receive a personalized proposal
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm font-medium text-gray-700">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-blue-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form Content */}
        <motion.div
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <AnimatePresence mode="wait">
            {renderStep()}
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePrev}
              disabled={currentStep === 1}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Previous</span>
            </motion.button>

            {currentStep < totalSteps ? (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  isStepValid()
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <span>Next</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            ) : (
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleSubmit}
                disabled={!isStepValid()}
                className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-all ${
                  isStepValid()
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                }`}
              >
                <Send className="w-4 h-4" />
                <span>Submit Quote Request</span>
              </motion.button>
            )}
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-8"
        >
          <p className="text-gray-600">
            Questions? Contact us at{' '}
            <a href="mailto:sales@webwavesmedia.com" className="text-blue-600 hover:underline">
              sales@webwavesmedia.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}