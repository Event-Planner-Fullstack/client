import { useDispatch, useSelector } from 'react-redux';
import { When } from 'react-if';
// import RSVP from './../Forms/RSVP';
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
        <button className="loginBtn" onClick={showLoginForm}>Login</button>
      </When>

      <When condition={user.isAuthenticated}>
        <button className="logoutBtn" onClick={logout}>Logout</button>
      </When>
      {/* <RSVP /> */}
    </header>
  );
};


export default Header;
