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
    getCorrect: (state, { payload }: PayloadAction<QuizType>) => {
      state.correct.push(payload);
    },
    getWrong: (state, { payload }: PayloadAction<QuizType>) => {
      state.wrong.push(payload);
    },
    getStartTime: (state, { payload }: PayloadAction<any>) => {
      state.startTime = payload;
    },
    getEndTime: (state, { payload }: PayloadAction<any>) => {
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

export const { getCorrect, getWrong, getStartTime, getEndTime, setNewQuiz } =
  quizSolveSlice.actions;

export default quizSolveSlice.reducer;
