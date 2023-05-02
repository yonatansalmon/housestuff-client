import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Supermarket List</Link>
          </li>
          <li>
            <Link to="/budget">Budget</Link>
          </li>
        </ul>
      </nav>
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
