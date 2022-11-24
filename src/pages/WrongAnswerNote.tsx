import { useSelector } from 'react-redux';

import styled from 'styled-components';

import { RootState } from 'redux/store';

import Exception from 'components/Exception';
import MarginBox from 'components/MarginBox';
import Title from 'components/Title';
import WrongAnswer from 'components/WrongAnswer';

const WrongAnswerNote = () => {
  const { wrongAnswers } = useSelector((state: RootState) => state.wrongAnswers);

  if (wrongAnswers.length === 0) {
    return (
      <Exception title={'아직 푼 문제가 없습니다.'} path={'/quiz'} buttonText={'퀴즈 풀어보기'} />
    );
  }

  return (
    <S.Container>
      <Title>오답노트</Title>
      <MarginBox bottom={2} />
      <S.WrongAnswersBox>
        {wrongAnswers.map((wrongAnswer) => (
          <WrongAnswer key={wrongAnswer.key} wrongAnswer={wrongAnswer} />
        ))}
      </S.WrongAnswersBox>
    </S.Container>
  );
};

const S = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
  `,

  WrongAnswersBox: styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding-bottom: 1.25rem;
  `,
};

export default WrongAnswerNote;
