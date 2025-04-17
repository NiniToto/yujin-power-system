'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useLanguage } from '@/contexts/LanguageContext';

const ESGSection = () => {
  const { language } = useLanguage();
  const [doorAnimComplete, setDoorAnimComplete] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const titleRef = useRef(null);
  const esgItemsRef = useRef(null);
  const doorRef = useRef(null);
  
  // Intersection Observer 설정 (CompanyOverview와 동일하게)
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
  
  const esgItemsInView = useInView(esgItemsRef, { once: false, amount: 0.3 });
  
  const { scrollYProgress } = useScroll({
    target: doorRef,
    offset: ["start end", "end start"]
  });
  
  // 문 효과 애니메이션
  const doorLeftX = useTransform(scrollYProgress, [0.1, 0.4], ["-0%", "-100%"]); 
  const doorRightX = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);
  
  // ESG 항목 스크롤 애니메이션
  const esgItemsOpacity = useTransform(scrollYProgress, 
    [0.2, 0.4, 0.8, 0.9], 
    [0, 1, 1, 0]
  );
  const esgItemsY = useTransform(scrollYProgress,
    [0.2, 0.4, 0.8, 0.9],
    [50, 0, 0, -50]
  );
  
  // 언어별 텍스트 설정
  const text = {
    ko: {
      title: "ESG",
      subtitle: "더불어 사는 아름다운 사회를 위해",
      description: "기업의 사회적 책임을 실천하며 세상에 희망의 빛을 전하겠습니다.",
      button: "MORE",
      esgItems: [
        {
          id: 'environmental',
          title: 'Environment',
          description: '친환경 경영 고도화',
          icon: 'ico-env',
          link: '/sustainability#environment'
        },
        {
          id: 'social',
          title: 'Social',
          description: '사회적 책임 준수',
          icon: 'ico-social',
          link: '/sustainability#social'
        },
        {
          id: 'governance',
          title: 'Governance',
          description: '기업지배구조 투명화',
          icon: 'ico-gvrnn',
          link: '/sustainability#governance'
        }
      ]
    },
    en: {
      title: "ESG",
      subtitle: "For a beautiful society that lives together",
      description: "We will practice corporate social responsibility and deliver the light of hope to the world.",
      button: "MORE",
      esgItems: [
        {
          id: 'environmental',
          title: 'Environment',
          description: 'Advancement of eco-friendly management',
          icon: 'ico-env',
          link: '/sustainability#environment'
        },
        {
          id: 'social',
          title: 'Social',
          description: 'Compliance with social responsibility',
          icon: 'ico-social',
          link: '/sustainability#social'
        },
        {
          id: 'governance',
          title: 'Governance',
          description: 'Transparency in corporate governance',
          icon: 'ico-gvrnn',
          link: '/sustainability#governance'
        }
      ]
    }
  };
  
  // 현재 언어에 맞는 텍스트 선택
  const currentText = language === 'ko' ? text.ko : text.en;
  
  useEffect(() => {
    const handleScrollComplete = () => {
      if (scrollYProgress.get() > 0.4) {
        setDoorAnimComplete(true);
      } else {
        setDoorAnimComplete(false);
      }
    };
    
    scrollYProgress.onChange(handleScrollComplete);
    
    return () => {
      scrollYProgress.clearListeners();
    };
  }, [scrollYProgress]);
  
  // 타이틀 애니메이션 변수 (CompanyOverview와 동일하게)
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
  
  // ESG 항목을 위한 애니메이션 변수
  const esgItemVariants = {
    hidden: { 
      opacity: 0,
      y: 50
    },
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

  // 모바일 여부 확인
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="esg-section-wrapper">
      {/* 타이틀 섹션 - 별도 백그라운드 */}
      <section ref={ref} className="py-40 bg-white-100 relative overflow-hidden">
        {/* 배경 그라데이션 요소 */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent to-white-50 opacity-70 z-0" />
        
        <div className="container mx-auto px-4">
          {/* 타이틀 영역 - CompanyOverview 스타일 */}
          <div className="max-w-4xl mx-auto text-center">
            {/* 첫 번째 라인 - ESG */}
            <motion.div
              custom={0}
              variants={lineVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="overflow-hidden mb-8"
            >
              <h2 className="text-5xl lg:text-6xl font-bold text-primary inline-block">
                {currentText.title}
              </h2>
            </motion.div>
            
            {/* 두 번째 라인 - 더불어 사는 아름다운 사회를 위해 */}
            <motion.div
              custom={1}
              variants={lineVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="overflow-hidden mb-6"
            >
              <strong className="block text-3xl lg:text-4xl font-bold text-gray-800 inline-block">
                {isMobile && currentText.subtitle.includes(" ") 
                  ? currentText.subtitle.split(" ").map((part, i) => 
                      i > 0 && i % 2 === 0 ? <><br key={i}/>{part} </> : `${part} `
                    )
                  : currentText.subtitle}
              </strong>
            </motion.div>
            
            {/* 세 번째 라인 - 설명 */}
            <motion.div
              custom={2}
              variants={lineVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="overflow-hidden mb-10"
            >
              <p className="text-xl text-gray-600 inline-block">
                {isMobile && currentText.description.includes(" ") 
                  ? currentText.description.split(" ").map((part, i) => 
                      i > 0 && i % 3 === 0 ? <><br key={i}/>{part} </> : `${part} `
                    )
                  : currentText.description}
              </p>
            </motion.div>
            
            <motion.div
              custom={3}
              variants={lineVariants}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="mt-4"
            >
              <Link
                href="/sustainability" 
                className="inline-flex items-center text-primary font-medium hover:opacity-80 transition-opacity group text-lg"
              >
                <span className="mr-2">{currentText.button}</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64645L20.1716 0.464466C19.9763 0.269204 19.6597 0.269204 19.4645 0.464466C19.2692 0.659728 19.2692 0.976311 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.7308 19.9763 7.7308 20.1716 7.53553L23.3536 4.35355ZM0 4.5H23V3.5H0V4.5Z" fill="currentColor"/>
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ESG 항목 섹션 - 백그라운드 이미지 */}
      <section 
        ref={doorRef}
        className="bg-black relative h-screen flex items-center"
      >
        {/* 백그라운드 이미지 */}
        <div className="absolute inset-0 bg-cover bg-center opacity-80" 
          style={{ backgroundImage: 'url(/asset/images/esg_background.jpg)' }} />
        
        {/* 오버레이 - 가독성 향상을 위한 */}
        <div className="absolute inset-0 bg-black opacity-50" />
        
        {/* 문 애니메이션 - 좌우 바깥 영역 (더 작게 조정) */}
        <motion.div 
          className="absolute top-0 left-0 w-1/6 h-full bg-white z-20"
          style={{ x: doorLeftX }}
        />
        
        <motion.div 
          className="absolute top-0 right-0 w-1/6 h-full bg-white z-20"
          style={{ x: doorRightX }}
        />
        
        <div className="container mx-auto px-4 relative z-10 h-full flex items-center">
          {/* ESG 항목 영역 - 전체 폭 사용 */}
          <div ref={esgItemsRef} className="relative z-30 w-full">
            <motion.ul 
              className="grid grid-cols-1 md:grid-cols-3"
              style={{
                opacity: esgItemsOpacity,
                y: esgItemsY,
              }}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.1
                  }
                }
              }}
              initial="hidden"
              animate={esgItemsInView ? "visible" : "hidden"}
            >
              {currentText.esgItems.map((item, index) => (
                <motion.li 
                  key={item.id} 
                  variants={esgItemVariants}
                  custom={index}
                  className={`px-8 py-16 relative ${
                    index !== currentText.esgItems.length - 1 ? 'md:border-r border-white/30' : ''
                  }`}
                >
                  <Link 
                    href={item.link}
                    className="flex flex-col items-center text-center h-full group"
                  >
                    <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all">
                      <div className={`icon ${item.icon} text-white text-3xl`}>
                        {/* 각 아이콘을 위해 아이콘 폰트나 이미지 사용할 수 있음 */}
                        {item.id === 'environmental' && (
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="환경 아이콘">
                            <path d="M9 20C9 20 3 16.5 3 10.5C3 5.25 8.25 1.5 12 5.25C15.75 1.5 21 5.25 21 10.5C21 16.5 15 20 15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 5.25V20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 20C12 20 15 18 17.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 20C12 20 9 18 6.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {item.id === 'social' && (
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="사회 아이콘">
                            <path d="M16 4.99999C17.6569 4.99999 19 6.34314 19 7.99999C19 9.65684 17.6569 11 16 11C15.7836 11 15.5741 10.9738 15.375 10.9246M16 15.5C18.5 15.5 20.5 16.5 21 19M13.5 7.99999C13.5 9.65684 12.1569 11 10.5 11C8.84315 11 7.5 9.65684 7.5 7.99999C7.5 6.34314 8.84315 4.99999 10.5 4.99999C12.1569 4.99999 13.5 6.34314 13.5 7.99999ZM3 19C3.5 16.5 5.5 15.5 8 15.5C10.5 15.5 12.5 16.5 13 19H3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                        {item.id === 'governance' && (
                          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="지배구조 아이콘">
                            <path d="M3 21H21M6 18V10M10 18V10M14 18V10M18 18V10M20 6L12 3L4 6M3 6H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    
                    <h3 className="text-white text-2xl font-bold mb-2 group-hover:text-white/90">{item.title}</h3>
                    <p className="text-white/80 mb-6 group-hover:text-white/90">{item.description}</p>
                    
                    <div className="mt-auto text-white/70 group-hover:text-white flex items-center transition-colors">
                      <span className="underline underline-offset-4 mr-1 group-hover:font-medium">
                        {language === 'ko' ? '자세히 보기' : 'Learn More'}
                      </span>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="group-hover:translate-x-1 transition-transform">
                        <path d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ESGSection; 