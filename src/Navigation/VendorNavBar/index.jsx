'use strict'

import { useState } from 'react';
import logo1 from './img/home.svg'
import logo2 from './img/tray-empty.svg';
import logo3 from './img/tray-full.svg';
import logo4 from './img/calendar.svg';
import logo5 from './img/settings.svg';
import './index.scss'

const VendorNavBar = () => {

  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    // 👇️ toggle isActive state on click
    setIsActive(current => !current);
  };


  return (
    <>
      <body>
      <div className="navigation">
        <ul>
          <li className={isActive ? " " : "list active"} onClick={handleClick}>
            <a href="#">
              <span className="icon">
                <img src={logo1} />
              </span>
              <span className="text"> Home </span>
            </a>
          </li>
          <li className={isActive ? "list active" : " "} onClick={handleClick}>
            <a href="#">
              <span className="icon">
                <img src={logo2} />
              </span>
              <span className="text"> Requests </span>
            </a>
          </li>
          <li className={isActive ? "list active" : " "} onClick={handleClick}>
            <a href="#">
              <span className="icon">
                <img src={logo3} />
              </span>
              <span className="text"> Requests </span>
            </a>
          </li>
          <li className={isActive ? "list active" : " "} onClick={handleClick}>
            <a href="#">
              <span className="icon">
                <img src={logo4} />
              </span>
              <span className="text"> Calendar </span>
            </a>
          </li>
          <li className={isActive ? "list active" : " "} onClick={handleClick}>
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
      </body>
    </>
  );
};

export default VendorNavBar;
