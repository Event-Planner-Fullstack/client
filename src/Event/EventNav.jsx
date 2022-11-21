import Nav from 'react-bootstrap/Nav';

function EventNav({ setPage }) {  

  return (
    <Nav>
      <Nav.Item onClick={() => setPage('find-venues')}>Find Venues</Nav.Item>

      <Nav.Item onClick={() => setPage('confirmed-events')}>Confirmed Events</Nav.Item>
      
      <Nav.Item onClick={() => setPage('requested-events')}>Requested Events</Nav.Item>

    </Nav>
  );
}

export default EventNav;