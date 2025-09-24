"use client";

import { motion } from 'framer-motion';
import { FileText, Scale, AlertTriangle, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const sections = [
  {
    icon: FileText,
    title: "Service Agreement",
    content: [
      "These terms govern your use of WebWavesMedia services",
      "By using our services, you agree to these terms",
      "We reserve the right to modify terms with notice",
      "Continued use constitutes acceptance of changes"
    ]
  },
  {
    icon: CheckCircle,
    title: "Our Services",
    content: [
      "Digital marketing strategy and implementation",
      "Website design and development services",
      "Social media management and advertising",
      "SEO and content marketing services"
    ]
  },
  {
    icon: Scale,
    title: "Client Responsibilities",
    content: [
      "Provide accurate information and materials",
      "Respond to requests in a timely manner",
      "Pay invoices according to agreed terms",
      "Comply with platform policies and guidelines"
    ]
  },
  {
    icon: AlertTriangle,
    title: "Limitations",
    content: [
      "Results may vary based on market conditions",
      "We cannot guarantee specific outcomes",
      "Client is responsible for final approval of materials",
      "Third-party platform changes may affect services"
    ]
  }
];

export default function TermsPage() {
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
              Legal Agreement
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground">
              Last updated: January 1, 2024
            </p>
            <p className="text-lg text-muted-foreground mt-4">
              These terms and conditions outline the rules and regulations for the use of 
              WebWavesMedia's services and website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Terms Sections */}
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

          {/* Additional Terms */}
          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Additional Terms
                </h2>
                
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Payment Terms</h3>
                    <p>
                      Payment is due within 30 days of invoice date. Late payments may incur 
                      additional fees. Services may be suspended for overdue accounts.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Intellectual Property</h3>
                    <p>
                      All materials created by WebWavesMedia remain our property until full 
                      payment is received. Upon payment, rights transfer to the client.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Termination</h3>
                    <p>
                      Either party may terminate services with 30 days written notice. 
                      Outstanding invoices remain due upon termination.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Governing Law</h3>
                    <p>
                      These terms are governed by the laws of California, United States. 
                      Any disputes will be resolved in San Francisco County courts.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
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
              Questions About These Terms?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              If you have any questions about these Terms of Service, 
              please contact us for clarification.
            </p>
            <div className="space-y-2">
              <p className="text-foreground">
                <strong>Email:</strong> legal@webwavesmedia.com
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