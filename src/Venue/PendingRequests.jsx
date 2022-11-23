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
      <h1>Pending Requests</h1>
        <div className="pendingRequests">
          {
            filterEvents().map(event => (
              <PendingEvent key={event.id} event={event} />
            ))
          }
        </div>
    </>
  )
}

export default PendingRequests;