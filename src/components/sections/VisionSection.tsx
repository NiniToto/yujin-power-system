'use client';

import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

const VisionSection = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // 패럴랙스 효과를 위한 스크롤 설정
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  
  // 이미지 움직임에 대한 변수 설정
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0.3, 1, 1, 0.8]);
  const imageY = useTransform(scrollYProgress, [0, 1], ['-5%', '0%']);
  
  // 한국어/영어 텍스트 설정
  const text = {
    ko: {
      title: "Vision",
      heading: "We Connect the Future",
      paragraph1: "더 큰 세계, 더 나은 내일을 향한",
      paragraph2: "우리의 담대한 전진은",
      paragraph3: "지금부터 시작입니다.",
      button: "더 보기"
    },
    en: {
      title: "Vision",
      heading: "We Connect the Future",
      paragraph1: "Our bold advance towards",
      paragraph2: "a bigger world and better tomorrow",
      paragraph3: "begins now.",
      button: "MORE"
    }
  };
  
  // 현재 언어에 맞는 텍스트 선택
  const currentText = language === 'ko' ? text.ko : text.en;
  
  // Intersection Observer 설정
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  // 요소가 화면에 보이면 애니메이션 시작
  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [inView]);

  // 이미지 로드 핸들러
  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // 애니메이션 변수
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // 이미지 애니메이션 변수
  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 1.2,
      filter: 'brightness(50%) blur(12px)' 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      filter: 'brightness(100%) blur(0px)',
      transition: {
        duration: 1.8,
        ease: [0.6, 0.05, 0.1, 0.9]
      }
    }
  };

  // 배경 오버레이 애니메이션 변수
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 0.6,
      transition: {
        duration: 1.2,
        delay: 1,
        ease: "easeOut"
      }
    }
  };

  return (
    <section 
      ref={(node) => {
        // 두 ref를 모두 할당
        sectionRef.current = node;
        if (typeof ref === 'function') ref(node);
      }}
      className="py-100 relative overflow-hidden bg-gray-900 text-white min-h-screen flex items-center"
    >
      {/* 배경 이미지 */}
      <AnimatePresence>
        <motion.div 
          className="absolute inset-0 z-0"
          style={{ 
            scale: imageScale,
            opacity: imageOpacity,
            y: imageY
          }}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={imageVariants}
        >
          <Image
            src="/asset/images/vision.png"
            alt="Vision Background"
            fill
            className="object-cover object-center"
            priority
            onLoad={handleImageLoad}
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"
            variants={overlayVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          ></motion.div>
        </motion.div>
      </AnimatePresence>
      
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl" data-delighter="start:0.2;end:0.8">
          {/* 섹션 제목 */}
          <motion.h3
            custom={0}
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible && imageLoaded ? "visible" : "hidden"}
            className="text-xl font-semibold text-primary mb-4 opacity-90"
          >
            {currentText.title}
          </motion.h3>
          
          {/* 메인 헤딩 */}
          <motion.h2
            custom={1}
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible && imageLoaded ? "visible" : "hidden"}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-12 leading-tight"
          >
            <span className="block mb-1">{currentText.heading}</span>
          </motion.h2>
          
          {/* 문단 텍스트 */}
          <div className="space-y-4 mb-16">
            <motion.p
              custom={2}
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible && imageLoaded ? "visible" : "hidden"}
              className="text-xl md:text-2xl text-gray-100 font-medium"
            >
              {currentText.paragraph1}
            </motion.p>
            
            <motion.p
              custom={3}
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible && imageLoaded ? "visible" : "hidden"}
              className="text-xl md:text-2xl text-gray-100 font-medium"
            >
              {currentText.paragraph2}
            </motion.p>
            
            <motion.p
              custom={4}
              variants={fadeInUp}
              initial="hidden"
              animate={isVisible && imageLoaded ? "visible" : "hidden"}
              className="text-xl md:text-2xl text-gray-100 font-medium"
            >
              {currentText.paragraph3}
            </motion.p>
          </div>
          
          {/* 버튼 */}
          <motion.div
            custom={5}
            variants={fadeInUp}
            initial="hidden"
            animate={isVisible && imageLoaded ? "visible" : "hidden"}
            whileHover={{ x: 5 }}
            className="inline-block"
          >
            <Link 
              href="/company#vision" 
              className="inline-flex items-center text-white font-medium text-lg group"
            >
              <span className="border-b border-white pb-1 group-hover:border-primary group-hover:text-primary transition-all duration-300">
                {currentText.button}
              </span>
              <svg 
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionSection; 