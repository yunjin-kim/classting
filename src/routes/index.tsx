import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Home from 'pages/Home';
import Quiz from 'pages/Quiz';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/quiz',
    element: (
      <Suspense fallback={<p>로딩중</p>}>
        <Quiz />
      </Suspense>
    ),
  },
]);

export default router;
