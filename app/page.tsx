"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Play, Star, TrendingUp, Users, Award, CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ServicesCarousel from '@/components/sections/services-carousel';
import TestimonialsSection from '@/components/sections/testimonials';
import StatsSection from '@/components/sections/stats';

const services = [
  {
    title: "Search Engine Optimization",
    description: "Dominate search results with data-driven SEO strategies that deliver sustainable organic growth.",
    icon: TrendingUp,
    gradient: "from-blue-500 to-purple-600"
  },
  {
    title: "Social Media Marketing",
    description: "Build engaging communities and convert social interactions into meaningful business relationships.",
    icon: Users,
    gradient: "from-pink-500 to-rose-600"
  },
  {
    title: "Pay-Per-Click Advertising",
    description: "Maximize ROI with precision-targeted campaigns that turn clicks into customers.",
    icon: Award,
    gradient: "from-green-500 to-emerald-600"
  }
];

const achievements = [
  { number: "500+", label: "Projects Completed" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "150%", label: "Average ROI Increase" },
  { number: "24/7", label: "Support Available" }
];

const benefits = [
  "Data-driven strategies tailored to your business",
  "Transparent reporting with real-time analytics",
  "Dedicated account management team",
  "Proven track record of delivering results",
  "Cutting-edge tools and technologies",
  "Comprehensive digital marketing ecosystem"
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-background via-primary/5 to-accent/5">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
            <div className="lg:col-span-6">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                  🏆 #1 Digital Marketing Agency 2024
                </Badge>
                
                <motion.h1 
                  className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  Transform Your 
                  <span className="text-gradient block mt-2">Digital Presence</span>
                </motion.h1>
                
                <motion.p 
                  className="mt-6 text-lg text-muted-foreground sm:text-xl max-w-2xl"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  Drive exceptional growth with our comprehensive digital marketing strategies. 
                  From SEO to social media, we craft campaigns that convert visitors into customers 
                  and customers into advocates.
                </motion.p>
                
                <motion.div 
                  className="mt-8 flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-primary to-accent hover-lift text-white shadow-lg"
                    asChild
                  >
                    <Link href="/get-quote">
                      Start Your Journey
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-primary/30 hover:bg-primary/5 hover-lift"
                    asChild
                  >
                    <Link href="/projects">
                      <Play className="mr-2 h-5 w-5" />
                      View Case Studies
                    </Link>
                  </Button>
                </motion.div>

                {/* Quick Stats */}
                <motion.div 
                  className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {achievements.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      className="text-center"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="text-2xl font-bold text-primary">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Hero Image/Animation */}
            <motion.div 
              className="mt-12 lg:mt-0 lg:col-span-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="relative">
                <motion.div
                  className="relative z-10 bg-card rounded-2xl shadow-2xl p-8 border border-border/50"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full" />
                      <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                      <div className="w-3 h-3 bg-green-500 rounded-full" />
                    </div>
                    <Badge variant="secondary">Live Dashboard</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Organic Traffic</span>
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-sm font-semibold text-green-500">+247%</span>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500 to-emerald-600 h-2 rounded-full" />
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">1.2M</div>
                        <div className="text-xs text-muted-foreground">Monthly Visitors</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-foreground">47%</div>
                        <div className="text-xs text-muted-foreground">Conversion Rate</div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Floating Elements */}
                <motion.div
                  className="absolute -top-4 -left-4 bg-primary text-white p-3 rounded-full shadow-lg"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Star className="h-6 w-6" />
                </motion.div>
                
                <motion.div
                  className="absolute -bottom-4 -right-4 bg-accent text-white p-3 rounded-full shadow-lg"
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Award className="h-6 w-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Our Expertise
            </Badge>
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Comprehensive Digital Solutions
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We combine creativity, data, and technology to deliver marketing solutions 
              that drive measurable results for your business.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="h-full hover-lift border-border/50 group cursor-pointer">
                  <CardContent className="p-8">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 hover:bg-primary/5 hover-lift"
              asChild
            >
              <Link href="/services">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
                Why WebWavesMedia
              </Badge>
              
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                Your Success is Our Mission
              </h2>
              
              <p className="text-lg text-muted-foreground mb-8">
                We don't just execute campaigns; we partner with you to understand your goals, 
                challenges, and vision. Our collaborative approach ensures every strategy 
                aligns with your business objectives.
              </p>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover-lift"
                  asChild
                >
                  <Link href="/about">
                    Learn More About Us
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <motion.div
                  className="bg-card rounded-2xl shadow-xl p-8 border border-border/50"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-center mb-6">
                    <div className="text-4xl font-bold text-gradient mb-2">150%</div>
                    <p className="text-muted-foreground">Average ROI Increase</p>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Lead Generation</span>
                      <span className="font-semibold">+340%</span>
                    </div>
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Brand Awareness</span>
                      <span className="font-semibold">+290%</span>
                    </div>
                    <div className="bg-gradient-to-r from-accent to-primary h-2 rounded-full w-4/5" />
                    
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Customer Retention</span>
                      <span className="font-semibold">+180%</span>
                    </div>
                    <div className="bg-gradient-to-r from-primary to-accent h-2 rounded-full w-3/5" />
                  </div>
                </motion.div>

                <motion.div
                  className="absolute -top-6 -right-6 bg-accent text-white p-4 rounded-full shadow-lg"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <TrendingUp className="h-6 w-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Carousel */}
      <ServicesCarousel />

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful businesses that have accelerated their growth 
              with our proven digital marketing strategies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 hover-lift shadow-lg"
                asChild
              >
                <Link href="/get-quote">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 hover-lift"
                asChild
              >
                <Link href="/contact">
                  Contact Our Team
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}