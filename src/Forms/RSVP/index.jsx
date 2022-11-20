import './RSVP.scss';
import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";

function RSVP() {
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
      >
        <Button variant="outline-success" onClick={handleShow}>
          RSVP
        </Button>
      </div>

      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Guest Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>**insert form**</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default RSVP;
