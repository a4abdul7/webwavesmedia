"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, ArrowRight, Zap, Crown, Rocket, Mail } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const pricingPlans = [
  {
    name: "Starter",
    icon: Zap,
    description: "Perfect for small businesses getting started",
    gradient: "from-blue-500 to-cyan-600",
    features: [
      "SEO Audit & Strategy",
      "Google My Business Setup",
      "Social Media Setup (2 platforms)",
      "Monthly Performance Report",
      "Email Support",
      "Basic Website Analysis"
    ],
    popular: false
  },
  {
    name: "Professional",
    icon: Crown,
    description: "Comprehensive marketing for growing businesses",
    gradient: "from-purple-500 to-pink-600",
    features: [
      "Everything in Starter",
      "Content Marketing Strategy",
      "Social Media Management (4 platforms)",
      "Google Ads Management",
      "Email Marketing Campaigns",
      "Conversion Rate Optimization",
      "Bi-weekly Strategy Calls",
      "Priority Support"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    icon: Rocket,
    description: "Full-scale marketing for established companies",
    gradient: "from-orange-500 to-red-600",
    features: [
      "Everything in Professional",
      "Custom Marketing Automation",
      "Advanced Analytics & Reporting",
      "Dedicated Account Manager",
      "Video Marketing Strategy",
      "Influencer Partnership Management",
      "Weekly Strategy Sessions",
      "24/7 Priority Support",
      "Custom Integrations"
    ],
    popular: false
  }
];

const addOns = [
  { name: "Website Redesign", description: "Complete website overhaul with modern design" },
  { name: "E-commerce Setup", description: "Full online store setup and optimization" },
  { name: "Brand Identity Package", description: "Logo, brand guidelines, and visual assets" },
  { name: "Video Production", description: "Professional video content creation" }
];

export default function PricingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link
    const subject = encodeURIComponent('Pricing Inquiry from ' + formData.company);
    const body = encodeURIComponent(`
Name: ${formData.name}
Email: ${formData.email}
Company: ${formData.company}
Message: ${formData.message}
    `);
    
    window.location.href = `mailto:sales@webwavesmedia.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Flexible Solutions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Choose Your Growth
              <span className="text-gradient block">Package</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Flexible service packages designed to scale with your business. 
              Contact us for custom pricing tailored to your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                  >
                    <Badge className="bg-gradient-to-r from-primary to-accent text-white px-4 py-1">
                      <Star className="w-3 h-3 mr-1" />
                      Most Popular
                    </Badge>
                  </motion.div>
                )}
                
                <Card className={`h-full hover-lift border-border/50 ${plan.popular ? 'ring-2 ring-primary/20 shadow-xl' : ''}`}>
                  <CardHeader className="text-center pb-8">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${plan.gradient} flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <plan.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                    <p className="text-muted-foreground mb-6">{plan.description}</p>
                    
                    <div className="text-2xl font-bold text-gradient">
                      Contact for Pricing
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          className="flex items-center space-x-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featureIndex * 0.1 }}
                        >
                          <Check className="h-5 w-5 text-primary flex-shrink-0" />
                          <span className="text-foreground">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-accent hover-lift' : ''}`}
                      variant={plan.popular ? 'default' : 'outline'}
                      size="lg"
                      asChild
                    >
                      <Link href="/get-quote">
                        Get Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Additional Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Enhance your marketing package with these specialized services 
              tailored to your unique business needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addOns.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {addon.name}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {addon.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-bold text-primary">
                          Custom Quote
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full" asChild>
                      <Link href="/contact">Get Quote</Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Get Custom Pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact us for a personalized quote based on your specific needs.
            </p>
          </motion.div>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-3 py-2 border border-border rounded-md bg-background"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Company</label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData(prev => ({ ...prev, company: e.target.value }))}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                    placeholder="Your Company"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Message *</label>
                  <textarea
                    required
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-3 py-2 border border-border rounded-md bg-background"
                    rows={4}
                    placeholder="Tell us about your project and requirements..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-accent hover-lift"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Send Quote Request
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}