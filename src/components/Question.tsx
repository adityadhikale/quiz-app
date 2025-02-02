import AnswerOptions from './AnswerOptions';
import { Question as QuestionType } from '../types';

interface QuestionProps {
  question: QuestionType;
  questionNumber: number;
  totalQuestions: number;
  handleAnswerClick: (isCorrect: boolean) => void;
}

const Question = ({ question, questionNumber, totalQuestions, handleAnswerClick }: QuestionProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Quiz App</h1>
        <div className="mb-6">
          <h2 className="text-xl font-semibold">
            Question {questionNumber} of {totalQuestions}
          </h2>
          <p className="text-gray-700">{question.description}</p>
        </div>
        <AnswerOptions options={question.options} handleAnswerClick={handleAnswerClick} />
      </div>
    </div>
  );
};

export default Question;