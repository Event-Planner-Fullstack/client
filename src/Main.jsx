import Header from './Header';
import Login from './Pages/Login';
import { When } from 'react-if';
import { useSelector } from 'react-redux';
import Venue from './Venue';
import Event from './Event';
import EmptyNav from './Navigation/EmptyNavBar';
import Template from './Pages/Template';
import Footer from './Footer';

const Main = () => {
  const user = useSelector(state => state.user);
  return (
    <>
      <Header />

      <When condition={!user.isAuthenticated}>
        <Login />
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
