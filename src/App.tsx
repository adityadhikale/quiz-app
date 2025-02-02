import { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);

  return (
    <div>
      {quizStarted ? <Quiz /> : <Home onStartQuiz={() => setQuizStarted(true)} />}
    </div>
  );
};

export default App;
