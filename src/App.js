
import React, { Suspense, useContext } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { ThemeContext } from './contexts/theme/theme.context';
import Loader from './components/loader/Loader';

const Main = React.lazy(() => import('./pages/main/Main'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 2
    }
  }
});

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={<Loader />}>
          <Main />
        </Suspense>
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default App;