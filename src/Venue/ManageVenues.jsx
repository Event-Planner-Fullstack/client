import VenueForm from "./VenueForm";
import Button from 'react-bootstrap/Button'
import { useDispatch } from 'react-redux';

const ManageVenues = () => {
  const dispatch = useDispatch();

  const addVenueButton = () => {
    dispatch({type: 'add_venue_modal'});
  }

  return (
    <>
      <h1>Manage Venues</h1>
      <Button onClick={addVenueButton}>Add a Venue</Button>
      <VenueForm />
    </>
  )
}

export default ManageVenues;