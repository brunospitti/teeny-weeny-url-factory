import React from 'react';
import styled from 'styled-components';
import { colors, fontFamilyTitle } from '../helpers/globalStyles';
import { ThemeSwitcher } from './ThemeSwitcher';
import { useTheme } from './hooks/Theme/useTheme';

export const Header = () => {
  const { theme } = useTheme();
  return (
    <StyledHeader className="Header" theme={theme}>
      <div className="logo">T.W.U.F.</div>
      <ThemeSwitcher />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  padding: 10px;
  display: flex;
  flex: 1;
  align-items: center;
  .logo {
    flex: 3;
    font-family: ${fontFamilyTitle};
    color: ${({ theme }) => colors[theme].primary};
  }
  .ThemeSwitcher {
    flex: 1;
  }
`;
