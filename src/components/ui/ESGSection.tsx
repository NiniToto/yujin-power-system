'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from './SectionTitle';
import { useTranslation } from 'react-i18next';

type ESGItem = {
  id: number;
  title: string;
  description: string;
  icon: string;
  category: 'environmental' | 'social' | 'governance';
};

const ESGSection = () => {
  const { t } = useTranslation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const esgItems: ESGItem[] = [
    {
      id: 1,
      title: t('친환경 제품'),
      description: t('친환경 소재와 공정으로 환경 영향을 최소화한 제품을 개발 및 생산합니다.'),
      icon: '/images/eco-product.svg',
      category: 'environmental',
    },
    {
      id: 2,
      title: t('탄소배출 감축'),
      description: t('2030년까지 탄소배출량 30% 감축을 목표로 친환경 에너지 사용을 확대하고 있습니다.'),
      icon: '/images/carbon-reduction.svg',
      category: 'environmental',
    },
    {
      id: 3,
      title: t('사회공헌'),
      description: t('지역사회와 함께 성장하기 위한 다양한 사회공헌 활동을 진행하고 있습니다.'),
      icon: '/images/social-contribution.svg',
      category: 'social',
    },
    {
      id: 4,
      title: t('인재 육성'),
      description: t('임직원의 역량 강화를 위한 교육 프로그램과 복지 제도를 운영하고 있습니다.'),
      icon: '/images/human-resource.svg',
      category: 'social',
    },
    {
      id: 5,
      title: t('투명한 경영'),
      description: t('윤리경영을 통해 이해관계자와의 신뢰를 구축하고 지속가능한 성장을 추구합니다.'),
      icon: '/images/transparent-management.svg',
      category: 'governance',
    },
    {
      id: 6,
      title: t('리스크 관리'),
      description: t('경영 리스크를 선제적으로 관리하며 안정적인 기업 운영을 위해 노력합니다.'),
      icon: '/images/risk-management.svg',
      category: 'governance',
    },
  ];

  const categoryColors = {
    environmental: 'bg-green-100 border-green-500 text-green-700',
    social: 'bg-blue-100 border-blue-500 text-blue-700',
    governance: 'bg-purple-100 border-purple-500 text-purple-700',
  };

  const categoryLabels = {
    environmental: t('환경'),
    social: t('사회'),
    governance: t('지배구조'),
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 70,
      },
    },
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <SectionTitle
          title={t('지속가능경영')}
          description={t('대한전선은 환경(E), 사회(S), 지배구조(G)를 고려한 지속가능경영을 실천합니다.')}
          centered
        />

        <div className="flex flex-wrap justify-center gap-8 mt-6 mb-16">
          {Object.entries(categoryLabels).map(([key, label]) => (
            <div key={key} className="flex items-center">
              <span className={`inline-block w-3 h-3 rounded-full ${categoryColors[key as keyof typeof categoryColors].split(' ')[1]} mr-2`}></span>
              <span className="text-gray-700">{label}</span>
            </div>
          ))}
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {esgItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`p-6 rounded-lg border-l-4 ${categoryColors[item.category]} shadow-md bg-white`}
            >
              <div className="flex items-start mb-4">
                <div className="mr-4 p-2 rounded-full bg-white shadow-sm">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={32}
                    height={32}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <span className="text-xs px-2 py-1 rounded-full bg-opacity-50 inline-block mb-2 border border-current">
                    {categoryLabels[item.category]}
                  </span>
                </div>
              </div>
              <p className="text-gray-600">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <motion.a
            href="/esg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-6 py-3 bg-primary text-white rounded-lg shadow-md hover:bg-primary-dark transition-all duration-300"
          >
            {t('ESG 경영 자세히 보기')}
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ESGSection; 