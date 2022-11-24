import { fetcher } from 'apis';

import { QuizApiType } from 'types/quiz';

export const requestQuiz = async (amount: number): Promise<QuizApiType> => {
  const { data } = await fetcher.get(`api.php?amount=${amount}`);

  return data;
};
