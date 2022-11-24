import { rest } from 'msw';

import { API_URL } from 'constants/index';

const quizMock = [
  {
    category: 'Entertainment: Video Games',
    type: 'multiple',
    difficulty: 'easy',
    question: 'What is Pikachu&#039;s National Pok&eacute;Dex Number?',
    correct_answer: '#025',
    incorrect_answers: ['#001', '#031', '#109'],
  },
  {
    category: 'Science: Mathematics',
    type: 'multiple',
    difficulty: 'medium',
    question: 'What are the first 6 digits of the number &quot;Pi&quot;?',
    correct_answer: '3.14159',
    incorrect_answers: ['3.14169', '3.12423', '3.25812'],
  },
];

export const quizHandlers = [
  rest.get(`${API_URL}api.php`, (req, res, ctx) => {
    return res(ctx.json({ response_code: 0, results: quizMock }));
  }),
];
