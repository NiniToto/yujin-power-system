'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

interface CompanyOverviewProps {
  companyName?: string;
}

const CompanyOverview = ({
  companyName = "유진파워시스템"
}: CompanyOverviewProps) => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  
  // 한국어/영어 텍스트 설정
  const text = {
    ko: {
      line1: "유진파워시스템은",
      line2: "세상 모든 곳에",
      line3: "전력과 에너지를 연결합니다"
    },
    en: {
      line1: "Yujin Power System",
      line2: "connects power and energy",
      line3: "to every corner of the world"
    }
  };
  
  // 현재 언어에 맞는 텍스트 선택
  const currentText = language === 'ko' ? text.ko : text.en;
  
  // Intersection Observer 설정
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  
  // 요소가 화면에 보이면 애니메이션 시작
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);
  
  // 개별 라인을 위한 애니메이션 변수
  const lineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  return (
    <section ref={ref} className="py-40 bg-white relative overflow-hidden">
      {/* 배경 그라데이션 요소 */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-70 z-0" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-left pl-4 md:pl-12">
          <div className="space-y-10 md:space-y-12">
            {/* 첫 번째 라인 */}
            <motion.div
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="overflow-hidden"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary inline-block">
                {currentText.line1}
              </h2>
            </motion.div>
            
            {/* 두 번째 라인 */}
            <motion.div
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="overflow-hidden"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 inline-block">
                {currentText.line2}
              </h2>
            </motion.div>
            
            {/* 세 번째 라인 */}
            <motion.div
              custom={2}
              variants={lineVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="overflow-hidden"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 inline-block">
                {currentText.line3}
              </h2>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyOverview; 