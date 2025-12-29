import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";

function Cards() {
  return (
    <div>
      {/* CARDS */}
      <Row className="mb-4">
        <Col md={4}>
          <Card>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Card One</Card.Title>
              <Card.Text>This is a simple card example.</Card.Text>
              <Button variant="primary">Click</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card Two</Card.Title>
              <Card.Text>
                React Bootstrap cards are reusable.
              </Card.Text>
              <Button variant="success">Submit</Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={4}>
          <Card>
            <Card.Body>
              <Card.Title>Card Three</Card.Title>
              <Card.Text>
                Clean UI with Bootstrap components.
              </Card.Text>
              <Button variant="danger">Delete</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Cards;
