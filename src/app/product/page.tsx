import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '제품소개 - 유진파워시스템',
  description: '유진파워시스템의 혁신적인 전력 솔루션 제품들을 소개합니다.',
};

// 제품 카테고리 데이터
const productCategories = [
  {
    id: 'category1',
    title: '전력 시스템',
    description: '고효율 전력 분배 및 제어 시스템으로 안정적인 전력 공급을 보장합니다.',
    image: '/images/power-system.jpg',
    features: [
      '스마트 그리드 솔루션',
      '전력 관리 시스템',
      '변전 설비'
    ]
  },
  {
    id: 'category2',
    title: '에너지 저장장치',
    description: '첨단 배터리 기술로 효율적인 에너지 관리 및 비상 전원 공급 솔루션을 제공합니다.',
    image: '/images/energy-storage.jpg',
    features: [
      'ESS(에너지 저장 시스템)',
      '산업용 배터리',
      'UPS(무정전 전원장치)'
    ]
  },
  {
    id: 'category3',
    title: '친환경 발전',
    description: '태양광, 풍력 등 신재생 에너지 발전 시스템으로 친환경 미래를 선도합니다.',
    image: '/images/renewable-energy.jpg',
    features: [
      '태양광 발전 시스템',
      '풍력 발전 솔루션',
      '하이브리드 발전 시스템'
    ]
  },
  {
    id: 'category4',
    title: '산업 자동화',
    description: 'IoT 기반 스마트 공장 솔루션으로 생산성 향상과 에너지 절감을 실현합니다.',
    image: '/images/industrial-automation.jpg',
    features: [
      '산업용 IoT 솔루션',
      'SCADA 시스템',
      '에너지 효율화 솔루션'
    ]
  }
];

export default function ProductPage() {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
          제품소개
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
          유진파워시스템은 혁신적인 전력 솔루션을 통해 더 효율적이고 지속가능한 미래를 만들어갑니다. 
          다양한 제품 카테고리를 확인하세요.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {productCategories.map((category) => (
            <div 
              key={category.id} 
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative h-64">
                <Image
                  src={category.image}
                  alt={category.title}
                  className="object-cover"
                  fill
                />
              </div>
              
              <div className="p-6">
                <h2 className="text-2xl font-bold text-primary mb-3">{category.title}</h2>
                <p className="text-gray-600 mb-4">{category.description}</p>
                
                <h3 className="font-semibold text-gray-800 mb-2">주요 제품</h3>
                <ul className="list-disc pl-5 mb-6 text-gray-600">
                  {category.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                
                <Link
                  href={`/product/${category.id}`}
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  자세히 보기
                  <svg 
                    className="w-4 h-4 ml-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <title>화살표</title>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 