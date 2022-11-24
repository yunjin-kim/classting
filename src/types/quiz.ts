export interface QuizApiType {
  response_code: number;
  results: QuizType[];
}

export interface QuizType {
  category: string;
  correct_answer: string;
  difficulty: DifficultyType;
  incorrect_answers: string[];
  question: string;
  type: QuizKind;
}

export interface SelectQuizType extends QuizType {
  select_answer: string;
  key: number;
}

type DifficultyType = 'hard' | 'medium' | 'easy';

type QuizKind = 'multiple' | 'boolean';
