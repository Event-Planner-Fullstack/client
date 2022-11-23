import axios from 'axios';

function getSignInPayload(user) {
  return {
    type: 'login',
    payload: {
      user: {
        username: user.user.username,
        id: 1,
        role: user.user.role,
        token: user.user.token,
      },
      token: user.token,
    }
  }
}

const getUser = async (auth) => {
  try {
    const config = {
      method: 'post',
      url: `${process.env.REACT_APP_SERVER}/signin`,
      auth: auth,
    }
    const response = await axios(config);
    return response.data;

  } catch (e) { console.log('sign in error'); }
}

function signin(auth) {
  return async function (dispatch) {
    try {
      const user = await getUser(auth);
      return dispatch(getSignInPayload(user));
    } catch (e) {
      return dispatch({ type: 'change_error_status', payload: true });
    }
  }
}

export default signin;