import { Option } from '../types';

interface AnswerOptionsProps {
  options: Option[];
  handleAnswerClick: (isCorrect: boolean) => void;
}

const AnswerOptions = ({ options, handleAnswerClick }: AnswerOptionsProps) => {
  return (
    <div className="space-y-4">
      {options.map((option) => (
        <button
          key={option.id}
          onClick={() => handleAnswerClick(option.is_correct)}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          {option.description}
        </button>
      ))}
    </div>
  );
};

export default AnswerOptions;