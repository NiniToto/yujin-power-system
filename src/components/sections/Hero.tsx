"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

// 비디오 슬라이드 정의
interface VideoSlide {
  id: number;
  src: string;
  poster: string;
  title: {
    ko: string;
    en: string;
  };
  subtitle: {
    ko: string;
    en: string;
  };
  buttonText: {
    ko: string;
    en: string;
  };
}

const Hero = ({
  title = "유진 파워 시스템",
  subtitle = "혁신적인 전력 솔루션으로 밝은 미래를 만들어 갑니다",
  buttonText = "더 알아보기",
  buttonLink = "/company",
}: HeroProps) => {
  const { language } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressIntervalRef = useRef<NodeJS.Timeout | null>(null);
  
  // 비디오 슬라이드 데이터
  const videoSlides: VideoSlide[] = [
    {
      id: 1,
      src: "/asset/videos/hero-1.mp4",
      poster: "/asset/images/hero-poster-1.jpg",
      title: {
        ko: "유진 파워 시스템",
        en: "Yujin Power System"
      },
      subtitle: {
        ko: "혁신적인 전력 솔루션으로 밝은 미래를 만들어 갑니다",
        en: "Creating a brighter future with innovative power solutions"
      },
      buttonText: {
        ko: "더 알아보기",
        en: "Learn More"
      }
    },
    {
      id: 2,
      src: "/asset/videos/hero-2.mp4",
      poster: "/asset/images/hero-poster-2.jpg",
      title: {
        ko: "신뢰할 수 있는 기술",
        en: "Reliable Technology"
      },
      subtitle: {
        ko: "최첨단 기술로 안정적인 전력 공급을 보장합니다",
        en: "Ensuring stable power supply with cutting-edge technology"
      },
      buttonText: {
        ko: "기술 소개",
        en: "Our Technology"
      }
    },
    {
      id: 3,
      src: "/asset/videos/hero-3.mp4",
      poster: "/asset/images/hero-poster-3.jpg",
      title: {
        ko: "글로벌 네트워크",
        en: "Global Network"
      },
      subtitle: {
        ko: "전 세계적인 네트워크로 고객과 함께합니다",
        en: "Serving customers worldwide through our global network"
      },
      buttonText: {
        ko: "네트워크 보기",
        en: "View Network"
      }
    }
  ];

  // 현재 언어에 맞는 슬라이드 텍스트 가져오기
  const currentTitle = videoSlides[currentSlide].title[language];
  const currentSubtitle = videoSlides[currentSlide].subtitle[language];
  const currentButtonText = videoSlides[currentSlide].buttonText[language];

  // 타이머 시작/중지 함수
  useEffect(() => {
    const startProgressTimer = () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
      
      const slideDuration = 6000; // 6초
      const intervalTime = 50; // 50ms 마다 업데이트
      const increment = (intervalTime / slideDuration) * 100;
      
      setProgress(0);
      progressIntervalRef.current = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            nextSlide();
            return 0;
          }
          return prev + increment;
        });
      }, intervalTime);
    };
    
    if (isPlaying) {
      startProgressTimer();
    } else if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
    }
    
    return () => {
      if (progressIntervalRef.current) {
        clearInterval(progressIntervalRef.current);
      }
    };
  }, [isPlaying, currentSlide]);
  
  // 비디오 제어 함수
  useEffect(() => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isPlaying, currentSlide]);
  
  // 다음 슬라이드로 이동
  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % videoSlides.length);
  };
  
  // 이전 슬라이드로 이동
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + videoSlides.length) % videoSlides.length);
  };
  
  // 특정 슬라이드로 이동
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };
  
  // 재생/일시정지 토글
  const togglePlayPause = () => {
    setIsPlaying(prev => !prev);
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* 비디오 슬라이더 배경 */}
      <div className="absolute inset-0 z-0 bg-black">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="w-full h-full"
          >
            <video
              key={videoSlides[currentSlide].id}
              ref={videoRef}
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              loop
              poster={videoSlides[currentSlide].poster}
              >
              <source src={videoSlides[currentSlide].src} type="video/mp4" />  
            </video>
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* 슬라이드 컨트롤 (좌측 하단) */}
      <div className="absolute bottom-8 left-1/10 transform -translate-x-1/2 z-30 flex items-center space-x-6">
        {/* 슬라이드 번호 */}
        <div className="flex items-center space-x-4">
          {videoSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`text-lg font-medium ${
                index === currentSlide 
                  ? 'text-white' 
                  : 'text-white/40 hover:text-white/70'
              } transition-colors focus:outline-none`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === 0 ? '01' : index === 1 ? '02' : '03'}
            </button>
          ))}
        </div>
        
        {/* 로딩 바 */}
        <div className="w-40 h-0.5 bg-white/30 relative">
          <motion.div 
            className="absolute top-0 left-0 h-full bg-white"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        {/* 재생/일시정지 버튼 */}
        <button 
          onClick={togglePlayPause}
          className="w-8 h-8 rounded-full border border-white flex items-center justify-center text-white hover:bg-white/10 transition-colors focus:outline-none"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <span className="block w-3 h-3 border-l-2 border-r-2 border-white"></span>
          ) : (
            <span className="block w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-transparent border-l-white ml-0.5"></span>
          )}
        </button>
      </div>
      
      {/* 스크롤 다운 표시 */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="text-white text-sm font-light mb-2">{language === 'ko' ? '스크롤 다운' : 'Scroll Down'}</div>
        <div/>
        <motion.div 
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        >
          <motion.div 
            className="w-1 h-1 bg-white rounded-full"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatType: "loop" }}
          />
        </motion.div>
      </div>
      
      {/* 콘텐츠 */}
      <div className="container mx-auto px-4 md:px-8 relative z-20">
        <div className="max-w-2xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            {currentTitle}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            {currentSubtitle}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <Link 
              href={buttonLink}
              className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded inline-block text-lg font-medium transition-colors"
            >
              {currentButtonText}
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* 오버레이 - 비디오 위에 약간의 어두운 오버레이 추가 */}
      <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
      
      {/* 배경 그라데이션 오버레이 - 콘텐츠 가독성 향상을 위해 */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent z-10"></div>
    </section>
  );
};

export default Hero; 