import styled from 'styled-components';

interface Props {
  children: string;
}

const Title = ({ children }: Props) => {
  return <S.Container>{children}</S.Container>;
};

const S = {
  Container: styled.h1`
    text-align: center;
  `,
};

export default Title;
