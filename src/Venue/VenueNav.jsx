import Nav from 'react-bootstrap/Nav';

function VenueNav({ setPage }) {  

  return (
    <Nav>
      <Nav.Item onClick={() => setPage('manage-venues')}>Manage Venues</Nav.Item>

      <Nav.Item onClick={() => setPage('pending-requests')}>Pending Requests</Nav.Item>
      
      <Nav.Item onClick={() => setPage('upcoming-events')}>Upcoming Events</Nav.Item>

    </Nav>
  );
}

export default VenueNav;