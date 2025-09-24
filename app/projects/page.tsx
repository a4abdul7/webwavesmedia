"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Filter, TrendingUp, Users, Award, Eye } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const categories = ['All', 'SEO', 'Social Media', 'Web Design', 'Branding', 'PPC', 'E-commerce'];

const projects = [
  {
    id: 1,
    title: "TechFlow Solutions",
    category: "SEO",
    description: "Complete SEO overhaul resulting in 300% organic traffic increase",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    results: {
      traffic: "+300%",
      conversions: "+150%",
      revenue: "$2.4M"
    },
    tags: ["SEO", "Content Marketing", "Technical SEO"],
    featured: true
  },
  {
    id: 2,
    title: "GreenLeaf Organics",
    category: "Social Media",
    description: "Social media strategy that built a community of 100K+ engaged followers",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    results: {
      followers: "+250K",
      engagement: "+400%",
      sales: "+180%"
    },
    tags: ["Social Media", "Influencer Marketing", "Content Creation"],
    featured: true
  },
  {
    id: 3,
    title: "Artisan Crafts Co.",
    category: "E-commerce",
    description: "E-commerce platform redesign with conversion optimization",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    results: {
      sales: "+400%",
      conversion: "+85%",
      aov: "+60%"
    },
    tags: ["E-commerce", "UX Design", "Conversion Optimization"],
    featured: false
  },
  {
    id: 4,
    title: "Urban Fitness Studio",
    category: "Web Design",
    description: "Modern website design with integrated booking system",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    results: {
      bookings: "+220%",
      retention: "+45%",
      revenue: "+190%"
    },
    tags: ["Web Design", "UX/UI", "Booking System"],
    featured: false
  },
  {
    id: 5,
    title: "Coastal Real Estate",
    category: "PPC",
    description: "Google Ads campaign optimization for luxury property sales",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    results: {
      leads: "+320%",
      cost: "-40%",
      sales: "$8.2M"
    },
    tags: ["Google Ads", "PPC", "Lead Generation"],
    featured: true
  },
  {
    id: 6,
    title: "Bloom Beauty Brand",
    category: "Branding",
    description: "Complete brand identity and packaging design for cosmetics startup",
    image: "https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    results: {
      recognition: "+500%",
      sales: "+280%",
      retailers: "150+"
    },
    tags: ["Branding", "Package Design", "Visual Identity"],
    featured: false
  }
];

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

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
              Our Success Stories
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Projects That Drive
              <span className="text-gradient block">Real Results</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our portfolio of successful digital marketing campaigns and see 
              how we've helped businesses achieve extraordinary growth across various industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-background border-b border-border/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category}
                className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                    : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
                }`}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Filter className="w-4 h-4 mr-2 inline" />
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  className="group"
                >
                  <Card className="overflow-hidden hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500"
                        whileHover={{ scale: 1.1 }}
                      />
                      
                      {project.featured && (
                        <motion.div
                          className="absolute top-4 left-4"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                            <Award className="w-3 h-3 mr-1" />
                            Featured
                          </Badge>
                        </motion.div>
                      )}

                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                      >
                        <div className="absolute bottom-4 left-4 right-4">
                          <Button
                            size="sm"
                            className="w-full bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                            asChild
                          >
                            <Link href={`/projects/${project.id}`}>
                              <Eye className="w-4 h-4 mr-2" />
                              View Case Study
                            </Link>
                          </Button>
                        </div>
                      </motion.div>
                    </div>

                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                        <motion.div
                          animate={{ rotate: hoveredProject === project.id ? 45 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ExternalLink className="w-4 h-4 text-muted-foreground" />
                        </motion.div>
                      </div>

                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-muted-foreground text-sm mb-4">
                        {project.description}
                      </p>

                      {/* Results */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {Object.entries(project.results).map(([key, value]) => (
                          <div key={key} className="text-center">
                            <div className="text-lg font-bold text-primary">{value}</div>
                            <div className="text-xs text-muted-foreground capitalize">{key}</div>
                          </div>
                        ))}
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Stats Section */}
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
              Portfolio Performance
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Aggregate results across all our client projects demonstrate 
              our commitment to delivering measurable success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: TrendingUp, value: "285%", label: "Average Traffic Increase" },
              { icon: Users, value: "150%", label: "Average Conversion Boost" },
              { icon: Award, value: "$50M+", label: "Revenue Generated" },
              { icon: Eye, value: "98%", label: "Client Satisfaction Rate" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center mx-auto mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </motion.div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
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
              Ready to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's create a case study that showcases your business transformation 
              and drives exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 hover-lift"
                asChild
              >
                <Link href="/get-quote">
                  Start Your Project
                </Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white/10 hover-lift"
                asChild
              >
                <Link href="/contact">
                  Discuss Your Goals
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}