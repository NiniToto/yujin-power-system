import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '회사소개 - 유진파워시스템',
  description: '유진파워시스템의 CEO 메시지, 연혁, 비전/미션에 대한 정보를 제공합니다.',
};

export default function CompanyPage() {
  return (
    <div className="pt-24">
      {/* CEO 메시지 섹션 */}
      <section id="ceo" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            CEO 메시지
          </h1>
          <div className="max-w-4xl mx-auto">
            <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
              <p className="mb-4">
                안녕하십니까, 유진파워시스템 대표이사 홍길동입니다.
              </p>
              <p className="mb-4">
                유진파워시스템은 혁신적인 전력 솔루션을 통해 지속가능한 미래를 만들어가는 기업입니다. 
                신재생 에너지와 첨단 전력 기술을 통해 우리 사회의 에너지 효율을 높이고, 탄소배출을 줄이는데 기여하고 있습니다.
              </p>
              <p className="mb-4">
                우리는 단순한 제품 제공을 넘어 고객의 니즈에 맞는 최적의 솔루션을 제안하고, 
                지속적인 기술 혁신을 통해 글로벌 시장에서 경쟁력을 갖춘 기업으로 성장하고 있습니다.
              </p>
              <p>
                앞으로도 유진파워시스템은 기술 혁신과 환경 보호, 사회적 책임을 다하는 기업으로서 
                여러분과 함께 더 밝은 미래를 만들어 나가겠습니다. 감사합니다.
              </p>
            </blockquote>
            <div className="flex justify-end">
              <div className="text-right">
                <p className="font-bold text-lg">홍길동</p>
                <p className="text-sm text-gray-600">유진파워시스템 대표이사</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 연혁 섹션 */}
      <section id="history" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            연혁
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex">
                <div className="w-24 md:w-32 font-bold text-primary">2023</div>
                <div className="flex-1">
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <h3 className="font-bold mb-2">12월</h3>
                    <p>차세대 전력관리시스템 개발 완료 및 출시</p>
                  </div>
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <h3 className="font-bold mb-2">05월</h3>
                    <p>국내 최대 규모 ESS 시스템 구축 계약 체결</p>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-24 md:w-32 font-bold text-primary">2022</div>
                <div className="flex-1">
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <h3 className="font-bold mb-2">09월</h3>
                    <p>유럽 지사 설립 (독일 프랑크푸르트)</p>
                  </div>
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <h3 className="font-bold mb-2">03월</h3>
                    <p>산업통상자원부 혁신기업 인증 획득</p>
                  </div>
                </div>
              </div>
              
              <div className="flex">
                <div className="w-24 md:w-32 font-bold text-primary">2020</div>
                <div className="flex-1">
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <h3 className="font-bold mb-2">11월</h3>
                    <p>신재생에너지 분야 특허 3건 취득</p>
                  </div>
                  <div className="mb-4 pb-4 border-b border-gray-200">
                    <h3 className="font-bold mb-2">02월</h3>
                    <p>유진파워시스템 법인 설립</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 비전/미션 섹션 */}
      <section id="vision" className="py-16 bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12 text-center">
            비전 / 미션
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="mb-12 text-center">
              <h3 className="text-2xl font-bold mb-6">비전</h3>
              <p className="text-xl">
                "혁신적인 전력 기술로 지속가능한 미래를 선도하는 글로벌 기업"
              </p>
            </div>
            
            <div className="mb-12 text-center">
              <h3 className="text-2xl font-bold mb-6">미션</h3>
              <p className="text-xl">
                "에너지 효율화와 환경 보호를 통해 사회적 가치를 창출합니다"
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h4 className="font-bold text-lg mb-4 text-primary">기술 혁신</h4>
                <p>지속적인 R&D 투자와 혁신적인 기술 개발</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h4 className="font-bold text-lg mb-4 text-primary">환경 보호</h4>
                <p>친환경 제품과 서비스를 통한 지구 환경 보호</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h4 className="font-bold text-lg mb-4 text-primary">사회적 책임</h4>
                <p>지역사회와 함께 성장하는 기업 시민</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 