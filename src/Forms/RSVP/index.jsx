import { useDispatch, useSelector } from 'react-redux';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import GuestForm from './GuestForm';
import './RSVP.scss';

function RSVP() {
  const dispatch = useDispatch();

  const showModal = useSelector(state => state.modals.guest_modal);

  const toggleModal = () => {
    dispatch({type: 'guest_modal'});
  }

  return (
    <>
      <Container className="d-grid gap-2">
        
        <button class="rsvpBtn" variant="success" size="lg" onClick={toggleModal}> RSVP </button>
        
        <Modal show={showModal} onHide={toggleModal}>
          <Modal.Header className="modalHeader" closeButton>
            <Modal.Title>RSVP to an Event</Modal.Title>
          </Modal.Header>
          
          <Modal.Body className="modalBody" ><GuestForm toggleModal={toggleModal} /></Modal.Body>

        </Modal>

      </Container>
    </>
  );
}

export default RSVP;
