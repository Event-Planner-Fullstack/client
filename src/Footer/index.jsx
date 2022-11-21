'use strict';

import logo1 from './img/mail.svg'
import logo2 from './img/phone.svg'

function Footer() {

  return (
    <footer>
      <div className="contact">
        <ul>
          <li className="list">
            <a href="#">
              <span className="icon">
                <img src={logo1} />
              </span>
              <span className="text"> Email </span>
            </a>
          </li>
          <li className="list">
            <a href="#">
              <span className="icon">
                <img src={logo2} />
              </span>
              <span className="text"> Phone </span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
