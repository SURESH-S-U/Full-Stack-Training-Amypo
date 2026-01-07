import { Container, Row, Col, Navbar } from 'react-bootstrap';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = ({ user }) => {
  const location = useLocation();

  return (
    <>
      <Navbar bg="primary" variant="dark" className="mb-0">
        <Container>
          <Navbar.Brand>Dashboard</Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid className="p-0">
        <Row className="g-0">
          <Col md={3}>
            <Sidebar user={user} />
          </Col>
          <Col md={9} className="p-4">
            <Outlet context={{ user }} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
