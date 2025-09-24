"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  Share2, 
  PenTool, 
  Mail, 
  Target, 
  Code, 
  Palette, 
  BarChart3,
  Zap,
  ChevronDown,
  ChevronRight,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const serviceCategories = [
  {
    id: 'strategy',
    title: 'Strategy & Consulting',
    icon: BarChart3,
    gradient: 'from-purple-500 to-indigo-600',
    description: 'Comprehensive digital marketing strategy and business consulting services.',
    services: [
      {
        name: 'Digital Marketing Strategy',
        description: 'Comprehensive roadmap for your digital marketing success',
        features: ['Market Analysis', 'Competitor Research', 'Goal Setting', 'KPI Definition']
      },
      {
        name: 'Brand Positioning',
        description: 'Define your unique value proposition in the market',
        features: ['Brand Audit', 'Market Positioning', 'Messaging Strategy', 'Competitive Analysis']
      },
      {
        name: 'Marketing Audit',
        description: 'Complete evaluation of your current marketing efforts',
        features: ['Performance Analysis', 'Gap Identification', 'Opportunity Assessment', 'Recommendations']
      },
      {
        name: 'Growth Planning',
        description: 'Strategic planning for sustainable business growth',
        features: ['Growth Strategy', 'Resource Planning', 'Timeline Development', 'ROI Projections']
      }
    ]
  },
  {
    id: 'search',
    title: 'Search Marketing',
    icon: Search,
    gradient: 'from-blue-500 to-cyan-600',
    description: 'Dominate search results with our comprehensive SEO and search marketing services.',
    services: [
      {
        name: 'Search Engine Optimization (SEO)',
        description: 'Improve organic rankings and drive qualified traffic',
        features: ['On-Page Optimization', 'Technical SEO', 'Content Strategy', 'Link Building']
      },
      {
        name: 'Local SEO',
        description: 'Dominate local search results and attract nearby customers',
        features: ['Google Business Profile', 'Local Citations', 'Review Management', 'Local Content']
      },
      {
        name: 'E-commerce SEO',
        description: 'Specialized SEO strategies for online stores',
        features: ['Product Optimization', 'Category Pages', 'Schema Markup', 'Site Architecture']
      },
      {
        name: 'SEO Audits',
        description: 'Comprehensive analysis of your website\'s SEO health',
        features: ['Technical Analysis', 'Content Audit', 'Backlink Analysis', 'Competitor Research']
      }
    ]
  },
  {
    id: 'content',
    title: 'Content Marketing',
    icon: PenTool,
    gradient: 'from-green-500 to-emerald-600',
    description: 'Create compelling content that engages audiences and drives conversions.',
    services: [
      {
        name: 'Content Strategy',
        description: 'Strategic approach to content creation and distribution',
        features: ['Content Planning', 'Editorial Calendar', 'Audience Research', 'Content Optimization']
      },
      {
        name: 'Blog Writing',
        description: 'High-quality, SEO-optimized blog content',
        features: ['Topic Research', 'SEO Writing', 'Expert Interviews', 'Content Series']
      },
      {
        name: 'Video Production',
        description: 'Professional video content for all platforms',
        features: ['Concept Development', 'Video Production', 'Post-Production', 'Distribution Strategy']
      },
      {
        name: 'Copywriting',
        description: 'Persuasive copy that converts visitors into customers',
        features: ['Website Copy', 'Ad Copy', 'Email Copy', 'Sales Pages']
      }
    ]
  },
  {
    id: 'social',
    title: 'Social Media Marketing',
    icon: Share2,
    gradient: 'from-pink-500 to-rose-600',
    description: 'Build engaged communities and amplify your brand across social platforms.',
    services: [
      {
        name: 'Social Media Strategy',
        description: 'Comprehensive strategy for all social media platforms',
        features: ['Platform Selection', 'Content Planning', 'Audience Targeting', 'Campaign Strategy']
      },
      {
        name: 'Community Management',
        description: 'Build and nurture engaged social media communities',
        features: ['Daily Management', 'Community Engagement', 'Crisis Management', 'Reputation Monitoring']
      },
      {
        name: 'Social Media Advertising',
        description: 'Targeted advertising campaigns across social platforms',
        features: ['Campaign Setup', 'Audience Targeting', 'Creative Development', 'Performance Optimization']
      },
      {
        name: 'Influencer Marketing',
        description: 'Connect with influential voices in your industry',
        features: ['Influencer Research', 'Partnership Management', 'Campaign Development', 'ROI Tracking']
      }
    ]
  },
  {
    id: 'email',
    title: 'Email & CRM Marketing',
    icon: Mail,
    gradient: 'from-orange-500 to-red-600',
    description: 'Nurture leads and retain customers with personalized email marketing.',
    services: [
      {
        name: 'Email Campaign Management',
        description: 'Strategic email campaigns that drive engagement',
        features: ['Campaign Strategy', 'Email Design', 'List Segmentation', 'A/B Testing']
      },
      {
        name: 'Marketing Automation',
        description: 'Automated workflows that nurture leads effectively',
        features: ['Workflow Design', 'Lead Scoring', 'Trigger Campaigns', 'Drip Sequences']
      },
      {
        name: 'CRM Integration',
        description: 'Seamless integration with your customer relationship management',
        features: ['CRM Setup', 'Data Synchronization', 'Lead Management', 'Customer Journey Mapping']
      },
      {
        name: 'Newsletter Design',
        description: 'Beautifully designed newsletters that engage subscribers',
        features: ['Template Design', 'Content Curation', 'Brand Consistency', 'Mobile Optimization']
      }
    ]
  },
  {
    id: 'advertising',
    title: 'Paid Media & Advertising',
    icon: Target,
    gradient: 'from-violet-500 to-purple-600',
    description: 'Maximize ROI with precision-targeted paid advertising campaigns.',
    services: [
      {
        name: 'Google Ads Management',
        description: 'Expert management of your Google advertising campaigns',
        features: ['Campaign Setup', 'Keyword Research', 'Ad Creation', 'Bid Optimization']
      },
      {
        name: 'Social Media Ads',
        description: 'Targeted advertising across all major social platforms',
        features: ['Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'Twitter Ads']
      },
      {
        name: 'Display Advertising',
        description: 'Visual advertising campaigns across the web',
        features: ['Banner Design', 'Retargeting', 'Programmatic Buying', 'Performance Tracking']
      },
      {
        name: 'Shopping Ads',
        description: 'Product-focused advertising for e-commerce businesses',
        features: ['Product Feed Optimization', 'Shopping Campaigns', 'Product Listing Ads', 'Merchant Center Setup']
      }
    ]
  },
  {
    id: 'web-design',
    title: 'Web Design & Development',
    icon: Code,
    gradient: 'from-teal-500 to-cyan-600',
    description: 'Create stunning, conversion-optimized websites that drive results.',
    services: [
      {
        name: 'Website Design',
        description: 'Custom website design that reflects your brand',
        features: ['UI/UX Design', 'Responsive Design', 'Brand Integration', 'User Research']
      },
      {
        name: 'E-commerce Development',
        description: 'Full-featured online stores that drive sales',
        features: ['Shopify Development', 'WooCommerce', 'Payment Integration', 'Inventory Management']
      },
      {
        name: 'Landing Page Design',
        description: 'High-converting landing pages for campaigns',
        features: ['Conversion Optimization', 'A/B Testing', 'Mobile Optimization', 'Analytics Integration']
      },
      {
        name: 'Website Maintenance',
        description: 'Ongoing support to keep your website running smoothly',
        features: ['Regular Updates', 'Security Monitoring', 'Performance Optimization', 'Backup Management']
      }
    ]
  },
  {
    id: 'branding',
    title: 'Branding & Creative',
    icon: Palette,
    gradient: 'from-yellow-500 to-orange-600',
    description: 'Build a memorable brand identity that resonates with your audience.',
    services: [
      {
        name: 'Brand Strategy',
        description: 'Comprehensive brand strategy and positioning',
        features: ['Brand Positioning', 'Brand Voice', 'Brand Guidelines', 'Messaging Framework']
      },
      {
        name: 'Logo & Identity Design',
        description: 'Professional logo and visual identity design',
        features: ['Logo Design', 'Visual Identity', 'Brand Colors', 'Typography Selection']
      },
      {
        name: 'Marketing Materials',
        description: 'Professional marketing collateral and materials',
        features: ['Brochure Design', 'Business Cards', 'Presentation Templates', 'Trade Show Materials']
      },
      {
        name: 'Brand Photography',
        description: 'Professional photography that represents your brand',
        features: ['Product Photography', 'Corporate Headshots', 'Lifestyle Photography', 'Event Photography']
      }
    ]
  },
  {
    id: 'analytics',
    title: 'Analytics & Data',
    icon: BarChart3,
    gradient: 'from-indigo-500 to-blue-600',
    description: 'Data-driven insights to optimize your marketing performance.',
    services: [
      {
        name: 'Analytics Setup',
        description: 'Comprehensive analytics implementation and configuration',
        features: ['Google Analytics 4', 'Conversion Tracking', 'Goal Setup', 'Custom Dashboards']
      },
      {
        name: 'Performance Reporting',
        description: 'Regular reports with actionable insights',
        features: ['Monthly Reports', 'KPI Tracking', 'ROI Analysis', 'Competitive Analysis']
      },
      {
        name: 'Data Analysis',
        description: 'Deep dive analysis to uncover growth opportunities',
        features: ['Customer Journey Analysis', 'Conversion Path Analysis', 'Attribution Modeling', 'Cohort Analysis']
      },
      {
        name: 'Business Intelligence',
        description: 'Advanced analytics for data-driven decision making',
        features: ['Custom Dashboards', 'Predictive Analytics', 'Data Visualization', 'Automated Reporting']
      }
    ]
  },
  {
    id: 'specialized',
    title: 'Specialized Digital Marketing',
    icon: Zap,
    gradient: 'from-emerald-500 to-teal-600',
    description: 'Specialized services for unique marketing challenges and opportunities.',
    services: [
      {
        name: 'Conversion Rate Optimization',
        description: 'Optimize your website to convert more visitors',
        features: ['A/B Testing', 'User Experience Analysis', 'Landing Page Optimization', 'Form Optimization']
      },
      {
        name: 'Marketing Automation',
        description: 'Streamline your marketing with powerful automation',
        features: ['Workflow Creation', 'Lead Nurturing', 'Customer Segmentation', 'Behavioral Triggers']
      },
      {
        name: 'Reputation Management',
        description: 'Protect and enhance your online reputation',
        features: ['Review Monitoring', 'Review Response', 'Reputation Recovery', 'Brand Monitoring']
      },
      {
        name: 'International SEO',
        description: 'Expand your reach to global markets',
        features: ['Multi-language SEO', 'International Targeting', 'Hreflang Implementation', 'Geo-targeting']
      }
    ]
  }
];
const services = [
  { id: 'seo', name: 'SEO Services', description: 'Improve organic search rankings' },
  { id: 'social', name: 'Social Media Marketing', description: 'Build and engage your community' },
  { id: 'ppc', name: 'PPC Advertising', description: 'Targeted paid advertising campaigns' },
  { id: 'content', name: 'Content Marketing', description: 'Strategic content creation' },
  { id: 'email', name: 'Email Marketing', description: 'Automated email campaigns' },
  { id: 'web', name: 'Web Design', description: 'Custom website design & development' },
  { id: 'branding', name: 'Branding', description: 'Brand identity and visual design' },
  { id: 'analytics', name: 'Analytics & Reporting', description: 'Data analysis and insights' }
];

export default function ServicesPage() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>('strategy');

  const toggleCategory = (categoryId: string) => {
    setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
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
              Complete Digital Solutions
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Comprehensive Digital Marketing
              <span className="text-gradient block">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              From strategy to execution, we provide end-to-end digital marketing services 
              designed to accelerate your business growth and maximize your online presence.
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-accent hover-lift"
              asChild
            >
              <Link href="/get-quote">
                Get Custom Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Services Categories */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border-border/50 hover-lift">
                  <CardContent className="p-0">
                    {/* Category Header */}
                    <motion.button
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                      onClick={() => toggleCategory(category.id)}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.gradient} flex items-center justify-center`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: "spring", stiffness: 300 }}
                        >
                          <category.icon className="h-6 w-6 text-white" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-bold text-foreground">
                            {category.title}
                          </h3>
                          <p className="text-muted-foreground">
                            {category.description}
                          </p>
                        </div>
                      </div>
                      <motion.div
                        animate={{ rotate: expandedCategory === category.id ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown className="h-5 w-5 text-muted-foreground" />
                      </motion.div>
                    </motion.button>

                    {/* Category Services */}
                    <AnimatePresence>
                      {expandedCategory === category.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="border-t border-border/50 bg-muted/20"
                        >
                          <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {category.services.map((service, serviceIndex) => (
                                <motion.div
                                  key={service.name}
                                  initial={{ opacity: 0, y: 20 }}
                                  animate={{ opacity: 1, y: 0 }}
                                  transition={{ delay: serviceIndex * 0.1 }}
                                  className="bg-background rounded-lg p-6 border border-border/30 hover-lift"
                                >
                                  <div className="flex items-start justify-between mb-4">
                                    <h4 className="text-lg font-semibold text-foreground">
                                      {service.name}
                                    </h4>
                                    <ChevronRight className="h-5 w-5 text-primary" />
                                  </div>
                                  <p className="text-muted-foreground mb-4">
                                    {service.description}
                                  </p>
                                  <div className="space-y-2">
                                    {service.features.map((feature) => (
                                      <div key={feature} className="flex items-center space-x-2">
                                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                                        <span className="text-sm text-foreground">{feature}</span>
                                      </div>
                                    ))}
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our comprehensive digital marketing services can 
              help your business achieve its growth goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary" 
                className="bg-white text-primary hover:bg-white/90 hover-lift"
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