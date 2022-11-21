'use strict';

import './index.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import ClientNavBar from '../../Navigation/ClientNavBar';

const Template = () => {

  return (
    <div className="template">
      <Header/>
      <ClientNavBar/>
      <body>BODY</body>
      <Footer/>
    </div>
  );
};

export default Template;
