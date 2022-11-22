import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const GuestForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const guestObj = {
      item: 'guest',
      name: e.target.name.value,
      email: e.target.email.value,
      inviteCode: e.target.inviteCode.value,
    }

    console.log(guestObj);
  }

  return (
    <Form onSubmit={handleSubmit}>

      <Form.Group className="mb-3" controlId="inviteCode">
        <Form.Label>Invite Code</Form.Label>
        <Form.Control type="text" placeholder="Invite Code"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Full Name</Form.Label>
        <Form.Control type="text" placeholder="Full Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>


      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  )
}

export default GuestForm