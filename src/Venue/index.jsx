import { useState, useEffect } from 'react';
import { When } from 'react-if';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ManageVenues from './ManageVenues';
import PendingRequests from './PendingRequests';
import UpcomingEvents from './UpcomingEvents';
import VendorNavBar from '../Navigation/VendorNavBar';
import readAll from './../store/middleware/crud/readAll';
import './../Body/Body.scss';


const Venue = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user);

  const [page, setPage] = useState('manage-venues');

  const refresh = () => {
    dispatch(readAll(user.token, `venue/user/${user.id}`));
    dispatch(readAll(user.token, `event/venue/${user.id}`));
  }

  useEffect(() => {
    refresh();
  }, [])

  return (
    <>

      <VendorNavBar setPage={setPage} />
      <Button onClick={refresh}>Refresh</Button>

      <div>
        <div className="info">

          <When condition={page === 'manage-venues'}><ManageVenues /></When>

          <When condition={page === 'pending-requests'}><PendingRequests /></When>

          <When condition={page === 'upcoming-events'}><UpcomingEvents /></When>
        </div>
      </div>


    </>
  )
}

export default Venue;