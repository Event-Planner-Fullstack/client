import React from 'react';
import { Provider } from 'react-redux';
import store from './../src/store';
import Header from './Header/index'
import Footer from './Footer/index';
import Login from './Login/index';


const App = () => {

  return (
    <Provider store={store}>
      <Header />
      <Login />
      <Footer />
    </Provider>
  );
};

export default App;
