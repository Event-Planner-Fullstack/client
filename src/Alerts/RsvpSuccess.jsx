import Alert from 'react-bootstrap/Alert';
import { useSelector } from 'react-redux';

const RsvpSuccess = () => {

  const rsvpSuccess = useSelector(state => state.guest.rsvpSuccess);

  return (
    <Alert key='success' variant='success' show={rsvpSuccess} >
      <p>You have successfully RSVP to this event!</p>
    </Alert>
  )
}

export default RsvpSuccess;