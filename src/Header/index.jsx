import { useDispatch, useSelector } from 'react-redux';
import { When } from 'react-if';
import RSVP from './../Forms/RSVP';
import './Header.scss';

const Header = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user);

  const showLoginForm = () => {
    dispatch({ type: 'login_modal' });
  }

  const logout = () => {
    dispatch({ type: 'logout' });
  }

  return (
    <header>
      <When condition={!user.isAuthenticated}>
        <button onClick={showLoginForm}>Login</button>
        <RSVP/>
      </When>

      <When condition={user.isAuthenticated}>
        <button onClick={logout}>Logout</button>
      </When>
    </header>
  );
};

export default Header;
