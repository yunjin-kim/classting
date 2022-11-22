import { useSelector } from 'react-redux';

import styled from 'styled-components';

import { RootState } from 'redux/store';

import Chart from 'components/Chart';
import Exception from 'components/Exception';
import MarginBox from 'components/MarginBox';
import Title from 'components/Title';

const QuizResult = () => {
  const { correct, wrong } = useSelector((state: RootState) => state.wrongAnswerNote);

  if (correct.length === 0 && wrong.length === 0) {
    return (
      <Exception title={'아직 푼 문제가 없습니다.'} path={'/quiz'} buttonText={'퀴즈 풀어보기'} />
    );
  }

  return (
    <S.Container>
      <Title>퀴즈 결과</Title>
      <MarginBox bottom={2} />
      <S.Box>
        <S.QuizInfoBox>
          <h3>소요 시간</h3>
          <S.Text>00:00</S.Text>
        </S.QuizInfoBox>
        <S.QuizInfoBox>
          <h3>정답 개수</h3>
          <S.Text>{`${correct.length} 개`} </S.Text>
        </S.QuizInfoBox>
        <S.QuizInfoBox>
          <h3>오답 개수</h3>
          <S.Text>{`${wrong.length} 개`}</S.Text>
        </S.QuizInfoBox>
      </S.Box>
      <MarginBox bottom={2} />
      <Chart labels={['정답', '오답']} labelsValue={[correct.length, wrong.length]} />
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    width: 100%;
  `,

  Box: styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
  `,

  QuizInfoBox: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `,

  Text: styled.p`
    font-size: 1.25rem;
  `,
};

export default QuizResult;
