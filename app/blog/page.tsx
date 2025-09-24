"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Search, Tag } from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const categories = ['All', 'SEO', 'Social Media', 'Content Marketing', 'PPC', 'Analytics', 'Strategy'];

const blogPosts = [
  {
    id: 1,
    title: "AI-Powered SEO: How Machine Learning is Revolutionizing Search in 2025",
    excerpt: "Explore how artificial intelligence and machine learning are transforming SEO strategies in 2025. From AI-generated content optimization to predictive keyword analysis.",
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "SEO",
    author: "WebWaves Team",
    date: "2025-01-15",
    readTime: "8 min read",
    featured: true,
    tags: ["SEO", "AI", "Machine Learning"]
  },
  {
    id: 2,
    title: "The Rise of Voice Commerce: Optimizing for Voice Search in 2025",
    excerpt: "Voice commerce is exploding in 2025. Learn how to optimize your digital marketing strategy for voice search and smart speaker interactions.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Strategy",
    author: "WebWaves Team",
    date: "2025-01-12",
    readTime: "6 min read",
    featured: false,
    tags: ["Voice Search", "E-commerce", "Optimization"]
  },
  {
    id: 3,
    title: "Sustainable Digital Marketing: Green Strategies for 2025",
    excerpt: "Environmental consciousness is driving marketing decisions in 2025. Discover sustainable digital marketing practices that reduce carbon footprint while increasing ROI.",
    image: "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Strategy",
    author: "WebWaves Team",
    date: "2025-01-10",
    readTime: "7 min read",
    featured: true,
    tags: ["Sustainability", "Green Marketing", "ESG"]
  },
  {
    id: 4,
    title: "Blockchain in Digital Marketing: Transparency and Trust in 2025",
    excerpt: "Blockchain technology is creating new opportunities for transparent, trustworthy digital marketing. Learn how to leverage blockchain for better customer relationships.",
    image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Analytics",
    author: "WebWaves Team",
    date: "2025-01-08",
    readTime: "9 min read",
    featured: false,
    tags: ["Blockchain", "Trust", "Transparency"]
  },
  {
    id: 5,
    title: "Hyper-Personalization with Zero-Party Data: The 2025 Approach",
    excerpt: "With privacy regulations tightening, zero-party data is becoming crucial. Learn how to create hyper-personalized experiences while respecting user privacy.",
    image: "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    author: "WebWaves Team",
    date: "2025-01-05",
    readTime: "5 min read",
    featured: false,
    tags: ["Personalization", "Privacy", "Data"]
  },
  {
    id: 6,
    title: "The Metaverse Marketing Revolution: Strategies for Virtual Worlds",
    excerpt: "As the metaverse evolves in 2025, brands are finding new ways to engage customers in virtual environments. Explore cutting-edge metaverse marketing strategies.",
    image: "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Social Media",
    author: "WebWaves Team",
    date: "2025-01-03",
    readTime: "6 min read",
    featured: false,
    tags: ["Metaverse", "Virtual Reality", "Innovation"]
  },
  {
    id: 7,
    title: "Neuromarketing in the Digital Age: Brain Science Meets Marketing",
    excerpt: "Neuromarketing is reaching new heights in 2025 with advanced brain imaging and emotional AI. Discover how to ethically apply neuroscience to digital marketing.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Strategy",
    author: "WebWaves Team",
    date: "2025-01-01",
    readTime: "10 min read",
    featured: false,
    tags: ["Neuromarketing", "Psychology", "Consumer Behavior"]
  },
  {
    id: 8,
    title: "Quantum Computing's Impact on Digital Marketing Analytics",
    excerpt: "Quantum computing is beginning to revolutionize data processing in 2025. Learn how quantum algorithms are transforming marketing analytics and customer insights.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Analytics",
    author: "WebWaves Team",
    date: "2024-12-28",
    readTime: "12 min read",
    featured: false,
    tags: ["Quantum Computing", "Analytics", "Future Tech"]
  },
  {
    id: 9,
    title: "Augmented Reality Shopping: The New E-commerce Frontier",
    excerpt: "AR shopping experiences are becoming mainstream in 2025. Explore how augmented reality is transforming e-commerce and creating immersive customer journeys.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "Content Marketing",
    author: "WebWaves Team",
    date: "2024-12-25",
    readTime: "8 min read",
    featured: false,
    tags: ["Augmented Reality", "E-commerce", "Customer Experience"]
  },
  {
    id: 10,
    title: "Micro-Moments Marketing: Capturing Intent in Real-Time",
    excerpt: "Consumer micro-moments are evolving rapidly in 2025. Learn how to identify and capitalize on these split-second decision points for maximum marketing impact.",
    image: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    category: "PPC",
    author: "WebWaves Team",
    date: "2024-12-22",
    readTime: "7 min read",
    featured: false,
    tags: ["Micro-Moments", "Real-time Marketing", "Consumer Intent"]
  }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = filteredPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

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
              Digital Marketing Insights
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Marketing Knowledge
              <span className="text-gradient block">Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              Stay ahead of the curve with expert insights, industry trends, and actionable 
              strategies from our team of digital marketing professionals.
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
                placeholder="Search articles..."
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

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Featured Articles</h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden hover-lift border-border/50 bg-card/50 backdrop-blur-sm h-full">
                    <div className="relative">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                          Featured
                        </Badge>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(post.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex flex-wrap gap-1">
                          {post.tags.slice(0, 2).map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              <Tag className="w-3 h-3 mr-1" />
                              {tag}
                            </Badge>
                          ))}
                        </div>
                        
                        <Button variant="ghost" size="sm" asChild>
                          <Link href={`/blog/${post.id}`}>
                            Read More
                            <ArrowRight className="w-4 h-4 ml-1" />
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Regular Posts */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {regularPosts.length > 0 && (
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold sm:text-4xl mb-4">Latest Articles</h2>
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover-lift border-border/50 bg-card/50 backdrop-blur-sm h-full">
                  <div className="relative">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-40 object-cover"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge variant="secondary" className="text-xs">
                        {post.category}
                      </Badge>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center space-x-1">
                        <User className="h-3 w-3" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-3 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {new Date(post.date).toLocaleDateString()}
                      </span>
                      
                      <Button variant="ghost" size="sm" asChild>
                        <Link href={`/blog/${post.id}`}>
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <motion.div
              className="text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg text-muted-foreground">
                No articles found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary to-accent">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl mb-6">
              Stay Updated with Marketing Insights
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Get the latest digital marketing tips, strategies, and industry news 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
              />
              <Button 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 hover-lift"
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}