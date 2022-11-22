'use strict';

import './EmptyNavBar.scss'

import logo1 from './../img/table.png'

const EmptyNavBar = () => {

  return (
    <>
      <div className="navigation">
        <ul>
          <div className="indicator"></div>
        </ul>
        <div className="navigationLogo">
          <li className="hi">
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

export default EmptyNavBar;
