import type { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: '지속가능경영 - 유진파워시스템',
  description: '유진파워시스템의 ESG 경영, 환경·안전 활동, 사회공헌 활동을 소개합니다.',
};

export default function SustainabilityPage() {
  return (
    <div className="pt-24">
      {/* ESG 경영 섹션 */}
      <section id="esg" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4 text-center">
            지속가능경영
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-16">
            유진파워시스템은 환경(Environmental), 사회(Social), 지배구조(Governance)를 
            고려한 ESG 경영을 통해 지속가능한 미래를 만들어갑니다.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-80 lg:h-full">
              <Image
                src="/images/esg-management.jpg"
                alt="ESG 경영"
                className="rounded-lg object-cover"
                fill
              />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-primary mb-6">ESG 경영</h2>
              <p className="text-gray-700 mb-4">
                유진파워시스템은 ESG 경영을 기업의 핵심 가치로 삼고 있습니다. 
                친환경 제품과 서비스 개발, 사회적 책임 이행, 투명한 지배구조 확립을 
                통해 모든 이해관계자들과 함께 지속가능한 성장을 추구합니다.
              </p>
              <p className="text-gray-700 mb-4">
                우리의 ESG 전략은 단순한 선언이 아닌 구체적인 목표와 실행 계획을 
                바탕으로 합니다. 온실가스 배출량 감소, 자원 사용 효율화, 사회적 가치 
                창출, 윤리경영 강화 등 다양한 영역에서 실질적인 성과를 내고 있습니다.
              </p>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <h3 className="font-bold text-green-600 mb-2">환경</h3>
                  <p className="text-sm text-gray-600">친환경 기술 개발</p>
                </div>
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <h3 className="font-bold text-blue-600 mb-2">사회</h3>
                  <p className="text-sm text-gray-600">사회적 가치 창출</p>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <h3 className="font-bold text-purple-600 mb-2">지배구조</h3>
                  <p className="text-sm text-gray-600">투명한 경영</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 환경·안전 활동 섹션 */}
      <section id="environment" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">환경·안전 활동</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <title>탄소배출 감소</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">탄소배출 감소</h3>
              <p className="text-gray-600">
                2030년까지 탄소 배출량 50% 감소를 목표로 친환경 에너지 사용 
                및 에너지 효율화 기술을 적극 도입하고 있습니다.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <title>자원 재활용</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">자원 재활용</h3>
              <p className="text-gray-600">
                생산 과정에서 발생하는 폐기물을 최소화하고, 제품 수명주기 
                전반에 걸쳐 자원의 재활용과 재사용을 추진합니다.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <title>산업안전</title>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">산업안전</h3>
              <p className="text-gray-600">
                엄격한 안전관리 시스템을 구축하여 무사고 사업장을 위한 
                안전문화를 조성하고 임직원의 건강과 안전을 보장합니다.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-primary">환경 성과</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-3xl font-bold text-gray-800">30%</p>
                <p className="text-gray-600">에너지 사용량 감소</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-3xl font-bold text-gray-800">40%</p>
                <p className="text-gray-600">폐기물 재활용률</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <p className="text-3xl font-bold text-gray-800">25%</p>
                <p className="text-gray-600">용수 사용량 절감</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* 사회공헌 섹션 */}
      <section id="social" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-primary mb-12 text-center">사회공헌</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">지역사회와 함께</h3>
              <p className="text-gray-700 mb-4">
                유진파워시스템은 기업의 이익을 사회에 환원하고 지역사회와 함께 
                성장하기 위한 다양한 사회공헌 활동을 진행하고 있습니다.
              </p>
              <p className="text-gray-700 mb-6">
                특히 에너지 취약계층을 위한 지원사업, 청소년 교육 프로그램, 
                환경보호 캠페인 등을 통해 더 나은 사회를 만들어가는데 기여하고 있습니다.
              </p>
              
              <h4 className="font-bold text-lg mb-3">주요 활동</h4>
              <ul className="list-disc pl-5 text-gray-600 space-y-2">
                <li>에너지 취약계층 지원 프로그램</li>
                <li>청소년 과학교육 및 장학사업</li>
                <li>지역사회 환경정화 활동</li>
                <li>임직원 자원봉사 활동</li>
                <li>스타트업 육성 및 기술 멘토링</li>
              </ul>
            </div>
            <div className="relative h-80 lg:h-full">
              <Image
                src="/images/social-contribution.jpg"
                alt="사회공헌 활동"
                className="rounded-lg object-cover"
                fill
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-xl font-bold mb-6">사회공헌 활동 참여 안내</h3>
            <p className="max-w-2xl mx-auto text-gray-600 mb-8">
              유진파워시스템의 사회공헌 활동에 참여하거나 협력을 원하시는 분들은 
              아래 이메일로 문의해 주시기 바랍니다.
            </p>
            <a 
              href="mailto:csr@yujinpower.com" 
              className="inline-block bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-md font-medium transition-colors"
            >
              문의하기
            </a>
          </div>
        </div>
      </section>
    </div>
  );
} 