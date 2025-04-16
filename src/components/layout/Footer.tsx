'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';
import { FaFacebookF, FaYoutube, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  const [isFamilySiteOpen, setIsFamilySiteOpen] = useState(false);
  
  const familySites = [
    { name: '유진기업', url: 'https://www.eugenegroup.co.kr/' },
    { name: '유진로봇', url: 'https://www.yujinrobot.com/' },
    { name: '유진투자증권', url: 'https://www.eugenefn.com/' }
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
            <h2 className="text-xl font-bold mb-4">유진파워시스템</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              글로벌 전력기기 및 시스템 전문 기업으로서 혁신적인 기술력과 품질로 미래를 밝힙니다.
            </p>
          </div>
          
          {/* 주요 링크 */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">바로가기</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/company" className="text-gray-400 hover:text-white transition-colors">
                  회사소개
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-gray-400 hover:text-white transition-colors">
                  제품소개
                </Link>
              </li>
              <li>
                <Link href="/sustainability" className="text-gray-400 hover:text-white transition-colors">
                  지속가능경영
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-400 hover:text-white transition-colors">
                  뉴스룸
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-gray-400 hover:text-white transition-colors">
                  고객지원
                </Link>
              </li>
            </ul>
          </div>
          
          {/* 회사 정보 */}
          <div className="col-span-1 md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">연락처</h3>
            <address className="text-gray-400 text-sm not-italic">
              <p className="mb-2">서울특별시 강남구 테헤란로 123</p>
              <p className="mb-2">유진파워빌딩 15층</p>
              <p className="mb-2">Tel: 02-1234-5678</p>
              <p className="mb-2">Fax: 02-1234-5679</p>
              <p>Email: info@yujinpower.com</p>
            </address>
          </div>
          
          {/* 소셜 및 패밀리 사이트 */}
          <div className="col-span-1 md:col-span-1">
            {/* 소셜 아이콘 */}
            <h3 className="text-lg font-semibold mb-4">소셜 미디어</h3>
            <div className="flex space-x-4 mb-8">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="페이스북"
              >
                <FaFacebookF className="text-white" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="유튜브"
              >
                <FaYoutube className="text-white" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="인스타그램"
              >
                <FaInstagram className="text-white" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-primary p-2 rounded-full transition-colors"
                aria-label="링크드인"
              >
                <FaLinkedinIn className="text-white" />
              </a>
            </div>
            
            {/* 패밀리 사이트 */}
            <div className="relative">
              <h3 className="text-lg font-semibold mb-4">패밀리 사이트</h3>
              <button
                type="button"
                onClick={toggleFamilySite}
                className="flex items-center justify-between w-full bg-gray-800 p-3 rounded text-sm"
                aria-expanded={isFamilySiteOpen}
              >
                <span>관련 사이트</span>
                {isFamilySiteOpen ? <FiChevronUp /> : <FiChevronDown />}
              </button>
              
              {isFamilySiteOpen && (
                <div className="absolute bottom-full left-0 w-full bg-gray-800 rounded-t shadow-lg mb-1 overflow-hidden">
                  <ul>
                    {familySites.map((site) => (
                      <li key={site.name} className="border-b border-gray-700 last:border-0">
                        <a
                          href={site.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block p-3 text-sm hover:bg-gray-700 transition-colors"
                        >
                          {site.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="text-sm text-gray-500 mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} 유진파워시스템. All rights reserved.</p>
          </div>
          
          <div className="text-sm text-gray-500 flex space-x-6">
            <Link href="/privacy" className="hover:text-white transition-colors">
              개인정보처리방침
            </Link>
            <Link href="/terms" className="hover:text-white transition-colors">
              이용약관
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              사이트맵
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 