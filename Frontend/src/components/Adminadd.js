import "./admin.css";
import adminImg from "../Img/admin.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import AdminSideBar from "./AdminSideBar";
import Footer from "./Footer";
import AllProductTable from "./AllProductTable";

function Adminadd() {
  return (
    <div className="admin-dashboard-wrapper">
      <div className="admin-dashboard-sidebar">
        <div className="row row10">
          <img className="admin-img" src={adminImg} alt="" />
          <h5>Admin Dashboard</h5>
          {/* GitHub icon button */}
          <a
            href="https://github.com/shkumar156"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <FontAwesomeIcon icon={faGithub} className="github-icon" />
            Visit GitHub
          </a>
        </div>
        <AdminSideBar />
      </div>
      <div className="admin-dashboard-content">
        <AllProductTable/>
      </div>
      <div className="admin-dashboard-footer">
        <Footer/>
      </div>
    </div>
  );
}

export default Adminadd;
