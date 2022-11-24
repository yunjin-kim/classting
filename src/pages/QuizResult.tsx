import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import styled from 'styled-components';
import { convertTimeFormat } from 'utils';

import { RootState } from 'redux/store';

import Button from 'components/Button';
import Chart from 'components/Chart';
import Exception from 'components/Exception';
import MarginBox from 'components/MarginBox';
import Title from 'components/Title';

const QuizResult = () => {
  const { correct, wrong, startTime, endTime } = useSelector((state: RootState) => state.quizSolve);

  if (correct.length === 0 && wrong.length === 0) {
    return (
      <Exception title={'아직 푼 문제가 없습니다.'} path={'/quiz'} buttonText={'퀴즈 풀어보기'} />
    );
  }

  return (
    <S.Container>
      <Title>퀴즈 결과</Title>
      <MarginBox bottom={2} />

      <S.ResultBox>
        <S.ResultContent>
          <h3>소요 시간</h3>
          <S.Text>{convertTimeFormat(startTime, endTime)}</S.Text>
        </S.ResultContent>

        <S.ResultContent>
          <h3>정답 개수</h3>
          <S.Text>{`${correct.length} 개`} </S.Text>
        </S.ResultContent>

        <S.ResultContent>
          <h3>오답 개수</h3>
          <S.Text>{`${wrong.length} 개`}</S.Text>
        </S.ResultContent>
      </S.ResultBox>
      <MarginBox bottom={2} />

      <Chart labels={['정답', '오답']} labelsValue={[correct.length, wrong.length]} />
      <MarginBox bottom={1} />

      <S.ButtonBox>
        <Link to={'/quiz'}>
          <Button backColor={'GREEN'} hoverBackColor={'LIGHT_GREEN'} fontColor={'WHITE'}>
            새로운 문제풀기
          </Button>
        </Link>

        <Link to={'/wrong-answer-note'}>
          <Button backColor={'GREEN'} hoverBackColor={'LIGHT_GREEN'} fontColor={'WHITE'}>
            오답노트 가기
          </Button>
        </Link>
      </S.ButtonBox>
    </S.Container>
  );
};

const S = {
  Container: styled.main`
    width: 100%;
  `,

  ResultBox: styled.section`
    display: flex;
    justify-content: center;
    gap: 1rem;
  `,

  ResultContent: styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  `,

  Text: styled.p`
    font-size: 1.25rem;
  `,

  ButtonBox: styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 1rem;
  `,
};

export default QuizResult;
