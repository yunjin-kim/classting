import { persistReducer, persistStore } from 'redux-persist';

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import quizSolveReducer from 'redux/quiz/quizSolve';
import wrongAnswersReducer from 'redux/quiz/wrongAnswerNote';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const quizConfig = {
  key: 'quiz',
  storage,
};

const wrongAnswerConfig = {
  key: 'wrongAnswer',
  storage,
};

const rootReducer = combineReducers({
  quizSolve: persistReducer(quizConfig, quizSolveReducer),
  wrongAnswers: persistReducer(wrongAnswerConfig, wrongAnswersReducer),
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export const persistor = persistStore(store);
