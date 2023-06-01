import React, { useState, useRef, useEffect } from 'react';
import { Navbar, Nav, Dropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import navigation from './Navigation.module.css';
import logo from '../../images/logo.png'; // Import your logo image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock, faEnvelope, faMobile, faSearch } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '../partials/PrimaryButton';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import CategoryImage from '../../images/pexels-photo-1547248.webp'; // Import your logo image

function Navigation() {

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  let timeoutRef = null;

  const [isScrolled, setIsScrolled] = useState(false);

  const [showPopup, setShowPopup] = useState(false);
  const [activeTab, setActiveTab] = useState('login');

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

  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Handle login form submission
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    // Handle register form submission
  };

  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isPostAdPage = location.pathname === '/post-ad/';
  return (
    <>
      <Navbar
        expand="lg"
        fixed="top"
        className={`${navigation.navbar} ${isScrolled ? navigation.scrolled : ''} ${isScrolled ? navigation.shadow : ''
          } ${!isHomePage ? navigation.homepageNavbar : ''} ${isPostAdPage ? navigation.postadNavbar : ''}`}
      >        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" className={navigation.logo} /> {/* Include your logo image here */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">


          {isScrolled && isHomePage && (
            <Nav className={`ml-auto ${navigation.navbarNav} ${isPostAdPage ? 'd-none' : ''}`}>

              <Form inline className={`${navigation.searchForm} ml-auto`}>
                <FormControl type="text" placeholder="Search" className={navigation.searchInput} />
                <Button variant="outline-primary" className={navigation.searchButton}>
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Form>
            </Nav>
          )}


          {!isHomePage && (
            <Nav className={`ml-auto ${navigation.navbarNav} ${isPostAdPage ? 'd-none' : ''}`}>

              <Form inline className={`${navigation.searchForm} ml-auto`}>
                <FormControl type="text" placeholder="Search" className={navigation.searchInput} />
                <Button variant="outline-primary" className={navigation.searchButton}>
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Form>
            </Nav>
          )}


          <Nav className={`ml-auto ${navigation.navbarNav} ${isPostAdPage ? navigation.postAdPage : ''}`}>

            {/* <Nav.Link href="#menu2" className={navigation.navbarNavNavLink}><span className={navigation.navbarNavItemContent}>Explore</span></Nav.Link> */}
            <Nav.Link
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
              className={`${navigation.navbarNavNavLink} ${navigation.exploreLink} ${showDropdown ? navigation.NavLinkActive : ''}`}
            >
              <span className={navigation.navbarNavItemContent}>Explore</span>
              {showDropdown && (
                <Dropdown
                  show={showDropdown}
                  onMouseEnter={handleDropdownMouseEnter}
                  onMouseLeave={handleDropdownMouseLeave}
                  onClick={handleDropdownToggle}
                  className={`${navigation.dropdown} ${navigation.dropdownLeft}`}
                >
                  <Dropdown.Menu className={navigation.dropdownMenu}>
                    <div className={navigation.dropdownContent}>

                      <Row>
                        <Col md={6}>
                          <Row className='mb-3'>
                            <Col md={12} className='text-center'>
                              <h5>Services</h5>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={12} className={` ${navigation.dropdownContentSubTitle} `}>
                              <h6>Health & Wellness</h6>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={12} className={` ${navigation.dropdownContentSubTitle} `}>
                              <h6>Education</h6>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>
                            </Row>
                        </Col>






                        <Col md={6}>
                          <Row className='mb-3'>
                            <Col md={12} className='text-center'>
                              <h5>Products</h5>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={12} className={` ${navigation.dropdownContentSubTitle} `}>
                              <h6>Electronic</h6>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>

                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={12} className={` ${navigation.dropdownContentSubTitle} `}>
                              <h6>Furniture</h6>
                            </Col>
                          </Row>
                          <Row>
                            <Col md={4}>
                              <div className={navigation.menuCategoryItem}>
                                <Link to="/category1">
                                  <div className={navigation.dropdownIcon}>
                                    <img src={CategoryImage} alt="Category 1" />
                                  </div>
                                  <div className={navigation.dropdownCategory}>
                                    Category 1
                                  </div>
                                </Link>
                              </div>
                            </Col>
                            </Row>
                        </Col>


                      </Row>








                      
                    </div>
                  </Dropdown.Menu>
                </Dropdown>
              )}
            </Nav.Link>
            <Nav.Link className={` ${isPostAdPage ? 'd-none' : ''} `}><PrimaryButton /></Nav.Link>
            <Dropdown
              show={showDropdown}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
              onClick={handleDropdownToggle}
              className='hidden d-none'
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
                  <Dropdown.Item className={navigation.dropdownItem} onClick={openPopup}>Login/Register</Dropdown.Item>
                  {/* Your existing code */}
                </Dropdown.Menu>
              </CSSTransition>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      {showPopup && (
        <div className={navigation.popup}>
          <div className={navigation.popupContent}>
            <button className={navigation.closeButton} onClick={closePopup}>
              &times;
            </button>
            <div className={navigation.tabButtons}>
              <button
                className={`${navigation.tabButton} ${activeTab === 'login' ? navigation.activeTab : ''}`}
                onClick={() => switchTab('login')}
              >
                Login
              </button>
              <button
                className={`${navigation.tabButton} ${activeTab === 'register' ? navigation.activeTab : ''}`}
                onClick={() => switchTab('register')}
              >
                Register
              </button>
            </div>
            <div className={navigation.tabContent}>
              {activeTab === 'login' && (
                <form onSubmit={handleLoginSubmit}>
                  <div className={navigation.formGroup}>
                    <label htmlFor="login-email">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </label>
                    <input
                      type="text"
                      id="login-email"
                      placeholder="Email/Mobile"
                      required
                    />
                  </div>
                  <div className={navigation.formGroup}>
                    <label htmlFor="login-password">
                      <FontAwesomeIcon icon={faLock} />
                    </label>
                    <input
                      type="password"
                      id="login-password"
                      placeholder="Password"
                      required
                    />
                  </div>
                  <div className={navigation.formGroup}>
                    <div className={navigation.rememberMeContainer}>
                      <input type="checkbox" id="rememberMe" />
                      <label htmlFor="rememberMe">Remember me</label>
                    </div>
                    <a href="#" className={navigation.forgotPasswordLink}>Forgot password?</a>
                  </div>
                  <button type="submit" className={navigation.formButton}>
                    Login
                  </button>
                </form>
              )}
              {activeTab === 'register' && (
                <form onSubmit={handleRegisterSubmit}>
                  <div className={navigation.formGroup}>
                    <label htmlFor="registerName">
                      <FontAwesomeIcon icon={faUser} />
                    </label>
                    <input type="text" id="registerName" placeholder="Name" required />
                  </div>
                  <div className={navigation.formGroup}>
                    <label htmlFor="registerEmail">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </label>
                    <input type="email" id="registerEmail" placeholder="Email" required />
                  </div>
                  <div className={navigation.formGroup}>
                    <label htmlFor="registerPassword">
                      <FontAwesomeIcon icon={faLock} />
                    </label>
                    <input type="password" id="registerPassword" placeholder="Password" required />
                  </div>
                  <div className={navigation.formGroup}>
                    <label htmlFor="registerPhone">
                      <FontAwesomeIcon icon={faMobile} />
                    </label>
                    <input type="tel" id="registerPhone" placeholder="Phone" required />
                  </div>
                  <button type="submit" className={navigation.formButton}>
                    Register
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Navigation;
