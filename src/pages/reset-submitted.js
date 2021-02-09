import React from 'react';

import styled from 'styled-components';
import Layout from '@common/Layout';
import { Container } from '@components/global';
import Navbar from '@common/Navbar';

const Submitted = props => {
  return (
    <Layout>
      <Navbar />
      <Container>
        <Wrapper>
          <h4>Password reset submitted!</h4>
        </Wrapper>
      </Container>
    </Layout>
  );
};

const Wrapper = styled.div`
  padding-top: 96px;

  @media (max-width: ${props => props.theme.screen.md}) {
    padding-top: 128px;
  }
`;

const FormDiv = styled.form`
  padding: 24px;
  outline: 1px solid;
  margin: 12px;
`;

export default Submitted;
