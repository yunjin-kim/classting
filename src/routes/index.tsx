import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from 'pages/Home';
import Quiz from 'pages/Quiz';
import QuizResult from 'pages/QuizResult';
import WrongAnswerNote from 'pages/WrongAnswerNote';

import Title from 'components/Title';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/quiz',
    element: (
      <Suspense fallback={<Title>문제 내는 중</Title>}>
        <Quiz />
      </Suspense>
    ),
  },
  {
    path: '/quiz-result',
    element: <QuizResult />,
  },
  {
    path: '/wrong-answer-note',
    element: <WrongAnswerNote />,
  },
]);

export default router;
