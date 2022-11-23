import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';

const InvalidSignUp = () => {
  const loginError = useSelector(state => state.user.loginError);
  
  return (
    <Alert key='danger' variant='danger' show={loginError} >
      <p>Invalid Login</p>
    </Alert>
  )
}

export default InvalidSignUp;