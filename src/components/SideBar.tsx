import React from 'react';
import './Sidebar.css'; // Import your custom CSS
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        
        <p> Tech World</p>
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item active">
          <span><Link to="/">Home </Link> </span>
        </li>
        <li className="menu-item">
          <span><Link to="/category">Categories</Link></span> 
        </li>
        <li className="menu-item">
          <span>  <Link to="/item">Items</Link></span>   
        </li>
        <li className="menu-item">
          <span> <Link to="/stock">Stocks</Link></span>
        </li>
        <li className="menu-item">
          <span>Orders</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
