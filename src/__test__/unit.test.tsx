// import Fetch from './fetch';
import Home from 'pages/Home';
import Quiz from 'pages/Quiz';

import { screen } from '@testing-library/react';
import { customRender } from '__test__/test-utils';
import { ROUTER } from 'constants/index';

describe('유닛 테스트', () => {
  test('Home 페이지 테스트', () => {
    customRender(<Home />);

    expect(screen.getByText(ROUTER.HOME));
  });

  test('Quiz 페이지 테스트', async () => {
    customRender(<Quiz />);

    await screen.findByText('Quiz');
  });
});
