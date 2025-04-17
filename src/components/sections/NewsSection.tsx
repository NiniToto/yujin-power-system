'use client';

import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface NewsItem {
  id: string;
  title: string;
  titleEn?: string;
  summary: string;
  summaryEn?: string;
  date: string;
  category: string;
  categoryEn?: string;
  link: string;
  image: string;
}

interface NewsSectionProps {
  newsItems?: NewsItem[];
}

const NewsSection = ({ 
  newsItems = [
    {
      id: 'news1',
      title: '유진파워시스템, 신재생에너지 전력저장장치 개발 완료',
      titleEn: 'Yujin Power System Completes Development of Renewable Energy Storage System',
      summary: '당사는 최신 기술이 적용된 대용량 ESS 시스템 개발에 성공하여 국내외 시장 진출을 본격화할 예정입니다.',
      summaryEn: 'Our company has successfully developed a large-capacity ESS system with the latest technology and will begin to enter domestic and international markets.',
      date: '2023-12-15',
      category: '보도자료',
      categoryEn: 'Press Release',
      link: '/news/press/1',
      image: '/asset/images/news/news1.jpg'
    },
    {
      id: 'news2',
      title: '2024년 상반기 신입/경력 공개채용 안내',
      titleEn: '2024 First Half Recruitment Announcement',
      summary: '유진파워시스템에서 함께 성장할 인재를 모집합니다. 전력 시스템, 전기전자, 소프트웨어 개발 분야 경력자를 우대합니다.',
      summaryEn: 'Yujin Power System is recruiting talented individuals to grow together. Experienced professionals in power systems, electrical and electronic engineering, and software development are preferred.',
      date: '2023-11-20',
      category: '공지사항',
      categoryEn: 'Notice',
      link: '/news/notice/2',
      image: '/asset/images/news/news2.jpg'
    },
    {
      id: 'news3',
      title: '유진파워시스템, 그린에너지 국제 전시회 참가',
      titleEn: 'Yujin Power System Participates in Green Energy International Exhibition',
      summary: '다음 달 개최되는 그린에너지 국제 전시회에 당사의 최신 제품과 기술을 선보일 예정입니다. 관계자 여러분의 많은 관심 바랍니다.',
      summaryEn: 'We will showcase our latest products and technologies at the Green Energy International Exhibition to be held next month. We look forward to your interest.',
      date: '2023-10-05',
      category: '공지사항',
      categoryEn: 'Notice',
      link: '/news/notice/3',
      image: '/asset/images/news/news3.jpg'
    },
    {
      id: 'news4',
      title: '스마트 그리드 기술 도입으로 전력 효율성 30% 향상',
      titleEn: '30% Improvement in Power Efficiency with Smart Grid Technology',
      summary: '당사의 스마트 그리드 기술이 적용된 시스템이 전력 효율성을 크게 향상시켜 에너지 절감에 기여하고 있습니다.',
      summaryEn: 'Our system with smart grid technology has significantly improved power efficiency, contributing to energy savings.',
      date: '2023-09-18',
      category: '보도자료',
      categoryEn: 'Press Release',
      link: '/news/press/4',
      image: '/asset/images/news/news4.jpg'
    }
  ]
}: NewsSectionProps) => {
  const { language } = useLanguage();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });
  
  // 언어별 텍스트
  const text = {
    ko: {
      title: "News",
      subtitle: "새로운 소식을 알려드립니다.",
      button: "MORE",
      viewDetails: "클릭하여 자세히 보기"
    },
    en: {
      title: "News",
      subtitle: "We deliver the latest news.",
      button: "MORE",
      viewDetails: "Click to view details"
    }
  };
  
  // 현재 언어에 맞는 텍스트 선택
  const currentText = language === 'ko' ? text.ko : text.en;
  
  // 애니메이션 변수
  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
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
  
  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  // 날짜 포맷팅 함수
  const formatDateYear = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear().toString().substring(2)}.${String(date.getMonth() + 1).padStart(2, '0')}`;
  };
  
  const formatDateDay = (dateString: string) => {
    const date = new Date(dateString);
    return String(date.getDate()).padStart(2, '0');
  };
  
  const formatFullDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  };
  
  return (
    <section ref={sectionRef} className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        {/* 타이틀 영역 */}
        <div className="mb-16">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={titleVariants}
            custom={0}
            className="overflow-hidden"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-primary mb-6">
              {currentText.title}
            </h2>
          </motion.div>
          
          <div className="flex justify-between items-center">
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={titleVariants}
              custom={1}
              className="overflow-hidden"
            >
              <strong className="text-2xl md:text-3xl font-semibold text-gray-800">
                {currentText.subtitle}
              </strong>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={titleVariants}
              custom={2}
              className="overflow-hidden"
            >
              <Link 
                href="/news" 
                className="inline-flex items-center text-primary font-medium text-lg hover:opacity-80 transition-opacity group"
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

        {/* 뉴스 리스트 */}
        <motion.ul 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={listVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {newsItems.map((item) => (
            <motion.li
              key={item.id}
              variants={itemVariants}
              className="bg-white overflow-hidden group"
            >
              <Link 
                href={item.link}
                className="block relative"
              >
                {/* 이미지 영역 */}
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={language === 'ko' ? item.title : (item.titleEn || item.title)}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* 날짜 박스 */}
                <div className="absolute right-4 bottom-44 bg-white py-2 px-4 shadow-md">
                  <p className="text-sm text-gray-500">{formatDateYear(item.date)}</p>
                  <strong className="text-2xl font-bold">{formatDateDay(item.date)}</strong>
                </div>
                
                {/* 콘텐츠 박스 */}
                <div className="p-6">
                  <div className="mb-4">
                    <strong className="inline-block bg-primary bg-opacity-10 text-primary px-2 py-1 text-sm font-medium mr-2">
                      {language === 'ko' ? item.category : (item.categoryEn || item.category)}
                    </strong>
                    <span className="text-sm text-gray-500">{formatFullDate(item.date)}</span>
                  </div>
                  <p className="text-lg font-medium text-gray-800 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                    {language === 'ko' ? item.title : (item.titleEn || item.title)}
                  </p>
                </div>
              </Link>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default NewsSection; 