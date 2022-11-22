import React from 'react';
import UserForm from '../../Forms/User';
import RSVP from '../../Forms/RSVP';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Brand from '../../Brand';
import CarouselPage from '../../Carousel';
import Calendar from '../Calendar';
import './Login.scss';

const Login = () => {

  return (
    <>
      <Container fluid className="splash">
        <Row className="page">
          <Col className="brand">
            <Brand/>
            {/* <Calendar/> */}
            <CarouselPage className="carousel"/>
          </Col>
          <Col xs={4} className="login">
            <UserForm />
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
