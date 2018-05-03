import React from 'react';
import styled from 'styled-components';
import Content from 'components/content.jsx';
import img from 'redux/cards/images/table.jpg';

const App = styled.div`
  /*padding: 30px;*/
  height: 100vh;
  width: 100vw;
  background-image: url(${img});
`;
export default () =>
  <App>
    <Content />
  </App>;
