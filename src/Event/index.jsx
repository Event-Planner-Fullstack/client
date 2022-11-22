import { useState, useEffect } from 'react';
import { When } from 'react-if';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import ClientNavBar from '../Navigation/ClientNavBar';
import ConfirmedEvents from './ConfirmedEvents';
import FindVenues from './FindVenues';
import RequestedEvents from './RequestedEvents';
import readAll from './../store/middleware/crud/readAll';


const Event = () => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user);

  const [page, setPage] = useState('find-venues');

  const refresh = () => {
    dispatch(readAll(user.token, 'venue'));
    dispatch(readAll(user.token, `event/user/${user.id}`));
  }

  useEffect(() => {
    refresh();
  }, []);

  return (
    <>

      <ClientNavBar setPage={setPage} />

      <Button onClick={refresh}>Refresh</Button>

      <When condition={page === 'find-venues'}><FindVenues/></When>

      <When condition={page === 'requested-events'}><RequestedEvents/></When>

      <When condition={page === 'confirmed-events'}><ConfirmedEvents/></When>

    </>
  )
}

export default Event;