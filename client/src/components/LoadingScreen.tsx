import React from 'react';
import AdSenseAd from './ads/AdSenseAd';

const LoadingScreen: React.FC = () => {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="max-w-md w-full text-center">
        <div className="bg-white rounded-2xl card-shadow p-8 fade-in">
          <div className="mb-8">
            <div className="loading-spinner mx-auto mb-6"></div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              결과 분석 중...
            </h2>
            <p className="text-gray-600">
              당신의 성격 유형을 분석하고 있습니다
            </p>
          </div>

          <div className="space-y-3 text-left">
            <div className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 animate-pulse"></div>
              답변 데이터 처리 중...
            </div>
            <div className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
              성격 유형 분석 중...
            </div>
            <div className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
              맞춤형 결과 생성 중...
            </div>
          </div>
        </div>

        {/* 로딩 화면 광고 */}
        <div className="mt-6">
          <AdSenseAd 
            adSlot="LOADING_SCREEN"
            format="horizontal"
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;