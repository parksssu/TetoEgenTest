import React from 'react';
import { PersonalityResult } from '../App';
import AdSenseAd from '../components/ads/AdSenseAd';

interface ResultPageProps {
  result: PersonalityResult;
  onRestart: () => void;
}

const ResultPage: React.FC<ResultPageProps> = ({ result, onRestart }) => {
  const shareText = `나의 성격 유형은 ${result.type} - ${result.title}입니다! 성격 테스트 해보세요.`;
  const shareUrl = window.location.href;

  const handleShare = (platform: 'twitter' | 'facebook' | 'kakao') => {
    const encodedText = encodeURIComponent(shareText);
    const encodedUrl = encodeURIComponent(shareUrl);

    switch (platform) {
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`);
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}&quote=${encodedText}`);
        break;
      case 'kakao':
        // 카카오톡 공유는 실제 구현 시 카카오 SDK 필요
        alert('카카오톡 공유 기능은 준비 중입니다.');
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 결과 헤더 */}
        <div className="bg-white rounded-2xl card-shadow p-8 mb-6 text-center fade-in">
          <div className="mb-6">
            <div className="text-6xl mb-4">🎯</div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {result.type}
            </h1>
            <h2 className="text-2xl text-purple-600 font-semibold mb-4">
              {result.title}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto">
              {result.description}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => handleShare('twitter')}
              className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              🐦 트위터 공유
            </button>
            <button
              onClick={() => handleShare('facebook')}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              📘 페이스북 공유
            </button>
            <button
              onClick={() => handleShare('kakao')}
              className="bg-yellow-400 hover:bg-yellow-500 text-gray-800 px-6 py-2 rounded-lg font-medium transition-colors"
            >
              💬 카카오톡 공유
            </button>
          </div>
        </div>

        {/* 성격 특성 그래프 */}
        <div className="bg-white rounded-2xl card-shadow p-8 mb-6 fade-in">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            성격 특성 분석
          </h3>
          
          <div className="space-y-6">
            {[
              { name: '외향성', value: result.traits.extraversion, opposite: '내향성' },
              { name: '감각', value: result.traits.sensing, opposite: '직관' },
              { name: '사고', value: result.traits.thinking, opposite: '감정' },
              { name: '판단', value: result.traits.judging, opposite: '인식' }
            ].map((trait) => (
              <div key={trait.name} className="space-y-2">
                <div className="flex justify-between text-sm font-medium text-gray-700">
                  <span>{trait.opposite}</span>
                  <span>{trait.value}%</span>
                  <span>{trait.name}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div 
                    className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${trait.value}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 광고 - 성격 설명 후 */}
        <div className="mb-6">
          <AdSenseAd 
            adSlot="RESULT_DESCRIPTION"
            format="square"
            className="mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* 장점 */}
          <div className="bg-white rounded-2xl card-shadow p-6 fade-in">
            <h3 className="text-xl font-bold text-green-600 mb-4 flex items-center">
              <span className="text-2xl mr-2">✅</span>
              주요 장점
            </h3>
            <ul className="space-y-2">
              {result.strengths.map((strength, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  {strength}
                </li>
              ))}
            </ul>
          </div>

          {/* 단점 */}
          <div className="bg-white rounded-2xl card-shadow p-6 fade-in">
            <h3 className="text-xl font-bold text-orange-600 mb-4 flex items-center">
              <span className="text-2xl mr-2">⚠️</span>
              개선할 점
            </h3>
            <ul className="space-y-2">
              {result.weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-center text-gray-700">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  {weakness}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 추천 직업 */}
        <div className="bg-white rounded-2xl card-shadow p-6 mb-6 fade-in">
          <h3 className="text-xl font-bold text-blue-600 mb-4 flex items-center">
            <span className="text-2xl mr-2">💼</span>
            추천 직업
          </h3>
          <div className="flex flex-wrap gap-3">
            {result.careers.map((career, index) => (
              <span 
                key={index}
                className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-medium"
              >
                {career}
              </span>
            ))}
          </div>
        </div>

        {/* 하단 광고 */}
        <div className="mb-6">
          <AdSenseAd 
            adSlot="RESULT_BOTTOM"
            format="horizontal"
            className="w-full"
          />
        </div>

        {/* 다시 테스트하기 버튼 */}
        <div className="text-center">
          <button
            onClick={onRestart}
            className="btn-primary text-white px-8 py-4 rounded-xl font-semibold text-lg"
          >
            🔄 다시 테스트하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultPage;