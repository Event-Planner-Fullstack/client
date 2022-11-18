'use strict';

import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card, ListGroup } from 'react-bootstrap/esm';

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
          <Button variant="outline-success">RSVP?</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;