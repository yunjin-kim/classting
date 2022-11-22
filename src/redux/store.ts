import { configureStore } from '@reduxjs/toolkit';
import wrongAnswerNoteReducer from 'redux/quiz/quizSlice';

export const store = configureStore({
  reducer: {
    wrongAnswerNote: wrongAnswerNoteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
