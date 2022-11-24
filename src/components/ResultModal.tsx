import styled, { css } from 'styled-components';

import Button from 'components/Button';
import MarginBox from 'components/MarginBox';

interface Props {
  isCorrectAnswer: boolean;
  handleClickNextQuiz: () => void;
}

const ResultModal = ({ isCorrectAnswer, handleClickNextQuiz }: Props) => {
  return (
    <>
      <S.Dimmer />
      <S.Container>
        {isCorrectAnswer && (
          <S.Correct>
            <S.OuterCircle />
            <S.InnerCircle />
          </S.Correct>
        )}

        {!isCorrectAnswer && (
          <S.Wrong>
            <S.WrongStickRight />
            <S.WrongStickLeft />
          </S.Wrong>
        )}

        <Button onClick={handleClickNextQuiz}>{'다음 퀴즈'}</Button>
        <MarginBox bottom={-14} />
      </S.Container>
    </>
  );
};

const S = {
  Dimmer: styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 10;
    ${({ theme }) => css`
      background-color: ${theme.color.DIMMER_BLACK};
    `}
  `,

  Container: styled.section`
    position: fixed;
    top: 30%;
    left: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 25rem;
    height: 25rem;
    border-radius: 1.25rem;
    transform: translate(-50%, -50%);
    z-index: 20;
    ${({ theme }) => css`
      background-color: ${theme.color.WHITE};
      box-shadow: 0.0625rem 0.0625rem 0.3125rem ${theme.color.GRAY};
    `};
  `,

  Correct: styled.div`
    position: relative;
    top: 30%;
  `,

  OuterCircle: styled.div`
    position: absolute;
    left: 50%;
    width: 12.5rem;
    height: 12.5rem;
    border-radius: 6.25rem;
    transform: translate(-50%, -50%);
    ${({ theme }) => css`
      background-color: ${theme.color.GREEN};
    `};
  `,

  InnerCircle: styled.div`
    position: absolute;
    left: 50%;
    width: 9.375rem;
    height: 9.375rem;
    border-radius: 4.6875rem;
    transform: translate(-50%, -50%);
    ${({ theme }) => css`
      background-color: ${theme.color.WHITE};
    `};
  `,

  Wrong: styled.div`
    position: relative;
    margin-left: -1.25rem;
  `,

  WrongStickRight: styled.div`
    position: absolute;
    left: 50%;
    width: 1.875rem;
    height: 15rem;
    border-radius: 1.25rem;
    transform: rotate(45deg);
    ${({ theme }) => css`
      background-color: ${theme.color.GREEN};
    `};
  `,

  WrongStickLeft: styled.div`
    position: absolute;
    left: 50%;
    width: 1.875rem;
    height: 15rem;
    border-radius: 1.25rem;
    transform: rotate(-45deg);
    ${({ theme }) => css`
      background-color: ${theme.color.GREEN};
    `};
  `,
};

export default ResultModal;
