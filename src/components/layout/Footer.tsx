'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();
  const [isFamilySiteOpen, setIsFamilySiteOpen] = useState(false);
  
  // 언어별 텍스트 설정
  const text = {
    ko: {
      companyName: '유진파워시스템',
      companyDescription: '글로벌 전력기기 및 시스템 전문 기업으로서 혁신적인 기술력과 품질로 미래를 밝힙니다.',
      links: {
        title: '바로가기',
        company: '회사소개',
        product: '제품소개',
        sustainability: '지속가능경영',
        news: '뉴스룸',
        support: '고객지원'
      },
      contact: {
        title: '연락처',
        address1: '서울특별시 강남구 테헤란로 123',
        address2: '유진파워빌딩 15층',
        tel: 'Tel: 02-1234-5678',
        fax: 'Fax: 02-1234-5679',
        email: 'Email: info@yujinpower.com'
      },
      familySites: {
        title: '패밀리사이트',
        placeholder: '패밀리사이트'
      },
      copyright: '© 2023 유진파워시스템. All rights reserved.',
      siteInfo: {
        policy: '개인정보처리방침',
        terms: '이용약관'
      }
    },
    en: {
      companyName: 'Yujin Power System',
      companyDescription: 'As a global power equipment and system specialist company, we brighten the future with innovative technology and quality.',
      links: {
        title: 'Quick Links',
        company: 'Company',
        product: 'Products',
        sustainability: 'Sustainability',
        news: 'Newsroom',
        support: 'Support'
      },
      contact: {
        title: 'Contact',
        address1: '123 Teheran-ro, Gangnam-gu, Seoul',
        address2: 'Yujin Power Building, 15F',
        tel: 'Tel: +82-2-1234-5678',
        fax: 'Fax: +82-2-1234-5679',
        email: 'Email: info@yujinpower.com'
      },
      familySites: {
        title: 'Family Sites',
        placeholder: 'Family Sites'
      },
      copyright: '© 2023 Yujin Power System. All rights reserved.',
      siteInfo: {
        policy: 'Privacy Policy',
        terms: 'Terms of Use'
      }
    }
  };
  
  // 현재 언어에 맞는 텍스트 선택
  const currentText = language === 'ko' ? text.ko : text.en;
  
  const familySites = [
    { name: language === 'ko' ? '유진기업' : 'Eugene Corporation', url: 'https://www.eugenegroup.co.kr/' },
    { name: language === 'ko' ? '유진로봇' : 'Yujin Robot', url: 'https://www.yujinrobot.com/' },
    { name: language === 'ko' ? '유진투자증권' : 'Eugene Investment & Securities', url: 'https://www.eugenefn.com/' }
  ];
  
  const toggleFamilySite = () => {
    setIsFamilySiteOpen(!isFamilySiteOpen);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* 로고 및 회사 소개 */}
          <div className="col-span-1 md:col-span-1">
            <h2 className="text-xl font-bold mb-4">{currentText.companyName}</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              {currentText.companyDescription}
            </p>
          </div>
          
          {/* 주요 링크 */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{currentText.links.title}</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company" className="text-gray-400 hover:text-white transition-colors">
                  {currentText.links.company}
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-gray-400 hover:text-white transition-colors">
                  {currentText.links.product}
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-400 hover:text-white transition-colors">
                  {currentText.links.sustainability}
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  {currentText.links.news}
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                  {currentText.links.support}
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">{currentText.contact.title}</h3>
            <address className="text-gray-400 text-sm not-italic">
              <p className="mb-2">{currentText.contact.address1}</p>
              <p className="mb-2">{currentText.contact.address2}</p>
              <p className="mb-2">{currentText.contact.tel}</p>
              <p className="mb-2">{currentText.contact.fax}</p>
              <p>{currentText.contact.email}</p>
            </address>
          </div>
          
          {/* 소셜 및 패밀리 사이트 */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-primary transition-colors">
                <FaFacebookF className="text-lg" aria-hidden="true" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-primary transition-colors">
                <FaYoutube className="text-lg" aria-hidden="true" />
                <span className="sr-only">YouTube</span>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-primary transition-colors">
                <FaInstagram className="text-lg" aria-hidden="true" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="bg-gray-800 w-10 h-10 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-primary transition-colors">
                <FaLinkedinIn className="text-lg" aria-hidden="true" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
            
            {/* 패밀리 사이트 */}
            <div className="relative">
              <h3 className="text-lg font-semibold mb-2">{currentText.familySites.title}</h3>
              <button 
                type="button" 
                onClick={toggleFamilySite}
                className="w-full bg-gray-800 py-2 px-4 text-left flex items-center justify-between rounded text-gray-400 hover:text-white transition-colors"
              >
                <span>{currentText.familySites.placeholder}</span>
                {isFamilySiteOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              
              {isFamilySiteOpen && (
                <ul className="absolute w-full bg-gray-800 mt-1 rounded overflow-hidden z-10">
                  {familySites.map((site, index) => (
                    <li key={index}>
                      <a 
                        href={site.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block py-2 px-4 text-gray-400 hover:bg-gray-700 hover:text-white transition-colors"
                      >
                        {site.name}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
        
        {/* 저작권 및 정책 링크 */}
        <div className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row md:justify-between md:items-center">
          <p className="text-gray-500 text-sm">
            {currentText.copyright}
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6">
            <Link href="/privacy" className="text-gray-500 hover:text-white text-sm transition-colors">
              {currentText.siteInfo.policy}
            </Link>
            <Link href="/terms" className="text-gray-500 hover:text-white text-sm transition-colors">
              {currentText.siteInfo.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 