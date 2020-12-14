import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors, fontFamilyTitle } from '../helpers/globalStyles';
import { useTheme } from './hooks/Theme/useTheme';
import { NotFound } from './NotFound';

export const Description = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const notFound = urlParams.get('notFound');

  const { theme } = useTheme();
  return (
    <StyledDescription className="Description" theme={theme}>
      <div className="title">Teeny-Weeny URL Factory</div>
      {notFound === 'true' ? (
        <NotFound />
      ) : (
        <div className="text">
          <p>Just pop a url in the field below and get a teeny-weeny URL.</p>
          <p>You can also make a custom URL with up to 10 chars.</p>
        </div>
      )}
    </StyledDescription>
  );
};

const StyledDescription = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  .title {
    font-family: ${fontFamilyTitle};
    color: ${({ theme }) => colors[theme].primary};
    font-size: 2em;
    line-height: 3em;
    @media ${breakpoints.mobile} {
      font-size: 1.75em;
      line-height: 2em;
    }
  }
  .text {
    flex: 1;
  }
`;
