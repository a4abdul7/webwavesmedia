"use client";

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { TrendingUp, Users, Award, Clock, Globe, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: '+',
    label: 'Happy Clients',
    description: 'Businesses we\'ve helped grow'
  },
  {
    icon: TrendingUp,
    value: 250,
    suffix: '%',
    label: 'Average ROI',
    description: 'Return on investment increase'
  },
  {
    icon: Award,
    value: 15,
    suffix: '+',
    label: 'Industry Awards',
    description: 'Recognition for excellence'
  },
  {
    icon: Clock,
    value: 5,
    suffix: ' Years',
    label: 'Experience',
    description: 'In digital marketing'
  },
  {
    icon: Globe,
    value: 25,
    suffix: '+',
    label: 'Countries',
    description: 'Clients worldwide'
  },
  {
    icon: Zap,
    value: 98,
    suffix: '%',
    label: 'Success Rate',
    description: 'Campaign success rate'
  }
];

function AnimatedCounter({ value, suffix = '', duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const startTime = Date.now();
      const startValue = 0;
      const endValue = value;

      const updateCount = () => {
        const now = Date.now();
        const progress = Math.min((now - startTime) / (duration * 1000), 1);
        const currentValue = Math.floor(startValue + (endValue - startValue) * progress);
        
        setCount(currentValue);
        
        if (progress < 1) {
          requestAnimationFrame(updateCount);
        }
      };

      requestAnimationFrame(updateCount);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
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
            Proven Track Record of Success
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Numbers don't lie. See the measurable impact we've made for our clients 
            across various industries and business sizes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="text-center hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <motion.div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent mb-6"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <stat.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  
                  <div className="mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {stat.label}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground">
                    {stat.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}