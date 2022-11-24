import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { QuizType } from 'types/quiz';

export interface QuizSolve {
  correct: QuizType[];
  wrong: QuizType[];
  startTime: number;
  endTime: number;
}

const initialState: QuizSolve = {
  correct: [],
  wrong: [],
  startTime: 0,
  endTime: 0,
};

export const quizSolveSlice = createSlice({
  name: 'quizSolve',
  initialState,
  reducers: {
    setCorrect: (state, { payload }: PayloadAction<QuizType>) => {
      state.correct.push(payload);
    },
    setWrong: (state, { payload }: PayloadAction<QuizType>) => {
      state.wrong.push(payload);
    },
    setStartTime: (state, { payload }: PayloadAction<number>) => {
      state.startTime = payload;
    },
    setEndTime: (state, { payload }: PayloadAction<number>) => {
      state.endTime = payload;
    },
    setNewQuiz: (state) => {
      state.correct = initialState.correct;
      state.wrong = initialState.wrong;
      state.startTime = initialState.startTime;
      state.endTime = initialState.endTime;
    },
  },
});

export const { setCorrect, setWrong, setStartTime, setEndTime, setNewQuiz } =
  quizSolveSlice.actions;

export default quizSolveSlice.reducer;
