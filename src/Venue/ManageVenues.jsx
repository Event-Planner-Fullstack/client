import VenueForm from "./VenueForm";
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import readAll from './../store/middleware/crud/readAll';
import VenueCard from "./VenueCard";
import './VenueCard.scss';

const ManageVenues = () => {
  const dispatch = useDispatch();
  
  const user = useSelector(state => state.user.user);
  const venueList = useSelector(state => state.venue.userVenues);

  useEffect(() => {
    dispatch(readAll(user.token, `venue/user/${user.id}`));
    dispatch(readAll(user.token, `event/venue/${user.id}`));
  }, [])

  const addVenueButton = () => {
    dispatch({type: 'add_venue_modal'});
  }

  return (
    <>
      <h1>Manage Venues</h1>
      <Button 
        onClick={addVenueButton}
        variant="outline-primary">
        Add a Venue
      </Button>
      <VenueForm />

      <div className="venueCards">
        {
          venueList.map(venue => (
              <VenueCard key={venue.id} venue={venue} />
              ))
        }
      </div>
    </>
  )
}

export default ManageVenues;