import React from 'react'

function Forms() {
  return (
    <div>
      {/* FORM */}
        <Form className="mb-4">
          <h4>Contact Form</h4>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Button variant="primary">Submit</Button>
        </Form>
    </div>
  )
}

export default Forms