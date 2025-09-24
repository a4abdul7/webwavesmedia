"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  ArrowRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  services: [
    { name: 'SEO Services', href: '/services#seo' },
    { name: 'Social Media Marketing', href: '/services#social' },
    { name: 'Web Design', href: '/services#web-design' },
    { name: 'Content Marketing', href: '/services#content' },
    { name: 'PPC Advertising', href: '/services#advertising' },
  ],
  company: [
    { name: 'About Us', href: '/about' },
    { name: 'Our Team', href: '/about#team' },
    { name: 'Careers', href: '/careers' },
    { name: 'Partners', href: '/partners' },
    { name: 'Blog', href: '/blog' },
  ],
  resources: [
    { name: 'Case Studies', href: '/projects' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Free Tools', href: '/tools' },
    { name: 'Knowledge Base', href: '/knowledge-base' },
    { name: 'Webinars', href: '/webinars' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/webwavesmedia', icon: Facebook },
  { name: 'Twitter', href: 'https://twitter.com/webwavesmedia', icon: Twitter },
  { name: 'Instagram', href: 'https://instagram.com/webwavesmedia', icon: Instagram },
  { name: 'LinkedIn', href: 'https://linkedin.com/company/webwavesmedia', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border/50">
      {/* Newsletter Section */}
      <motion.section
        className="border-b border-border/50 bg-gradient-to-r from-primary/5 to-accent/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h3
              className="text-2xl font-bold text-foreground sm:text-3xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Stay Updated with Digital Marketing Insights
            </motion.h3>
            <motion.p
              className="mt-3 text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Get exclusive tips, case studies, and industry news delivered to your inbox.
            </motion.p>
            <motion.form
              className="mt-8 sm:flex sm:max-w-md sm:mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              onSubmit={(e) => {
                e.preventDefault();
                const email = (e.target as HTMLFormElement).email.value;
                const subject = encodeURIComponent('Newsletter Subscription');
                const body = encodeURIComponent(`Please subscribe ${email} to the WebWavesMedia newsletter.`);
                window.location.href = `mailto:sales@webwavesmedia.com?subject=${subject}&body=${body}`;
              }}
            >
              <Input
                name="email"
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-l-md border-r-0 focus:ring-primary focus:border-primary"
                required
              />
              <Button
                type="submit"
                className="mt-3 sm:mt-0 sm:ml-0 sm:flex-shrink-0 bg-gradient-to-r from-primary to-accent hover-lift rounded-l-none"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>
          </div>
        </div>
      </motion.section>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-gradient-to-r from-primary to-accent" />
              <span className="text-xl font-bold text-gradient">WebWavesMedia</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Transforming businesses through innovative digital marketing strategies. 
              We craft compelling narratives and drive measurable results that propel your brand forward.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@webwavesmedia.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>123 Digital Avenue, San Francisco, CA 94105</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              {socialLinks.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {footerLinks.services.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-2">
              {footerLinks.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Resources
            </h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.resources.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-sm text-muted-foreground">
            © 2025 WebWavesMedia. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/sitemap" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Sitemap
            </Link>
            <Link href="/accessibility" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Accessibility
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}