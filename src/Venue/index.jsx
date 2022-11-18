import { useState } from 'react';
import { When } from 'react-if';
import ManageVenues from './ManageVenues';
import PendingRequests from './PendingRequests';
import UpcomingEvents from './UpcomingEvents';
import VenueNav from './VenueNav';


const Venue = () => {
  const [page, setPage] = useState('manage-venues');

  return (
    <>
      <VenueNav setPage={setPage} />

      <When condition={page === 'manage-venues'}><ManageVenues/></When>

      <When condition={page === 'pending-requests'}><PendingRequests/></When>

      <When condition={page === 'upcoming-events'}><UpcomingEvents/></When>

    </>
  )
}

export default Venue;