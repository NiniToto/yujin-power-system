import type { Metadata } from 'next';
import Image from 'next/image';
import { FiPhone, FiMail, FiMap, FiClock } from 'react-icons/fi';

export const metadata: Metadata = {
  title: '고객지원 - 유진파워시스템',
  description: '유진파워시스템의 고객 문의, 오시는 길 등 고객지원 정보를 제공합니다.',
};

export default function SupportPage() {
  return (
    <div className="pt-24">
      {/* 문의하기 섹션 */}
      <section id="contact" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            고객지원
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
            유진파워시스템은 고객의 소중한 의견에 귀 기울이며, 신속하고 정확한 지원을 약속드립니다.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* 연락처 정보 */}
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">연락처 정보</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FiPhone className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">전화문의</h3>
                    <p className="text-gray-600">02-1234-5678 (평일 09:00 ~ 18:00)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FiMail className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">이메일 문의</h3>
                    <p className="text-gray-600">support@yujinpower.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FiClock className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">고객센터 운영시간</h3>
                    <p className="text-gray-600">평일: 09:00 ~ 18:00</p>
                    <p className="text-gray-600">점심시간: 12:00 ~ 13:00</p>
                    <p className="text-gray-600">토/일/공휴일 휴무</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-primary mb-6">본사 위치</h2>
                <div className="flex items-start">
                  <div className="bg-primary/10 p-3 rounded-full mr-4">
                    <FiMap className="text-primary text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-1">본사</h3>
                    <p className="text-gray-600">서울특별시 강남구 테헤란로 123</p>
                    <p className="text-gray-600">유진파워빌딩 15층</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* 문의 양식 */}
            <div className="bg-gray-50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-primary mb-6">문의하기</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium text-gray-700">이름 *</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium text-gray-700">이메일 *</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 font-medium text-gray-700">연락처</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium text-gray-700">문의유형 *</label>
                  <select 
                    id="subject" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  >
                    <option value="">선택해주세요</option>
                    <option value="product">제품 문의</option>
                    <option value="service">서비스 문의</option>
                    <option value="partnership">제휴 문의</option>
                    <option value="other">기타 문의</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium text-gray-700">문의내용 *</label>
                  <textarea 
                    id="message" 
                    rows={5} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    required
                  />
                </div>
                
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="privacy" 
                    className="mt-1"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-gray-600">
                    개인정보 수집 및 이용에 동의합니다. *
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-white font-medium py-3 rounded transition-colors"
                >
                  문의하기
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* 오시는 길 섹션 */}
      <section id="location" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">오시는 길</h2>
          
          <div className="max-w-5xl mx-auto">
            {/* 지도 영역 (실제 지도 API 대신 이미지로 대체) */}
            <div className="relative h-96 bg-gray-200 rounded-lg mb-12 overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center bg-gray-300">
                <p className="text-gray-600 font-medium">지도가 표시되는 영역입니다.</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">주소</h3>
                <p className="text-gray-700 mb-2">서울특별시 강남구 테헤란로 123</p>
                <p className="text-gray-700 mb-6">유진파워빌딩 15층</p>
                
                <h3 className="text-xl font-bold text-primary mb-4">연락처</h3>
                <p className="text-gray-700 mb-2">Tel: 02-1234-5678</p>
                <p className="text-gray-700 mb-6">Fax: 02-1234-5679</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-primary mb-4">대중교통 이용안내</h3>
                <div className="mb-4">
                  <h4 className="font-bold text-gray-800 mb-2">지하철</h4>
                  <p className="text-gray-700">
                    2호선 강남역 3번 출구 도보 5분<br />
                    신분당선 강남역 5번 출구 도보 7분
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-gray-800 mb-2">버스</h4>
                  <p className="text-gray-700">
                    간선버스: 145, 341, 472<br />
                    지선버스: 3412, 4412
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 