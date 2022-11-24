import React, { FC, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { ThemeProvider } from 'styled-components';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from 'redux/store';

import { render, RenderOptions } from '@testing-library/react';
import { theme } from 'styles/theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: false,
      useErrorBoundary: true,
      refetchOnWindowFocus: false,
      retry: 0,
    },
    mutations: {
      retry: 0,
    },
  },
});

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
              {children}
            </PersistGate>
          </Provider>
        </QueryClientProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });
