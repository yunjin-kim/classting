import { Link } from 'react-router-dom';

import styled from 'styled-components';

import Button from 'components/Button';
import Title from 'components/Title';

interface Props {
  title: string;
  path: string;
  buttonText: string;
}

const Exception = ({ title, path, buttonText }: Props) => {
  return (
    <S.Container>
      <Title>{title}</Title>
      <Link to={path}>
        <Button backColor={'GREEN'} hoverBackColor={'LIGHT_GREEN'} fontColor={'WHITE'}>
          {buttonText}
        </Button>
      </Link>
    </S.Container>
  );
};

const S = {
  Container: styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  `,
};

export default Exception;
