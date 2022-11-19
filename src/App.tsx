import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider } from 'react-router-dom';
import router from 'routes';
import styled, { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';
import { theme } from 'styles/theme';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <S.Container>
          <RouterProvider router={router} />
        </S.Container>
      </ThemeProvider>
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
