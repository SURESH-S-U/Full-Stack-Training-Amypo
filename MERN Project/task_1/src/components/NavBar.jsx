import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">MyApp</Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarMenu">

          <div className="navbar-nav me-auto">

            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/products">Products</Link>
            <Link className="nav-link" to="/services">Services</Link>
            <Link className="nav-link" to="/clients">Clients</Link>
            <Link className="nav-link" to="/portfolio">Portfolio</Link>

            {/* DROPDOWN — only for extra pages */}
            <div className="nav-item dropdown">
              <span
                className="nav-link dropdown-toggle"
                role="button"
                data-bs-toggle="dropdown"
              >
                More Pages
              </span>

              <ul className="dropdown-menu">

                <li>
                  <Link className="dropdown-item" to="/page1">Extra Page 1</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/page2">Extra Page 2</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/page3">Extra Page 3</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/page4">Extra Page 4</Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/page5">Extra Page 5</Link>
                </li>

              </ul>
            </div>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
