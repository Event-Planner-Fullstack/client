'use strict'

import { useState } from 'react';
import logo1 from './../img/table.png'
import logo2 from './../img/tray-empty.svg';
import logo3 from './../img/calendar.svg';
import logo4 from './../img/settings.svg';
import './../ClientNavBar/ClientNavBar.scss'

const VendorNavBar = ({ setPage }) => {

  const [isActive, setIsActive] = useState('home');

  const handleClick = item => {
    setIsActive(item);
    setPage(item);
  };

  return (
    <>
      <div className="navigation">
        <ul>
          {/* <li className={isActive === 'home' ? "list active" : " "} onClick={() => handleClick('home')}>
            <a href="#">
              <span className="icon">
                <img src={logo1} />
              </span>
              <span className="text"> Home </span>
            </a>
          </li> */}

          <li className={isActive === 'manage-venues' ? "list active" : " "} onClick={() => handleClick('manage-venues')}>
            <a href="#">
              <span className="icon">
                <img src={logo2} />
              </span>
              <span className="text"> Manage Venues </span>
            </a>
          </li>

          <li className={isActive === 'pending-requests' ? "list active" : " "} onClick={() => handleClick('pending-requests')}>
            <a href="#">
              <span className="icon">
                <img src={logo3} />
              </span>
              <span className="text"> Pending Requests </span>
            </a>
          </li>

          <li className={isActive === 'upcoming-events' ? "list active" : " "} onClick={() => handleClick('upcoming-events')}>
            <a href="#">
              <span className="icon">
                <img src={logo4} />
              </span>
              <span className="text"> Upcoming Events </span>
            </a>
          </li>
          <div className="indicator"></div>
        </ul >

        <div className="navigationLogo">
          <li className={isActive === 'home' ? "list active" : " "} onClick={() => handleClick('home')}>
            <a href="#">
              <span className="logo">
                <img src={logo1} />
              </span>
              <span className="text"> Home </span>
            </a>
          </li>
        </div>
      </div >
    </>
  );
};

export default VendorNavBar;
