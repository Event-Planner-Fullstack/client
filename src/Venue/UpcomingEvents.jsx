import { useSelector } from "react-redux";
import PendingEvent from "./PendingEvent";

const UpcomingEvents = () => {
  const userEvents = useSelector(state => state.event.userEvents);

  const filterEvents = () => {
    return userEvents.filter(event => event.confirmed === true);
  }

  return (
    <>
      <h1>Upcoming Events</h1>
      {
        filterEvents().map(event => (
          <PendingEvent key={event.id} event={event} />
        ))
      }
    </>
  )
}

export default UpcomingEvents;