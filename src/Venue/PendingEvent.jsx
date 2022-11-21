import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import update from '../store/middleware/crud/update';

const PendingEvent = ({ event }) => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user);

  const confirmEvent = (event) => {
    event.confirmed = true;
    console.log(event);
    dispatch(update(user.token, `event/${event.id}`, event));
  }

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={event.imgUrl} />
        <Card.Body>
          <Card.Title>{event.date}</Card.Title>
          <Card.Text>Capacity: {event.estimatedGuestCount}</Card.Text>
          <Card.Text>Security: {event.security}, Cater: {event.cater}</Card.Text>
          <Card.Text>Contact: {event.pocName} at {event.pocNumber} </Card.Text>
        </Card.Body>

        {
          !event.confirmed &&
          <Button onClick={() => confirmEvent(event)}>Confirm</Button>
        }

      </Card>
    </>
  );
}

export default PendingEvent;