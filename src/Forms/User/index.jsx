import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import './User.scss';

const LoginForm = () => {

  return (
    <>
      <Container className="form p-2">
        <Nav justify variant="tabs">
          <Nav.Item>
            <Nav.Link>Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Signup</Nav.Link>
          </Nav.Item>
        </Nav>
        <Form  >
          <Row className="m-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <div id="emailHelp" class="form-text">We'll share your email with anyone.</div>
          </Row>
          <Row className="m-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" />
          </Row>
          <button type="submit" class="btn btn-primary  m-3">Submit</button>
        </Form>
      </Container>
    </>
  );
};

export default LoginForm;
