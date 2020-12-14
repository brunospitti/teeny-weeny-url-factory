import React from 'react';
import styled from 'styled-components';
import { colors, fontFamilyTitle } from '../helpers/globalStyles';
import { useTheme } from './hooks/Theme/useTheme';
import { MostVisited } from './MostVisited';

export const CoolData = () => {
  const { theme } = useTheme();

  return (
    <StyledCoolData className="CoolData" theme={theme}>
      <div className="title">Here&apos;s some cool data about our factory</div>
      <MostVisited />
    </StyledCoolData>
  );
};

const StyledCoolData = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  .title {
    font-family: ${fontFamilyTitle};
    color: ${({ theme }) => colors[theme].primary};
    font-size: 1.25em;
    line-height: 2em;
  }
  .text {
    flex: 1;
  }
`;
