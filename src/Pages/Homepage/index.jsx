import React from 'react';
import LoginModal from '../../Forms/LoginModal';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import CarouselPage from '../../Carousel';
import EmptyNavBar from './../../Navigation/EmptyNavBar';
import RSVP from '../../Forms/RSVP'
import '../../Body/Body.scss';
import './Homepage.scss';

const Homepage = () => {

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

export default Homepage;
