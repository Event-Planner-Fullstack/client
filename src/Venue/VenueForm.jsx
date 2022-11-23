import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from 'react-redux';
import create from './../store/middleware/crud/create';
import update from './../store/middleware/crud/update';
import './Venue.scss';

function VenueForm() {
  const dispatch = useDispatch();

  const modals = useSelector(state => state.modals);
  const user = useSelector(state => state.user.user);
  const selectedVenue = useSelector(state => state.venue.selectedVenue);

  const closeModal = () => {
    if(modals.add_venue_modal) dispatch({type: 'add_venue_modal'});
    else dispatch({type: 'edit_venue_modal'});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const venueObj = {
      item: 'venue',
      vendor_id: user.id,
      venueName: e.target.venueName.value || selectedVenue.venueName,
      location: e.target.location.value || selectedVenue.location,
      hours: e.target.hours.value || selectedVenue.hours,
      imgUrl: e.target.imgUrl.value || selectedVenue.imgUrl,
      pocName: e.target.pocName.value || selectedVenue.pocName,
      pocNumber: e.target.pocNumber.value || selectedVenue.pocNumber,
      security: e.target.security.checked || selectedVenue.security,
      cater: e.target.cater.checked || selectedVenue.cater,
      maxCapacityInt: parseInt(e.target.capacity.value) || selectedVenue.maxCapacityInt,
    }

    if(!venueObj.imgUrl) {
      venueObj.imgUrl = 'https://images.unsplash.com/photo-1484156818044-c040038b0719?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80';
    }
    console.log(venueObj);

    if(modals.add_venue_modal) dispatch(create(user.token, 'venue', venueObj));

    if(modals.edit_venue_modal) {
      venueObj.id = selectedVenue.id;
      dispatch(update(user.token, `venue/${selectedVenue.id}`, venueObj));
    }

    closeModal();
    
  }

  return (
    <Modal show={modals.add_venue_modal || modals.edit_venue_modal} onHide={closeModal}>

      <Modal.Header className="modalHeader" closeButton>
        <Modal.Title>Venue Details</Modal.Title>
      </Modal.Header>

      <Modal.Body className="modalBody">
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

          <Form.Group className="mb-3" controlId="imgUrl">
            <Form.Label>Image URL</Form.Label>
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

          <button class="modalSubmitBtn" variant="primary" type="submit">Submit</button>

        </Form>
      </Modal.Body>

    </Modal>
  );
}

export default VenueForm;
