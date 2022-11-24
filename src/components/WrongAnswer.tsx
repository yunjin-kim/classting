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
      <S.SubTitle>Quiz</S.SubTitle>
      <MarginBox bottom={1} />
      <p>{question}</p>
      <MarginBox bottom={0.5} />
      <p>answer : {correct_answer}</p>
      <MarginBox bottom={0.5} />
      <p>difficulty : {difficulty}</p>
      <p>category : {category}</p>
      <p>선택한 답</p>
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
    </S.Container>
  );
};

const S = {
  Container: styled.article`
    width: 300px;
    height: 300px;
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

  SubTitle: styled.h3`
    font-size: 1.25rem;
  `,
};

export default WrongAnswer;
