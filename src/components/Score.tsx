import React, { useState } from "react";
import Confetti from "react-confetti";
import { Question } from "../types";
import CorrectAnswers from "./CorrectAnswers";

interface ScoreProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  questions: Question[];
}

const Score = ({ score, totalQuestions, onRestart, questions }: ScoreProps) => {
  const [confettiVisible, setConfettiVisible] = useState(false);
  const [showAnswers, setShowAnswers] = useState(false);

  React.useEffect(() => {
    if (score > 0) {
      setConfettiVisible(true);
      setTimeout(() => setConfettiVisible(false), 5000);
    }
  }, [score]);

  const isPerfectScore = score === totalQuestions;

  const handleViewAnswers = () => {
    setShowAnswers(true);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-blue-400 to-purple-500 text-white">
      {confettiVisible && <Confetti />}
      <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-lg text-center max-w-sm w-full">
        <h2 className="text-3xl font-bold mb-4">
          {isPerfectScore ? "🏆 Perfect Score! 🎉" : "Quiz Completed!"}
        </h2>
        <p className="text-xl mb-4">
          Your Score: <span className="font-bold text-blue-600">{score}</span> / {totalQuestions}
        </p>
        {isPerfectScore ? (
          <p className="text-green-600 font-semibold">You nailed every question! 🔥</p>
        ) : (
          <p className="text-gray-600">Great effort! Try again to improve. 💪</p>
        )}

        {!showAnswers && (
          <button
            onClick={handleViewAnswers}
            className="mt-6 bg-yellow-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-yellow-600 transition duration-300"
          >
            View Correct Answers 📚
          </button>
        )}
        <button
          onClick={onRestart}
          className="mt-4 bg-blue-500 text-white py-2 px-6 rounded-lg text-lg hover:bg-blue-600 transition duration-300"
        >
          Restart Quiz 🔄
        </button>
      </div>
      {showAnswers && <CorrectAnswers questions={questions} />}
    </div>
  );
};

export default Score;
