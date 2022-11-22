import { useState } from 'react';
import { When } from 'react-if';
// import EventNav from './EventNav';
import ClientNavBar from '../Navigation/ClientNavBar';
import ConfirmedEvents from './ConfirmedEvents';
import FindVenues from './FindVenues';
import RequestedEvents from './RequestedEvents';


const Event = () => {
  const [page, setPage] = useState('find-venues');

  return (
    <>
      {/* <EventNav setPage={setPage} /> */}

      <ClientNavBar setPage={setPage} />


      <When condition={page === 'find-venues'}><FindVenues/></When>

      <When condition={page === 'requested-events'}><RequestedEvents/></When>

      <When condition={page === 'confirmed-events'}><ConfirmedEvents/></When>

    </>
  )
}

export default Event;