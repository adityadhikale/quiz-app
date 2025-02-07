import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Question from "./Question";
import Score from "./Score";
import { QuizData } from "../types";
import LoadingBar, { LoadingBarRef } from "react-top-loading-bar";

const Quiz = () => {
  const [quizData, setQuizData] = useState<QuizData | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showScore, setShowScore] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const loadingBarRef = useRef<LoadingBarRef | null>(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      if (loadingBarRef.current) {
        loadingBarRef.current.continuousStart();
      }

      try {
        const response = await axios.get<QuizData>(
          "https://api.allorigins.win/raw?url=https://api.jsonserve.com/Uw5CrX"
        );
        setQuizData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quiz data:", error);
        setLoading(false);
      } finally {
        if (loadingBarRef.current) {
          loadingBarRef.current.complete();
        }
      }
    };

    fetchQuizData();
  }, []);

  const handleAnswerClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (quizData && nextQuestion < quizData.questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowScore(false);
  };

  if (loading) {
    return (
      <>
        <LoadingBar color="#3b82f6" ref={loadingBarRef} />
        <div className="flex justify-center items-center h-screen">
          <p className="text-xl">Loading...</p>
        </div>
      </>
    );
  }

  if (showScore && quizData) {
    return <Score score={score} totalQuestions={quizData.questions.length} onRestart={handleRestart} questions={quizData.questions} />;
  }

  if (!quizData) {
    return (
      <>
        <LoadingBar color="#3b82f6" ref={loadingBarRef} />
        <div className="flex justify-center items-center h-screen text-xl">No quiz data available.</div>
      </>
    );
  }

  return (
    <>
      <LoadingBar color="#3b82f6" ref={loadingBarRef} />
      <Question
        question={quizData.questions[currentQuestion]}
        questionNumber={currentQuestion + 1}
        totalQuestions={quizData.questions.length}
        handleAnswerClick={handleAnswerClick}
      />
    </>
  );
};

export default Quiz;
