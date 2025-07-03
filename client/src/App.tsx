import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import LoadingScreen from './components/LoadingScreen';

export type PersonalityType = 'INTJ' | 'ENFP' | 'ISFJ' | 'ESTP' | 'INFP' | 'ENTJ' | 'ISFP' | 'ENTP';

export interface QuizAnswer {
  questionId: number;
  answer: number; // 1-5 scale
}

export interface PersonalityResult {
  type: PersonalityType;
  title: string;
  description: string;
  traits: {
    extraversion: number;
    sensing: number;
    thinking: number;
    judging: number;
  };
  strengths: string[];
  weaknesses: string[];
  careers: string[];
}

function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'quiz' | 'loading' | 'result'>('home');
  const [selectedGender, setSelectedGender] = useState<'male' | 'female' | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<QuizAnswer[]>([]);
  const [personalityResult, setPersonalityResult] = useState<PersonalityResult | null>(null);

  const handleGenderSelect = (gender: 'male' | 'female') => {
    setSelectedGender(gender);
    setCurrentPage('quiz');
  };

  const handleQuizComplete = (answers: QuizAnswer[]) => {
    setQuizAnswers(answers);
    setCurrentPage('loading');
    
    // 3초 후 결과 페이지로 이동
    setTimeout(() => {
      const result = calculatePersonalityType(answers);
      setPersonalityResult(result);
      setCurrentPage('result');
    }, 3000);
  };

  const handleRestart = () => {
    setCurrentPage('home');
    setSelectedGender(null);
    setQuizAnswers([]);
    setPersonalityResult(null);
  };

  const calculatePersonalityType = (answers: QuizAnswer[]): PersonalityResult => {
    // 간단한 성격 유형 계산 로직
    const scores = {
      extraversion: 0,
      sensing: 0,
      thinking: 0,
      judging: 0
    };

    // 답변을 기반으로 점수 계산 (실제로는 더 복잡한 로직이 필요)
    answers.forEach((answer, index) => {
      const score = answer.answer - 3; // -2 to 2 range
      
      if (index % 4 === 0) scores.extraversion += score;
      else if (index % 4 === 1) scores.sensing += score;
      else if (index % 4 === 2) scores.thinking += score;
      else scores.judging += score;
    });

    // 성격 유형 결정
    const type = `${scores.extraversion > 0 ? 'E' : 'I'}${scores.sensing > 0 ? 'S' : 'N'}${scores.thinking > 0 ? 'T' : 'F'}${scores.judging > 0 ? 'J' : 'P'}` as PersonalityType;

    // 결과 데이터 (예시)
    const personalityData: Record<PersonalityType, Omit<PersonalityResult, 'type' | 'traits'>> = {
      INTJ: {
        title: '건축가',
        description: '상상력이 풍부하고 전략적인 사고를 하는 성격으로, 모든 일에 계획을 세워 진행합니다.',
        strengths: ['독립적', '결단력 있음', '창의적', '전략적 사고'],
        weaknesses: ['고집이 셈', '감정 표현 부족', '완벽주의', '비판적'],
        careers: ['과학자', '엔지니어', '건축가', '작가', '컨설턴트']
      },
      ENFP: {
        title: '활동가',
        description: '열정적이고 창의적인 성격으로, 다른 사람들에게 영감을 주는 것을 좋아합니다.',
        strengths: ['열정적', '창의적', '사교적', '유연함'],
        weaknesses: ['집중력 부족', '스트레스에 민감', '비현실적', '감정 기복'],
        careers: ['상담사', '교사', '마케터', '예술가', '저널리스트']
      },
      ISFJ: {
        title: '수호자',
        description: '따뜻하고 책임감 있는 성격으로, 다른 사람을 돕는 것에서 보람을 느낍니다.',
        strengths: ['배려심 많음', '책임감 강함', '실용적', '인내심'],
        weaknesses: ['자기주장 부족', '변화 거부', '과도한 희생', '스트레스 누적'],
        careers: ['간호사', '교사', '상담사', '사회복지사', '의료진']
      },
      ESTP: {
        title: '모험가',
        description: '활동적이고 현실적인 성격으로, 새로운 경험을 추구하며 순간을 즐깁니다.',
        strengths: ['적응력 좋음', '실용적', '사교적', '문제해결 능력'],
        weaknesses: ['계획성 부족', '충동적', '집중력 부족', '장기적 사고 부족'],
        careers: ['영업직', '운동선수', '응급의료진', '기업가', '엔터테이너']
      },
      INFP: {
        title: '중재자',
        description: '이상주의적이고 창의적인 성격으로, 자신만의 가치관을 중요하게 생각합니다.',
        strengths: ['창의적', '공감능력', '유연함', '개방적'],
        weaknesses: ['현실성 부족', '비판에 민감', '우유부단', '완벽주의'],
        careers: ['작가', '상담사', '예술가', '심리학자', '사회활동가']
      },
      ENTJ: {
        title: '통솔자',
        description: '타고난 리더로서 목표 달성을 위해 체계적으로 계획하고 실행합니다.',
        strengths: ['리더십', '결단력', '효율성', '전략적 사고'],
        weaknesses: ['고집이 셈', '감정 무시', '성급함', '비판적'],
        careers: ['CEO', '관리자', '변호사', '컨설턴트', '정치인']
      },
      ISFP: {
        title: '모험가',
        description: '온화하고 예술적 감각이 뛰어난 성격으로, 조화로운 환경을 선호합니다.',
        strengths: ['예술적 감각', '유연함', '배려심', '개방적'],
        weaknesses: ['자기주장 부족', '계획성 부족', '비판에 민감', '스트레스 회피'],
        careers: ['예술가', '디자이너', '상담사', '수의사', '요리사']
      },
      ENTP: {
        title: '변론가',
        description: '창의적이고 호기심이 많은 성격으로, 새로운 아이디어를 탐구하는 것을 좋아합니다.',
        strengths: ['창의적', '적응력', '열정적', '논리적'],
        weaknesses: ['집중력 부족', '루틴 싫어함', '감정 무시', '완료 어려움'],
        careers: ['기업가', '발명가', '마케터', '컨설턴트', '변호사']
      }
    };

    return {
      type,
      traits: {
        extraversion: Math.max(0, Math.min(100, (scores.extraversion + 10) * 5)),
        sensing: Math.max(0, Math.min(100, (scores.sensing + 10) * 5)),
        thinking: Math.max(0, Math.min(100, (scores.thinking + 10) * 5)),
        judging: Math.max(0, Math.min(100, (scores.judging + 10) * 5))
      },
      ...personalityData[type]
    };
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPage === 'home' && (
        <HomePage onGenderSelect={handleGenderSelect} />
      )}
      {currentPage === 'quiz' && (
        <QuizPage 
          gender={selectedGender!} 
          onComplete={handleQuizComplete}
          onBack={() => setCurrentPage('home')}
        />
      )}
      {currentPage === 'loading' && (
        <LoadingScreen />
      )}
      {currentPage === 'result' && personalityResult && (
        <ResultPage 
          result={personalityResult}
          onRestart={handleRestart}
        />
      )}
    </div>
  );
}

export default App;