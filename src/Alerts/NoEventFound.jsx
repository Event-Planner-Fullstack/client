import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';

const NoEventFound = () => {
  const rsvpError = useSelector(state => state.guest.rsvpError);

  return (
    <Alert key='danger' variant='danger' show={rsvpError}>
      <Alert.Heading>Error</Alert.Heading>
      <p>Please double check the invite code</p>
      <p>You cannot RSVP to and event twice</p>
    </Alert>
  )
}

export default NoEventFound;