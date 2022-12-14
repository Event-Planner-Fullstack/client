import { useState, useEffect } from 'react';
import { When } from 'react-if';
import { useSelector, useDispatch } from 'react-redux';
import ClientNavBar from '../Navigation/ClientNavBar';
import ConfirmedEvents from './ConfirmedEvents';
import FindVenues from './FindVenues';
import RequestedEvents from './RequestedEvents';
import readAll from './../store/middleware/crud/readAll';
import Footer from '../Footer';
import "./Event.scss";


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


      <div className="info">
        <button className='eventBtn' onClick={refresh}>Refresh</button>

        <When condition={page === 'find-venues'}><FindVenues /></When>

        <When condition={page === 'requested-events'}><RequestedEvents /></When>

        <When condition={page === 'confirmed-events'}><ConfirmedEvents /></When>
      </div>



    </>
  )
}

export default Event;
