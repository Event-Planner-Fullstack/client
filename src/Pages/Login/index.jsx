import React from 'react';
import LoginModal from '../../Forms/LoginModal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Brand from '../../Brand';
import CarouselPage from '../../Carousel';
import './Login.scss';

const Login = () => {

  return (
    <>
      <Container fluid className="splash">
        <Row className="page">
          <Col className="brand">
            <Brand/>
            <CarouselPage className="carousel"/>
          </Col>
          <Col xs={4} className="login">
            <LoginModal />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Login;
