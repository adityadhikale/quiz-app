
import { Question } from "../types";

interface CorrectAnswersProps {
  questions: Question[];
}

const CorrectAnswers = ({ questions }: CorrectAnswersProps) => {
  return (
    <div className="mt-6 bg-white text-gray-800 p-6 rounded-lg shadow-lg max-w-xl w-full h-96 overflow-y-auto">
      <h2 className="text-2xl font-bold mb-4">Correct Answers</h2>
      {questions.map((question, index) => (
        <div key={index} className="mb-4 p-4 border-b border-gray-300">
          <h3 className="text-xl font-semibold">{question.description}</h3>
          <ul className="mt-2">
            {question.options.map((option) => (
              <li
                key={option.id}
                className={`${option.is_correct
                  ? "text-green-600 font-bold"
                  : option.unanswered
                    ? "text-gray-600"
                    : "text-red-600"
                  }`}
              >
                {option.description}
                {option.is_correct && (
                  <span className="text-green-500"> (Correct)</span>
                )}
                {!option.is_correct && !option.unanswered && (
                  <span className="text-red-500"> (Incorrect)</span>
                )}
                {option.unanswered && (
                  <span className="text-gray-400"> (You didn't select this)</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CorrectAnswers;
