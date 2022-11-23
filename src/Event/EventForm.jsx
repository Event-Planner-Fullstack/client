import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import create from './../store/middleware/crud/create';
import Chance from 'chance';

function EventForm() {
  const dispatch = useDispatch();

  const modals = useSelector(state => state.modals);
  const user = useSelector(state => state.user.user);
  const selectedVenue = useSelector(state => state.venue.selectedVenue);

  const closeModal = () => {
    dispatch({type: 'add_event_modal'});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const chance = new Chance();
    const inviteCode = chance.guid();

    const eventObj = {
      item: 'event',
      client_id: user.id,
      venue_id: selectedVenue.id,
      vendor_id: selectedVenue.vendor_id,
      date: e.target.date.value,
      pocName: e.target.pocName.value,
      pocNumber: e.target.pocNumber.value,
      requested: true,
      confirmed: false,
      security: e.target.security.checked,
      cater: e.target.cater.checked,
      estimatedGuestCount: parseInt(e.target.estimatedGuestCount.value),
      guestList: [],
      inviteCode: inviteCode,
    }

    console.log(eventObj);

    dispatch(create(user.token, 'event', eventObj));

    closeModal();
    
  }

  return (
    <Modal show={modals.add_event_modal} onHide={closeModal}>

      <Modal.Header closeButton>
        <Modal.Title>Event Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3">
            <Form.Label>Date</Form.Label>
            <input type="date" id='date' />
          </Form.Group>

          <Form.Group className="mb-3" controlId="pocName">
            <Form.Label>Point of Contact Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="pocNumber">
            <Form.Label>Point of Contact Phone Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="estimatedGuestCount">
            <Form.Label>Estimated Number of Guests</Form.Label>
            <Form.Control type="number" />
          </Form.Group>

          <Form.Group className="mb-3" controlId='security'>
            <Form.Check
              type="checkbox"
              label="Offer Security"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId='cater'>
            <Form.Check
              type="checkbox"
              label="Offer Catering"
            />
          </Form.Group>

          <Button variant="primary" type="submit">Submit</Button>

        </Form>
      </Modal.Body>

    </Modal>
  );
}

export default EventForm;