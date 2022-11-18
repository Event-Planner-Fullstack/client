<<<<<<< HEAD
import React from 'react';
import { Provider } from 'react-redux';
import store from './../src/store';
import Header from './Header/index'
import Footer from './Footer/index';
import Login from './Login/index';
=======
'use strict'

import React from 'react';
import Header from './Header'
import Footer from './Footer';
import Login from './Login';
>>>>>>> 48d8e137ac429c62f46f8f4297f0a797604022e7


const App = () => {

  return (
<<<<<<< HEAD
    <Provider store={store}>
      <Header />
      <Login />
      <Footer />
    </Provider>
=======
    <>
      <Header />
      <Login />
      <Footer />
    </>
>>>>>>> 48d8e137ac429c62f46f8f4297f0a797604022e7
  );
};

export default App;
