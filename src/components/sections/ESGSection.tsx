'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const ESGSection = () => {
  // ESG 세부 항목
  const esgItems = [
    {
      id: 'environmental',
      title: '환경',
      description: '친환경 전력 시스템 구축과 탄소 배출량 감소를 위해 노력합니다.',
      icon: '/asset/images/image001.jpg',
      color: 'bg-green-100 text-green-600',
      link: '/sustainability#environment'
    },
    {
      id: 'social',
      title: '사회',
      description: '지역사회 발전과 동반성장을 통해 사회적 가치 창출에 기여합니다.',
      icon: '/asset/images/image002.jpg',
      color: 'bg-blue-100 text-blue-600',
      link: '/sustainability#social'
    },
    {
      id: 'governance',
      title: '지배구조',
      description: '투명한 의사결정과 윤리경영으로 신뢰받는 기업이 되겠습니다.',
      icon: '/asset/images/image003.jpg',
      color: 'bg-purple-100 text-purple-600',
      link: '/sustainability#governance'
    }
  ];

  // 애니메이션 설정
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-primary mb-4"
          >
            지속가능경영
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            유진파워시스템은 환경, 사회, 지배구조를 고려한 ESG 경영을 통해 지속가능한 미래를 만들어갑니다.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {esgItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`p-6 ${item.color}`}>
                <div className="w-16 h-16 mx-auto relative mb-4">
                  <Image
                    src={item.icon}
                    alt={`${item.title} 아이콘`}
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{item.title}</h3>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6 text-center">
                  {item.description}
                </p>
                
                <div className="text-center">
                  <Link 
                    href={item.link}
                    className="inline-flex items-center font-medium text-primary hover:underline"
                  >
                    자세히 보기
                    <svg className="w-4 h-4 ml-1" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <title>화살표</title>
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <Link
            href="/sustainability"
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded inline-block text-lg font-medium transition-colors"
          >
            지속가능경영 더 알아보기
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ESGSection; 