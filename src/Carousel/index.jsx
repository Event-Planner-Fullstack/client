'use strict';

import closeUpBook from '../Images/closeUpBook.jpg';
import roses from '../Images/roses.jpg';
import customizing from '../Images/customizing.jpg';
import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.scss';

const CarouselPage = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="images"
          src={closeUpBook}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Welcome to the Event Planer</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="images"
          src={roses}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>At Event Planner we beautify everything</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="images"
          src={customizing}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>You can customize the dates and who you want to invite.</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      {/* <header>header</header> */}
    </div>
  );
};

export default CarouselPage;