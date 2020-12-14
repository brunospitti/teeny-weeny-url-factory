import React from 'react';

import { ThemeProvider } from '../../contexts/ThemeContext';

export const Theme = ({ children }) => {
  const [theme, setTheme] = React.useState('dark');

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
