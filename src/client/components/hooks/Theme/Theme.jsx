import React from 'react';
import PropTypes from 'prop-types'; // ES6

import { ThemeProvider } from '../../contexts/ThemeContext';

export const Theme = ({ children }) => {
  const localTheme = localStorage.getItem('theme');

  const [theme, setTheme] = React.useState(localTheme || 'dark');

  return (
    <ThemeProvider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeProvider>
  );
};

Theme.propTypes = {
  children: PropTypes.node,
};
