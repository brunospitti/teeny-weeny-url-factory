import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { breakpoints } from '../helpers/globalStyles';
import { mostVisitedGet } from '../helpers/mostVisitedGet';
import { useTheme } from './hooks/Theme/useTheme';

export const MostVisited = () => {
  const { BASE_URL } = process.env;

  const { theme } = useTheme();
  const [mostVisited, setMostVisited] = useState([]);

  useEffect(async () => {
    setMostVisited(await mostVisitedGet());
  }, []);

  if (!mostVisited.length) return null;

  return (
    <StyledMostVisited className="MostVisited" theme={theme}>
      <div className="sub-title">Most Visited</div>
      <ol>
        {mostVisited.map(({ shortURLCode, originalURL, visitCount }) => {
          return (
            <li key={shortURLCode}>
              <a
                href={`${BASE_URL}/${shortURLCode}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {originalURL}
              </a>
              <span>{`(${visitCount} visits)`}</span>
            </li>
          );
        })}
      </ol>
    </StyledMostVisited>
  );
};

const StyledMostVisited = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid;
  padding: 20px;
  width: 45%;
  @media ${breakpoints.tablet} {
    width: 100%;
  }
  .sub-title {
    font-size: 1.25em;
    font-weight: bold;
    margin-bottom: 10px;
  }
  ol {
    list-style: decimal;
    padding: revert;
    span {
      font-size: 0.75em;
      float: right;
    }
  }
`;
