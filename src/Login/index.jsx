'use strict';

import React from 'react';
import GuestRSVP from '../Forms/guestRSVP';
import LoginForm from '../Forms/signUp';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Login = () => {

  return (
    <>
      <div class="container-sm">
        <LoginForm />
      </div>
    </>
  );
};

export default Login;
