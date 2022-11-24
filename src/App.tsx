import { useRoutes } from 'react-router-dom';

import router from 'routes';
import styled, { css } from 'styled-components';

const App = () => {
  const routes = useRoutes(router);

  return <S.Container>{routes}</S.Container>;
};

const S = {
  Container: styled.div`
    overflow: scroll;
    display: flex;
    justify-content: center;
    width: 26.25rem;
    height: 100vh;
    margin: auto;
    padding: 1.875rem 1.25rem;
    ${({ theme }) => css`
      border: 0.0625rem solid ${theme.color.LIGHT_GRAY};
      box-shadow: 0.0625rem 0.0625rem 0.3125rem ${theme.color.GRAY};
    `};
  `,
};

export default App;
