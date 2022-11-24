import styled from 'styled-components';
import { shuffle } from 'utils';

import useQuiz from 'hooks/useQuiz';

import Button from 'components/Button';
import Exception from 'components/Exception';
import MarginBox from 'components/MarginBox';
import ProgressBar from 'components/ProgressBar';
import ResultModal from 'components/ResultModal';
import Title from 'components/Title';
import { ROUTER } from 'constants/index';

const Quiz = () => {
  const {
    quizzes,
    quizCount,
    showResultModal,
    isCorrectAnswer,
    handleClickQuizAnswer,
    handleClickNextQuiz,
  } = useQuiz();

  if (!quizzes) {
    return <Title>{'문제 내는 중'}</Title>;
  }

  if (quizzes.length === quizCount) {
    return <Exception title={'퀴즈 끝!'} path={ROUTER.QUIZ_RESULT} buttonText={'퀴즈 결과보기'} />;
  }

  const { category, difficulty, question, incorrect_answers, correct_answer, type } =
    quizzes[quizCount];
  const allAnswers = shuffle([correct_answer, ...incorrect_answers]);

  return (
    <>
      {showResultModal && (
        <ResultModal isCorrectAnswer={isCorrectAnswer} handleClickNextQuiz={handleClickNextQuiz} />
      )}
      <S.Container>
        <Title>{'Quiz'}</Title>
        <MarginBox bottom={1} />

        <ProgressBar current={quizCount} total={quizzes.length} />
        <MarginBox bottom={1} />

        <S.Text>{`category : ${category}`}</S.Text>
        <MarginBox bottom={0.5} />

        <S.Text>{`difficulty : ${difficulty}`}</S.Text>
        <MarginBox bottom={2} />

        <S.QuestionBox>
          <S.QuestionText>{`Question ${quizCount + 1}`}</S.QuestionText>
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
                    onClick={handleClickQuizAnswer(incorrectAnswer, quizzes[quizCount])}
                  >
                    {incorrectAnswer}
                  </Button>
                ))}
              </>
            )}

            {type === 'boolean' && (
              <>
                <Button
                  value={quizzes[quizCount]}
                  onClick={handleClickQuizAnswer('True', quizzes[quizCount])}
                >
                  {'True'}
                </Button>
                <Button
                  value={quizzes[quizCount]}
                  onClick={handleClickQuizAnswer('False', quizzes[quizCount])}
                >
                  {'False'}
                </Button>
              </>
            )}
          </S.AnswerBox>
        </S.QuestionBox>
      </S.Container>
    </>
  );
};

const S = {
  Container: styled.main`
    position: relative;
    width: 100%;
  `,

  QuestionBox: styled.section`
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

  AnswerBox: styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    gap: 0.5rem;
    width: 100%;
  `,
};

export default Quiz;
