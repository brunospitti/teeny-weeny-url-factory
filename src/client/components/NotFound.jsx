import React from 'react';
import styled from 'styled-components';
import { useTheme } from './hooks/Theme/useTheme';

export const NotFound = () => {
  const { theme } = useTheme();

  return (
    <StyledNotFound className="NotFound" theme={theme}>
      <div className="sub-title">
        I couldn&apos;t find the teeny-weeny URL you are looking for.
      </div>
      <div className="text">
        <p>Why not create a new one? It&apos;s free like 🤷</p>
      </div>
    </StyledNotFound>
  );
};

const StyledNotFound = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  .sub-title {
    font-size: 1.5em;
    line-height: 1.5em;
    margin-bottom: 1.5em;
  }
  .text {
    flex: 1;
  }
`;
