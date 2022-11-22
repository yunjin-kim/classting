import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Button from 'components/Button';
import Title from 'components/Title';

const QuizEnd = () => {
  return (
    <S.Container>
      <Title>퀴즈 끝!</Title>
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
};

export default QuizEnd;
