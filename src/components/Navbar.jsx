import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import logo from "../images/digilogo.png";
import logo from "../images/digilogo_new.png"

const Navbar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light fixed-top">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          <img
            className="nav-logo mt-2"
            src={logo}
            style={{ width: 100 }}
            alt="Digiverse360 Logo"
          />
          {/* <strong> DigiVerse360</strong> */}
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded={!collapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`collapse navbar-collapse ${collapsed ? "" : "show"}`}
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                exact
                className="nav-link"
                aria-current="page"
                to="/"
                onClick={toggleNavbar}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/about"
                onClick={toggleNavbar}
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/service"
                onClick={toggleNavbar}
              >
                Services
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/courses"
                onClick={toggleNavbar}
              >
                Courses
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link disabled"
                to="/blogs"
                onClick={toggleNavbar}
              >
                Blogs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                activeClassName="menu_active"
                className="nav-link"
                to="/contact"
                onClick={toggleNavbar}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
