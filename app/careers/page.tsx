"use client";

import { motion } from 'framer-motion';
import { Briefcase, Users, TrendingUp, Heart, Mail, MapPin, Clock } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const jobOpenings = [
  {
    title: "Senior Digital Marketing Strategist",
    department: "Strategy",
    type: "Full-time",
    location: "Remote",
    description: "Lead comprehensive digital marketing strategies for enterprise clients. Develop data-driven campaigns across multiple channels.",
    requirements: [
      "5+ years in digital marketing strategy",
      "Experience with enterprise clients",
      "Strong analytical and communication skills",
      "Expertise in SEO, PPC, and social media"
    ]
  },
  {
    title: "Content Marketing Manager",
    department: "Content",
    type: "Full-time",
    location: "San Francisco, CA",
    description: "Create and execute content marketing strategies that drive engagement and conversions. Manage editorial calendar and content team.",
    requirements: [
      "3+ years in content marketing",
      "Excellent writing and editing skills",
      "Experience with content management systems",
      "Knowledge of SEO best practices"
    ]
  },
  {
    title: "PPC Specialist",
    department: "Advertising",
    type: "Full-time",
    location: "Remote",
    description: "Manage and optimize paid advertising campaigns across Google Ads, Facebook, and other platforms. Focus on ROI and performance metrics.",
    requirements: [
      "2+ years in PPC management",
      "Google Ads and Facebook Ads certification",
      "Strong analytical skills",
      "Experience with bid management tools"
    ]
  },
  {
    title: "Social Media Manager",
    department: "Social Media",
    type: "Full-time",
    location: "Hybrid",
    description: "Develop and execute social media strategies across multiple platforms. Create engaging content and manage community interactions.",
    requirements: [
      "2+ years in social media management",
      "Experience with social media tools",
      "Creative content creation skills",
      "Understanding of social media analytics"
    ]
  }
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs"
  },
  {
    icon: TrendingUp,
    title: "Professional Growth",
    description: "Continuous learning opportunities and career advancement"
  },
  {
    icon: Users,
    title: "Team Culture",
    description: "Collaborative environment with talented professionals"
  },
  {
    icon: Clock,
    title: "Work-Life Balance",
    description: "Flexible schedules and remote work options"
  }
];

export default function CareersPage() {
  const handleApply = (jobTitle: string) => {
    const subject = encodeURIComponent(`Application for ${jobTitle}`);
    const body = encodeURIComponent(`
I am interested in applying for the ${jobTitle} position at WebWavesMedia.

Please find my application details below:

Name: [Your Name]
Email: [Your Email]
Phone: [Your Phone]
LinkedIn: [Your LinkedIn Profile]

Cover Letter:
[Please write your cover letter here]

I have attached my resume and look forward to hearing from you.

Best regards,
[Your Name]
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
              Join Our Team
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Build Your Career in
              <span className="text-gradient block">Digital Marketing</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join a dynamic team of digital marketing professionals who are passionate about 
              driving results and creating innovative solutions for our clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">Why Work With Us</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We offer competitive benefits and a supportive environment where you can grow your career.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover-lift border-border/50 bg-card/50 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <motion.div
                      className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <benefit.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for your skills and career goals.
            </p>
          </motion.div>

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-foreground mb-2">{job.title}</h3>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant="secondary">{job.department}</Badge>
                          <Badge variant="outline">{job.type}</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <MapPin className="h-4 w-4 mr-1" />
                            {job.location}
                          </div>
                        </div>
                      </div>
                      <Button 
                        className="bg-gradient-to-r from-primary to-accent hover-lift"
                        onClick={() => handleApply(job.title)}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Apply Now
                      </Button>
                    </div>
                    
                    <p className="text-muted-foreground mb-6">{job.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you can contribute.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 hover-lift"
              onClick={() => {
                const subject = encodeURIComponent('General Application - WebWavesMedia');
                const body = encodeURIComponent(`
I am interested in joining the WebWavesMedia team.

Name: [Your Name]
Email: [Your Email]
Phone: [Your Phone]
LinkedIn: [Your LinkedIn Profile]

I am passionate about digital marketing and would love to contribute to your team. Please find my resume attached.

Best regards,
[Your Name]
                `);
                window.location.href = `mailto:sales@webwavesmedia.com?subject=${subject}&body=${body}`;
              }}
            >
              <Mail className="w-4 h-4 mr-2" />
              Send General Application
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}