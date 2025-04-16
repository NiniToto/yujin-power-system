'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

interface BusinessItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  link: string;
}

interface BusinessAreaProps {
  title?: string;
  subtitle?: string;
  items?: BusinessItem[];
}

const BusinessArea = ({
  title = "사업 영역",
  subtitle = "유진파워시스템의 다양한 사업영역을 소개합니다",
  items = [
    {
      id: "area1",
      title: "전력 시스템",
      description: "고효율 전력 분배 및 제어 시스템으로 안정적인 전력 공급을 보장합니다.",
      icon: "/asset/images/image001.jpg",
      link: "/product/category1"
    },
    {
      id: "area2",
      title: "에너지 저장장치",
      description: "첨단 배터리 기술로 효율적인 에너지 관리 및 비상 전원 공급 솔루션을 제공합니다.",
      icon: "/asset/images/image002.jpg",
      link: "/product/category2"
    },
    {
      id: "area3",
      title: "친환경 발전",
      description: "태양광, 풍력 등 신재생 에너지 발전 시스템으로 친환경 미래를 선도합니다.",
      icon: "/asset/images/image003.jpg",
      link: "/product/category3"
    },
    {
      id: "area4",
      title: "산업 자동화",
      description: "IoT 기반 스마트 공장 솔루션으로 생산성 향상과 에너지 절감을 실현합니다.",
      icon: "/asset/images/image001.jpg",
      link: "/product/category4"
    }
  ]
}: BusinessAreaProps) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-20 bg-light">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {items.map((businessItem) => (
            <motion.div 
              key={businessItem.id}
              variants={item}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-bottom scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
              
              <div className="mb-4 text-primary">
                {/* 아이콘 이미지 */}
                <div className="w-16 h-16 mb-5 relative">
                  <Image
                    src={businessItem.icon}
                    alt={`${businessItem.title} 아이콘`}
                    width={64}
                    height={64}
                    className="transition-transform group-hover:scale-110 duration-300"
                  />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-primary transition-colors">
                  {businessItem.title}
                </h3>
                <p className="text-gray-600 mb-6 h-24">
                  {businessItem.description}
                </p>
                
                <Link 
                  href={businessItem.link}
                  className="inline-flex items-center text-primary font-medium"
                >
                  <span>자세히 보기</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessArea; 