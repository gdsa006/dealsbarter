import React, { useState, useRef } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import navigation from './Navigation.module.css';
import logo from '../../images/logo.png'; // Import your logo image


function Navigation() {

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutRef = null;

  const handleDropdownToggle = () => {
    clearTimeout(timeoutRef);
    setShowDropdown(!showDropdown);
  };

  const handleDropdownMouseEnter = () => {
    clearTimeout(timeoutRef);
    setShowDropdown(true);
  };

  const handleDropdownMouseLeave = () => {
    clearTimeout(timeoutRef);
    timeoutRef = setTimeout(() => {
      setShowDropdown(false);
    }, 300); // Adjust the duration (in milliseconds) as needed
  };


  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" /> {/* Include your logo image here */}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#buy">Buy</Nav.Link>
          <Nav.Link href="#rent">Rent</Nav.Link>
          <Nav.Link href="#projects">Projects</Nav.Link>
          <Nav.Link href="#agents">Agents</Nav.Link>
          <Nav.Link href="#services">Services</Nav.Link>
        </Nav>
        <Nav>
          <Dropdown
            show={showDropdown}
            onMouseEnter={handleDropdownMouseEnter}
            onMouseLeave={handleDropdownMouseLeave}
            onClick={handleDropdownToggle}
          >
            <Dropdown.Toggle variant="light" id="more-dropdown">
              More
            </Dropdown.Toggle>
            <CSSTransition
              in={showDropdown}
              timeout={300}
              classNames="dropdown-menu"
              unmountOnExit
            >
              <Dropdown.Menu className="dropdown-menu-right">
                <Dropdown.Item href="#action1">Action</Dropdown.Item>
                <Dropdown.Item href="#action2">Another action</Dropdown.Item>
                <Dropdown.Item href="#action3">Something else</Dropdown.Item>
              </Dropdown.Menu>
            </CSSTransition>
          </Dropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navigation;
