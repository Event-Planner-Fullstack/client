import { useDispatch, useSelector } from 'react-redux';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import GuestForm from './GuestForm';
import './RSVP.scss';
import RsvpSuccess from '../../Alerts/RsvpSuccess';
import NoEventFound from '../../Alerts/NoEventFound';

function RSVP() {
  const dispatch = useDispatch();

  const showModal = useSelector(state => state.modals.guest_modal);

  const toggleModal = () => {
    dispatch({ type: 'guest_modal' });
    dispatch({ type: 'change_rsvp_status', payload: { rsvpSuccess: false, rsvpError: false } });
  }

  return (
    <>
      <Container className="d-grid gap-2">
        
        <button className="rsvpBtn" variant="success" size="lg" onClick={toggleModal}> RSVP </button>
        
        <Modal show={showModal} onHide={toggleModal}>
          <Modal.Header className="modalHeader" closeButton>
            <Modal.Title>RSVP to an Event</Modal.Title>
          </Modal.Header>

          <Modal.Body className="modalBody"><GuestForm /></Modal.Body>

          <RsvpSuccess />
          <NoEventFound />

        </Modal>

      </Container>
    </>
  );
}

export default RSVP;
