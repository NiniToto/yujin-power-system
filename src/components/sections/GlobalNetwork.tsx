'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionTitle from '@/components/ui/SectionTitle';
import { useTranslation } from 'react-i18next';

type RegionType = {
  id: string;
  name: string;
  nameKo: string;
  locations: {
    name: string;
    address: string;
    type: 'headquarter' | 'branch' | 'factory' | 'subsidiary';
    contact?: string;
  }[];
};

const GlobalNetwork = () => {
  const { t, i18n } = useTranslation();
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);
  const [isHovering, setIsHovering] = useState<string | null>(null);

  const regions: RegionType[] = [
    {
      id: 'korea',
      name: 'Korea',
      nameKo: '대한민국',
      locations: [
        {
          name: '대한전선 본사',
          address: '서울특별시 서초구 양재대로 246 (서초동, 송인빌딩)',
          type: 'headquarter',
          contact: 'Tel: +82-2-3484-9000',
        },
        {
          name: '당진공장',
          address: '충청남도 당진시 석문방조제로 624',
          type: 'factory',
          contact: 'Tel: +82-41-351-8114',
        },
      ],
    },
    {
      id: 'america',
      name: 'America',
      nameKo: '미주',
      locations: [
        {
          name: 'Taihan USA',
          address: '2320 Peachtree Rd N Unit 3, Atlanta, GA 30338, USA',
          type: 'branch',
        },
      ],
    },
    {
      id: 'asia',
      name: 'Asia',
      nameKo: '아시아',
      locations: [
        {
          name: 'Taihan Asia',
          address: '23/F, Tower One, Lippo Centre, 89 Queensway, Admiralty, Hong Kong',
          type: 'subsidiary',
        },
      ],
    },
    {
      id: 'oceania',
      name: 'Oceania',
      nameKo: '오세아니아',
      locations: [
        {
          name: 'Taihan Australia',
          address: 'Level 1, 181 Miller Street, North Sydney NSW 2060, Australia',
          type: 'subsidiary',
        },
      ],
    },
    {
      id: 'middle',
      name: 'Middle East Asia',
      nameKo: '중동',
      locations: [
        {
          name: 'Taihan Gulf Trading',
          address: 'Jumeirah Lake Towers, Dubai, UAE',
          type: 'subsidiary',
        },
      ],
    },
    {
      id: 'europe',
      name: 'Europe',
      nameKo: '유럽',
      locations: [
        {
          name: 'Taihan Europe',
          address: 'Schiphol Boulevard 169, 1118 BG Schiphol, Netherlands',
          type: 'branch',
        },
      ],
    },
    {
      id: 'africa',
      name: 'Africa',
      nameKo: '아프리카',
      locations: [
        {
          name: 'Taihan Africa',
          address: 'Johannesburg, South Africa',
          type: 'subsidiary',
        },
      ],
    },
  ];

  const getLocationType = (type: string) => {
    switch (type) {
      case 'headquarter':
        return t('본사');
      case 'branch':
        return t('지사');
      case 'factory':
        return t('공장');
      case 'subsidiary':
        return t('자회사');
      default:
        return type;
    }
  };

  const handleRegionClick = (regionId: string) => {
    setSelectedRegion(regionId === selectedRegion ? null : regionId);
  };

  return (
    <section className="py-16 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 text-white">{t('글로벌 네트워크')}</h2>
          <div className="max-w-3xl mx-auto mt-6">
            <p className="text-xl font-semibold leading-tight mb-4 text-white">
              {t('전 세계 모든 고객의 요구와')} <br className="hidden md:inline" />
              {t('시장의 변화에')} <br className="hidden md:inline" />
              {t('신속하게')} <br className="hidden md:inline" />
              {t('대응하고 있습니다')}
            </p>
          </div>
        </div>
        
        <div className="relative mt-12">
          <div className="relative w-full h-[500px] bg-black rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/asset/images/world-map.png"
                alt="World Map"
                fill
                className="object-contain"
                priority
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
              
              <div className="text-white text-opacity-10 text-7xl font-bold absolute">
                GLOBAL NETWORK
              </div>
            </div>
            
            <div className="absolute inset-0">
              {regions.map((region) => (
                <motion.div
                  key={region.id}
                  className={`absolute cursor-pointer transition-all duration-300
                    ${region.id === 'korea' ? 'top-[28%] right-[24%] w-[8%] h-[8%]' : ''}
                    ${region.id === 'america' ? 'top-[30%] left-[25%] w-[15%] h-[25%]' : ''}
                    ${region.id === 'asia' ? 'top-[32%] right-[30%] w-[15%] h-[20%]' : ''}
                    ${region.id === 'oceania' ? 'top-[65%] right-[20%] w-[10%] h-[10%]' : ''}
                    ${region.id === 'middle' ? 'top-[38%] left-[52%] w-[10%] h-[15%]' : ''}
                    ${region.id === 'europe' ? 'top-[22%] left-[48%] w-[12%] h-[15%]' : ''}
                    ${region.id === 'africa' ? 'top-[42%] left-[45%] w-[12%] h-[25%]' : ''}
                  `}
                  onMouseEnter={() => setIsHovering(region.id)}
                  onMouseLeave={() => setIsHovering(null)}
                  onClick={() => handleRegionClick(region.id)}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div 
                    className={`absolute inset-0 rounded-full transition-all duration-300`}
                    animate={{ 
                      backgroundColor: isHovering === region.id || selectedRegion === region.id ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0)',
                      borderColor: isHovering === region.id || selectedRegion === region.id ? 'rgba(255, 255, 255, 0.5)' : 'rgba(255, 255, 255, 0)',
                      borderWidth: isHovering === region.id || selectedRegion === region.id ? '2px' : '0px'
                    }}
                  ></motion.div>
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-center"
                    animate={{ 
                      color: isHovering === region.id || selectedRegion === region.id ? '#ffffff' : 'rgba(255, 255, 255, 0.7)',
                      fontWeight: isHovering === region.id || selectedRegion === region.id ? 700 : 500,
                      scale: isHovering === region.id || selectedRegion === region.id ? 1.1 : 1
                    }}
                  >
                    <span className="px-2 py-1 rounded-md text-white">{region.name}</span>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {selectedRegion && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-8 bg-gray-900 p-6 rounded-lg shadow-md text-white"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">
                {regions.find(r => r.id === selectedRegion)?.name} - {regions.find(r => r.id === selectedRegion)?.nameKo}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {regions.find(r => r.id === selectedRegion)?.locations.map((location, index) => (
                  <div key={index} className="p-4 border border-gray-700 rounded-lg">
                    <h4 className="font-bold text-lg mb-1">{location.name}</h4>
                    <p className="text-sm text-gray-300 mb-1">{getLocationType(location.type)}</p>
                    <p className="text-sm text-gray-400 mb-2">{location.address}</p>
                    {location.contact && (
                      <p className="text-sm text-gray-400">{location.contact}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork; 