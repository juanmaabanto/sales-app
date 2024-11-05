import React from 'react';
import createTheme from '@mui/material/styles/createTheme';

const baseTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          textTransform: 'none'
        }
      }
    },
    MuiUseMediaQuery: {
      defaultProps: {
        noSsr: true
      }
    }
  }
});

export const themes = {
  light: createTheme({
    palette: {
      background: {
        default: '#f8f8f8'
      },
      primary: {
        main: '#7367f0'
      }
    },
    components: baseTheme.components,
    typography: baseTheme.typography
  }),
  dark: createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#0375da'
        }
    },
    components: baseTheme.components,
    typography: baseTheme.typography
  })
};

export const ThemeContext = React.createContext({
  theme: themes['light'],
  toggleTheme: undefined
});
