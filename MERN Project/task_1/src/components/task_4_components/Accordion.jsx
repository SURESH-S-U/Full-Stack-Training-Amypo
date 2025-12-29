import React from 'react'

function Accordion() {
  return (
    <div>
      {/* ACCORDION */}
        <Accordion className="mb-4">
          <Accordion.Item eventKey="0">
            <Accordion.Header>What is React?</Accordion.Header>
            <Accordion.Body>
              React is a JavaScript library for building user interfaces.
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="1">
            <Accordion.Header>What is Bootstrap?</Accordion.Header>
            <Accordion.Body>
              Bootstrap is a CSS framework for responsive design.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
    </div>
  )
}

export default Accordion