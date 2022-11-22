import styled from 'styled-components';
import { shuffle } from 'utils';

import useQuiz from 'hooks/useQuiz';

import Button from 'components/Button';
import MarginBox from 'components/MarginBox';
import ProgressBar from 'components/ProgressBar';

const Quiz = () => {
  const { quizzes, quizCount, handleClickQuizAnswer } = useQuiz();

  if (!quizzes) {
    return <p>문제 내는 중</p>;
  }

  if (quizzes.length === quizCount) {
    return <p>문제 끝</p>;
  }

  const { category, difficulty, question, incorrect_answers, correct_answer, type } =
    quizzes[quizCount];
  const allAnswers = shuffle([correct_answer, ...incorrect_answers]);

  return (
    <S.Container>
      <S.Title>Quiz</S.Title>
      <MarginBox bottom={1} />
      <ProgressBar current={quizCount} total={quizzes.length} />
      <MarginBox bottom={1} />
      <S.Text>category : {category}</S.Text>
      <MarginBox bottom={0.5} />
      <S.Text>difficulty : {difficulty}</S.Text>
      <MarginBox bottom={2} />
      <S.QuestionBox>
        <S.QuestionText>Question {quizCount + 1}</S.QuestionText>
        <MarginBox bottom={0.5} />
        <S.QuestionText>{question}</S.QuestionText>
        <MarginBox bottom={2} />
        <S.AnswerBox>
          {type === 'multiple' && (
            <>
              {allAnswers.map((incorrectAnswer) => (
                <Button
                  key={incorrectAnswer}
                  value={quizzes[quizCount]}
                  onClick={handleClickQuizAnswer}
                >
                  {incorrectAnswer}
                </Button>
              ))}
            </>
          )}
          {type === 'boolean' && (
            <>
              <Button value={quizzes[quizCount]} onClick={handleClickQuizAnswer}>
                {'True'}
              </Button>
              <Button value={quizzes[quizCount]} onClick={handleClickQuizAnswer}>
                {'False'}
              </Button>
            </>
          )}
        </S.AnswerBox>
      </S.QuestionBox>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    position: relative;
    width: 100%;
  `,

  Title: styled.h1`
    text-align: center;
  `,

  QuestionBox: styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -70%);
  `,

  QuestionText: styled.p`
    text-align: center;
    font-size: 1.5rem;
  `,

  Text: styled.p`
    font-size: 1rem;
  `,

  AnswerBox: styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
  `,
};

export default Quiz;
