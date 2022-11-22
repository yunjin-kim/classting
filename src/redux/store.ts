import { configureStore } from '@reduxjs/toolkit';
import wrongAnswerNoteReducer from 'redux/quiz/wrongAnswerSlice';

export const store = configureStore({
  reducer: {
    wrongAnswerNote: wrongAnswerNoteReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
