'use strict';

import React from 'react';
import GuestRSVP from '../Forms/guestRSVP';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Login = () => {

  return (
    <div>
      <Card className="text-center">
        <Card.Body>
          <Card.Title>Web title</Card.Title>
          <Card.Text>
            Some quick text here.
          </Card.Text>
          <ListGroup.Item>
            <Button variant="outline-primary">Log in</Button>
            <Button variant="outline-info">Sign in</Button>
          </ListGroup.Item>
          <GuestRSVP />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
