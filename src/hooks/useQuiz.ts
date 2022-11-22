import { useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { requestQuiz } from 'apis/quiz';

const useQuiz = () => {
  const [quizCount, setQuizCount] = useState(0);

  const { data: quizzes } = useQuery(['quiz'], () => {
    return requestQuiz(10);
  });

  const handleClickQuizAnswer = (text: string) => {
    setQuizCount((prev) => (prev += 1));
    console.log(quizzes?.results[quizCount].correct_answer);
    console.log(text);
  };

  return {
    quizzes: quizzes?.results,
    quizCount,
    handleClickQuizAnswer,
  };
};

export default useQuiz;
