import React from 'react';
import LoginModal from '../../Forms/LoginModal';
import Col from 'react-bootstrap/Col';
import CarouselPage from '../../Carousel';
import EmptyNavBar from '../../Navigation/EmptyNavBar';
import RSVP from '../../Forms/RSVP';
import './Login.scss';

const Login = () => {

  return (
    <>
      <EmptyNavBar />
      <body>
        <div class="info">
          <CarouselPage className="carousel" />
        </div>
      </body>
      <RSVP/>

      <Col xs={4} className="login">
        <LoginModal />
      </Col>

    </>
  );
};

export default Login;
