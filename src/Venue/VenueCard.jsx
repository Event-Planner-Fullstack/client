import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import deleteOne from './../store/middleware/crud/delete';
import { faTrashCan, faFilePen, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './VenueCard.scss';

const VenueCard = ({ venue }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const clickEditButton = (venue) => {
    dispatch({ type: 'edit_venue_modal' });
    dispatch({ type: 'change_selected_venue', payload: venue })
  }

  const clickDeleteButton = (venue) => {
    dispatch(deleteOne(user.token, `venue/${venue.id}`));
  }
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={venue.imgUrl} />
      <Card.Body>
        <Card.Title>{venue.venueName}</Card.Title>
        <Card.Text>{venue.location}</Card.Text>
        <Card.Text>{venue.hours}</Card.Text>
        <Card.Text>Capacity: {venue.maxCapacityInt}</Card.Text>
        <Card.Text>Security: {venue.security ? 'Yes' : 'No'}, Cater: {venue.cater ? 'Yes' : 'No'}</Card.Text>
        <Card.Text>Contact: {venue.pocName} at {venue.pocNumber} </Card.Text>
        <Button
          className="venueCardButton"
          variant="outline-info"
          onClick={() => clickEditButton(venue)}>
          <FontAwesomeIcon icon={faFilePen}/>Edit</Button>
        <Button
          className="venueCardButton"
          variant="outline-danger"
          onClick={() => clickDeleteButton(venue)}>
          <FontAwesomeIcon icon={faTrashCan}/>Delete
        </Button>
      </Card.Body>
    </Card>
  );
}

export default VenueCard;