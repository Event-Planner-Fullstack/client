import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import create from './../store/middleware/crud/create';

function VenueForm() {
  const dispatch = useDispatch();

  const modals = useSelector(state => state.modals);
  const user = useSelector(state => state.user.user);

  const closeModal = () => {
    dispatch({type: 'add_venue_modal'});
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const venueObj = {
      item: 'venue',
      vendor_id: user.id,
      venueName: e.target.venueName.value,
      location: e.target.location.value,
      hours: e.target.hours.value,
      imgUrl: '#',
      pocName: e.target.pocName.value,
      pocNumber: e.target.pocNumber.value,
      requests: [],
      confirmed: [],
      security: e.target.security.checked,
      cater: e.target.cater.checked,
      foodOptions: [],
      maxCapacityInt: parseInt(e.target.capacity.value),
    }

    dispatch(create(user.token, `venue`, venueObj));

    closeModal();
    
  }

  return (
    <Modal show={modals.add_venue_modal || modals.edit_venue_modal} onHide={closeModal}>

      <Modal.Header closeButton>
        <Modal.Title>Venue Details</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form onSubmit={handleSubmit}>

          <Form.Group className="mb-3" controlId="venueName">
            <Form.Label>Venue Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="location">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" />
          </Form.Group>


          <Form.Group className="mb-3" controlId="hours">
            <Form.Label>Hours</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="pocName">
            <Form.Label>Point of Contact Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="pocNumber">
            <Form.Label>Point of Contact Phone Number</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="capacity">
            <Form.Label>Maximum Number of People</Form.Label>
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

export default VenueForm;