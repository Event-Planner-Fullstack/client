import Header from './Header';
import Homepage from './Pages/Homepage';
import { When } from 'react-if';
import { useSelector } from 'react-redux';
import Venue from './Venue';
import Event from './Event';
import Footer from './Footer';
import Login from './Pages/Login'
// import './Pages/Login/Login.scss';

const Main = () => {
  const user = useSelector(state => state.user);
  return (
    <>
      <Header />
      <When condition={!user.isAuthenticated}>
        <Homepage />
      </When>

      <When condition={user.isAuthenticated && user.user.role === 'vendor'}>
        <Venue />
      </When>

      <When condition={user.isAuthenticated && user.user.role === 'client'}>
        <Event />
      </When>
      <Footer />
    </>
  )
}

export default Main;
