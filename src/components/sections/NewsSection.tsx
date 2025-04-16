'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiCalendar } from 'react-icons/fi';

interface NewsItem {
  id: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  link: string;
}

interface NewsSectionProps {
  newsItems?: NewsItem[];
}

const NewsSection = ({ 
  newsItems = [
    {
      id: 'news1',
      title: '유진파워시스템, 신재생에너지 전력저장장치 개발 완료',
      summary: '당사는 최신 기술이 적용된 대용량 ESS 시스템 개발에 성공하여 국내외 시장 진출을 본격화할 예정입니다.',
      date: '2023-12-15',
      category: '보도자료',
      link: '/news/press/1'
    },
    {
      id: 'news2',
      title: '2024년 상반기 신입/경력 공개채용 안내',
      summary: '유진파워시스템에서 함께 성장할 인재를 모집합니다. 전력 시스템, 전기전자, 소프트웨어 개발 분야 경력자를 우대합니다.',
      date: '2023-11-20',
      category: '공지사항',
      link: '/news/notice/2'
    },
    {
      id: 'news3',
      title: '유진파워시스템, 그린에너지 국제 전시회 참가',
      summary: '다음 달 개최되는 그린에너지 국제 전시회에 당사의 최신 제품과 기술을 선보일 예정입니다. 관계자 여러분의 많은 관심 바랍니다.',
      date: '2023-10-05',
      category: '공지사항',
      link: '/news/notice/3'
    },
    {
      id: 'news4',
      title: '스마트 그리드 기술 도입으로 전력 효율성 30% 향상',
      summary: '당사의 스마트 그리드 기술이 적용된 시스템이 전력 효율성을 크게 향상시켜 에너지 절감에 기여하고 있습니다.',
      date: '2023-09-18',
      category: '보도자료',
      link: '/news/press/4'
    }
  ]
}: NewsSectionProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">뉴스룸</h2>
            <p className="text-lg text-gray-600">유진파워시스템의 최신 소식을 확인하세요</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <Link 
              href="/news" 
              className="inline-flex items-center text-primary font-medium hover:underline"
            >
              <span>모든 소식 보기</span>
              <FiArrowRight className="ml-2" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {newsItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium mr-3">
                  {item.category}
                </span>
                <FiCalendar className="mr-1" aria-hidden="true" />
                <time dateTime={item.date}>{formatDate(item.date)}</time>
              </div>
              
              <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                <Link href={item.link}>{item.title}</Link>
              </h3>
              
              <p className="text-gray-600 mb-4">{item.summary}</p>
              
              <Link
                href={item.link}
                className="inline-flex items-center text-primary text-sm font-medium hover:underline"
              >
                자세히 보기
                <FiArrowRight className="ml-1 text-xs" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection; 