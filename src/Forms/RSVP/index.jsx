import { useDispatch, useSelector } from 'react-redux';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import GuestForm from './GuestForm';

function RSVP() {
  const dispatch = useDispatch();

  const showModal = useSelector(state => state.modals.guest_modal);

  const toggleModal = () => {
    dispatch({ type: 'guest_modal' });
  }

  return (
    <>
      <Container className="d-grid gap-2">
        <Button variant="success" size="lg" onClick={toggleModal}> RSVP </Button>

        <Modal show={showModal} onHide={toggleModal}>
          <Modal.Header closeButton>
            <Modal.Title>RSVP to an Event</Modal.Title>
          </Modal.Header>

          <Modal.Body><GuestForm toggleModal={toggleModal} /></Modal.Body>

        </Modal>

      </Container>
    </>
  );
}

export default RSVP;
