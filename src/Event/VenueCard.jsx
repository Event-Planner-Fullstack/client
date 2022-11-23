import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EventForm from './EventForm';

const VenueCard = ({ venue }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const requestEvent = (venue) => {
    dispatch({ type: 'add_event_modal' });
    dispatch({ type: 'change_selected_venue', payload: venue })
  }

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={venue.imgUrl} />
        <Card.Body>
          <Card.Title>{venue.venueName}</Card.Title>
          <Card.Text>{venue.location}</Card.Text>
          <Card.Text>{venue.hours}</Card.Text>
          <Card.Text>Capacity: {venue.maxCapacityInt}</Card.Text>
          <Card.Text>Security: {venue.security}, Cater: {venue.cater}</Card.Text>
          <Card.Text>Contact: {venue.pocName} at {venue.pocNumber} </Card.Text>

          <Button
            variant="outline-primary"
            onClick={() => requestEvent(venue)}>
            <FontAwesomeIcon icon={faShare}/>Request Event
          </Button>

        </Card.Body>
      </Card>
      <EventForm />
    </>
  );
}

// <FontAwesomeIcon icon="fa-duotone fa-mailbox-flag-up" />

export default VenueCard;