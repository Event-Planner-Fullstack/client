import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';

const VenueCard = ({ venue }) => {
  const dispatch = useDispatch();

  const clickEditButton = (venue) => {
    dispatch({type: 'edit_venue_modal'});
    dispatch({type: 'change_selected_venue', payload: venue})
  }

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={venue.imgUrl} />
      <Card.Body>
        <Card.Title>{venue.venueName}</Card.Title>
        <Card.Text>{venue.location}</Card.Text>
        <Card.Text>{venue.hours}</Card.Text>
        <Card.Text>Capacity: {venue.maxCapacityInt}</Card.Text>
        <Card.Text>Security: {venue.security}, Cater: {venue.cater}</Card.Text>
        <Card.Text>Contact: {venue.pocName} at {venue.pocNumber} </Card.Text>
        <Button variant="primary" onClick={() => clickEditButton(venue)}>Edit</Button>
      </Card.Body>
    </Card>
  );
}

export default VenueCard;