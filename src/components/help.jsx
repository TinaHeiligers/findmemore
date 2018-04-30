import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button, Wrapper, HeaderText, PStyled } from 'components/shared/index.js';
import themes from 'components/themes.js';

const Help = styled.div`
  margin: 30px;
`;

export default () =>
  <Help>
    <ThemeProvider theme={ themes.foo }>
      <Wrapper>
        <HeaderText>I will be help!</HeaderText>
        <Button primary>How To Play Guide</Button>
        <Button>Contact</Button>
        <PStyled>Thanks for playing!</PStyled>
      </Wrapper>
    </ThemeProvider>
  </Help>;
