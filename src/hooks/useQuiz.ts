import { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';

import { useQuery } from '@tanstack/react-query';

import { answer, wrong } from 'redux/quiz/wrongAnswerSlice';

import { requestQuiz } from 'apis/quiz';
import { QuizType } from 'types/quiz';

const useQuiz = () => {
  const [quizCount, setQuizCount] = useState(0);
  const wrongAnswerDispatch = useDispatch();

  const [showResultModal, setShowResultModal] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(true);

  const { data: quizzes } = useQuery(['quiz'], () => {
    return requestQuiz(10);
  });

  const handleClickQuizAnswer = useCallback((children: string, value: QuizType) => {
    setShowResultModal((prev) => !prev);
    if (quizzes?.results[quizCount].correct_answer === children) {
      setIsCorrectAnswer(true);
      wrongAnswerDispatch(answer(value));
    } else {
      setIsCorrectAnswer(false);
      wrongAnswerDispatch(wrong(value));
    }
  }, []);

  const handleClickNextQuiz = useCallback(() => {
    setQuizCount((prev) => (prev += 1));
    setShowResultModal((prev) => !prev);
  }, []);

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
