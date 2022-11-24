import { Suspense } from 'react';

import Home from 'pages/Home';
import Quiz from 'pages/Quiz';
import QuizResult from 'pages/QuizResult';
import WrongAnswerNote from 'pages/WrongAnswerNote';

import Title from 'components/Title';
import { ROUTER } from 'constants/index';

const router = [
  {
    path: ROUTER.HOME,
    element: <Home />,
  },
  {
    path: ROUTER.QUIZ,
    element: (
      <Suspense fallback={<Title>{'문제 내는 중'}</Title>}>
        <Quiz />
      </Suspense>
    ),
  },
  {
    path: ROUTER.QUIZ_RESULT,
    element: <QuizResult />,
  },
  {
    path: ROUTER.WRONG_ANSWER_NOTE,
    element: <WrongAnswerNote />,
  },
];

export default router;
