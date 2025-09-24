"use client";

import { motion } from 'framer-motion';
import { Book, Search, ArrowRight, FileText, Video, Download } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';

const categories = ['All', 'SEO', 'Social Media', 'PPC', 'Content', 'Analytics', 'Strategy'];

const resources = [
  {
    id: 1,
    title: "Complete SEO Checklist for 2025",
    type: "Guide",
    category: "SEO",
    description: "Comprehensive 50-point checklist covering technical SEO, on-page optimization, and content strategy.",
    icon: FileText,
    downloadable: true
  },
  {
    id: 2,
    title: "Social Media Content Calendar Template",
    type: "Template",
    category: "Social Media",
    description: "Ready-to-use content calendar template with posting schedules and content ideas.",
    icon: Download,
    downloadable: true
  },
  {
    id: 3,
    title: "Google Ads Optimization Masterclass",
    type: "Video",
    category: "PPC",
    description: "2-hour video course covering advanced Google Ads strategies and optimization techniques.",
    icon: Video,
    downloadable: false
  },
  {
    id: 4,
    title: "Content Marketing ROI Calculator",
    type: "Tool",
    category: "Content",
    description: "Interactive calculator to measure and forecast your content marketing return on investment.",
    icon: FileText,
    downloadable: false
  },
  {
    id: 5,
    title: "Digital Marketing Analytics Dashboard",
    type: "Template",
    category: "Analytics",
    description: "Pre-built dashboard template for tracking key marketing metrics across all channels.",
    icon: Download,
    downloadable: true
  },
  {
    id: 6,
    title: "Marketing Strategy Framework 2025",
    type: "Guide",
    category: "Strategy",
    description: "Step-by-step framework for developing comprehensive digital marketing strategies.",
    icon: FileText,
    downloadable: true
  }
];

export default function KnowledgeBasePage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = resources.filter(resource => {
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleDownload = (resourceTitle: string) => {
    const subject = encodeURIComponent(`Download Request: ${resourceTitle}`);
    const body = encodeURIComponent(`
I would like to download the following resource: ${resourceTitle}

Name: [Your Name]
Email: [Your Email]
Company: [Your Company]

Please send me the download link.

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
              Learning Resources
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Marketing Knowledge
              <span className="text-gradient block">Base</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Access our comprehensive library of guides, templates, tools, and resources 
              to accelerate your digital marketing success.
            </p>

            {/* Search Bar */}
            <motion.div
              className="max-w-md mx-auto relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border/50">
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
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
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
                {category}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={resource.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <motion.div
                        className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <resource.icon className="h-6 w-6 text-white" />
                      </motion.div>
                      <Badge variant="secondary" className="text-xs">
                        {resource.type}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {resource.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {resource.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">
                        {resource.category}
                      </Badge>
                      
                      {resource.downloadable ? (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDownload(resource.title)}
                        >
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                      ) : (
                        <Button 
                          variant="ghost" 
                          size="sm"
                          onClick={() => handleDownload(resource.title)}
                        >
                          Access
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-muted-foreground">
                No resources found matching your criteria.
              </p>
            </motion.div>
          )}
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
              Need Personalized Guidance?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Our experts can provide personalized recommendations and custom resources 
              tailored to your specific marketing challenges.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 hover-lift"
              asChild
            >
              <Link href="/contact">
                <Book className="w-4 h-4 mr-2" />
                Get Expert Consultation
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}