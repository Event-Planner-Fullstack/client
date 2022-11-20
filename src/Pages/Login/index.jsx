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
      <Container fluid className="splash">
        <Row className="page">
          <Col className="brand">
            <Row style={{ border: " 2px solid red" }}>
              eventplanner
            </Row>
            <Row style={{ border: " 2px solid red" }} >
              <p>eventplanner</p>
            </Row>
          </Col>
          <Col xs={4} className="login">
            <UserForm />
            <RSVP />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
