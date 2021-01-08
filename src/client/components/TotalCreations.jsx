import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../helpers/globalStyles';
import { totalCreationsGet } from '../helpers/totalCreationsGet';
import { useTheme } from './hooks/Theme/useTheme';

export const TotalCreations = () => {
  const { theme } = useTheme();
  const [totalCreations, setTotalCreations] = useState([]);

  useEffect(async () => {
    setTotalCreations(await totalCreationsGet());
  }, []);

  if (!totalCreations) return null;

  return (
    <StyledTotalCreations className="TotalCreations" theme={theme}>
      Total URLs created: {totalCreations.totalURLsCreated}
    </StyledTotalCreations>
  );
};

const StyledTotalCreations = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 20px;
  width: 45%;
  margin-bottom: 20px;
  font-size: 1.25em;
  font-weight: bold;
  @media ${breakpoints.tablet} {
    width: 100%;
  }
`;
