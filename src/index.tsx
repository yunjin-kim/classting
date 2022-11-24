import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import App from 'App';
import { ThemeProvider } from 'styled-components';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';

import ErrorBoundary from 'components/Errorboundary';
import GlobalStyle from 'styles/GlobalStyle';
import { theme } from 'styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true,
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry: 0,
    },
    mutations: {
      retry: 0,
    },
  },
});

createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ErrorBoundary>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              <App />
            </PersistGate>
          </Provider>
        </QueryClientProvider>
      </ErrorBoundary>
    </ThemeProvider>
  </BrowserRouter>,
);
