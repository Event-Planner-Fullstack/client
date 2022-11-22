import { useSelector } from "react-redux";
import PendingEvent from "./PendingEvent";

const PendingRequests = () => {
  const userEvents = useSelector(state => state.event.userEvents);

  const filterEvents = () => {
    return userEvents.filter(event => event.confirmed === false);
  }

  return (
    <>
      <h1>Pending Requests</h1>
      {
        filterEvents().map(event => (
          <PendingEvent key={event.id} event={event} />
        ))
      }
    </>
  )
}

export default PendingRequests;