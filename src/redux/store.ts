import { configureStore } from '@reduxjs/toolkit';
import quizSolveReducer from 'redux/quiz/quizSolve';

export const store = configureStore({
  reducer: {
    quizSolve: quizSolveReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
