import React from 'react';
import AdSenseAd from '../components/ads/AdSenseAd';

interface HomePageProps {
  onGenderSelect: (gender: 'male' | 'female') => void;
}

const HomePage: React.FC<HomePageProps> = ({ onGenderSelect }) => {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl card-shadow p-8 text-center fade-in">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              성격 테스트
            </h1>
            <p className="text-gray-600 text-lg">
              간단한 질문으로 나의 성격 유형을 알아보세요
            </p>
          </div>

          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-700 mb-6">
              성별을 선택해주세요
            </h2>
            
            <div className="space-y-4">
              <button
                onClick={() => onGenderSelect('male')}
                className="w-full btn-primary text-white py-4 px-6 rounded-xl font-semibold text-lg"
              >
                👨 남성
              </button>
              
              <button
                onClick={() => onGenderSelect('female')}
                className="w-full btn-primary text-white py-4 px-6 rounded-xl font-semibold text-lg"
              >
                👩 여성
              </button>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p>• 총 20개의 질문</p>
            <p>• 약 3-5분 소요</p>
            <p>• 정확한 결과를 위해 솔직하게 답변해주세요</p>
          </div>
        </div>

        {/* 홈페이지 배너 광고 */}
        <div className="mt-6">
          <AdSenseAd 
            adSlot="HOME_BANNER"
            format="horizontal"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;