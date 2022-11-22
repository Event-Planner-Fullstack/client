'use strict'

import { useState } from 'react';
import icon1 from './img/table.png'
import icon2 from './img/tray-empty.svg';
import icon3 from './img/location.svg';
import icon4 from './img/calendar.svg';
import icon5 from './img/person.svg';
import './ClientNavBar.scss'

const ClientNavBar = () => {

  const [isActive, setIsActive] = useState('home');

  const handleClick = e => {
    setIsActive(e);
  };

  return (
    <>
      <div className="navigation">
        <ul>
          <li className={isActive === "inbox" ? "list active" : " "} onClick={() => handleClick('inbox')}>
            <a href="#">
              <span className="icon">
                <img src={icon2} />
              </span>
              <span className="text"> Inbox </span>
            </a>
          </li>

          <li className={isActive === 'venues' ? "list active" : " "} onClick={() => handleClick('venues')}>
            <a href="#">
              <span className="icon">
                <img src={icon3} />
              </span>
              <span className="text"> Venues </span>
            </a>
          </li>

          <li className={isActive === 'calendar' ? "list active" : " "} onClick={() => handleClick('calendar')}>
            <a href="#">
              <span className="icon">
                <img src={icon4} />
              </span>
              <span className="text"> Calendar </span>
            </a>
          </li>

          <li className={isActive === 'account' ? "list active" : " "} onClick={() => handleClick('account')}>
            <a href="#">
              <span className="icon">
                <img src={icon5} />
              </span>
              <span className="text"> Account </span>
            </a>
          </li>
          <div class="indicator"></div>
        </ul >
        
        <div className="navigationLogo">
        <li className={isActive === 'home' ? "list active" : " "} onClick={() => handleClick('home')}>
          <a href="#">
            <span className="logo">
              <img src={icon1} />
            </span>
            <span className="text"> Home </span>
          </a>
        </li>
      </div>
      </div >

    </>
  );
};

export default ClientNavBar;
