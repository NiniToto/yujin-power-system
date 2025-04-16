'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'ko' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

// 기본 컨텍스트 값 설정
const LanguageContext = createContext<LanguageContextType>({
  language: 'ko',
  setLanguage: () => {},
  t: () => '',
});

// 다국어 텍스트 정의
const translations = {
  ko: {
    // 헤더
    'header.company': '회사소개',
    'header.product': '제품소개',
    'header.sustainability': '지속가능경영',
    'header.news': '뉴스룸',
    'header.support': '고객지원',
    'header.language': '한국어',
    'header.language.ko': '한국어',
    'header.language.en': 'ENGLISH',
    'header.search.placeholder': '검색어를 입력하세요',
    'header.menu.contact': '문의하기',
    'header.menu.downloads': '자료실',
    'header.menu.inquiry': '사이버 신문고',
    
    // 회사소개 서브메뉴
    'submenu.company.ceo': 'CEO 메시지',
    'submenu.company.history': '연혁',
    'submenu.company.vision': '비전/미션',
    
    // 제품소개 서브메뉴
    'submenu.product.category1': '제품 카테고리 1',
    'submenu.product.category2': '제품 카테고리 2',
    'submenu.product.category3': '제품 카테고리 3',
    
    // 지속가능경영 서브메뉴
    'submenu.sustainability.esg': 'ESG 경영',
    'submenu.sustainability.environment': '환경·안전 활동',
    'submenu.sustainability.social': '사회공헌',
    
    // 뉴스룸 서브메뉴
    'submenu.news.notice': '공지사항',
    'submenu.news.press': '보도자료',
    
    // 고객지원 서브메뉴
    'submenu.support.contact': '문의하기',
    'submenu.support.location': '오시는 길',
    
    // 모바일 메뉴
    'mobile.language': '언어 선택',
  },
  en: {
    // 헤더
    'header.company': 'Company',
    'header.product': 'Products',
    'header.sustainability': 'Sustainability',
    'header.news': 'Newsroom',
    'header.support': 'Support',
    'header.language': 'ENGLISH',
    'header.language.ko': '한국어',
    'header.language.en': 'ENGLISH',
    'header.search.placeholder': 'Search',
    'header.menu.contact': 'Contact Us',
    'header.menu.downloads': 'Downloads',
    'header.menu.inquiry': 'Inquiry',
    
    // 회사소개 서브메뉴
    'submenu.company.ceo': 'CEO Message',
    'submenu.company.history': 'History',
    'submenu.company.vision': 'Vision/Mission',
    
    // 제품소개 서브메뉴
    'submenu.product.category1': 'Product Category 1',
    'submenu.product.category2': 'Product Category 2',
    'submenu.product.category3': 'Product Category 3',
    
    // 지속가능경영 서브메뉴
    'submenu.sustainability.esg': 'ESG Management',
    'submenu.sustainability.environment': 'Environment & Safety',
    'submenu.sustainability.social': 'Social Contribution',
    
    // 뉴스룸 서브메뉴
    'submenu.news.notice': 'Notices',
    'submenu.news.press': 'Press Releases',
    
    // 고객지원 서브메뉴
    'submenu.support.contact': 'Contact Us',
    'submenu.support.location': 'Directions',
    
    // 모바일 메뉴
    'mobile.language': 'Language',
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // 브라우저의 localStorage에서 언어 설정 불러오기
  const [language, setLanguage] = useState<Language>('ko');
  
  // 로컬 스토리지에 언어 설정 저장하기
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ko' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);
  
  // 언어 변경 시 로컬 스토리지에 저장
  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    // HTML lang 속성 변경
    document.documentElement.lang = lang;
  };
  
  // 번역 함수
  const translate = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t: translate }}>
      {children}
    </LanguageContext.Provider>
  );
};

// 언어 Context 사용을 위한 커스텀 훅
export const useLanguage = () => useContext(LanguageContext); 