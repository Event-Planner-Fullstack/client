'use strict'

import { useState } from 'react';
import logo1 from './img/table.png'
import logo2 from './img/tray-empty.svg';
import logo3 from './img/location.svg';
import logo4 from './img/calendar.svg';
import logo5 from './img/person.svg';
import './ClientNavBar.scss'

const ClientNavBar = () => {

  const [isActive, setIsActive] = useState('home');

  const handleClick = item => {
    setIsActive(item);
  };

  return (
    <>
      <div className="navigation">
        <ul>
          <li className={isActive === "requests" ? "list active" : " "} onClick={() => handleClick('requests')}>
            <a href="#">
              <span className="icon">
                <img src={logo2} />
              </span>
              <span className="text"> Requests </span>
            </a>
          </li>
          <li className={isActive === 'locations' ? "list active" : " "} onClick={() => handleClick('locations')}>
            <a href="#">
              <span className="icon">
                <img src={logo3} />
              </span>
              <span className="text"> Venue Locations </span>
            </a>
          </li>
          <li className={isActive === 'calendar' ? "list active" : " "} onClick={() => handleClick('calendar')}>
            <a href="#">
              <span className="icon">
                <img src={logo4} />
              </span>
              <span className="text"> Home </span>
            </a>
          </li>
          <li className={isActive === 'settings' ? "list active" : " "} onClick={() => handleClick('settings')}>
            <a href="#">
              <span className="icon">
                <img src={logo5} />
              </span>
              <span className="text"> Account Settings </span>
            </a>
          </li>
        <div class="indicator"></div>
        
        </ul >
      </div >
      <div className={isActive === 'home' ? "list active" : " "} onClick={() => handleClick('home')}>
          <a href="#">
            <span className="logo">
              <img src={logo1} />
            </span>
            <span className="textLogo"> Home </span>
          </a>
        </div>
    </>
  );
};

export default ClientNavBar;
