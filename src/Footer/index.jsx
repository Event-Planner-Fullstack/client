'use strict';

import './Footer.scss';
import pic1 from './img/wood-center.jpg';

const Footer = () => {
    return (
        <footer>
            <div class="footerInfo">
                <ul>
                    <li>
                        <div class="imageContainer">
                            <img src={pic1} />
                        </div>
                    </li>

                    <li>
                        <div class="imageContainer">
                            <img src={pic1} />
                        </div>
                    </li>

                    <li>
                        <div class="imageContainer">
                            <img src={pic1} />
                        </div>
                    </li>

                    {/* <li>
                        <div class="footerText">
                            <p>2310 S Lane St, Seattle, WA 98144</p>
                            <p>M-F: 8AM-4PM <br />
                                Weekends: Closed</p>
                            <p>(206) 934-5460</p>
                        </div>
                    </li> */}
                </ul>
            </div>
        </footer>
    );
};

export default Footer;