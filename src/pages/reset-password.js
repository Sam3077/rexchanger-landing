import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';

import styled from 'styled-components';
import Layout from '@common/Layout';
import { Container } from '@components/global';
import Navbar from '@common/Navbar';
import * as querystring from 'querystring';
import { request } from 'http';

const API_BASE = 'localhost';
const PORT = 8000;
const ResetPassword = props => {
  const [valid, setValid] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const search = props.location.search.replace('?', '', 1);
  const query = querystring.parse(search);

  useEffect(() => {
    if (query['token'] === null) {
      setValid(false);
    } else {
      const data = JSON.stringify({
        token: query['token'],
      });
      const req = request(
        {
          host: API_BASE,
          port: PORT,
          path: '/reset_password/validate_token/',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': data.length,
          },
        },
        res => {
          setValid(res.statusCode === 200);
        }
      );
      req.write(data);
      req.end();
    }
  });

  const onSubmit = event => {
    const form = event.currentTarget;
    if (form.password.value !== form.password2.value) {
      setPasswordError('Passwords do not match');
      event.preventDefault();
      return;
    }

    setValid(null);
    const data = JSON.stringify({
      token: form.token.value,
      password: form.password.value,
    });
    const req = request(
      {
        host: API_BASE,
        port: PORT,
        path: '/reset_password/confirm/',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': data.length,
        },
      },
      res => {
        if (res.statusCode >= 200 && res.statusCode <= 299) {
          window.location.href = '/reset-submitted';
        } else {
          setValid(true);
          setPasswordError('An error occurred. Please try again');
        }
      }
    );
    req.write(data);
    req.end();
    event.preventDefault();
  };

  return (
    <Layout>
      <Navbar />
      <Container>
        <Wrapper>
          <h2>Password reset form</h2>
          {valid === true ? (
            <FormDiv onSubmit={onSubmit}>
              <label for="password">New password</label>
              <br />
              <br />
              <input type="password" name="password" />
              <br />
              <br />
              <label for="password2">Confirm new password</label>
              <br />
              <br />
              <input type="password" name="password2" />
              <br />
              <br />
              <input type="hidden" name="token" value={query.token} />
              {passwordError !== null ? (
                <Error>{passwordError}</Error>
              ) : (
                <div />
              )}
              <input type="submit" value="Submit" />
            </FormDiv>
          ) : valid === false ? (
            <h4>Link is no longer valid</h4>
          ) : (
            <div />
          )}
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

const Error = styled.p`
  color: red;
  font-size: 18px;
  margin-bottom: 12px;
`;
export default ResetPassword;
