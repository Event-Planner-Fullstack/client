import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const GuestList = ({ toggleModal }) => {

  const guestListModal = useSelector(state => state.modals.guest_list_modal);

  const guestList = useSelector(state => state.guest.guestList);
  console.log(guestList);

  return (
    <Modal show={guestListModal} onHide={toggleModal}>
      <Modal.Header closeButton>
        <Modal.Title>Guest List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        { guestList.map(guest => (
          <div key={guest.id}>Name: {guest.name}, Email: {guest.email}</div>
        ))}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={toggleModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default GuestList;