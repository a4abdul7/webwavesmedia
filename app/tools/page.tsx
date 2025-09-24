"use client";

import { motion } from 'framer-motion';
import { Calculator, Search, TrendingUp, Target, BarChart3, Zap, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const tools = [
  {
    icon: Calculator,
    title: "ROI Calculator",
    description: "Calculate the potential return on investment for your digital marketing campaigns",
    gradient: "from-blue-500 to-cyan-600",
    features: ["Campaign ROI analysis", "Budget optimization", "Performance forecasting"]
  },
  {
    icon: Search,
    title: "SEO Audit Tool",
    description: "Comprehensive website analysis to identify SEO opportunities and issues",
    gradient: "from-green-500 to-emerald-600",
    features: ["Technical SEO analysis", "Keyword opportunities", "Competitor comparison"]
  },
  {
    icon: TrendingUp,
    title: "Social Media Analytics",
    description: "Track and analyze your social media performance across all platforms",
    gradient: "from-purple-500 to-pink-600",
    features: ["Engagement tracking", "Audience insights", "Content performance"]
  },
  {
    icon: Target,
    title: "Ad Performance Tracker",
    description: "Monitor and optimize your paid advertising campaigns in real-time",
    gradient: "from-orange-500 to-red-600",
    features: ["Multi-platform tracking", "Cost analysis", "Conversion optimization"]
  },
  {
    icon: BarChart3,
    title: "Website Analytics Dashboard",
    description: "Comprehensive website performance monitoring and reporting",
    gradient: "from-indigo-500 to-blue-600",
    features: ["Traffic analysis", "User behavior", "Conversion tracking"]
  },
  {
    icon: Zap,
    title: "Marketing Automation Planner",
    description: "Design and optimize your marketing automation workflows",
    gradient: "from-yellow-500 to-orange-600",
    features: ["Workflow design", "Lead scoring", "Campaign automation"]
  }
];

export default function ToolsPage() {
  const handleRequestAccess = (toolName: string) => {
    const subject = encodeURIComponent(`Access Request for ${toolName}`);
    const body = encodeURIComponent(`
I would like to request access to the ${toolName} tool.

Name: [Your Name]
Email: [Your Email]
Company: [Your Company]
Phone: [Your Phone]

Please provide me with access details and any necessary setup instructions.

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
              Free Marketing Tools
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Powerful Tools for
              <span className="text-gradient block">Marketing Success</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Access our suite of professional marketing tools designed to help you 
              analyze, optimize, and grow your digital presence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm h-full">
                  <CardContent className="p-8">
                    <motion.div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${tool.gradient} flex items-center justify-center mb-6`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <tool.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-4">
                      {tool.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {tool.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {tool.features.map((feature) => (
                        <div key={feature} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="w-full bg-gradient-to-r from-primary to-accent hover-lift"
                      onClick={() => handleRequestAccess(tool.title)}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Request Access
                    </Button>
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
              Need Custom Tools?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              We can develop custom marketing tools and dashboards tailored to your specific business needs.
            </p>
            <Button 
              size="lg" 
              variant="secondary" 
              className="bg-white text-primary hover:bg-white/90 hover-lift"
              onClick={() => {
                const subject = encodeURIComponent('Custom Tool Development Request');
                const body = encodeURIComponent(`
I am interested in custom marketing tool development.

Name: [Your Name]
Email: [Your Email]
Company: [Your Company]
Phone: [Your Phone]

Tool Requirements:
[Please describe what kind of custom tool you need]

Budget Range: [Your Budget Range]

Timeline: [When do you need this completed]

Thank you!
                `);
                window.location.href = `mailto:sales@webwavesmedia.com?subject=${subject}&body=${body}`;
              }}
            >
              <Mail className="w-4 h-4 mr-2" />
              Request Custom Development
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}