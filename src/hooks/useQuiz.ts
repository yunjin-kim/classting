import { useState } from 'react';
import { useDispatch } from 'react-redux';

import { useQuery } from '@tanstack/react-query';

import { answer, wrong } from 'redux/quiz/wrongAnswerSlice';

import { requestQuiz } from 'apis/quiz';
import { QuizType } from 'types/quiz';

const useQuiz = () => {
  const [quizCount, setQuizCount] = useState(0);
  const wrongAnswerDispatch = useDispatch();

  const { data: quizzes } = useQuery(['quiz'], () => {
    return requestQuiz(10);
  });

  const handleClickQuizAnswer = (children: string, value: QuizType) => {
    setQuizCount((prev) => (prev += 1));
    if (quizzes?.results[quizCount].correct_answer === children) {
      wrongAnswerDispatch(answer(value));
    } else {
      wrongAnswerDispatch(wrong(value));
    }
  };

  return {
    quizzes: quizzes?.results,
    quizCount,
    handleClickQuizAnswer,
  };
};

export default useQuiz;
