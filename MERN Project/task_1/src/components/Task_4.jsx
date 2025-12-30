import React from 'react';
import { Container } from 'react-bootstrap';
import Carousels from './task_4_components/Carousels';
import AccordionComponent from './task_4_components/AccordionComponent';
import Forms from './task_4_components/Forms';
import Cards from './task_4_components/Cards';

// Import your local components from the subfolder


function Task_4() {
  return (
    <div>
    <Container className="mt-5">
      
      <h1>Task 4 - Components</h1>
      <hr />

      <br /><br /><br />
      
      <h3>Carousel Section</h3>
      <Carousels />

      <br /><br /><br />

      <h3>Accordion Section</h3>
      <AccordionComponent />

      <br /><br /><br />

      <h3>Cards Section</h3>
      <Cards />

      <br /><br /><br />

      <h3>Form Section</h3>
      <br />
      <Forms />

    </Container>
    </div>
  );
}

export default Task_4;