import { useSelector, useDispatch } from 'react-redux';
import EventCard from './EventCard';

const RequestedEvent = () => {

  const userEvents = useSelector(state => state.event.userEvents);

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