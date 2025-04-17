'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiMenu, FiX, FiChevronDown, FiGlobe, FiSearch } from 'react-icons/fi';
import HeaderDropdown from './HeaderDropdown';
import { useLanguage } from '@/contexts/LanguageContext';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isFullMenuOpen, setIsFullMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  
  // 언어 Context 사용
  const { language, setLanguage, t } = useLanguage();
  
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

  // 언어 선택 토글
  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  // 언어 변경 함수
  const changeLanguage = (lang: 'ko' | 'en') => {
    setLanguage(lang);
    setIsLanguageDropdownOpen(false);
  };

  // 검색창 토글
  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsFullMenuOpen(false);
  };

  // 전체 메뉴 토글 (데스크톱 햄버거 메뉴)
  const toggleFullMenu = () => {
    setIsFullMenuOpen(!isFullMenuOpen);
    setIsSearchOpen(false);
  };

  // 서브메뉴 토글
  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(name);
    }
  };

  // 네비게이션 메뉴 항목
  const menuItems = [
    { 
      name: t('header.company'), 
      path: '/company',
      submenu: [
        { name: t('submenu.company.ceo'), path: '/company#ceo' },
        { name: t('submenu.company.history'), path: '/company#history' },
        { name: t('submenu.company.vision'), path: '/company#vision' }
      ]
    },
    { 
      name: t('header.product'), 
      path: '/product',
      submenu: [
        { name: t('submenu.product.category1'), path: '/product/category1' },
        { name: t('submenu.product.category2'), path: '/product/category2' },
        { name: t('submenu.product.category3'), path: '/product/category3' }
      ]
    },
    { 
      name: t('header.sustainability'), 
      path: '/sustainability',
      submenu: [
        { name: t('submenu.sustainability.esg'), path: '/sustainability#esg' },
        { name: t('submenu.sustainability.environment'), path: '/sustainability#environment' },
        { name: t('submenu.sustainability.social'), path: '/sustainability#social' }
      ]
    },
    { 
      name: t('header.news'), 
      path: '/news',
      submenu: [
        { name: t('submenu.news.notice'), path: '/news/notice' },
        { name: t('submenu.news.press'), path: '/news/press' }
      ]
    },
    { 
      name: t('header.support'), 
      path: '/support',
      submenu: [
        { name: t('submenu.support.contact'), path: '/support#contact' },
        { name: t('submenu.support.location'), path: '/support#location' }
      ]
    }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="w-full px-6 md:px-12">
        <div className="flex items-center justify-between">
          {/* 로고 - 왼쪽 끝으로 */}
          <Link href="/" className="relative z-10">
            <h1 className={`text-3xl font-bold ${isScrolled ? 'text-black' : 'text-white'}`}>
              {language === 'ko' ? '유진 파워 시스템' : 'YUJIN POWER SYSTEM'}
            </h1>
          </Link>

          {/* 중앙 네비게이션 */}
          <nav className="hidden lg:flex items-center justify-center mx-8">
            <div className="flex items-center space-x-12">
              {menuItems.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setHoveredMenu(item.name)}
                  onMouseLeave={() => setHoveredMenu(null)}
                >
                  <Link 
                    href={item.path}
                    className={`font-medium text-lg hover:text-opacity-80 transition-colors ${
                      isScrolled ? 'text-black' : 'text-white'
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
            </div>
          </nav>

          {/* 오른쪽 메뉴: 언어 선택, 검색, 햄버거 - 오른쪽 끝으로 */}
          <div className="flex items-center space-x-6">
            {/* 언어 선택 */}
            <div className="relative hidden lg:block">
              <button 
                type="button"
                className={`flex items-center text-lg font-medium ${
                  isScrolled ? 'text-black' : 'text-white'
                }`}
                onClick={toggleLanguageDropdown}
                aria-expanded={isLanguageDropdownOpen}
                aria-label="언어 선택"
              >
                <FiGlobe className="mr-1" />
                {t('header.language')}
                <FiChevronDown className={`ml-1 transition-transform ${
                  isLanguageDropdownOpen ? 'rotate-180' : ''
                }`} />
              </button>
              
              {/* 언어 선택 드롭다운 */}
              {isLanguageDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-md py-2 min-w-[120px] z-50"
                >
                  <button 
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 ${language === 'ko' ? 'text-primary font-medium' : 'text-gray-700'}`}
                    onClick={() => changeLanguage('ko')}
                  >
                    {t('header.language.ko')}
                  </button>
                  <button 
                    className={`block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 hover:text-primary ${language === 'en' ? 'text-primary font-medium' : 'text-gray-700'}`}
                    onClick={() => changeLanguage('en')}
                  >
                    {t('header.language.en')}
                  </button>
                </motion.div>
              )}
            </div>
            
            {/* 검색 버튼 */}
            <button
              type="button"
              className={`hidden lg:flex items-center justify-center text-sm ${
                isScrolled ? 'text-black' : 'text-white'
              } ${isSearchOpen ? 'text-primary' : ''}`}
              onClick={toggleSearch}
              aria-label="검색"
            >
              <FiSearch className="text-xl" />
            </button>
            
            {/* 구분선 */}
            <div className={`hidden lg:block h-5 w-px mx-10 ${isScrolled ? 'bg-gray-400' : 'bg-white'}`}></div>
            
            {/* 모바일 햄버거 메뉴 버튼 */}
            <button 
              type="button"
              className="lg:hidden relative z-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label="메인 메뉴"
            >
              {isMobileMenuOpen ? (
                <FiX className={`text-2xl ${isScrolled ? 'text-black' : 'text-white'}`} />
              ) : (
                <FiMenu className={`text-2xl ${isScrolled ? 'text-black' : 'text-white'}`} />
              )}
            </button>
            
            {/* 데스크톱 햄버거 메뉴 버튼 (taihan.com 스타일) */}
            <button
              type="button"
              className="hidden lg:flex items-center justify-center"
              onClick={toggleFullMenu}
              aria-expanded={isFullMenuOpen}
              aria-controls="full-menu"
              aria-label="전체 메뉴"
            >
              <div className={`flex flex-col space-y-1.5 ${isFullMenuOpen ? 'text-primary' : isScrolled ? 'text-black' : 'text-white'}`}>
                <span className={`w-6 h-0.5 bg-current transition-all ${isFullMenuOpen ? 'transform rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-current transition-all ${isFullMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-current transition-all ${isFullMenuOpen ? 'transform -rotate-45 -translate-y-2' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </div>
          
      {/* 검색창 (열릴 때만 표시) */}
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 w-full bg-white shadow-md p-4 z-40"
        >
          <div className="container mx-auto px-6 md:px-12">
            <div className="flex items-center">
              <input
                type="text"
                placeholder={t('header.search.placeholder')}
                className="flex-1 px-4 py-2 border-b-2 border-primary focus:outline-none"
                autoFocus
              />
              <button 
                type="button"
                className="ml-2 text-primary"
              >
                <FiSearch className="text-xl" />
              </button>
              <button
                type="button"
                className="ml-4 text-gray-500"
                onClick={toggleSearch}
              >
                <FiX className="text-xl" />
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* 전체 메뉴 (taihan.com 스타일) */}
      {isFullMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white z-40 overflow-auto lg:pt-20"
          id="full-menu"
        >
          {/* 닫기 버튼 */}
          <button
            type="button"
            className="absolute top-6 right-6 text-gray-700 hover:text-primary z-50"
            onClick={toggleFullMenu}
            aria-label="전체 메뉴 닫기"
          >
            <FiX className="text-3xl" />
          </button>
          
          <div className="container mx-auto px-6 md:px-12 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {menuItems.map((item) => (
                <div key={item.name} className="border-t border-gray-200 pt-4">
                  <Link
                    href={item.path}
                    className="text-xl font-bold text-primary block mb-4 hover:underline"
                    onClick={toggleFullMenu}
                  >
                    {item.name}
                  </Link>
                  
                  {item.submenu && (
                    <div className="flex flex-col space-y-4">
                      {item.submenu.map((subItem) => (
                        <Link 
                          key={subItem.name}
                          href={subItem.path}
                          className="text-base text-gray-700 hover:text-primary"
                          onClick={toggleFullMenu}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* 하단 링크 영역 */}
            <div className="mt-12 border-t border-gray-200 pt-6">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Link href="/about/contact" className="text-gray-700 hover:text-primary" onClick={toggleFullMenu}>
                  {t('header.menu.contact')}
                </Link>
                <Link href="/resources/downloads" className="text-gray-700 hover:text-primary" onClick={toggleFullMenu}>
                  {t('header.menu.downloads')}
                </Link>
                <Link href="/customer/inquiry" className="text-gray-700 hover:text-primary" onClick={toggleFullMenu}>
                  {t('header.menu.inquiry')}
                </Link>
                <div className="flex items-center space-x-4">
                  <button 
                    className={`${language === 'ko' ? 'text-primary font-medium' : 'text-gray-700'}`}
                    onClick={() => changeLanguage('ko')}
                  >
                    {t('header.language.ko')}
                  </button>
                  <button 
                    className={`${language === 'en' ? 'text-primary font-medium' : 'text-gray-700'}`}
                    onClick={() => changeLanguage('en')}
                  >
                    {t('header.language.en')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* 모바일 메뉴 */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 bg-white z-40 lg:hidden pt-20 overflow-auto"
          id="mobile-menu"
        >
          <div className="container mx-auto px-4 py-8">
            <nav className="flex flex-col space-y-6">
              {menuItems.map((item) => (
                <div key={item.name} className="border-b border-gray-200 pb-4">
                  <button 
                    className="flex items-center justify-between w-full text-left"
                    onClick={() => toggleSubmenu(item.name)}
                  >
                    <span className="text-lg font-medium text-primary">{item.name}</span>
                    {item.submenu && (
                      <FiChevronDown className={`ml-2 transition-transform ${
                        activeSubmenu === item.name ? 'rotate-180' : ''
                      }`} />
                    )}
                  </button>
                  
                  {item.submenu && activeSubmenu === item.name && (
                    <div className="pl-4 flex flex-col space-y-3 mt-4">
                      {item.submenu.map((subItem) => (
                        <Link 
                          key={subItem.name}
                          href={subItem.path}
                          className="text-sm text-gray-600 hover:text-primary"
                          onClick={() => setIsMobileMenuOpen(false)}
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
                <p className="text-sm font-medium text-gray-500 mb-3">{t('mobile.language')}</p>
                <div className="flex space-x-4">
                  <button 
                    type="button" 
                    className={`${language === 'ko' ? 'text-primary font-medium' : 'text-gray-500'}`}
                    onClick={() => changeLanguage('ko')}
                  >
                    {t('header.language.ko')}
                  </button>
                  <button 
                    type="button" 
                    className={`${language === 'en' ? 'text-primary font-medium' : 'text-gray-500'}`}
                    onClick={() => changeLanguage('en')}
                  >
                    {t('header.language.en')}
                  </button>
                </div>
              </div>
            </nav>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header; 