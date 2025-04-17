'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useLanguage } from '@/contexts/LanguageContext';

const GlobalNetwork = () => {
  const { language } = useLanguage();
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  
  // 언어별 텍스트 설정
  const text = {
    ko: {
      title: '글로벌 네트워크',
      line1: '전 세계 모든 고객의 요구와',
      line2: '시장의 변화에',
      line3: '신속하게',
      line4: '대응하고 있습니다',
      countries: [
        { name: '대한민국', office: '서울', type: '본사' },
        { name: '미국', office: '뉴욕', type: '지사' },
        { name: '중국', office: '상하이', type: '지사' },
        { name: '일본', office: '도쿄', type: '지사' },
        { name: '베트남', office: '하노이', type: '생산공장' },
        { name: '태국', office: '방콕', type: '지사' }
      ]
    },
    en: {
      title: 'Global Network',
      line1: 'We respond quickly',
      line2: 'to the needs of all customers',
      line3: 'and changes in markets',
      line4: 'around the world',
      countries: [
        { name: 'South Korea', office: 'Seoul', type: 'Headquarters' },
        { name: 'USA', office: 'New York', type: 'Branch' },
        { name: 'China', office: 'Shanghai', type: 'Branch' },
        { name: 'Japan', office: 'Tokyo', type: 'Branch' },
        { name: 'Vietnam', office: 'Hanoi', type: 'Factory' },
        { name: 'Thailand', office: 'Bangkok', type: 'Branch' }
      ]
    }
  };
  
  // 현재 언어에 맞는 텍스트 선택
  const currentText = language === 'ko' ? text.ko : text.en;
  
  // 스크롤 감지 효과
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
    handleScroll(); // 초기 체크
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // 애니메이션 설정
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  return (
    <section id="global-network" className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-white">{currentText.title}</h2>
          <div className="max-w-3xl mx-auto mt-6">
            <p className="text-xl font-semibold leading-tight mb-4 text-white">
              {currentText.line1} <br className="hidden md:inline" />
              {currentText.line2} <br className="hidden md:inline" />
              {currentText.line3} <br className="hidden md:inline" />
              {currentText.line4}
            </p>
          </div>
        </div>
        
        <div className="relative mt-12">
          <div className="relative w-full h-[500px] bg-black rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/asset/images/world-map.svg"
                alt={currentText.title}
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              
              <div className="text-white text-opacity-10 text-7xl font-bold absolute">
                GLOBAL NETWORK
              </div>
            </div>
            
            {/* 국가별 마커 */}
            <motion.div 
              className="absolute inset-0"
              variants={containerVariants}
              initial="hidden"
              animate={isAnimationVisible ? "visible" : "hidden"}
            >
              {/* 대한민국 (서울) */}
              <motion.div 
                variants={itemVariants}
                className="absolute top-[42%] left-[71%]"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-primary rounded-full pulse-animation"></div>
                  <div className="mt-2 text-white text-xs bg-primary/80 backdrop-blur-md px-2 py-1 rounded whitespace-nowrap">
                    {currentText.countries[0].name}<br/>
                    {currentText.countries[0].office} ({currentText.countries[0].type})
                  </div>
                </div>
              </motion.div>
              
              {/* 미국 (뉴욕) */}
              <motion.div 
                variants={itemVariants}
                className="absolute top-[40%] left-[30%]"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-blue-400 rounded-full pulse-animation"></div>
                  <div className="mt-2 text-white text-xs bg-blue-400/80 backdrop-blur-md px-2 py-1 rounded whitespace-nowrap">
                    {currentText.countries[1].name}<br/>
                    {currentText.countries[1].office} ({currentText.countries[1].type})
                  </div>
                </div>
              </motion.div>
              
              {/* 중국 (상하이) */}
              <motion.div 
                variants={itemVariants}
                className="absolute top-[45%] left-[68%]"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-rose-400 rounded-full pulse-animation"></div>
                  <div className="mt-2 text-white text-xs bg-rose-400/80 backdrop-blur-md px-2 py-1 rounded whitespace-nowrap">
                    {currentText.countries[2].name}<br/>
                    {currentText.countries[2].office} ({currentText.countries[2].type})
                  </div>
                </div>
              </motion.div>
              
              {/* 일본 (도쿄) */}
              <motion.div 
                variants={itemVariants}
                className="absolute top-[38%] left-[75%]"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-purple-400 rounded-full pulse-animation"></div>
                  <div className="mt-2 text-white text-xs bg-purple-400/80 backdrop-blur-md px-2 py-1 rounded whitespace-nowrap">
                    {currentText.countries[3].name}<br/>
                    {currentText.countries[3].office} ({currentText.countries[3].type})
                  </div>
                </div>
              </motion.div>
              
              {/* 베트남 (하노이) */}
              <motion.div 
                variants={itemVariants}
                className="absolute top-[55%] left-[65%]"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-green-400 rounded-full pulse-animation"></div>
                  <div className="mt-2 text-white text-xs bg-green-400/80 backdrop-blur-md px-2 py-1 rounded whitespace-nowrap">
                    {currentText.countries[4].name}<br/>
                    {currentText.countries[4].office} ({currentText.countries[4].type})
                  </div>
                </div>
              </motion.div>
              
              {/* 태국 (방콕) */}
              <motion.div 
                variants={itemVariants}
                className="absolute top-[58%] left-[62%]"
              >
                <div className="flex flex-col items-center">
                  <div className="w-3 h-3 bg-amber-400 rounded-full pulse-animation"></div>
                  <div className="mt-2 text-white text-xs bg-amber-400/80 backdrop-blur-md px-2 py-1 rounded whitespace-nowrap">
                    {currentText.countries[5].name}<br/>
                    {currentText.countries[5].office} ({currentText.countries[5].type})
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* 펄스 애니메이션 스타일 */}
      <style jsx global>{`
        .pulse-animation {
          box-shadow: 0 0 0 rgba(255, 255, 255, 0.4);
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalNetwork; 