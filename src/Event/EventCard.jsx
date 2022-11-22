import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import EventForm from './EventForm';
import { When } from 'react-if';
import { getFormattedString } from './../utility/format-date';

const EventCard = ({ event }) => {

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={event.imgUrl} />
        <Card.Body>
          <Card.Title>{getFormattedString(event.date)}</Card.Title>
          <When condition={event.confirmed}><Card.Text>INVITE CODE: {event.inviteCode}</Card.Text></When>
          <Card.Text>Capacity: {event.estimatedGuestCount}</Card.Text>
          <Card.Text>Security: {event.security}, Cater: {event.cater}</Card.Text>
          <Card.Text>Contact: {event.pocName} at {event.pocNumber} </Card.Text>
        </Card.Body>
        <When condition={event.confirmed}>
          <Button>View Guest List</Button>
          <Button>Venue Details</Button>
        </When>
      </Card>
      <EventForm />
    </>
  );
}

export default EventCard;