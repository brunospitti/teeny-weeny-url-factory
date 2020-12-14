import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';
import { colors } from '../helpers/globalStyles';
import { GlobalStyles } from '../helpers/globalStyles';
import { useTheme } from './hooks/Theme/useTheme';

import { HomePage } from './HomePage';

export const App = () => {
  const { theme } = useTheme();

  return (
    <StyledApp theme={theme}>
      <Helmet>
        <html lang="en" />
        <title>Teeny-Weeny URL Factory</title>
        <meta name="description" content="Teeny-Weeny URL Factory" />
        <meta property="og:title" content="Teeny-Weeny URL Factory" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Amita:wght@700&family=Roboto:wght@300;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <HomePage />
      <GlobalStyles />
    </StyledApp>
  );
};

const StyledApp = styled.div`
  background: ${({ theme }) => colors[theme].tertiary};
  color: ${({ theme }) => colors[theme].tertiaryContrast};
`;
