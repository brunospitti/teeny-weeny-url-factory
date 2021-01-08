import React, { useEffect } from 'react';
import styled from 'styled-components';
import { colors } from '../helpers/globalStyles';
import { useTheme } from './hooks/Theme/useTheme';

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  const setClasses = (currentTheme) =>
    `button ${currentTheme} ${currentTheme === theme ? 'active' : ''}`;

  return (
    <StyledThemeSwitcher className="ThemeSwitcher" theme={theme}>
      <div className="buttons-wrapper">
        <div
          className={setClasses('dark')}
          theme={theme}
          onClick={() => setTheme('dark')}
        >
          🌚
        </div>
        <div
          className={setClasses('light')}
          theme={theme}
          onClick={() => setTheme('light')}
        >
          ☀️
        </div>
      </div>
    </StyledThemeSwitcher>
  );
};

const StyledThemeSwitcher = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  .buttons-wrapper {
    display: flex;
    justify-content: space-between;
    min-width: 220px;
    .button {
      padding: 10px;
      font-size: 1.25em;
      text-align: center;
      width: 48%;
      border-radius: 5px;
      border: 2px solid;
      cursor: pointer;
      &.dark {
        border-color: ${({ theme }) => colors[theme].primary};
        &.active {
          background: ${({ theme }) => colors[theme].primary};
        }
      }
      &.light {
        border-color: ${({ theme }) => colors[theme].secondary};
        &.active {
          background: ${({ theme }) => colors[theme].secondary};
        }
      }
    }
  }
`;
