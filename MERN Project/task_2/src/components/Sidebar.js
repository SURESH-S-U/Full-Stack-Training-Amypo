import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Sidebar = ({ user }) => (
  <div className="vh-100 p-3 bg-dark text-white sticky-top" style={{width: '250px'}}>
    <h4>Dashboard</h4>
    <Nav className="flex-column">
      <Nav.Item>
        <Nav.Link as={Link} to="/dashboard/profile" className="text-white">
          Profile
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <hr />
    <p>Welcome, {user?.name}</p>
  </div>
);

export default Sidebar;
