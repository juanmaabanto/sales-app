
import React, { Suspense, useContext } from 'react';
import ThemeProvider from '@mui/material/styles/ThemeProvider';
import { ThemeContext } from './contexts/theme/theme.context';
import Loader from './components/loader/Loader';

const Main = React.lazy(() => import('./pages/main/Main'));

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeProvider theme={theme}>
      <Suspense fallback={<Loader />}>
        <Main />
      </Suspense>
    </ThemeProvider>
  );
};

export default App;