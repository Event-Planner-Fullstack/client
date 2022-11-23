import Header from './Header';
import Homepage from './Pages/Homepage';
import { When } from 'react-if';
import { useSelector } from 'react-redux';
import Venue from './Venue';
import Event from './Event';
import EmptyNav from './Navigation/EmptyNavBar';

const Main = () => {
  const user = useSelector(state => state.user);
  return (
    <>
      <Header />
      <When condition={!user.isAuthenticated}>
        <EmptyNav />
        <Homepage />
      </When>

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
