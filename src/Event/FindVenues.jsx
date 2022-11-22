import { useSelector } from 'react-redux';
import VenueCard from './VenueCard';

const FindVenues = () => {
  const venueList = useSelector(state => state.venue.userVenues);



  return (
    <>
      <header>Find Venues</header>
      {
        venueList.map(venue => (
          <VenueCard key={venue.id} venue={venue}/>
        ))
      }
    </>
  )
}

export default FindVenues;