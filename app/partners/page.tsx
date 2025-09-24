"use client";

import { motion } from 'framer-motion';
import { Star, Award, TrendingUp, Users } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const partners = [
  {
    name: "AWS",
    logo: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    category: "Cloud Partner",
    description: "Amazon Web Services cloud infrastructure and solutions partner",
    benefits: ["Cloud hosting", "Scalable solutions", "Enterprise support"]
  },
  {
    name: "SmartGen Technologies",
    logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    category: "Technology Partner",
    description: "Advanced AI and machine learning solutions for digital marketing",
    benefits: ["AI integration", "Smart automation", "Data analytics"]
  },
  {
    name: "GenosysTech",
    logo: "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    category: "Development Partner",
    description: "Custom software development and system integration solutions",
    benefits: ["Custom development", "System integration", "Technical support"]
  },
  {
    name: "Creative Group",
    logo: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop",
    category: "Creative Partner",
    description: "Full-service creative agency for branding and design solutions",
    benefits: ["Brand design", "Creative campaigns", "Visual identity"]
  }
];

const clientLogos = [
  "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&fit=crop",
  "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&fit=crop",
  "https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&fit=crop",
  "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&fit=crop",
  "https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&fit=crop",
  "https://images.pexels.com/photos/270360/pexels-photo-270360.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&fit=crop",
  "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&fit=crop",
  "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=150&h=75&fit=crop"
];

const achievements = [
  {
    icon: Award,
    title: "AWS Certified Partner",
    description: "Certified cloud solutions provider",
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    icon: Star,
    title: "Technology Innovation Award",
    description: "Recognized for innovative digital solutions",
    gradient: "from-purple-500 to-pink-600"
  },
  {
    icon: TrendingUp,
    title: "Digital Excellence Award",
    description: "Outstanding performance in digital marketing",
    gradient: "from-orange-500 to-red-600"
  },
  {
    icon: Users,
    title: "Client Satisfaction Leader",
    description: "Highest client satisfaction ratings",
    gradient: "from-green-500 to-emerald-600"
  }
];

export default function PartnersPage() {
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
              Strategic Partnerships
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
              Trusted by Industry
              <span className="text-gradient block">Leaders</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our strategic partnerships with leading technology platforms ensure you get 
              the best tools, support, and expertise for your digital marketing success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Recognized Excellence
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our expertise is validated by the industry's most prestigious partnership programs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center hover-lift border-border/50 bg-card/50 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.gradient} flex items-center justify-center mx-auto mb-4`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <achievement.icon className="h-8 w-8 text-white" />
                    </motion.div>
                    
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
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
              Our Technology Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We partner with the world's leading marketing technology platforms 
              to deliver cutting-edge solutions for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <motion.img
                        src={partner.logo}
                        alt={partner.name}
                        className="h-12 w-24 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                      />
                      <Badge variant="secondary" className="text-xs">
                        {partner.category}
                      </Badge>
                    </div>
                    
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {partner.name}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {partner.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-foreground">Benefits:</h4>
                      <ul className="space-y-1">
                        {partner.benefits.map((benefit) => (
                          <li key={benefit} className="text-xs text-muted-foreground flex items-center">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold sm:text-4xl mb-4">
              Trusted by Leading Brands
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Join hundreds of successful companies that trust us with their digital marketing.
            </p>
          </motion.div>

          <div className="relative">
            <motion.div
              className="flex space-x-8 items-center"
              animate={{ x: [0, -1000] }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              {[...clientLogos, ...clientLogos].map((logo, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="h-16 w-32 object-contain grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                  />
                </motion.div>
              ))}
            </motion.div>
            
            {/* Gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold sm:text-4xl mb-6">
                Why Our Partnerships Matter
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our strategic partnerships aren't just badges—they represent real value 
                and advantages that we pass on to our clients.
              </p>
              
              <div className="space-y-4">
                {[
                  "Access to beta features and advanced tools",
                  "Priority support from platform representatives",
                  "Exclusive training and certification programs",
                  "Better pricing and terms for our clients",
                  "Direct communication channels with product teams",
                  "Advanced analytics and reporting capabilities"
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <div className="w-2 h-2 bg-primary rounded-full" />
                    <span className="text-foreground">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: "4+", label: "Strategic Partners" },
                { number: "25+", label: "Certifications" },
                { number: "98%", label: "Client Satisfaction" },
                { number: "24/7", label: "Partner Support" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}