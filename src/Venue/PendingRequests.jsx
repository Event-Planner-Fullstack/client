import { useSelector } from "react-redux";
import PendingEvent from "./PendingEvent";
import './VenueCard.scss';

const PendingRequests = () => {
  const userEvents = useSelector(state => state.event.userEvents);

  const filterEvents = () => {
    return userEvents.filter(event => event.confirmed === false);
  }

  return (
    <>
      {
        filterEvents().map(event => (
          <PendingEvent key={event.id} event={event} />
        ))
      }
    </>
  )
}

export default PendingRequests;