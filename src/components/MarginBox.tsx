import styled, { css } from 'styled-components';

interface Props {
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
}

const MarginBox = ({ ...props }: Props) => {
  return <S.Container {...props} />;
};

const S = {
  Container: styled.div`
    ${({ top = 0, right = 0, bottom = 0, left = 0 }: Props) => css`
      margin: ${top}rem ${right}rem ${bottom}rem ${left}rem;
    `}
  `,
};

export default MarginBox;
