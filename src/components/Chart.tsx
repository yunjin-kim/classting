import styled, { css, keyframes } from 'styled-components';

import { StyledDefaultProps } from 'types/utils';

interface ChartWithProps extends StyledDefaultProps {
  height: number;
}

interface Props {
  labels: string[];
  labelsValue: number[];
}

const Chart = ({ labels, labelsValue }: Props) => {
  const allValue = labelsValue.reduce((a, b) => a + b);
  const labelsPercent = labelsValue.map((labelValue) => Math.round((labelValue / allValue) * 100));

  return (
    <S.Container>
      <S.ChartBox>
        <S.ChartBarBox>
          {labelsPercent.map((labelPercent, index) => (
            <S.ChartBar key={index} height={labelPercent}>
              <S.PercentText>{labelPercent}%</S.PercentText>
            </S.ChartBar>
          ))}
        </S.ChartBarBox>
        <S.LabelBox>
          {labels.map((label) => (
            <p key={label}>{label}</p>
          ))}
        </S.LabelBox>
      </S.ChartBox>
    </S.Container>
  );
};

const chartBar = keyframes`
  0% {
  height: 0;
  }
  100% {
    opacity: 100%;
  }
`;

const S = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    width: 100%;
    overflow: hidden;
  `,

  ChartBox: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 500px;
    padding: 1.25rem 0.625rem;
    border-radius: 1rem;
    ${({ theme }) => css`
      border: 1px solid ${theme.color.BLACK};
      box-shadow: 0.0625rem 0.0625rem 0.3125rem ${theme.color.GRAY};
    `};
  `,

  ChartBarBox: styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    width: 100%;
  `,

  ChartBar: styled.div`
    display: flex;
    justify-content: center;
    width: 1.25rem;
    border-radius: 0.375rem 0.375rem 0 0;
    animation: ${chartBar} 1.5s ease-in;
    ${({ theme, height }: ChartWithProps) => css`
      height: ${height * 24}%;
      background-color: ${theme.color.GREEN};
      box-shadow: 0.0625rem 0.0625rem 0.3125rem ${theme.color.LIGHT_GREEN};
    `};
  `,

  PercentText: styled.p`
    position: relative;
    top: -1.25rem;
    font-weight: 800;
  `,

  LabelBox: styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding-top: 0.625rem;
    ${({ theme }) => css`
      border-top: 1px solid ${theme.color.BLACK};
    `};
  `,
};

export default Chart;
