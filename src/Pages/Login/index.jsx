import React from 'react';
import UserForm from '../../Forms/User';
import RSVP from '../../Forms/RSVP';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Login.scss';

const Login = () => {

  return (
    <>
      <Row className="page">
        <Col>
          <p>helloworld</p>
        </Col>
        <Col xs={4} className="login">
          <UserForm />
          <RSVP />
        </Col>
      </Row>
    </>
  );
};

export default Login;
