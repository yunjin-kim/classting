import { setupWorker } from 'msw';

import { quizHandlers } from 'mocks/handlers';

export const worker = setupWorker(...quizHandlers);
