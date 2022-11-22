// import Header from './Header';
import Footer from './Footer';
import Login from './Pages/Login';
import { When } from 'react-if';
import { useSelector } from 'react-redux';
import Venue from './Venue';
import Event from './Event';

const Main = () => {
  const user = useSelector(state => state.user);
  return (
    <>
      {/* <Header /> */}

      <When condition={!user.isAuthenticated}><Login /></When>

      <When condition={user.isAuthenticated && user.user.role === 'vendor'}>
        <Venue />
      </When>

      <When condition={user.isAuthenticated && user.user.role === 'client'}>
        <Event />
      </When>
    </>
  )
}

export default Main;
