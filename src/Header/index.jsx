import { useDispatch, useSelector } from 'react-redux';
import { When } from 'react-if';
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
        <button class="loginBtn" onClick={showLoginForm}>Login</button>
      </When>

      <When condition={user.isAuthenticated}>
        <button class="logoutBtn" onClick={logout}>Logout</button>
      </When>
    </header>
  );
};

export default Header;
