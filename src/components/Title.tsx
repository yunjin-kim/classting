import styled from 'styled-components';

interface Props {
  children: string;
}

const Title = ({ children }: Props) => {
  return (
    <header>
      <S.Text>{children}</S.Text>
    </header>
  );
};

const S = {
  Text: styled.h1`
    text-align: center;
  `,
};

export default Title;
