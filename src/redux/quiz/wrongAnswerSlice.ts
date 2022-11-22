import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { QuizType } from 'types/quiz';

export interface WrongAnswerNote {
  correct: QuizType[];
  wrong: QuizType[];
}

const initialState: WrongAnswerNote = {
  correct: [],
  wrong: [],
};

export const wrongAnswerSlice = createSlice({
  name: 'wrongAnswerNote',
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

export const { answer, wrong } = wrongAnswerSlice.actions;

export default wrongAnswerSlice.reducer;
