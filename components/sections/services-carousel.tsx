"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Search, 
  Share2, 
  PenTool, 
  Mail, 
  Target, 
  Code, 
  Palette, 
  BarChart3,
  Zap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const services = [
  {
    category: "Search Marketing",
    icon: Search,
    color: "from-blue-500 to-cyan-500",
    services: ["SEO Optimization", "Local SEO", "Technical SEO", "Keyword Research"]
  },
  {
    category: "Social Media",
    icon: Share2,
    color: "from-pink-500 to-rose-500",
    services: ["Social Strategy", "Community Management", "Influencer Marketing", "Social Ads"]
  },
  {
    category: "Content Marketing",
    icon: PenTool,
    color: "from-purple-500 to-indigo-500",
    services: ["Content Strategy", "Blog Writing", "Video Production", "Copywriting"]
  },
  {
    category: "Email Marketing",
    icon: Mail,
    color: "from-green-500 to-emerald-500",
    services: ["Email Campaigns", "Automation", "Newsletter Design", "List Building"]
  },
  {
    category: "Paid Advertising",
    icon: Target,
    color: "from-orange-500 to-red-500",
    services: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Retargeting"]
  },
  {
    category: "Web Development",
    icon: Code,
    color: "from-teal-500 to-cyan-500",
    services: ["Website Design", "E-commerce", "Landing Pages", "UX/UI Design"]
  },
  {
    category: "Branding",
    icon: Palette,
    color: "from-yellow-500 to-orange-500",
    services: ["Brand Strategy", "Logo Design", "Brand Guidelines", "Visual Identity"]
  },
  {
    category: "Analytics",
    icon: BarChart3,
    color: "from-violet-500 to-purple-500",
    services: ["Data Analysis", "Conversion Tracking", "Performance Reports", "KPI Dashboard"]
  },
  {
    category: "Marketing Automation",
    icon: Zap,
    color: "from-indigo-500 to-blue-500",
    services: ["Workflow Design", "Lead Nurturing", "CRM Integration", "Personalization"]
  },
];

export default function ServicesCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const x = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section className="py-20 bg-background overflow-hidden" ref={containerRef}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Full-Service Solutions
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            Everything You Need to Succeed Online
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From strategy to execution, we provide comprehensive digital marketing services 
            tailored to your business goals and industry needs.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="flex space-x-6 pb-8"
            style={{ x }}
          >
            {[...services, ...services].map((service, index) => (
              <motion.div
                key={`${service.category}-${index}`}
                className="flex-shrink-0 w-72"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (index % services.length) * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <service.icon className="h-6 w-6 text-white" />
                    </motion.div>
                    
                    <h3 className="text-lg font-bold mb-4 text-foreground">
                      {service.category}
                    </h3>
                    
                    <div className="space-y-2">
                      {service.services.map((item, itemIndex) => (
                        <motion.div
                          key={item}
                          className="text-sm text-muted-foreground flex items-center space-x-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIndex * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span>{item}</span>
                        </motion.div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient overlays */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}