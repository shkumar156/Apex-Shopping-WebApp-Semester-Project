import "./navbar.css";
import logo from "../Img/logo.jpg";
import { Link } from "react-router-dom";

function Navbar({ setUser, setAdminUser, user, admin }) {
  const handleLogout = () => {
    localStorage.clear();
    setAdminUser(false);
    setUser(false);
    closeNavbar();
  };

  const closeNavbar = () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    if (navbarCollapse && navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/home" onClick={closeNavbar}>
          <img className="logo" src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {(user || admin) && (
              <>
                <li className="nav-item">
                  <Link to="/home" className="nav-link txt !active" onClick={closeNavbar}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutus" className="nav-link txt !active" onClick={closeNavbar}>About Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/menucard" className="nav-link txt !active" onClick={closeNavbar}>Menu</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contactus" className="nav-link txt !active" onClick={closeNavbar}>Contact Us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/sale" className="nav-link txt !active" onClick={closeNavbar}>Sale Items</Link>
                </li>
                <li className="nav-item">
                  <Link to="/track" className="nav-link txt !active" onClick={closeNavbar}>Track Orders</Link>
                </li>
                {admin && (
                  <li className="nav-item">
                    <Link to="/add" className="nav-link txt !active" onClick={closeNavbar}>Admin Dashboard</Link>
                  </li>
                )}
              </>
            )}

            {/* User login/signup - only show when NOT logged in as user or admin */}
            {!(user || admin) && (
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle txt !active"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  User
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/signup" className="dropdown-item" onClick={closeNavbar}>Sign Up</Link>
                  </li>
                  <li>
                    <Link to="/customerlogin" className="dropdown-item" onClick={closeNavbar}>Login</Link>
                  </li>
                </ul>
              </li>
            )}

            {/* Admin button - only show when NOT logged in as user or admin */}
            {!(user || admin) && (
              <li className="nav-item">
                <Link to="/adminlogin" className="nav-link txt !active" onClick={closeNavbar}>Admin</Link>
              </li>
            )}

            {/* Logout option - only show when logged in */}
            {(user || admin) && (
              <li className="nav-item">
                <Link onClick={handleLogout} className="nav-link txt !active">
                  Log out
                </Link>
              </li>
            )}
          </ul>

          {/* Search bar - only show when logged in */}
          {(user || admin) && (
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-danger" type="submit">
                Search
              </button>
            </form>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
