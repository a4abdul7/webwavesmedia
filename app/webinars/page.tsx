"use client";

import { motion } from 'framer-motion';
import { Calendar, Clock, Users, Play, Mail, Video } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const upcomingWebinars = [
  {
    id: 1,
    title: "AI-Powered SEO Strategies for 2025",
    date: "2025-02-15",
    time: "2:00 PM PST",
    duration: "60 minutes",
    presenter: "WebWaves Marketing Team",
    description: "Learn how to leverage artificial intelligence and machine learning to revolutionize your SEO strategy in 2025.",
    topics: ["AI content optimization", "Predictive keyword analysis", "Automated technical SEO", "Voice search optimization"],
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
  },
  {
    id: 2,
    title: "The Future of Social Commerce",
    date: "2025-02-22",
    time: "1:00 PM PST",
    duration: "45 minutes",
    presenter: "WebWaves Marketing Team",
    description: "Discover how social media platforms are becoming the new e-commerce frontier and how to capitalize on this trend.",
    topics: ["Social shopping features", "Influencer partnerships", "Live commerce strategies", "Social media ROI"],
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Sustainable Digital Marketing Practices",
    date: "2025-03-01",
    time: "3:00 PM PST",
    duration: "50 minutes",
    presenter: "WebWaves Marketing Team",
    description: "Explore eco-friendly marketing strategies that reduce environmental impact while increasing brand loyalty.",
    topics: ["Green marketing strategies", "Carbon footprint reduction", "Sustainable content creation", "ESG marketing"],
    image: "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop"
  }
];

const pastWebinars = [
  {
    id: 4,
    title: "Mastering Google Analytics 4",
    date: "2025-01-18",
    duration: "75 minutes",
    description: "Complete guide to setting up and using Google Analytics 4 for better marketing insights.",
    available: true
  },
  {
    id: 5,
    title: "Content Marketing Trends 2025",
    date: "2025-01-11",
    duration: "60 minutes",
    description: "Latest content marketing trends and strategies that are driving engagement in 2025.",
    available: true
  },
  {
    id: 6,
    title: "PPC Optimization Masterclass",
    date: "2025-01-04",
    duration: "90 minutes",
    description: "Advanced techniques for optimizing pay-per-click campaigns across all major platforms.",
    available: true
  }
];

export default function WebinarsPage() {
  const handleRegister = (webinarTitle: string, webinarDate: string) => {
    const subject = encodeURIComponent(`Webinar Registration: ${webinarTitle}`);
    const body = encodeURIComponent(`
I would like to register for the following webinar:

Webinar: ${webinarTitle}
Date: ${webinarDate}

Registration Details:
Name: [Your Name]
Email: [Your Email]
Company: [Your Company]
Phone: [Your Phone]
Job Title: [Your Job Title]

Please send me the webinar link and any preparation materials.

Thank you!
    `);
    
    window.location.href = `mailto:sales@webwavesmedia.com?subject=${subject}&body=${body}`;
  };

  const handleRequestRecording = (webinarTitle: string) => {
    const subject = encodeURIComponent(`Recording Request: ${webinarTitle}`);
    const body = encodeURIComponent(`
I would like to access the recording for: ${webinarTitle}

Name: [Your Name]
Email: [Your Email]
Company: [Your Company]

Please send me the recording link and any related materials.

Thank you!
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
              Expert Training
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Marketing Webinars &
              <span className="text-gradient block">Training Sessions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join our expert-led webinars to stay ahead of the latest digital marketing 
              trends, strategies, and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Webinars */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">Upcoming Webinars</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Register now for our upcoming sessions and get exclusive insights from our marketing experts.
            </p>
          </motion.div>

          <div className="space-y-8">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <motion.img
                        src={webinar.image}
                        alt={webinar.title}
                        className="w-full h-48 md:h-full object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                    <div className="md:w-2/3">
                      <CardContent className="p-8">
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                            Upcoming
                          </Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(webinar.date).toLocaleDateString()}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="h-4 w-4 mr-1" />
                            {webinar.time} ({webinar.duration})
                          </div>
                        </div>
                        
                        <h3 className="text-2xl font-bold text-foreground mb-3">
                          {webinar.title}
                        </h3>
                        
                        <p className="text-muted-foreground mb-4">
                          {webinar.description}
                        </p>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-foreground mb-2">What you'll learn:</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {webinar.topics.map((topic) => (
                              <div key={topic} className="flex items-center space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                                <span className="text-sm text-muted-foreground">{topic}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="h-4 w-4 mr-1" />
                            Presented by {webinar.presenter}
                          </div>
                          <Button 
                            className="bg-gradient-to-r from-primary to-accent hover-lift"
                            onClick={() => handleRegister(webinar.title, webinar.date)}
                          >
                            <Mail className="w-4 h-4 mr-2" />
                            Register Now
                          </Button>
                        </div>
                      </CardContent>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">Past Webinars</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access recordings of our previous webinars and catch up on valuable insights you may have missed.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <Badge variant="secondary" className="text-xs">
                        Recording Available
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-1" />
                        {webinar.duration}
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {webinar.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {webinar.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(webinar.date).toLocaleDateString()}
                      </span>
                      
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => handleRequestRecording(webinar.title)}
                      >
                        <Video className="w-4 h-4 mr-1" />
                        Watch Recording
                      </Button>
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
              Want a Custom Training Session?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We can create custom training sessions tailored to your team's specific needs and challenges.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 hover-lift"
              onClick={() => {
                const subject = encodeURIComponent('Custom Training Session Request');
                const body = encodeURIComponent(`
I am interested in a custom training session for my team.

Company: [Your Company]
Contact Person: [Your Name]
Email: [Your Email]
Phone: [Your Phone]

Training Requirements:
Team Size: [Number of participants]
Topics of Interest: [What topics would you like covered]
Preferred Format: [Live webinar, in-person, recorded session]
Timeline: [When would you like this delivered]

Please provide information about custom training options and pricing.

Thank you!
                `);
                window.location.href = `mailto:sales@webwavesmedia.com?subject=${subject}&body=${body}`;
              }}
            >
              <Mail className="w-4 h-4 mr-2" />
              Request Custom Training
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}