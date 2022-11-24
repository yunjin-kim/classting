import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useQuery } from '@tanstack/react-query';

import { getCorrect, getWrong, getStartTime, getEndTime } from 'redux/quiz/quizSolve';

import { requestQuiz } from 'apis/quiz';
import { QuizType } from 'types/quiz';

const useQuiz = () => {
  const [quizCount, setQuizCount] = useState(0);
  const [showResultModal, setShowResultModal] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(true);

  const quizSolveDispatch = useDispatch();

  const { data: quizzes } = useQuery(
    ['quiz'],
    () => {
      return requestQuiz(10);
    },
    {
      onSuccess: () => {
        const date = new Date().getTime();
        quizSolveDispatch(getStartTime(date));
      },
    },
  );

  const handleClickQuizAnswer = useCallback(
    (children: string, value: QuizType) => () => {
      setShowResultModal((prev) => !prev);
      if (quizzes?.results[quizCount].correct_answer === children) {
        setIsCorrectAnswer(true);
        quizSolveDispatch(getCorrect(value));
      } else {
        setIsCorrectAnswer(false);
        quizSolveDispatch(getWrong(value));
      }
    },
    [],
  );

  const handleClickNextQuiz = useCallback(() => {
    setQuizCount((prev) => (prev += 1));
    setShowResultModal((prev) => !prev);
  }, []);

  useEffect(() => {
    if (quizzes?.results.length === quizCount) {
      const date = new Date().getTime();
      quizSolveDispatch(getEndTime(date));
    }
  }, [quizCount]);

  return {
    quizzes: quizzes?.results,
    quizCount,
    showResultModal,
    isCorrectAnswer,
    handleClickQuizAnswer,
    handleClickNextQuiz,
  };
};

export default useQuiz;
