interface HomeProps {
  onStartQuiz: () => void;
}

const Home = ({ onStartQuiz }: HomeProps) => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100 text-center p-6">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Welcome to the Quiz App!</h1>
      <p className="text-lg text-gray-700 mb-6">
        Test your knowledge and challenge yourself with exciting questions.
      </p>
      <button
        onClick={onStartQuiz}
        className="bg-blue-500 text-white text-lg py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Start Quiz
      </button>
    </div>
  );
};

export default Home;
