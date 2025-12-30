import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">MyApp</Link>

        {/* 1. ADDED THIS BUTTON FOR RESPONSIVENESS */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
          aria-controls="navbarMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* This ID matches the data-bs-target above */}
        <div className="collapse navbar-collapse" id="navbarMenu">
          <div className="navbar-nav ms-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/products">Products</Link>
            <Link className="nav-link" to="/services">Services</Link>
            <Link className="nav-link" to="/clients">Clients</Link>
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
            <Link className="nav-link" to="/NewsApp">News</Link>

            <div className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Task Pages
              </span>

              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/page1">Counter Application</Link></li>
                <li><Link className="dropdown-item" to="/page2">Toggle Theme</Link></li>
                <li><Link className="dropdown-item" to="/page3">React Components</Link></li>
                <li><Link className="dropdown-item" to="/page4">Student Card</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;