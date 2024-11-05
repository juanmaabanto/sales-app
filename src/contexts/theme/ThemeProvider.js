import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { ThemeContext, themes } from './theme.context';

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes['light']);

  const toggleTheme = useCallback(() => {
    setTheme(currentTheme => 
      currentTheme.palette.mode === 'light' ? themes['dark'] : themes['light']
    );
  }, []);

  const contextValue = {
    theme,
    toggleTheme
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default ThemeProvider;