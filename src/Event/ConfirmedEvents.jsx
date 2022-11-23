import { useSelector, useDispatch } from 'react-redux';
import EventCard from './EventCard';

const ConfirmedEvents = () => {

  const userEvents = useSelector(state => state.event.userEvents);

  const filterEvents = () => {
    return userEvents.filter(event => event.confirmed === true);
  } 

  return (
    <>
      {/* <header>Confirmed Events</header> */}
      {
        filterEvents().map(event => (
          <EventCard key={event.id} event={event} />
        ))
      }
    </>
  )
}

export default ConfirmedEvents;