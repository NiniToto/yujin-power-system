"use client";

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface HeroProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  buttonLink?: string;
  backgroundImage?: string;
}

const videoSlides = [
  {
    id: 1,
    src: "/asset/videos/video001.mp4",
    poster: "/asset/images/image003.jpg",
    alt: "유진파워시스템 소개 영상 1"
  },
  {
    id: 2,
    src: "/asset/videos/video002.mp4",
    poster: "/asset/images/image003.jpg",
    alt: "유진파워시스템 소개 영상 2"
  },
  {
    id: 3,
    src: "/asset/videos/video003.mp4",
    poster: "/asset/images/image003.jpg",
    alt: "유진파워시스템 소개 영상 3"
  }
];

const Hero = ({
  title = "유진 파워 시스템",
  subtitle = "혁신적인 전력 솔루션으로 밝은 미래를 만들어 갑니다",
  buttonText = "더 알아보기",
  buttonLink = "/company"
}: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  
  // 로딩 바 진행 상태 관리
  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;
    
    if (isPlaying) {
      setLoadingProgress(0);
      intervalId = setInterval(() => {
        setLoadingProgress(prev => {
          if (prev >= 100) {
            return 0;
          }
          return prev + (100 / 80); // 8초 동안 100%까지 증가 (80 * 100ms = 8000ms)
        });
      }, 100);
    } else {
      if (intervalId) clearInterval(intervalId);
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [currentSlide, isPlaying]);
  
  // 비디오 강제 재생
  useEffect(() => {
    const video = videoRef.current;
    if (video && video.readyState > 2) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn("자동재생 차단됨:", error);
          setIsPlaying(false);
        });
      }
    }
  }, [currentSlide]); 
  
  // 슬라이드 자동 변경
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
    }, 8000); // 8초마다 슬라이드 변경
    
    return () => clearInterval(interval);
  }, []);
  
  // 다음 슬라이드로 이동
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % videoSlides.length);
    setLoadingProgress(0);
  };
  
  // 이전 슬라이드로 이동
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videoSlides.length) % videoSlides.length);
    setLoadingProgress(0);
  };
  
  // 특정 슬라이드로 이동
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setLoadingProgress(0);
  };
  
  // 재생/일시정지 토글
  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;
    
    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(error => {
        console.warn("비디오 재생 실패:", error);
      });
    }
    setIsPlaying(!isPlaying);
  };

  // 슬라이드 번호 포맷팅 (1 -> "01")
  const formatSlideNumber = (num: number): string => {
    return `0${num + 1}`;
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
      <div className="absolute bottom-10 left-8 z-20 flex items-center space-x-4">
        {/* 슬라이드 번호 */}
        <div className="flex items-center space-x-3">
          {videoSlides.map((_, index) => (
            <button
              key={`slide-${index}`}
              type="button"
              onClick={() => goToSlide(index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  goToSlide(index);
                }
              }}
              className={`text-lg font-bold ${
                index === currentSlide ? "text-white" : "text-white/40"
              }`}
              aria-label={`슬라이드 ${index + 1}로 이동`}
            >
              {formatSlideNumber(index)}
            </button>
          ))}
        </div>
        
        {/* 로딩 바 */}
        <div className="w-24 h-[2px] bg-white/30 overflow-hidden">
          <motion.div 
            className="h-full bg-white" 
            initial={{ width: 0 }}
            animate={{ width: `${loadingProgress}%` }}
            transition={{ duration: 0.1, ease: "linear" }}
          />
        </div>
        
        {/* 재생/일시정지 버튼 */}
        <button
          type="button"
          onClick={togglePlayPause}
          className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
          aria-label={isPlaying ? "영상 일시정지" : "영상 재생"}
        >
          {isPlaying ? (
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <title>일시정지</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <title>재생</title>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Scroll Down 인디케이터 */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center">
        <div className="text-white text-sm font-light mb-2">Scroll Down</div>
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
            {title}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            {subtitle}
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
              {buttonText}
            </Link>
          </motion.div>
        </div>
      </div>
      
      {/* 좌우 화살표 버튼 */}
      <button 
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white p-2 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="이전 슬라이드"
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      
      <button 
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white p-2 opacity-70 hover:opacity-100 transition-opacity"
        aria-label="다음 슬라이드"
      >
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </section>
  );
};

export default Hero; 