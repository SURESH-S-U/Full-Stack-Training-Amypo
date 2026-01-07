import { Container, Row, Col, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import CartSummary from '../components/CartSummary';

const Home = () => (
  <>
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-4">
      <Container>
        <Navbar.Brand href="/">Shopping App</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Link to="/dashboard" className="btn btn-outline-light">Dashboard</Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Container>
      <Row>
        <Col md={8}>
          <h2>Products</h2>
          <ProductList />
        </Col>
        <Col md={4}>
          <h3>Shopping Cart</h3>
          <CartSummary />
        </Col>
      </Row>
    </Container>
  </>
);

export default Home;
