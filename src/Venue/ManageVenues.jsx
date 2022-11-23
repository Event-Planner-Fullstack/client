import VenueForm from "./VenueForm";
import Button from 'react-bootstrap/Button'
import { useDispatch, useSelector } from 'react-redux';
import VenueCard from "./VenueCard";
import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './VenueCard.scss';

const ManageVenues = () => {
  const dispatch = useDispatch();
  
  const venueList = useSelector(state => state.venue.userVenues);

  const addVenueButton = () => {
    dispatch({type: 'add_venue_modal'});
  }

  return (
    <>
      <h1>Manage Venues</h1>
      <Button
        className="venueButton"
        onClick={addVenueButton}
        variant="outline-primary">
        <FontAwesomeIcon icon={faFileCirclePlus}/>Add a Venue
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