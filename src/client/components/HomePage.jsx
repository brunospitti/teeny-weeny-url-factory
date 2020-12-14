import React from 'react';
import styled from 'styled-components';
import { outerContainer } from '../helpers/globalStyles';

import { Header } from './Header';
import { Description } from './Description';
import { Form } from './Form';
import { CoolData } from './CoolData';

export const HomePage = () => {
  return (
    <StyledHomePage className="HomePage">
      <Header />
      <Description />
      <Form />
      <CoolData />
    </StyledHomePage>
  );
};

const StyledHomePage = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-bottom: 100px;
  ${outerContainer}
`;
