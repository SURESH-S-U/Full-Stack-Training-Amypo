import React from 'react';
import { Form, Button } from 'react-bootstrap'; // Added imports

function Forms() {
  return (
    <div className="mb-4">
      <Form>
        <h4>Contact Form</h4>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Button variant="primary" type="submit">Submit</Button>
      </Form>
    </div>
  );
}

export default Forms;