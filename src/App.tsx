import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from 'routes';
import styled from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <S.Container>
        <RouterProvider router={router} />
      </S.Container>
    </QueryClientProvider>
  );
};

const S = {
  Container: styled.div`
    display: flex;
    justify-content: center;
    width: 26.25rem;
    height: 100vh;
    margin: auto;
    border: 1px solid black;
  `,
};

export default App;
