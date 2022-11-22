import { useState } from 'react';
import logo1 from './../img/table.png'
import logo2 from './../img/tray-empty.svg';
import logo3 from './../img/location.svg';
import logo4 from './../img/settings.svg';
import './ClientNavBar.scss'

const ClientNavBar = ({ setPage }) => {

  const [isActive, setIsActive] = useState('home');

  const handleClick = item => {
    setIsActive(item);
    // setPage(item);
  };

  return (
    <>
      <div className="navigation">
        <ul>
          <li className={isActive === "find-venues" ? "list active" : " "} onClick={() => handleClick('find-venues')}>
            <a href="#">
              <span className="icon">
                <img src={logo2} />
              </span>
              <span className="text"> Find Venues </span>
            </a>
          </li>
          <li className={isActive === 'requested-events' ? "list active" : " "} onClick={() => handleClick('requested-events')}>
            <a href="#">
              <span className="icon">
                <img src={logo3} />
              </span>
              <span className="text"> Requested Events </span>
            </a>
          </li>


          <li className={isActive === 'confirmed-events' ? "list active" : " "} onClick={() => handleClick('confirmed-events')}>
            <a href="#">
              <span className="icon">
                <img src={logo4} />
              </span>
              <span className="text"> Confirmed Events </span>
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

export default ClientNavBar;
