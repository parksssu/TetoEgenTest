import React, { useState } from 'react';
import { QuizAnswer } from '../App';

interface QuizPageProps {
  gender: 'male' | 'female';
  onComplete: (answers: QuizAnswer[]) => void;
  onBack: () => void;
}

const questions = [
  "새로운 사람들과 만나는 것이 즐겁다",
  "계획을 세우고 그대로 실행하는 것을 선호한다",
  "감정보다는 논리적으로 판단한다",
  "큰 그림보다는 세부사항에 집중한다",
  "파티에서 활기차게 어울린다",
  "마감일을 잘 지킨다",
  "비판을 받아도 객관적으로 받아들인다",
  "현실적이고 실용적인 해결책을 선호한다",
  "혼자 있는 시간보다 사람들과 함께 있는 시간이 좋다",
  "일정이 정해져 있는 것을 좋아한다",
  "다른 사람의 감정보다 사실에 집중한다",
  "상상력보다는 경험을 중시한다",
  "대화할 때 먼저 말을 꺼낸다",
  "결정을 빨리 내린다",
  "갈등 상황에서 논리적으로 접근한다",
  "구체적이고 명확한 정보를 선호한다",
  "새로운 환경에 쉽게 적응한다",
  "규칙과 절차를 잘 따른다",
  "개인적인 감정보다 객관적 기준을 중시한다",
  "검증된 방법을 선호한다"
];

const QuizPage: React.FC<QuizPageProps> = ({ gender, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);

  const handleAnswer = (answer: number) => {
    const newAnswer: QuizAnswer = {
      questionId: currentQuestion,
      answer
    };

    const newAnswers = [...answers, newAnswer];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(newAnswers);
    }
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* 헤더 */}
        <div className="bg-white rounded-2xl card-shadow p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={onBack}
              className="text-gray-600 hover:text-gray-800 font-medium"
            >
              ← 뒤로가기
            </button>
            <span className="text-sm text-gray-500">
              {currentQuestion + 1} / {questions.length}
            </span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full progress-bar"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* 질문 카드 */}
        <div className="bg-white rounded-2xl card-shadow p-8 fade-in">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              질문 {currentQuestion + 1}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              {questions[currentQuestion]}
            </p>
          </div>

          <div className="space-y-3">
            {[
              { value: 5, text: "매우 그렇다", color: "bg-green-500 hover:bg-green-600" },
              { value: 4, text: "그렇다", color: "bg-blue-500 hover:bg-blue-600" },
              { value: 3, text: "보통이다", color: "bg-gray-500 hover:bg-gray-600" },
              { value: 2, text: "그렇지 않다", color: "bg-orange-500 hover:bg-orange-600" },
              { value: 1, text: "전혀 그렇지 않다", color: "bg-red-500 hover:bg-red-600" }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className={`w-full ${option.color} text-white py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 hover:transform hover:scale-105`}
              >
                {option.text}
              </button>
            ))}
          </div>
        </div>

        {/* 중간 광고 (10번째 질문 후) */}
        {currentQuestion === 10 && (
          <div className="mt-6 bg-white rounded-2xl card-shadow p-4">
            <div className="text-center text-sm text-gray-500 mb-2">광고</div>
            <div className="bg-gray-100 h-24 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">AdSense 광고 영역</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default QuizPage;