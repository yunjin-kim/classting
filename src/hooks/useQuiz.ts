import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useQuery } from '@tanstack/react-query';

import { setCorrect, setWrong, setStartTime, setEndTime, setNewQuiz } from 'redux/quiz/quizSolve';
import { setWrongAnswers } from 'redux/quiz/wrongAnswerNote';

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
        quizSolveDispatch(setNewQuiz());
        const date = new Date().getTime();
        quizSolveDispatch(setStartTime(date));
      },
      cacheTime: 0,
    },
  );

  const handleClickQuizAnswer = useCallback(
    (children: string, value: QuizType) => () => {
      setShowResultModal((prev) => !prev);
      if (quizzes?.results[quizCount].correct_answer === children) {
        setIsCorrectAnswer(true);
        quizSolveDispatch(setCorrect(value));
      } else if (quizzes?.results[quizCount].correct_answer !== children) {
        const key = Math.random();
        setIsCorrectAnswer(false);
        quizSolveDispatch(setWrong(value));
        quizSolveDispatch(setWrongAnswers({ key, select_answer: children, ...value }));
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
      quizSolveDispatch(setEndTime(date));
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
