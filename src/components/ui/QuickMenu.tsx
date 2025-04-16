'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const QuickMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language } = useLanguage();

  const content = {
    ko: {
      toggle: '퀵메뉴',
      links: [
        { name: '제품소개', href: '/products' },
        { name: '기술개발', href: '/technology' },
        { name: '지속가능경영', href: '/esg' },
        { name: '고객지원', href: '/support' },
        { name: '전세계 네트워크', href: '/global-network' },
      ]
    },
    en: {
      toggle: 'Quick Menu',
      links: [
        { name: 'Products', href: '/products' },
        { name: 'Technology', href: '/technology' },
        { name: 'ESG', href: '/esg' },
        { name: 'Support', href: '/support' },
        { name: 'Global Network', href: '/global-network' },
      ]
    }
  };

  const currentText = content[language as keyof typeof content];

  const toggleMenu = () => setIsOpen(!isOpen);

  const containerVariants = {
    closed: {
      width: '60px',
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    },
    open: {
      width: '180px',
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const linkVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <motion.div 
      className="quick-wrap fixed right-0 top-1/2 transform -translate-y-1/2 z-40 bg-white shadow-lg rounded-l-lg overflow-hidden"
      variants={containerVariants}
      initial="closed"
      animate={isOpen ? "open" : "closed"}
    >
      <button 
        onClick={toggleMenu}
        className="w-full bg-primary text-white py-3 px-4 text-center cursor-pointer flex items-center justify-center"
      >
        <span className={`${isOpen ? 'block' : 'hidden'} mr-2`}>{currentText.toggle}</span>
        <motion.div 
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <div className="py-2">
            {currentText.links.map((link, index) => (
              <motion.div
                key={index}
                variants={linkVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="py-2 px-4 hover:bg-gray-100 transition-colors duration-200"
              >
                <Link 
                  href={link.href}
                  className="block text-gray-800 text-sm font-medium"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuickMenu; 