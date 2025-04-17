'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const ESGSection = () => {
  // 타이틀 애니메이션을 위한 설정
  const [isVisible, setIsVisible] = useState(false);
  const [titleRef, titleInView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });
  
  // ESG 섹션 전용 스크롤 트래킹을 위한 ref 및 설정
  const esgSectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: esgScrollProgress } = useScroll({
    target: esgSectionRef,
    offset: ["start end", "end start"]
  });
  
  // 문 애니메이션을 위한 값 - ESG 섹션 스크롤에 따라 동작
  const doorLeftX = useTransform(esgScrollProgress, [0.1, 0.3], ['-35%', '-100%']);
  const doorRightX = useTransform(esgScrollProgress, [0.1, 0.3], ['35%', '100%']);
  
  // ESG 항목 섹션에 대한 인터랙션 감지 - 별도의 threshold로 정확히 항목 영역에 도달했을 때 감지
  const [esgItemsRef, esgItemsInView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
    rootMargin: '-50px 0px' // 뷰포트보다 약간 안쪽에서 트리거
  });
  
  // 요소가 화면에 보이면 애니메이션 시작
  useEffect(() => {
    if (titleInView) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [titleInView]);
  
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
  
  // ESG 항목을 위한 애니메이션 변수
  const esgItemVariants = {
    hidden: { 
      opacity: 0,
      y: 20
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

  // ESG 세부 항목
  const esgItems = [
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
  ];

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
      <section ref={titleRef} className="py-24 bg-gray-100">
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
                ESG
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
                더불어 사는
                {isMobile && <br />}
                아름다운 사회를 위해
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
                기업의 사회적 책임을 실천하며
                {isMobile && <br />}
                세상에 희망의 빛을 전하겠습니다.
              </p>
            </motion.div>
            
            {/* MORE 버튼 */}
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
                <span className="mr-2">MORE</span>
                <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                  <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64645L20.1716 0.464466C19.9763 0.269204 19.6597 0.269204 19.4645 0.464466C19.2692 0.659728 19.2692 0.976311 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.7308 19.9763 7.7308 20.1716 7.53553L23.3536 4.35355ZM0 4.5H23V3.5H0V4.5Z" fill="currentColor"/>
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
        {/* 흰색 그라데이션 연결 영역 */}
        <div className="h-24 bg-gradient-to-b from-gray-100 to-transparent absolute left-0 right-0 z-10" 
             style={{ bottom: '-6rem' }} />
      </section>

      {/* ESG 항목 섹션 - 백그라운드 이미지 */}
      <section ref={esgSectionRef} className="py-32 min-h-[700px] relative overflow-hidden">
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
          
        <div className="container mx-auto px-4 relative z-10">
          {/* ESG 항목 영역 - 전체 폭 사용 */}
          <div ref={esgItemsRef} className="relative z-30 h-full">
            <motion.ul 
              className="grid grid-cols-1 md:grid-cols-3"
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
              {esgItems.map((item, index) => (
                <motion.li 
                  key={item.id} 
                  variants={esgItemVariants}
                  custom={index}
                  className={`px-8 py-16 relative ${
                    index !== esgItems.length - 1 ? 'md:border-r border-white/30' : ''
                  }`}
                >
                  <Link 
                    href={item.link}
                    className="block h-full group"
                  >
                    <div className="flex flex-col items-center text-center h-full">
                      <div className="mb-10 w-24 h-24 rounded-full flex items-center justify-center text-white border border-white/50 group-hover:border-white group-hover:bg-white/10 transition-colors duration-300">
                        <EsgIcon type={item.icon} />
                      </div>
                      <p className="text-2xl font-medium mb-5 text-white/80 group-hover:text-white transition-colors duration-300">
                        {item.title}
                      </p>
                      <strong className="text-3xl font-bold mb-12 text-white transition-colors duration-300">
                        {item.description}
                      </strong>
                      <div className="mt-auto">
                        <span className="inline-block w-14 h-14 rounded-full border border-white/50 relative group-hover:border-white transition-colors duration-300">
                          <svg className="absolute inset-0 m-auto w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </span>
                      </div>
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

// ESG 아이콘 컴포넌트
const EsgIcon = ({ type }: { type: string }) => {
  switch (type) {
    case 'ico-env':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M21 12.5C21 17.5 17 21.5 12 21.5C7 21.5 3 17.5 3 12.5C3 7.5 7 3.5 12 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 7.5C13.1046 7.5 14 6.60457 14 5.5C14 4.39543 13.1046 3.5 12 3.5C10.8954 3.5 10 4.39543 10 5.5C10 6.60457 10.8954 7.5 12 7.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M15.0002 13.5C17.0002 13.5 17.5002 11 17.0002 10C16.5002 9 15.0002 8 14.0002 8.5C13.0002 9 12.0002 11 12.0002 11.5C12.0002 12 13.0002 13.5 15.0002 13.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9.00039 13.5C7.00039 13.5 6.50039 11 7.00039 10C7.50039 9 9.00039 8 10.0004 8.5C11.0004 9 12.0004 11 12.0004 11.5C12.0004 12 11.0004 13.5 9.00039 13.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 12V16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'ico-social':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'ico-gvrnn':
      return (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16L16 12L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    default:
      return null;
  }
};

export default ESGSection; 