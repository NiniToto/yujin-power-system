'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';

interface SectionTitleProps {
  title: string;
  description?: string;
  centered?: boolean;
  titleColor?: string;
  descriptionColor?: string;
}

const SectionTitle = ({
  title,
  description,
  centered = false,
  titleColor = 'text-primary',
  descriptionColor = 'text-gray-600'
}: SectionTitleProps) => {
  const [isVisible, setIsVisible] = useState(false);
  
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);
  
  return (
    <div 
      ref={ref}
      className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''} mb-12`}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.6 }}
        className={`text-3xl md:text-4xl font-bold ${titleColor} mb-4`}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`text-lg ${descriptionColor}`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};

export default SectionTitle; 