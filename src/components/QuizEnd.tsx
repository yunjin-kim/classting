import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Button from './Button';

const QuizEnd = () => {
  return (
    <S.Container>
      <S.Title>퀴즈 끝!</S.Title>
      <Link to="/quiz-result">
        <Button backColor={'GREEN'} hoverBackColor={'LIGHT_GREEN'} fontColor={'WHITE'}>
          퀴즈 결과보기
        </Button>
      </Link>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  `,

  Title: styled.h1`
    text-align: center;
  `,
};

export default QuizEnd;
