'use strict';

import './index.scss';
import Header from '../../Header';
import Footer from '../../Footer';
import Body from '../../Body';
import ClientNavBar from "../../Navigation";

const Template = () => {

  return (
    <div className="template">
      <Header/>
      <ClientNavBar/>
      <Body/>
      <Footer/>
    </div>
  );
};

export default Template;
