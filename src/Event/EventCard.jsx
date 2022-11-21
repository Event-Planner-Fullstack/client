import Card from 'react-bootstrap/Card';
import EventForm from './EventForm';

const EventCard = ({ event }) => {

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
      </Card>
      <EventForm />
    </>
  );
}

export default EventCard;