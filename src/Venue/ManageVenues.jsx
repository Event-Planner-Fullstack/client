import VenueForm from "./VenueForm";
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import readAll from './../store/middleware/crud/readAll';
import VenueCard from "./VenueCard";

const ManageVenues = () => {
  const dispatch = useDispatch();
  
  const user = useSelector(state => state.user.user);
  const venueList = useSelector(state => state.venue.userVenues);

  useEffect(() => {
    dispatch(readAll(user.token, `venue/${user.id}`));
    console.log(venueList);
  })

  const addVenueButton = () => {
    dispatch({type: 'add_venue_modal'});
  }

  return (
    <>
      <h1>Manage Venues</h1>
      <Button onClick={addVenueButton}>Add a Venue</Button>
      <VenueForm />

      {
        venueList.map(venue => (
          <VenueCard key={venue.id} venue={venue} />
        ))
      }
    </>
  )
}

export default ManageVenues;