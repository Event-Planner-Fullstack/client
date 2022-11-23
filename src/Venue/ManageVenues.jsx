import VenueForm from "./VenueForm";
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
      <button
        className="venueButton"
        onClick={addVenueButton}
        variant="outline-primary">
        <FontAwesomeIcon icon={faFileCirclePlus}/> Add a Venue
      </button>
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
