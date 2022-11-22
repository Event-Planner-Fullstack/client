'use strict';

import "./LoginForm.scss";
import Button from 'react-bootstrap/Button';
import { Container, Form } from 'react-bootstrap';


function LoginForm() {
  return (
    <Form className="loginForm">
      <Form.Group className="emailGroup" controlId="formBasicEmail">
        <Form.Label>Email address: </Form.Label>
        <Form.Control type="email" placeholder="example@gmail.com" />
      </Form.Group>

      <Form.Group className="passwordGroup" controlId="formBasicPassword">
        <Form.Label>Password: </Form.Label>
        <Form.Control type="password" placeholder="password" />
      </Form.Group>

      <Button className="loginBtn" variant="primary" type="submit">
        Login
      </Button>
    </Form>
  );
}

export default LoginForm;