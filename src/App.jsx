import React from 'react';
import Header from './Header'
import Footer from './Footer';
import Login from './Login';


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
