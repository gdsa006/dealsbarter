import React, { useState, useContext, useRef, useEffect } from 'react';
import { Navbar, Nav, Dropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import navigation from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock, faEnvelope, faMobile, faSearch, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '../partials/PrimaryButton';
import { useLocation, Link } from 'react-router-dom';
import CategoryImage from '../../images/pexels-photo-1547248.webp'; // Import your logo image
import { LocationContext } from '../../LocationContext';

function Navigation() {
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showExploreDropdown, setShowExploreDropdown] = useState(false);
  const { updateLocation } = useContext(LocationContext);
  const { location, detectLocation } = useContext(LocationContext);
  const { city } = location;

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setShowCategoriesDropdown(true);
  };

  const handleBackButtonClick = () => {
    setShowCategoriesDropdown(false);
    setSelectedCategory(null);
  };

  const handleExploreClick = () => {
    setShowExploreDropdown((prevValue) => !prevValue);
  };


  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const exploreDropdownRef = useRef(null);
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

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        !event.target.classList.contains(navigation.exploreLink) &&
        !event.target.closest(`.${navigation.exploreLink}`) &&
        !event.target.classList.contains('dropdown-item')
      ) {
        setShowExploreDropdown(false);
      }
    };

    const handleWindowScroll = () => {
      setShowExploreDropdown(false);
    };

    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('scroll', handleWindowScroll);
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

  const path = useLocation();
  const isHomePage = path.pathname === '/';
  const isPostAdPage = path.pathname === '/';


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getLocation);
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }, []);

  function getLocation(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    fetchCityAndState(latitude, longitude);
  }

  async function fetchCityAndState(latitude, longitude) {
    const apiKey = 'AIzaSyB701mTHnvBY9CQqUli-vkWoTclJFGwX94'; // Replace with your Google Maps API key
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (data.status === 'OK') {
        const addressComponents = data.results[0].address_components;
        let city, state;

        // Loop through the address components to find the city and state
        for (let i = 0; i < addressComponents.length; i++) {
          const component = addressComponents[i];
          const types = component.types;

          if (types.includes('locality')) {
            city = component.long_name;
          }

          if (types.includes('administrative_area_level_1')) {
            state = component.short_name;
          }

          // Break the loop if both city and state are found
          if (city && state) {
            break;
          }
        }

        console.log("City: " + city);
        console.log("State: " + state);
        updateLocation({
          city: city,
          state: state,
        });
      } else {
        console.log("Error: " + data.status);
      }
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }


  return (
    <>
      <Navbar
        expand="lg"
        fixed={!isHomePage ? (isScrolled ? 'top' : undefined) : 'top'}
        className={`${navigation.navbar} ${isScrolled ? navigation.scrolled : ''} ${isScrolled ? navigation.shadow : ''
          } ${!isHomePage ? navigation.homepageNavbar : ''} ${!isPostAdPage ? navigation.postadNavbar : ''}`}
      >
        <Navbar.Brand href="/">
          {!isScrolled ?
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" width="250" height="50">
              <text x="0" y="37" font-family="Playfair Display" font-size="30" font-weight="600" fill="#ffffff">dealsBarter.com</text>
            </svg>
            :
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 50" width="250" height="50">
              <text x="0" y="37" font-family="Playfair Display" font-size="30" font-weight="600" fill="#ffffff">dealsBarter.com</text>
            </svg>
          }
          {/* <img src={logo} alt="Logo" className={navigation.logo} /> Include your logo image here */}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {(isScrolled || !isHomePage) && (
            <Nav className={`ml-auto ${navigation.navbarNav} ${!isPostAdPage ? '' : ''}`}>
              <Form inline className={`${navigation.searchForm} ml-auto`}>
                <FormControl type="text" placeholder="Search" className={navigation.searchInput} />
                <Button variant="outline-primary" className={navigation.searchButton}>
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Form>
            </Nav>
          )}
          <Nav className={`ml-auto ${navigation.navbarNav} ${!isPostAdPage ? navigation.postAdPage : ''}`}>
            {location.city ? (
              <Nav.Link
                className={`${navigation.navbarNavNavLink} ${navigation.exploreLink} ${showExploreDropdown ? navigation.NavLinkActive : ''
                  }`}
              >
                <span className={navigation.navbarNavItemContent}>{city}</span>
              </Nav.Link>
            ) : (
              <Nav.Link
                onClick={detectLocation}
                className={`${navigation.navbarNavNavLink} ${navigation.exploreLink} ${showExploreDropdown ? navigation.NavLinkActive : ''
                  }`}
              >
                <span className={navigation.navbarNavItemContent}>Detect Location</span>
              </Nav.Link>
            )}
            <Nav.Link
              onClick={handleExploreClick}
              className={`${navigation.navbarNavNavLink} ${navigation.exploreLink} ${showExploreDropdown ? navigation.NavLinkActive : ''
                }`}
            >
              <span className={navigation.navbarNavItemContent}>Explore</span>
            </Nav.Link>

            {showExploreDropdown && (
              <Dropdown.Menu
                show={showExploreDropdown}
                align="end"
                drop="down"
                style={{ left: 'auto', right: 'auto', marginLeft: '-42px' }}
                menuProps={{ style: { left: 'auto' } }}
              >
                <Dropdown.Item disabled className="d-none">
                  Categories
                </Dropdown.Item>
                {!selectedCategory && (
                  <>
                    <Dropdown.Item onClick={() => handleCategoryClick('Products')}>Products</Dropdown.Item>
                    <Dropdown.Item onClick={() => handleCategoryClick('Services')}>Services</Dropdown.Item>
                  </>
                )}
                {selectedCategory && (
                  <>
                    <Dropdown.Item onClick={handleBackButtonClick}>
                      <FontAwesomeIcon icon={faAngleLeft} /> Back to Categories
                    </Dropdown.Item>
                    {selectedCategory === 'Services' && (
                      <>
                        <Dropdown.Item>Health & Wellness</Dropdown.Item>
                        <Dropdown.Item>Immigration Services</Dropdown.Item>
                        <Dropdown.Item>Finance</Dropdown.Item>
                        <Dropdown.Item>Professional Services</Dropdown.Item>
                        <Dropdown.Item>Education</Dropdown.Item>
                        <Dropdown.Item>Sports & Games</Dropdown.Item>
                        <Dropdown.Item>Repair</Dropdown.Item>
                        {/* Add more product items */}
                      </>
                    )}
                    {selectedCategory === 'Products' && (
                      <>
                        <Dropdown.Item>Electronic</Dropdown.Item>
                        <Dropdown.Item>Furniture</Dropdown.Item>
                        <Dropdown.Item>Household</Dropdown.Item>
                        <Dropdown.Item>Fitness & Sports</Dropdown.Item>
                        <Dropdown.Item>Automobiles</Dropdown.Item>
                        <Dropdown.Item>Property</Dropdown.Item>
                        {/* Add more service items */}
                      </>
                    )}
                  </>
                )}
              </Dropdown.Menu>
            )}

            <Nav.Link as={Link} className={`${navigation.navbarNavNavLink} ${navigation.exploreLink}`}>
              <span className={navigation.navbarNavItemContent} onClick={openPopup}>
                <FontAwesomeIcon icon={faUser} />
              </span>
            </Nav.Link>

            <Nav.Link className={` ${!isPostAdPage ? '' : ''} `}>
              <PrimaryButton />
            </Nav.Link>
            {/* Dropdown menu for login/register */}
            <Dropdown
              show={showDropdown}
              onMouseEnter={handleDropdownMouseEnter}
              onMouseLeave={handleDropdownMouseLeave}
              onClick={handleDropdownToggle}
              className="hidden d-none"
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
                  <Dropdown.Item className={navigation.dropdownItem} onClick={openPopup}>
                    Login/Register
                  </Dropdown.Item>
                  {/* Your existing code */}
                </Dropdown.Menu>
              </CSSTransition>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* Popup for login/register */}
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
                  <div className={`mb-3 ${navigation.formGroup}`}>
                    <input
                      type="text"
                      id="login-email"
                      placeholder="Email/Mobile"
                      className='form-control'
                      required
                    />
                  </div>
                  <div className={`mb-3 ${navigation.formGroup}`}>
                    <input
                      type="password"
                      id="login-password"
                      placeholder="Password"
                      className='form-control'
                      required
                    />
                  </div>
                  <div className={`mb-3 $navigation.formGroup`}>
                    <div className={navigation.inlineFormFields}>
                      <div className={navigation.formField}>
                        <div className={navigation.rememberMeContainer}>
                          <input type="checkbox" id="rememberMe" />
                          <label className='mb-0' htmlFor="rememberMe">Remember me</label>
                        </div>
                      </div>
                      <div className={navigation.formField}>
                        <a href="#" className={navigation.forgotPasswordLink}>
                          Forgot password?
                        </a>
                      </div>
                    </div>
                  </div>
                  <button type="submit" className={`btn btn-success ${navigation.formButton}`}>
                    Login
                  </button>
                </form>
              )}
              {activeTab === 'register' && (
                <form onSubmit={handleRegisterSubmit}>
                  <div className={`mb-3 ${navigation.formGroup}`}>
                    <div className={navigation.inlineFormFields}>
                      <div className={navigation.formField}>
                        <input
                          type="text"
                          id="login-first-name"
                          placeholder="First Name"
                          className='form-control'
                          required
                        />
                      </div>
                      <div className={navigation.formField}>
                        <input
                          type="text"
                          id="login-last-name"
                          placeholder="Last Name"
                          className='form-control'
                          required
                        />
                      </div>
                    </div>
                  </div>
                  <div className={`mb-3 ${navigation.formGroup}`}>
                    <input
                      type="text"
                      id="login-email"
                      placeholder="Email/Mobile"
                      className='form-control'
                      required
                    />
                  </div>
                  <div className={`mb-3 ${navigation.formGroup}`}>
                    <input
                      type="password"
                      id="login-password"
                      placeholder="Password"
                      className='form-control'
                      required
                    />
                  </div>
                  <div className={`mb-3 ${navigation.formGroup}`}>
                    <select className='form-control' id="howDidYouHear">
                      <option value="">How did you hear about us?</option>
                      <option value="friend">Friend/Colleague</option>
                      <option value="socialMedia">Social Media</option>
                    </select>
                  </div>
                  <div className={navigation.formGroup}>
                    <p style={{ fontSize: '11px' }}>I agree to the <a href=''>Terms of Use</a>, <a href='#'>DPA</a> and <a href='#'>Privacy Notice</a> upon signup. </p>
                  </div>
                  <button type="submit" className={`btn btn-success ${navigation.formButton}`}>
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
