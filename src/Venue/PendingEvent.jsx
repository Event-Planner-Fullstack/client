import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import update from '../store/middleware/crud/update';
import { getFormattedString } from '../utility/format-date';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const PendingEvent = ({ event }) => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user);
  const venueList = useSelector(state => state.venue.venueList);

  const confirmEvent = (event) => {
    event.confirmed = true;
    event.guestList = [];
    dispatch(update(user.token, `event/${event.id}`, event));
  }

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={event.imgUrl} />
        <Card.Body>
          <Card.Title>{getFormattedString(event.date)}</Card.Title>
          <Card.Text>Capacity: {event.estimatedGuestCount}</Card.Text>
          <Card.Text>Security: {event.security ? 'Yes' : 'No'}, Cater: {event.cater ? 'Yes' : 'No'}</Card.Text>
          <Card.Text>Contact: {event.pocName} at {event.pocNumber} </Card.Text>
        </Card.Body>

        {
          !event.confirmed &&
          <Button
            variant="outline-primary"
            onClick={() => confirmEvent(event)}>
              <FontAwesomeIcon icon={faCircleCheck}/>Confirm</Button>
        }

      </Card>
    </>
  );
}

export default PendingEvent;
