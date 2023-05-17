import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Dropdown, Form, FormControl, Button } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import navigation from './Navigation.module.css';
import logo from '../../images/logo.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navigation() {

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutRef = null;
  
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <>
      <Navbar expand="lg" fixed="top" className={`${navigation.navbar} ${isScrolled ? navigation.scrolled : ''}`}>
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" className={navigation.logo} /> {/* Include your logo image here */}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className={`ml-auto ${navigation.navbarNav}`}>
            <Nav.Link href="#buy" className={navigation.navbarNavNavLink}>Buy</Nav.Link>
            <Nav.Link href="#sell" className={navigation.navbarNavNavLink}>Sell</Nav.Link>
            <Nav.Link href="#services" className={navigation.navbarNavNavLink}>Services</Nav.Link>
            <Nav.Link href="#menu1" className={navigation.navbarNavNavLink}>Menu1</Nav.Link>
            <Nav.Link href="#menu2" className={navigation.navbarNavNavLink}>Menu2</Nav.Link>
          </Nav>
          <Nav>
            <Dropdown
              show={showDropdown}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
              onClick={handleDropdownToggle}
            >
              <Dropdown.Toggle id="more-dropdown">
                <FontAwesomeIcon icon={faUser} />
              </Dropdown.Toggle>
              <CSSTransition
                in={showDropdown}
                timeout={300}
                classNames="dropdown-menu"
                unmountOnExit
              >
                <Dropdown.Menu className={`dropdown-menu-right ${navigation.dropdownMenu}`}>
                  <Dropdown.Item className={navigation.dropdownItem} href="#action1">Login/Register</Dropdown.Item>
                  <Dropdown.Item className={navigation.dropdownItem} href="#action2">Help</Dropdown.Item>
                </Dropdown.Menu>
              </CSSTransition>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
