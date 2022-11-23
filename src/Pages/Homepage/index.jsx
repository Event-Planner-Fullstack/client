import React from 'react';
import LoginModal from '../../Forms/LoginModal';
import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
import CarouselPage from '../../Carousel';
import RSVP from '../../Forms/RSVP'
import '../../Body/Body.scss';
import './Homepage.scss';

const Homepage = () => {

  return (
    <>
      <LoginModal />
      <Container fluid className="info">
        <CarouselPage />
        <RSVP />
      </Container>
    </>
  );
};

export default Homepage;
