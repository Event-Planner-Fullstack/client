import { useSelector, useDispatch } from 'react-redux';
import EventCard from './EventCard';
import './Event.scss';

const ConfirmedEvents = () => {

  const userEvents = useSelector(state => state.event.userEvents);

  const filterEvents = () => {
    return userEvents.filter(event => event.confirmed === true);
  } 

  return (
    <>
      <div className="confirmedEvents">
        {
          filterEvents().map(event => (
            <EventCard key={event.id} event={event} />
          ))
        }
      </div>
    </>
  )
}

export default ConfirmedEvents;