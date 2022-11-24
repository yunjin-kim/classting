import styled, { css } from 'styled-components';

import MarginBox from './MarginBox';
import { SelectQuizType } from 'types/quiz';
import { StyledDefaultProps } from 'types/utils';

interface AnswerTextProps extends StyledDefaultProps {
  select: boolean;
}

interface Props {
  wrongAnswer: SelectQuizType;
}

const WrongAnswer = ({ wrongAnswer }: Props) => {
  const { category, correct_answer, select_answer, incorrect_answers, difficulty, question, type } =
    wrongAnswer;

  return (
    <S.Container>
      <h3>Quiz</h3>
      <MarginBox bottom={1} />
      <p>{question}</p>
      <MarginBox bottom={1} />

      <h4>Answer</h4>
      <MarginBox bottom={0.5} />
      <p>{correct_answer}</p>
      <MarginBox bottom={1.5} />

      <h4>Choice</h4>
      <MarginBox bottom={0.5} />
      {type === 'multiple' && (
        <>
          {incorrect_answers.map((incorrectAnswer, index) => (
            <S.AnswerText key={index} select={incorrectAnswer === select_answer}>
              {incorrectAnswer}
            </S.AnswerText>
          ))}
        </>
      )}
      {type === 'boolean' && (
        <>
          <S.AnswerText select={'True' === select_answer}>{'True'}</S.AnswerText>
          <S.AnswerText select={'False' === select_answer}>{'False'}</S.AnswerText>
        </>
      )}
      <MarginBox bottom={2} />

      <p>category : {category}</p>
      <p>difficulty : {difficulty}</p>
    </S.Container>
  );
};

const S = {
  Container: styled.article`
    width: 300px;
    height: fit-content;
    padding: 1.25rem 0.625rem;
    border-radius: 1rem;
    ${({ theme }) => css`
      border: 1px solid ${theme.color.BLACK};
      box-shadow: 0.0625rem 0.0625rem 0.3125rem ${theme.color.GRAY};
    `};
  `,

  AnswerText: styled.p`
    ${({ theme, select }: AnswerTextProps) => css`
      color: ${select ? theme.color.GREEN : theme.color.BLACK};
    `};
  `,
};

export default WrongAnswer;
