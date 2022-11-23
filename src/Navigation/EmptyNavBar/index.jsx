'use strict';

import './EmptyNavBar.scss'

import logo1 from './../img/table.png'

const EmptyNavBar = () => {

  return (
    <>
      <div className="emptyNav">
        <ul>
          <div className="emptyIndicator"></div>
        </ul>
        <div className="emptyNavLogo">
          <li className="emptyLi">
            <a href="#">
              <span className="tempLogo">
                <img src={logo1} />
              </span>
              <span className="emptyLogo"> Home </span>
            </a>
          </li>
        </div>
      </div >
    </>
  );
};

export default EmptyNavBar;
