import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import deleteOne from './../store/middleware/crud/delete';
import './VenueCard.scss';

const VenueCard = ({ venue }) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const clickEditButton = (venue) => {
    dispatch({ type: 'edit_venue_modal' });
    dispatch({ type: 'change_selected_venue', payload: venue })
  }

  // const clickDeleteButton = (venue) => {
  //   dispatch(deleteOne(user.token, `venue/${venue.id}`));
  // }

  console.log(venue);

  return (
    <div className="Cards">
      <Card>
        <Card.Img
          variant="top"
          src={venue.imgUrl}
          alt="Venue Image"
          />
        <Card.Body>
          <Card.Title>{venue.venueName}</Card.Title>
          <Card.Text>{venue.location}</Card.Text>
          <Card.Text>{venue.hours}</Card.Text>
          <Card.Text>Capacity: {venue.maxCapacityInt}</Card.Text>
          <Card.Text>Security: {venue.security}, Cater: {venue.cater}</Card.Text>
          <Card.Text>Contact: {venue.pocName} at {venue.pocNumber} </Card.Text>
          <Button variant="outline-primary"
            onClick={() => clickEditButton(venue)}>
            Edit
          </Button>
          {/* <Button variant="primary" onClick={() => clickDeleteButton(venue)}>Delete</Button> */}
        </Card.Body>
      </Card>
    </div>
  );
}

export default VenueCard;