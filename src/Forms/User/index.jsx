import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './User.scss';

const LoginForm = () => {

  return (
    <>
      <Container className="form p-2 mb-5">
        <Nav justify variant="tabs">
          <Nav.Item>
            <Nav.Link>Login</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>Signup</Nav.Link>
          </Nav.Item>
        </Nav>
        <Form  >
          <Form.Group className="m-3">
            <Form.Label for="exampleInputEmail1" class="form-label">Email address</Form.Label>
            <Form.Control type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <Form.Text id="emailHelp" class="form-text">We'll share your email with anyone.</Form.Text>
          </Form.Group>
          <Form.Group className="m-3">
            <Form.Label for="exampleInputPassword1" class="form-label">Password</Form.Label>
            <Form.Control type="password" class="form-control" id="exampleInputPassword1" />
          </Form.Group>
          <Button type="submit" className="btn btn-primary m-3">Submit</Button>
        </Form>
      </Container>
    </>
  );
};

export default LoginForm;
