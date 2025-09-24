"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "CEO",
    company: "TechFlow Solutions",
    content: "WebWavesMedia transformed our digital presence completely. Our organic traffic increased by 300% in just 6 months, and our conversion rates doubled. Their team's expertise and dedication are unmatched.",
    rating: 5,
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    results: ["300% traffic increase", "2x conversion rate", "150% ROI improvement"]
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marketing Director",
    company: "GreenLeaf Organics",
    content: "The social media strategy they developed for us was phenomenal. Our engagement rates skyrocketed, and we've seen a 250% increase in qualified leads. They truly understand modern digital marketing.",
    rating: 5,
    image: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    results: ["250% lead increase", "400% engagement boost", "180% revenue growth"]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Founder",
    company: "Artisan Crafts Co.",
    content: "From brand strategy to website design, WebWavesMedia delivered exceptional results. Our online sales increased by 400% in the first quarter, and the brand recognition has been incredible.",
    rating: 5,
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    results: ["400% sales increase", "350% brand awareness", "200% customer retention"]
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4 border-primary/30 text-primary">
            Client Success Stories
          </Badge>
          <h2 className="text-3xl font-bold sm:text-4xl mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. See how we've helped businesses like yours 
            achieve remarkable growth and success.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <Card className="bg-card/50 backdrop-blur-sm border-border/50 shadow-xl">
                <CardContent className="p-8 md:p-12">
                  <div className="flex items-start justify-between mb-6">
                    <Quote className="h-8 w-8 text-primary/30 flex-shrink-0" />
                    <div className="flex space-x-1">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  <blockquote className="text-lg md:text-xl text-foreground mb-8 font-merriweather italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="flex items-center space-x-4">
                      <motion.img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-12 h-12 rounded-full object-cover border-2 border-primary/20"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <div>
                        <div className="font-semibold text-foreground">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-sm text-muted-foreground">
                          {testimonials[currentIndex].role} at {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {testimonials[currentIndex].results.map((result, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {result}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full border-primary/30 hover:bg-primary/5"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-primary/30'
                  }`}
                  onClick={() => setCurrentIndex(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full border-primary/30 hover:bg-primary/5"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}