import React from 'react';
import '../components/admin.css';
import Footer from './Footer';
import './adminSideBar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt, faList, faEdit, faTrash, faPlus, faCog, faMap, faUser } from '@fortawesome/free-solid-svg-icons';

function AdminSideBar() {
  const closeSidebar = () => {
    const sidebar = document.querySelector('.admin-side-bar');
    if (sidebar && sidebar.classList.contains('show')) {
      sidebar.classList.remove('show');
    }
  };
  return (
    <>
      <div className="list-group admin-side-bar">
        <Link to="/map" className="list-group-item side-bar-list list-group-item-action !active" onClick={closeSidebar}>
          <FontAwesomeIcon icon={faMap} /> <span className="sidebar-text">Maps</span>
        </Link>
        <Link to="/dashboard" className="list-group-item side-bar-list list-group-item-action !active" onClick={closeSidebar}>
          <FontAwesomeIcon icon={faUser} /> <span className="sidebar-text">Calender</span>
        </Link>
        <Link to="/add" className="list-group-item side-bar-list list-group-item-action !active" onClick={closeSidebar}>
          <FontAwesomeIcon icon={faList} /> <span className="sidebar-text">All Products</span>
        </Link>
        <Link to="/confirm" className="list-group-item side-bar-list list-group-item-action !active" onClick={closeSidebar}>
          <FontAwesomeIcon icon={faEdit} /> <span className="sidebar-text">Update Product</span>
        </Link>
        <Link to="/del" className="list-group-item side-bar-list list-group-item-action !active" onClick={closeSidebar}>
          <FontAwesomeIcon icon={faTrash} /> <span className="sidebar-text">Delete Product</span>
        </Link>
        <Link to="/dash" className="list-group-item side-bar-list list-group-item-action !active" onClick={closeSidebar}>
          <FontAwesomeIcon icon={faPlus} /> <span className="sidebar-text">Create Product</span>
        </Link>
        <Link to="/settings" className="list-group-item side-bar-list list-group-item-action !active" onClick={closeSidebar}>
          <FontAwesomeIcon icon={faCog} /> <span className="sidebar-text">Settings</span>
        </Link>
      </div>
    </>
  );
}

export default AdminSideBar;
