import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Button from 'components/Button';

const Home = () => {
  return (
    <S.Container>
      <h1>퀴즈 한번 풀어보시겠어요?</h1>
      <Link to="/quiz">
        <Button backColor={'GREEN'} hoverBackColor={'LIGHT_GREEN'} fontColor={'WHITE'}>
          퀴즈 시작
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

export default Home;
