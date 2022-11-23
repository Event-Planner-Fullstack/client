import React from 'react';
import LoginModal from '../../Forms/LoginModal';
import Col from 'react-bootstrap/Col';
import CarouselPage from '../../Carousel';
import EmptyNavBar from '../../Navigation/EmptyNavBar';
import RSVP from '../../Forms/RSVP';
import './../Homepage/Homepage.scss'

const Login = () => {

  return (
    <>
      <EmptyNavBar />
        <div className="appTitle"> Event Planner Co. </div>
        <div className="info">
          <CarouselPage className="carousel" />
        </div>
      <RSVP/>

      <Col xs={4} className="login">
        <LoginModal />
      </Col>

    </>
  );
};

export default Login;
