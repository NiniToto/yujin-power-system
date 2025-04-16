"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Image from 'next/image';

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
    alt: "유진파워시스템 소개 영상 1"
  },
  {
    id: 2,
    src: "/asset/videos/video002.mp4",
    alt: "유진파워시스템 소개 영상 2"
  },
  {
    id: 3,
    src: "/asset/videos/video003.mp4",
    alt: "유진파워시스템 소개 영상 3"
  }
];

const Hero = ({
  title = "유진파워시스템",
  subtitle = "혁신적인 전력 솔루션으로 밝은 미래를 만들어 갑니다",
  buttonText = "더 알아보기",
  buttonLink = "/company",
  backgroundImage = "/asset/images/image001.jpg"
}: HeroProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 현재 비디오 경로 기록
  useEffect(() => {
    console.log("현재 비디오 경로:", videoSlides[currentSlide].src);
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
  };
  
  // 이전 슬라이드로 이동
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + videoSlides.length) % videoSlides.length);
  };
  
  // 특정 슬라이드로 이동
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* 비디오 슬라이더 배경 */}
      <div className="absolute inset-0 z-0 bg-black">
        {videoSlides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              playsInline
              loop
              src={slide.src}
            />
          </div>
        ))}
      </div>
      
      {/* 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
      
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
      
      {/* 슬라이더 네비게이션 */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {videoSlides.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/40"
            }`}
            aria-label={`슬라이드 ${index + 1}로 이동`}
          />
        ))}
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
      
      {/* 스크롤 다운 인디케이터 */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.MAX_SAFE_INTEGER, repeatType: "loop" }}
      >
        <svg 
          className="w-6 h-6 text-white"
          fill="none" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          aria-hidden="true"
        >
          <title>아래로 스크롤</title>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero; 