import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

import { SelectQuizType } from 'types/quiz';

export interface WrongAnswers {
  wrongAnswers: SelectQuizType[];
}

const initialState: WrongAnswers = {
  wrongAnswers: [],
};

export const wrongAnswersSlice = createSlice({
  name: 'wrongAnswers',
  initialState,
  reducers: {
    setWrongAnswers: (state, { payload }: PayloadAction<SelectQuizType>) => {
      state.wrongAnswers.push(payload);
    },
  },
});

export const { setWrongAnswers } = wrongAnswersSlice.actions;

export default wrongAnswersSlice.reducer;
