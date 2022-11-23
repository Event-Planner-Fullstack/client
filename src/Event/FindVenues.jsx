import { useSelector } from 'react-redux';
import VenueCard from './VenueCard';
import EventForm from './EventForm';

const FindVenues = () => {
  const venueList = useSelector(state => state.venue.userVenues);



  return (
    <>
      {
        venueList.map(venue => (
          <VenueCard key={venue.id} venue={venue}/>
        ))
      }
      <EventForm />
    </>
  )
}

export default FindVenues;