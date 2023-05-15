import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Dropdown, Form, FormControl, Button } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import navigation from './Navigation.module.css';
import logo from '../../images/logo.png'; // Import your logo image
import wideImage from '../../images/wideImage.jpg'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Navigation() {

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutRef = null;
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
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

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleDetectLocation = () => {
    // Add your logic to detect the location here
    // You can use browser APIs or external services to determine the user's location
    // Update the state or perform any additional actions based on the detected location
    // Example:
    console.log('Detecting location...');
  };

  const handleSearch = () => {
    // Implement search functionality based on selected category, location, and search term
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
            <Nav.Link href="#rent" className={navigation.navbarNavNavLink}>Rent</Nav.Link>
            <Nav.Link href="#projects" className={navigation.navbarNavNavLink}>Projects</Nav.Link>
            <Nav.Link href="#agents" className={navigation.navbarNavNavLink}>Agents</Nav.Link>
            <Nav.Link href="#services" className={navigation.navbarNavNavLink}>Services</Nav.Link>
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
      <div className={navigation.imageContainer}>
        <img src={wideImage} alt="Header Image" className={navigation.image} />
        <div className={navigation.searchBox}>
          <div className={navigation.searchContainer}>
            <div className={navigation.searchRow}>
              <Form className={navigation.searchForm}>
                <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange} className={navigation.categoryDropdown}>
                  <option value="">Select Category</option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  <option value="category3">Category 3</option>
                </Form.Control>
                <Form.Control type="text" placeholder="Search" className={`mr-sm-2 ${navigation.searchInput}`} />
                <Form.Control as="select" value={selectedLocation} onChange={handleLocationChange} className={navigation.locationDropdown}>
                  <option value="">Select Location</option>
                  <option value="category1">Punjab</option>
                  <option value="category2">Maharashtra</option>
                </Form.Control>
                <Button variant="primary" onClick={handleSearch} className={navigation.searchButton}>
                  Search
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
