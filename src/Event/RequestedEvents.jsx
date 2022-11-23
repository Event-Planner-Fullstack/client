import { useSelector, useDispatch } from 'react-redux';
import EventCard from './EventCard';
import './Event.scss';

const RequestedEvent = () => {

  const userEvents = useSelector(state => state.event.userEvents);

  const filterEvents = () => {
    return userEvents.filter(event => event.confirmed === false);
  } 

  return (
    <>
      <header>Requested Event</header>
      <div className="eventCards">
        {
          filterEvents().map(event => (
            <EventCard key={event.id} event={event} />
          ))
        }
      </div>
    </>
  )
}

export default RequestedEvent;