import React, { Component } from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  max-width: 1310px;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`;

class Container extends Component {
  render() {
    const { children } = this.props;

    return (
      <ContainerDiv>
        { children }
      </ContainerDiv>
    );
  }
}
export default Container;
