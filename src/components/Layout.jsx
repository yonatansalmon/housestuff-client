import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <header className="header">
        <h1>House Budget & Supermarket List App</h1>
      </header>
      <nav className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/budget">Budget</Link>
          </li>
          <li>
            <Link to="/supermarket-list">Supermarket List</Link>
          </li>
        </ul>
      </nav>
      <main className="main-content">{children}</main>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} House Budget & Supermarket List App</p>
      </footer>
    </div>
  );
};

export default Layout;
