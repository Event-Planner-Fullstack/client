import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import signup from './../../store/middleware/signup';
import signin from './../../store/middleware/signin';
import './User.scss';

const LoginForm = () => {
  const dispatch = useDispatch();

  const modals = useSelector(state => state.modals);

  const switchToSignup = () => {
    dispatch({type: 'toggle_login', payload: false});
    dispatch({type: 'toggle_signup', payload: true});
  }

  const switchToLogin = () => {
    dispatch({type: 'toggle_login', payload: true});
    dispatch({type: 'toggle_signup', payload: false});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const userDetails = {
      username: e.target.exampleInputEmail1.value,
      password: e.target.exampleInputPassword1.value,
    };

    if(modals.signup) {
      userDetails.role = 'vendor';
      dispatch(signup(userDetails));
    }
    else dispatch(signin(userDetails));
  }

  return (
    <>
      <Container className="form p-2 mb-5">
        <Nav justify variant="tabs">
          <Nav.Item>
            <Nav.Item onClick={switchToLogin}>Login</Nav.Item>
          </Nav.Item>
          <Nav.Item>
            <Nav.Item onClick={switchToSignup}>Signup</Nav.Item>
          </Nav.Item>
        </Nav>
        <Form onSubmit={handleSubmit} >
          <Form.Group className="m-3">
            <Form.Label htmlFor="exampleInputEmail1" className="form-label">Email address</Form.Label>
            <Form.Control type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <Form.Text id="emailHelp" className="form-text">We'll share your email with anyone.</Form.Text>
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label htmlFor="exampleInputPassword1" className="form-label">Password</Form.Label>
            <Form.Control type="password" className="form-control" id="exampleInputPassword1" />
          </Form.Group>
          <Button type="submit" className="btn btn-primary m-3">Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default LoginForm;
