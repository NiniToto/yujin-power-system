'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

type ProductCategory = {
  id: string;
  titleKo: string;
  titleEn: string;
  descriptionKo: string;
  descriptionEn: string;
  image: string;
  position: 'left' | 'right' | 'full';
  subProducts: {
    nameKo: string;
    nameEn: string;
    link: string;
  }[];
};

const BusinessHighlight = () => {
  const { language } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('power');
  
  // 제품 카테고리 데이터 (신재생 제외, 3개만 유지)
  const productCategories: ProductCategory[] = [
    {
      id: 'power',
      titleKo: '전력',
      titleEn: 'Power Cable',
      descriptionKo: '초고압 케이블 분야의 개척자로서 차별화된 가치를 만듭니다.',
      descriptionEn: 'We create differentiated value as a pioneer in high-voltage cable field.',
      image: '/asset/images/img_product02.jpg',
      position: 'left',
      subProducts: [
        { nameKo: '송전용 케이블', nameEn: 'Transmission Cable', link: '/product/transmission' },
        { nameKo: '배전용 케이블', nameEn: 'Distribution Cable', link: '/product/distribution' },
        { nameKo: '산업용 케이블', nameEn: 'Industrial Cable', link: '/product/industrial' },
        { nameKo: '부스덕트', nameEn: 'Bus Duct', link: '/product/busduct' }
      ]
    },
    {
      id: 'communication',
      titleKo: '통신',
      titleEn: 'Communication Cable',
      descriptionKo: '모든 네트워크 영역에서 정교한 기술력을 제공합니다.',
      descriptionEn: 'We provide sophisticated technology in all network areas.',
      image: '/asset/images/img_product03.jpg',
      position: 'right',
      subProducts: [
        { nameKo: '동 통신케이블', nameEn: 'Copper Communication Cable', link: '/product/copper' },
        { nameKo: '광케이블', nameEn: 'Optical Fiber Cable', link: '/product/optical' }
      ]
    },
    {
      id: 'material',
      titleKo: '소재',
      titleEn: 'Base Metal',
      descriptionKo: '풍부한 경험과 노하우로 완벽한 품질의 소재를 생산합니다.',
      descriptionEn: 'We produce perfect quality materials with rich experience and know-how.',
      image: '/asset/images/img_product04.jpg',
      position: 'left',
      subProducts: [
        { nameKo: 'Copper Rod & Wire', nameEn: 'Copper Rod & Wire', link: '/product/copper-rod' },
        { nameKo: 'Magnet Wire', nameEn: 'Magnet Wire', link: '/product/magnet-wire' }
      ]
    }
  ];
  
  // 한국어/영어 텍스트 설정
  const text = {
    ko: {
      title: "Business",
      line1: "안정적이고",
      line2: "효율적인",
      line3: "제품을",
      line4: "공급합니다",
      button: "MORE"
    },
    en: {
      title: "Business",
      line1: "We supply",
      line2: "stable and",
      line3: "efficient",
      line4: "products",
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

  // 현재 활성화된 카테고리 정보
  const activeProduct = productCategories.find(cat => cat.id === activeCategory) || productCategories[0];
  const productTitle = language === 'ko' ? activeProduct.titleKo : activeProduct.titleEn;
  const productDescription = language === 'ko' ? activeProduct.descriptionKo : activeProduct.descriptionEn;

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

  // 이미지 애니메이션
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.8,
        ease: "easeOut"
      }
    })
  };

  // 제품 리스트 아이템 애니메이션
  const productItemVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.6
      }
    })
  };

  return (
    <section 
      ref={ref} 
      className="py-20 bg-white relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row">
          {/* 왼쪽 사이드 영역 (side-box) */}
          <div className="lg:w-1/3 mb-10 lg:mb-0 lg:pr-10">
            {/* 섹션 제목 */}
            <div className="mb-12">
              <motion.h3
                custom={0}
                variants={lineVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="text-xl font-semibold text-primary mb-4"
              >
                {currentText.title}
              </motion.h3>
              
              {/* 메시지 라인 */}
              <div className="space-y-2 md:space-y-4">
                <motion.h2
                  custom={1}
                  variants={lineVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  className="text-4xl md:text-5xl font-bold text-gray-800"
                >
                  {currentText.line1}
                </motion.h2>
                
                <motion.h2
                  custom={2}
                  variants={lineVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  className="text-4xl md:text-5xl font-bold text-gray-800"
                >
                  {currentText.line2}
                </motion.h2>
                
                <motion.h2
                  custom={3}
                  variants={lineVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  className="text-4xl md:text-5xl font-bold text-gray-800"
                >
                  {currentText.line3}
                </motion.h2>
                
                <div className="relative">
                  <motion.h2
                    custom={4}
                    variants={lineVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    className="text-4xl md:text-5xl font-bold text-gray-800 inline-block"
                  >
                    {currentText.line4}
                  </motion.h2>
                  
                  {/* 밑줄 효과 */}
                  <motion.div 
                    className="absolute -bottom-2 left-0 h-0.5 bg-primary w-full origin-left"
                    variants={lineBackgroundVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                  />
                </div>
              </div>
              
              {/* MORE 버튼 */}
              <motion.div
                custom={5}
                variants={lineVariants}
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                className="mt-8"
              >
                <Link 
                  href="/product" 
                  className="inline-flex items-center text-primary font-medium hover:opacity-80 transition-opacity group"
                >
                  <span className="mr-2">{currentText.button}</span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300 inline-block">
                    <svg width="24" height="8" viewBox="0 0 24 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.3536 4.35355C23.5488 4.15829 23.5488 3.84171 23.3536 3.64645L20.1716 0.464466C19.9763 0.269204 19.6597 0.269204 19.4645 0.464466C19.2692 0.659728 19.2692 0.976311 19.4645 1.17157L22.2929 4L19.4645 6.82843C19.2692 7.02369 19.2692 7.34027 19.4645 7.53553C19.6597 7.7308 19.9763 7.7308 20.1716 7.53553L23.3536 4.35355ZM0 4.5H23V3.5H0V4.5Z" fill="currentColor"/>
                    </svg>
                  </span>
                </Link>
              </motion.div>
            </div>
            
            {/* 탭 메뉴 */}
            <ul className="flex lg:flex-col space-x-2 lg:space-x-0 lg:space-y-2 overflow-x-auto lg:overflow-visible whitespace-nowrap pb-2 lg:pb-0">
              {productCategories.map((category, index) => (
                <motion.li
                  key={category.id}
                  custom={index}
                  variants={lineVariants}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  className={`transition-all duration-300 ${activeCategory === category.id ? 'text-primary font-bold' : 'text-gray-600'}`}
                >
                  <button
                    onClick={() => setActiveCategory(category.id)}
                    className="block py-2 px-4 w-full text-left text-lg lg:border-l-4 border-transparent hover:border-gray-200 transition-all"
                    style={{
                      borderLeftColor: activeCategory === category.id ? 'var(--color-primary)' : 'transparent'
                    }}
                  >
                    {language === 'ko' ? category.titleKo : category.titleEn}
                  </button>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* 오른쪽 제품 리스트 영역 (list-product) - 지그재그 배치 */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-12 gap-x-6 gap-y-0">
              {productCategories.map((category, index) => {
                // 위치 계산: 0번째는 왼쪽(1-7열), 1번째는 오른쪽(6-12열), 2번째는 왼쪽(1-7열)
                const gridClasses = 
                  category.position === 'left' 
                    ? 'col-span-12 md:col-span-7' 
                    : category.position === 'right'
                    ? 'col-span-12 md:col-span-7 md:col-start-6' 
                    : 'col-span-12';
                
                // 세로 위치 조정
                const marginTopClass = index === 0 ? '' : 'md:-mt-20 lg:-mt-32';
                
                return (
                  <motion.div
                    key={category.id}
                    custom={index}
                    variants={imageVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    className={`${gridClasses} ${marginTopClass} relative shadow-lg rounded-lg overflow-hidden transition-all duration-500 ${
                      activeCategory === category.id 
                        ? 'opacity-100 translate-y-0 z-10'
                        : 'opacity-75 hover:opacity-90 z-0'
                    }`}
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {/* 이미지 */}
                      <Image
                        src={category.image}
                        alt={language === 'ko' ? category.titleKo : category.titleEn}
                        fill
                        className={`object-cover transition-all duration-700 ${
                          activeCategory === category.id 
                            ? 'scale-110 brightness-110 contrast-105' 
                            : 'scale-100 brightness-100'
                        }`}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      
                      {/* 이미지 오버레이 */}
                      <div className={`absolute inset-0 transition-all duration-700 ${
                        activeCategory === category.id
                          ? 'bg-gradient-to-t from-black/70 via-black/30 to-transparent'
                          : 'bg-gradient-to-t from-black/70 to-transparent'
                      }`}></div>
                      
                      {/* 제품 타입 링크 */}
                      <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                        <div className="flex flex-wrap gap-2 mb-4">
                          {category.subProducts.map((product, idx) => (
                            <Link
                              key={idx}
                              href={product.link}
                              className={`px-3 py-1.5 backdrop-blur-sm text-white text-sm font-medium rounded-full transition-all
                                ${activeCategory === category.id 
                                  ? 'bg-white/30 hover:bg-white/40' 
                                  : 'bg-white/20 hover:bg-white/30'
                                }`}
                            >
                              {language === 'ko' ? product.nameKo : product.nameEn}
                            </Link>
                          ))}
                        </div>
                        
                        {/* 제품 제목 */}
                        <h3 className={`text-white font-bold transition-all duration-300 ${
                          activeCategory === category.id ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'
                        }`}>
                          {language === 'ko' ? category.titleKo : category.titleEn}
                          <span className="block text-sm font-medium mt-1 text-white/80">
                            {language === 'ko' ? category.titleEn : category.titleKo}
                          </span>
                        </h3>
                        
                        {/* 제품 설명 */}
                        <p className="text-white/90 text-sm mt-2">
                          {language === 'ko' ? category.descriptionKo : category.descriptionEn}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessHighlight; 