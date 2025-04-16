import type { Metadata } from 'next';
import Link from 'next/link';
import { FiCalendar } from 'react-icons/fi';

export const metadata: Metadata = {
  title: '뉴스룸 - 유진파워시스템',
  description: '유진파워시스템의 최신 소식과 보도자료, 공지사항을 확인하세요.',
};

// 뉴스 데이터
const newsItems = [
  {
    id: '1',
    title: '유진파워시스템, 신재생에너지 전력저장장치 개발 완료',
    summary: '당사는 최신 기술이 적용된 대용량 ESS 시스템 개발에 성공하여 국내외 시장 진출을 본격화할 예정입니다.',
    content: `유진파워시스템은 15일, 신재생에너지 전력저장장치(ESS) 개발을 완료하고 상용화에 나선다고 밝혔습니다. 
    이번에 개발한 ESS는 기존 제품 대비 에너지 효율이 30% 향상되었으며, 안전성과 내구성도 크게 개선되었습니다.
    
    유진파워시스템은 이 제품을 통해 국내 시장은 물론 유럽과 동남아 시장 진출도 본격화할 계획입니다. 
    또한 정부의 신재생에너지 정책에 발맞춰 다양한 규모의 ESS 제품 라인업을 구축할 예정입니다.`,
    date: '2023-12-15',
    category: '보도자료',
    link: '/news/press/1'
  },
  {
    id: '2',
    title: '2024년 상반기 신입/경력 공개채용 안내',
    summary: '유진파워시스템에서 함께 성장할 인재를 모집합니다. 전력 시스템, 전기전자, 소프트웨어 개발 분야 경력자를 우대합니다.',
    content: `유진파워시스템에서 2024년 상반기 신입/경력 공개채용을 실시합니다.

    모집분야:
    - 전력 시스템 개발 (신입/경력)
    - 전기전자 엔지니어 (신입/경력)
    - 소프트웨어 개발 (경력)
    - 경영지원 (신입)
    
    지원자격:
    - 해당 분야 전공자 또는 유사 업무 경험자
    - 해외 출장 가능자
    - 상세 자격요건은 채용 페이지 참고
    
    지원방법:
    - 당사 홈페이지 채용 페이지를 통한 온라인 지원
    - 접수기간: 2023년 11월 20일 ~ 12월 10일`,
    date: '2023-11-20',
    category: '공지사항',
    link: '/news/notice/2'
  },
  {
    id: '3',
    title: '유진파워시스템, 그린에너지 국제 전시회 참가',
    summary: '다음 달 개최되는 그린에너지 국제 전시회에 당사의 최신 제품과 기술을 선보일 예정입니다. 관계자 여러분의 많은 관심 바랍니다.',
    content: `유진파워시스템은 내달 15일부터 18일까지 서울 코엑스에서 열리는 '2023 그린에너지 국제 전시회'에 참가합니다.
    
    이번 전시회에서 당사는 최신 ESS 제품과 신재생에너지 통합 관리 시스템을 선보일 예정입니다. 특히 산업용 대용량 ESS와 가정용 소형 ESS 신제품을 국내 최초로 공개합니다.
    
    전시 부스에서는 제품 시연과 함께 기술 전문가의 상세한 설명을 들으실 수 있으며, 상담도 가능합니다. 
    
    위치: 코엑스 D홀 D-2156 부스
    일시: 2023년 11월 15일 ~ 18일, 오전 10시 ~ 오후 6시`,
    date: '2023-10-05',
    category: '공지사항',
    link: '/news/notice/3'
  },
  {
    id: '4',
    title: '스마트 그리드 기술 도입으로 전력 효율성 30% 향상',
    summary: '당사의 스마트 그리드 기술이 적용된 시스템이 전력 효율성을 크게 향상시켜 에너지 절감에 기여하고 있습니다.',
    content: `유진파워시스템의 스마트 그리드 기술이 적용된 전력 관리 시스템이 전력 효율성을 30% 이상 향상시키는 성과를 거두었습니다.
    
    지난 6개월간 국내 주요 제조업체 공장에 도입된 당사의 스마트 그리드 시스템은 인공지능 기반의 전력 수요 예측과 최적화 기술을 통해 전력 사용량을 대폭 줄였습니다. 이를 통해 해당 기업은 연간 약 5억원의 전력비 절감 효과를 얻었습니다.
    
    유진파워시스템은 이번 성공사례를 바탕으로 스마트 그리드 기술의 적용 범위를 확대하고, 중소기업을 위한 맞춤형 솔루션도 개발할 계획입니다.`,
    date: '2023-09-18',
    category: '보도자료',
    link: '/news/press/4'
  },
  {
    id: '5',
    title: '유진파워시스템-한국에너지공단 MOU 체결',
    summary: '신재생에너지 활성화를 위한 협력 강화에 나섰습니다.',
    content: `유진파워시스템은 8월 25일 한국에너지공단과 '신재생에너지 활성화를 위한 업무협약(MOU)'을 체결했습니다.
    
    이번 협약을 통해 양측은 ▲신재생에너지 기술 개발 ▲에너지 효율화 사업 추진 ▲친환경 에너지 인프라 구축 등에 상호 협력하기로 했습니다. 
    
    특히 유진파워시스템의 ESS 기술과 한국에너지공단의 정책 노하우를 결합해 에너지 취약지역에 안정적인 전력 공급 시스템을 구축하는 사업을 우선적으로 추진할 예정입니다.
    
    양측은 정기적인 실무회의를 통해 구체적인 협력 사업을 발굴하고 성과를 점검해 나갈 계획입니다.`,
    date: '2023-08-25',
    category: '보도자료',
    link: '/news/press/5'
  },
  {
    id: '6',
    title: '창립 3주년 기념 고객 감사 이벤트 안내',
    summary: '유진파워시스템의 창립 3주년을 맞아 고객 감사 이벤트를 진행합니다.',
    content: `유진파워시스템 창립 3주년을 맞이하여 그동안 보내주신 성원에 보답하고자 고객 감사 이벤트를 진행합니다.
    
    이벤트 기간: 2023년 7월 1일 ~ 7월 31일
    
    이벤트 내용:
    1. 제품 구매 고객 대상 특별 할인 (최대 30%)
    2. 무상 점검 서비스 제공 (기존 고객 대상)
    3. 3주년 기념 사은품 증정 (선착순 100명)
    
    참여 방법:
    - 당사 홈페이지 이벤트 페이지에서 신청
    - 전국 각 지점 방문 신청
    
    문의: 고객센터 02-1234-5678`,
    date: '2023-07-01',
    category: '공지사항',
    link: '/news/notice/6'
  }
];

// 날짜 포맷 함수
const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
};

export default function NewsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
          뉴스룸
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
          유진파워시스템의 최신 소식과 보도자료, 공지사항을 확인하세요.
        </p>
        
        {/* 필터 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button type="button" className="bg-primary text-white px-4 py-2 rounded-full text-sm font-medium">
            전체
          </button>
          <button type="button" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition-colors">
            보도자료
          </button>
          <button type="button" className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-full text-sm font-medium transition-colors">
            공지사항
          </button>
        </div>
        
        {/* 뉴스 목록 */}
        <div className="max-w-4xl mx-auto space-y-8">
          {newsItems.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <span className="inline-block px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium mr-3">
                  {item.category}
                </span>
                <FiCalendar className="mr-1" aria-hidden="true" />
                <time dateTime={item.date}>{formatDate(item.date)}</time>
              </div>
              
              <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                <Link href={item.link}>{item.title}</Link>
              </h2>
              
              <p className="text-gray-600 mb-4">{item.summary}</p>
              
              <Link 
                href={item.link}
                className="inline-flex items-center text-primary text-sm font-medium hover:underline"
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
          ))}
        </div>
        
        {/* 페이지네이션 */}
        <div className="flex justify-center mt-12">
          <nav className="inline-flex">
            <button type="button" className="p-2 border border-gray-300 bg-white text-gray-500 rounded-l-md hover:bg-gray-50" disabled>
              이전
            </button>
            <button type="button" className="p-2 border-t border-b border-gray-300 bg-primary text-white">
              1
            </button>
            <button type="button" className="p-2 border-t border-b border-gray-300 bg-white text-gray-700 hover:bg-gray-50">
              2
            </button>
            <button type="button" className="p-2 border border-gray-300 bg-white text-gray-700 rounded-r-md hover:bg-gray-50">
              다음
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
} 