'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiGlobe } from 'react-icons/fi';
import HeaderDropdown from './HeaderDropdown';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  
  // 스크롤 위치에 따라 헤더 스타일 변경
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 네비게이션 메뉴 항목
  const menuItems = [
    { 
      name: '회사소개', 
      path: '/company',
      submenu: [
        { name: 'CEO 메시지', path: '/company#ceo' },
        { name: '연혁', path: '/company#history' },
        { name: '비전/미션', path: '/company#vision' }
      ]
    },
    { 
      name: '제품소개', 
      path: '/product',
      submenu: [
        { name: '제품 카테고리 1', path: '/product/category1' },
        { name: '제품 카테고리 2', path: '/product/category2' },
        { name: '제품 카테고리 3', path: '/product/category3' }
      ]
    },
    { 
      name: '지속가능경영', 
      path: '/sustainability',
      submenu: [
        { name: 'ESG 경영', path: '/sustainability#esg' },
        { name: '환경·안전 활동', path: '/sustainability#environment' },
        { name: '사회공헌', path: '/sustainability#social' }
      ]
    },
    { 
      name: '뉴스룸', 
      path: '/news',
      submenu: [
        { name: '공지사항', path: '/news/notice' },
        { name: '보도자료', path: '/news/press' }
      ]
    },
    { 
      name: '고객지원', 
      path: '/support',
      submenu: [
        { name: '문의하기', path: '/support#contact' },
        { name: '오시는 길', path: '/support#location' }
      ]
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          {/* 로고 */}
          <Link href="/" className="relative z-10">
            <h1 className={`text-2xl font-bold ${isScrolled ? 'text-white' : 'text-primary'}`}>
              유진파워시스템
            </h1>
          </Link>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setHoveredMenu(item.name)}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <Link 
                  href={item.path}
                  className={`font-medium text-sm hover:text-opacity-80 transition-colors ${
                    isScrolled ? 'text-white' : 'text-primary'
                  }`}
                  aria-expanded={hoveredMenu === item.name}
                  aria-controls={`${item.name}-dropdown`}
                >
                  <span className="flex items-center">
                    {item.name}
                    {item.submenu && (
                      <FiChevronDown className={`ml-1 transition-transform ${
                        hoveredMenu === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </span>
                </Link>
                
                {/* 드롭다운 메뉴 */}
                {item.submenu && hoveredMenu === item.name && (
                  <HeaderDropdown 
                    items={item.submenu} 
                    id={`${item.name}-dropdown`}
                  />
                )}
              </div>
            ))}

            {/* 언어 선택 */}
            <div className="relative">
              <button 
                type="button"
                className={`flex items-center text-sm font-medium ${
                  isScrolled ? 'text-white' : 'text-primary'
                }`}
                aria-label="언어 선택"
              >
                <FiGlobe className="mr-1" />
                KOR
                <FiChevronDown className="ml-1" />
              </button>
            </div>
          </nav>

          {/* 모바일 메뉴 버튼 */}
          <button 
            type="button"
            className="lg:hidden relative z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label="메인 메뉴"
          >
            {isMobileMenuOpen ? (
              <FiX className={`text-2xl ${isScrolled ? 'text-white' : 'text-primary'}`} />
            ) : (
              <FiMenu className={`text-2xl ${isScrolled ? 'text-white' : 'text-primary'}`} />
            )}
          </button>

          {/* 모바일 메뉴 */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-white z-40 lg:hidden pt-20"
              id="mobile-menu"
            >
              <div className="container mx-auto px-4 py-8">
                <nav className="flex flex-col space-y-6">
                  {menuItems.map((item) => (
                    <div key={item.name} className="border-b border-gray-200 pb-4">
                      <Link 
                        href={item.path}
                        className="text-lg font-medium text-primary block mb-4"
                      >
                        {item.name}
                      </Link>
                      
                      {item.submenu && (
                        <div className="pl-4 flex flex-col space-y-3">
                          {item.submenu.map((subItem) => (
                            <Link 
                              key={subItem.name}
                              href={subItem.path}
                              className="text-sm text-gray-600 hover:text-primary"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                  
                  {/* 모바일 언어 선택 */}
                  <div className="pt-4">
                    <p className="text-sm font-medium text-gray-500 mb-3">언어 선택</p>
                    <div className="flex space-x-4">
                      <button type="button" className="text-primary font-medium">한국어</button>
                      <button type="button" className="text-gray-500">English</button>
                    </div>
                  </div>
                </nav>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header; 