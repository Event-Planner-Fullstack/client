import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import EventCard from './EventCard';
import readAll from '../store/middleware/crud/readAll';

const RequestedEvent = () => {
  const dispatch = useDispatch();

  const userEvents = useSelector(state => state.event.userEvents);
  const user = useSelector(state => state.user.user);
  
  useEffect(() => {
    dispatch(readAll(user.token, `event/user/${user.id}`));
  }, []);

  const filterEvents = () => {
    return userEvents.filter(event => event.confirmed === false);
  } 

  return (
    <>
      <header>Requested Event</header>
      {
        filterEvents().map(event => (
          <EventCard key={event.id} event={event} />
        ))
      }
    </>
  )
}

export default RequestedEvent;