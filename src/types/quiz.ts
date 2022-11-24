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

export interface SelectQuizType {
  category: string;
  correct_answer: string;
  selectAnswer: string;
  difficulty: DifficultyType;
  incorrect_answers: string[];
  question: string;
  type: QuizKind;
}

type DifficultyType = 'hard' | 'medium' | 'easy';

type QuizKind = 'multiple' | 'boolean';
