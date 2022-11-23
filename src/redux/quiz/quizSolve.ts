import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { QuizType } from 'types/quiz';

export interface QuizSolve {
  correct: QuizType[];
  wrong: QuizType[];
  time: string;
}

const initialState: QuizSolve = {
  correct: [],
  wrong: [],
  time: '',
};

export const quizSolveSlice = createSlice({
  name: 'quizSolve',
  initialState,
  reducers: {
    answer: (state, { payload }: PayloadAction<QuizType>) => {
      state.correct.push(payload);
    },
    wrong: (state, { payload }: PayloadAction<QuizType>) => {
      state.wrong.push(payload);
    },
  },
});

export const { answer, wrong } = quizSolveSlice.actions;

export default quizSolveSlice.reducer;
