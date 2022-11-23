import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { When } from 'react-if';
import { getFormattedString } from './../utility/format-date';
import readAll from './../store/middleware/crud/readAll';
import { useDispatch, useSelector } from 'react-redux';
import GuestList from './GuestList';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EventCard = ({ event }) => {
  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user);

  const getGuestList = (event_id) => {
    dispatch(readAll(user.token, `guest/event/${event_id}`));
  }

  const toggleModal = () => {
    dispatch({ type: 'guest_list_modal' });
  }

  const viewGuestList = (event_id) => {
    getGuestList(event_id);
    toggleModal();
  }

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={event.imgUrl} />
        <Card.Body>
          <Card.Title>{getFormattedString(event.date)}</Card.Title>
          <When condition={event.confirmed}><Card.Text>INVITE CODE: {event.inviteCode}</Card.Text></When>
          <Card.Text>Capacity: {event.estimatedGuestCount}</Card.Text>
          <Card.Text>Security: {event.security ? 'Yes' : 'No'}, Cater: {event.cater ? 'Yes' : 'No'}</Card.Text>
          <Card.Text>Contact: {event.pocName} at {event.pocNumber} </Card.Text>
        </Card.Body>

        <When condition={event.confirmed}>
          <Button
            variant="outline-primary"
            onClick={() => viewGuestList(event.id)}>
            <FontAwesomeIcon icon={faEye}/>View Guest List</Button>
        </When>

      </Card>

      <GuestList toggleModal={toggleModal} />
    </>
  );
}

export default EventCard;