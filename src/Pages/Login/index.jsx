'use strict';

import React from 'react';
import UserForm from '../../Forms/User';
import RSVP from '../../Forms/RSVP';
import Container from 'react-bootstrap/Container'

const Login = () => {

  return (
    <>
      <Container className="test">
        <UserForm />
        <RSVP />
      </Container>
    </>
  );
};

export default Login;
