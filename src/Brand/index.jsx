import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Logo from '../Images/table.png';

import './Brand.scss';

const Brand = () => {

  const loremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu mattis augue. Integer enim felis, accumsan vitae rutrum in, vehicula non elit. Quisque vitae est accumsan leo sodales ullamcorper eu et urna. Integer a lacinia dolor. Integer commodo enim turpis, sit amet mollis ex hendrerit in. Donec scelerisque posuere efficitur. Suspendisse vitae nibh sit amet eros viverra venenatis. Nulla in semper odio. Etiam cursus quam id dictum pulvinar. Aliquam vitae felis ut erat pretium vestibulum. Nunc suscipit viverra turpis nec pellentesque. Nulla a volutpat augue, a posuere augue. Nulla eu ultrices nulla. Proin fermentum venenatis arcu, id elementum tortor venenatis et. Integer eu metus augue'

  return (
    <>
      <Container fluid>
        <Container className="d-flex align-items-center p-2"
          style={{
            // border: " 2px solid red"
          }}
        >
          <Image className="img-thumbnail"
            src={Logo}
            alt='brand logo'
            width='128px'
            height='128px'
          />
          <Row className="m-3"
            style={{
              // border: " 2px solid red",
              height: "20vh",
              fontSize: "5rem",
              fontFamily: "Yellowtail"
            }}>
            Event Planner
          </Row>
        </Container>
        <Row
          style={{
            // border: " 2px solid red",
            height: "70vh"
          }} >
          {loremIpsum}
          {loremIpsum}
        </Row>
      </Container>
    </>
  )
}

export default Brand;
