'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';
import Link from 'next/link';

const GlobalNetwork = () => {
  const { language } = useLanguage();
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  
  // 언어별 텍스트 설정
  const text = {
    ko: {
      title: 'Global Network',
      line1: '전 세계 모든',
      line2: '고객의 요구와 시장의 변화에',
      line3: '신속하게 대응하고 있습니다',
      button: 'MORE',
      clickToView: '클릭하여 자세히 보기',
      countries: [
        { name: 'Korea', office: 'Seoul', type: 'Headquarters' },
        { name: 'America', office: 'New York', type: 'Branch' },
        { name: 'Asia', office: 'Shanghai', type: 'Branch' },
        { name: 'Oceania', office: 'Sydney', type: 'Branch' },
        { name: 'Middle East Asia', office: 'Dubai', type: 'Branch' },
        { name: 'Europe', office: 'London', type: 'Branch' },
        { name: 'Africa', office: 'Johannesburg', type: 'Branch' }
      ]
    },
    en: {
      title: 'Global Network',
      line1: 'We respond quickly',
      line2: 'to the needs of all customers',
      line3: 'and changes in markets',
      button: 'MORE',
      clickToView: 'Click to view details',
      countries: [
        { name: 'Korea', office: 'Seoul', type: 'Headquarters' },
        { name: 'America', office: 'New York', type: 'Branch' },
        { name: 'Asia', office: 'Shanghai', type: 'Branch' },
        { name: 'Oceania', office: 'Sydney', type: 'Branch' },
        { name: 'Middle East Asia', office: 'Dubai', type: 'Branch' },
        { name: 'Europe', office: 'London', type: 'Branch' },
        { name: 'Africa', office: 'Johannesburg', type: 'Branch' }
      ]
    }
  };
  
  const currentText = language === 'ko' ? text.ko : text.en;
  
  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('global-network');
      if (!element) return;
      
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.75 && rect.bottom >= 0;
      
      if (isVisible) {
        setIsAnimationVisible(true);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };
  
  // 애니메이션 변수
  const lineVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  // 배경 라인 애니메이션
  const lineBackgroundVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        delay: 0.6,
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };
  
  return (
    <section id="global-network" className="py-32 min-h-[800px] relative overflow-hidden">
      {/* 배경 지도 이미지 */}
      <div className="absolute inset-0 w-screen h-full">
        <Image
          src="/asset/images/world-map.png"
          alt="World Map Background"
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      {/* 움직이는 그라데이션 배경 */}
      <div className="absolute inset-0 bg-gradient-animation opacity-80" />

      <div className="container mx-auto px-4 relative z-20 h-full">
        <div className="flex flex-col lg:flex-row items-start h-full">
          {/* 왼쪽 텍스트 영역 */}
          <div className="lg:w-5/12 mb-10 lg:mb-0 lg:pr-10">
            <motion.h3
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate={isAnimationVisible ? "visible" : "hidden"}
              className="text-xl font-extrabold text-white mb-8 flex items-center"
            >
              {currentText.title}
              <motion.span
                className="text-red-500 ml-1 text-4xl -mt-3.5"
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                .
              </motion.span>
            </motion.h3>
            
            <div className="space-y-2 md:space-y-4">
              <motion.h2
                custom={1}
                variants={lineVariants}
                initial="hidden"
                animate={isAnimationVisible ? "visible" : "hidden"}
                className="text-4xl md:text-5xl font-bold text-white whitespace-pre-line"
              >
                {currentText.line1}
              </motion.h2>
              <motion.h2
                custom={2}
                variants={lineVariants}
                initial="hidden"
                animate={isAnimationVisible ? "visible" : "hidden"}
                className="text-4xl md:text-5xl font-bold text-white whitespace-pre-line"
              >
                {currentText.line2}
              </motion.h2>
              <motion.h2
                custom={3}
                variants={lineVariants}
                initial="hidden"
                animate={isAnimationVisible ? "visible" : "hidden"}
                className="text-4xl md:text-5xl font-bold text-white whitespace-pre-line"
              >
                {currentText.line3}
              </motion.h2>
              
              {/* MORE 버튼 */}
              <motion.div
                custom={4}
                variants={lineVariants}
                initial="hidden"
                animate={isAnimationVisible ? "visible" : "hidden"}
                className="mt-8"
              >
                <Link 
                  href="/network" 
                  className="inline-flex items-center text-white font-medium hover:opacity-80 transition-opacity group relative"
                >
                  <span className="mr-2">{currentText.button}</span>
                  <div className="relative">
                    <motion.svg 
                      width="24" 
                      height="8" 
                      viewBox="0 0 24 8" 
                      fill="none" 
                      xmlns="http://www.w3.org/2000/svg" 
                      aria-hidden="true"
                      className="relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                    >
                      <path d="M23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64645L20.1716 0.464466C19.9763 0.269204 19.6597 0.269204 19.4645 0.464466C19.2692 0.659728 19.2692 0.976311 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.7308 19.9763 7.7308 20.1716 7.53553L23.3536 4.35355ZM0 4.5H23V3.5H0V4.5Z" fill="currentColor"/>
                    </motion.svg>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* 오른쪽 마커 영역 */}
          <div className="lg:w-7/12">
            <div className="relative w-full h-[800px]">
              <motion.div
                className="absolute inset-0"
                variants={containerVariants}
                initial="hidden"
                animate={isAnimationVisible ? "visible" : "hidden"}
              >
                {currentText.countries.map((country, index) => (
                  <motion.div
                    key={country.name}
                    variants={itemVariants}
                    className={`absolute cursor-pointer transition-all duration-300 ${
                      hoveredCountry === country.name ? 'z-10' : 'z-0'
                    }`}
                    style={{
                      top: `${getCountryPosition(country.name).top}%`,
                      left: `${getCountryPosition(country.name).left}%`,
                    }}
                    onMouseEnter={() => setHoveredCountry(country.name)}
                    onMouseLeave={() => setHoveredCountry(null)}
                  >
                    <div className="relative">
                      <div className="w-4 h-4 bg-white rounded-full pulse-animation"></div>
                      <AnimatePresence>
                        {hoveredCountry === country.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute left-1/2 -translate-x-1/2 mt-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg min-w-[200px]"
                          >
                            <h3 className="font-bold text-primary mb-1">{country.name}</h3>
                            <p className="text-sm text-gray-600">{country.office}</p>
                            <p className="text-xs text-gray-500">{country.type}</p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        .pulse-animation {
          box-shadow: 0 0 0 rgba(0, 51, 102, 0.4);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(0, 51, 102, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(0, 51, 102, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(0, 51, 102, 0);
          }
        }

        .bg-gradient-animation {
          background: linear-gradient(
            270deg,
            rgba(0, 51, 102, 1),
            rgba(220, 38, 38, 1),
            rgba(0, 51, 102, 1),
            rgba(220, 38, 38, 1)
          );
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          mix-blend-mode: color;
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
      `}</style>
    </section>
  );
};

// 국가별 위치 설정 함수
const getCountryPosition = (country: string) => {
  const positions: { [key: string]: { top: number; left: number } } = {
    'Korea': { top: 45, left: 80 },
    'America': { top: 40, left: 20 },
    'Asia': { top: 45, left: 75 },
    'Oceania': { top: 70, left: 85 },
    'Middle East Asia': { top: 45, left: 60 },
    'Europe': { top: 35, left: 50 },
    'Africa': { top: 55, left: 50 }
  };
  
  return positions[country] || { top: 50, left: 50 };
};

export default GlobalNetwork; 