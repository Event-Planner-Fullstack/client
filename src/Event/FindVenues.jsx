import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import readAll from './../store/middleware/crud/readAll';
import VenueCard from './VenueCard';

const FindVenues = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user);
  const venueList = useSelector(state => state.venue.userVenues);

  useEffect(() => {
    dispatch(readAll(user.token, 'venue'));
  }, []);

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