'use strict'

import { useState } from 'react';
import logo1 from './img/home.svg'
import logo2 from './img/tray-empty.svg';
import logo3 from './img/location.svg';
import logo4 from './img/settings.svg';
import './index.scss'

const ClientNavBar = () => {

  const [isActive, setIsActive] = useState('home');

  const handleClick = item => {
    // 👇️ toggle isActive state on click
    setIsActive(item);
  };
  console.log(isActive)
  return (
    <>
        <div className="navigation">
          <ul>
            <li className={isActive === 'home' ? "list active" : " "} onClick={() => handleClick('home')}>
              <a href="#">
                <span className="icon">
                  <img src={logo1} />
                </span>
                <span className="text"> Home </span>
              </a>
            </li>
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
            <li className={isActive === 'settings' ? "list active" : " "} onClick={() => handleClick('settings')}>
              <a href="#">
                <span className="icon">
                  <img src={logo4} />
                </span>
                <span className="text"> Account Settings </span>
              </a>
            </li>
            <div class="indicator"></div>
          </ul >
        </div >
    </>
  );
};

export default ClientNavBar;
