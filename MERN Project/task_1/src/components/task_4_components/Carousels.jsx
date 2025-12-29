import React from "react";
import { Carousel } from "react-bootstrap";

function Carousels() {
  return (
    <div>
      {/* CAROUSEL */}
      <Carousel className="mb-4">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/900/300?random=1"
            alt="Slide 1"
          />
          <Carousel.Caption>
            <h3>First Slide</h3>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://picsum.photos/900/300?random=2"
            alt="Slide 2"
          />
          <Carousel.Caption>
            <h3>Second Slide</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Carousels;
