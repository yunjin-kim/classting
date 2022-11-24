import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from 'routes';
import styled, { css, ThemeProvider } from 'styled-components';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';

import GlobalStyle from 'styles/GlobalStyle';
import { theme } from 'styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      retry: 0,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <S.Container>
              <RouterProvider router={router} />
            </S.Container>
          </ThemeProvider>
        </PersistGate>
      </Provider>
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
    padding: 1.875rem 1.25rem;
    ${({ theme }) => css`
      border: 0.0625rem solid ${theme.color.LIGHT_GRAY};
      box-shadow: 0.0625rem 0.0625rem 0.3125rem ${theme.color.GRAY};
    `};
  `,
};

export default App;
