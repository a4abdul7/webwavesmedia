"use client";

import { motion } from 'framer-motion';
import { Shield, Eye, Lock, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const sections = [
  {
    icon: Shield,
    title: "Information We Collect",
    content: [
      "Personal information you provide (name, email, phone number)",
      "Website usage data and analytics",
      "Cookies and tracking technologies",
      "Communication preferences and history"
    ]
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      "Provide and improve our services",
      "Communicate with you about our services",
      "Send marketing communications (with consent)",
      "Analyze website performance and user behavior"
    ]
  },
  {
    icon: Lock,
    title: "Data Protection",
    content: [
      "Industry-standard encryption for data transmission",
      "Secure servers and regular security audits",
      "Limited access to personal information",
      "Regular data backup and recovery procedures"
    ]
  },
  {
    icon: Users,
    title: "Your Rights",
    content: [
      "Access your personal information",
      "Correct inaccurate information",
      "Request deletion of your data",
      "Opt-out of marketing communications"
    ]
  }
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-background via-primary/5 to-accent/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
              Legal Information
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 1, 2024
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              We respect your privacy and are committed to protecting your personal information. 
              This policy explains how we collect, use, and safeguard your data.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Privacy Sections */}
      <section className="py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                        <section.icon className="h-6 w-6 text-white" />
                      </div>
                      <h2 className="text-2xl font-bold text-foreground">
                        {section.title}
                      </h2>
                    </div>
                    
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-6">
              Questions About Your Privacy?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you have any questions about this Privacy Policy or how we handle your data, 
              please don't hesitate to contact us.
            </p>
            <div className="space-y-2">
              <p className="text-foreground">
                <strong>Email:</strong> privacy@webwavesmedia.com
              </p>
              <p className="text-foreground">
                <strong>Phone:</strong> +1 (555) 123-4567
              </p>
              <p className="text-foreground">
                <strong>Address:</strong> 123 Digital Avenue, San Francisco, CA 94105
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}