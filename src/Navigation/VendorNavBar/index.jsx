'use strict'

import { useState } from 'react';
import logo1 from './img/home.svg'
import logo2 from './img/tray-empty.svg';
import logo3 from './img/calendar.svg';
import logo4 from './img/settings.svg';
import './VendorNavBar.scss'

const VendorNavBar = () => {

  const [isActive, setIsActive] = useState('home');

  const handleClick = item => {
    setIsActive(item);
  };

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
          <li className={isActive === 'Requests' ? "list active" : " "} onClick={() => handleClick('Requests')}>
            <a href="#">
              <span className="icon">
                <img src={logo2} />
              </span>
              <span className="text"> Requests </span>
            </a>
          </li>
          <li className={isActive === 'Calendar' ? "list active" : " "} onClick={() => handleClick('Calendar')}>
            <a href="#">
              <span className="icon">
                <img src={logo3} />
              </span>
              <span className="text"> Calendar </span>
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

export default VendorNavBar;
