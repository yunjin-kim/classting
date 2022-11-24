import styled, { css } from 'styled-components';

import { StyledDefaultProps } from 'types/utils';

interface Props {
  current: number;
  total: number;
}

type CurrentProps = Props & StyledDefaultProps;

const ProgressBar = ({ current, total }: Props) => {
  return (
    <S.Container>
      <S.Total />
      <S.Current current={current} total={total} />
      <S.Text>
        {current} / {total}
      </S.Text>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    position: relative;
    width: 100%;
    height: 1.5rem;
  `,

  Total: styled.div`
    position: absolute;
    width: 100%;
    height: 1.5rem;
    border-radius: 0.9375rem;
    ${({ theme }) => css`
      box-shadow: 0.0625rem 0.0625rem 0.3125rem ${theme.color.GRAY};
      background-color: ${theme.color.GRAY};
    `};
  `,

  Current: styled.div`
    position: absolute;
    height: 1.5rem;
    border-radius: 0.9375rem;
    transition: all 0.5s;
    animation-fill-mode: forwards;
    ${({ theme, current, total }: CurrentProps) => css`
      width: ${(current / total) * 100}%;
      background-color: ${theme.color.LIGHT_GRAY};
    `};
  `,

  Text: styled.p`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 600;
  `,
};

export default ProgressBar;
