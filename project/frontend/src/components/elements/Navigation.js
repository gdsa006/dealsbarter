import React, { useState, useContext, useRef, useEffect } from 'react';
import { Navbar, Nav, Dropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import navigation from './Navigation.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faLock, faEnvelope, faMobile, faSearch, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import PrimaryButton from '../partials/PrimaryButton';
import { useLocation, Link } from 'react-router-dom';
import CategoryImage from '../../images/pexels-photo-1547248.webp'; // Import your logo image
import { LocationContext } from '../../LocationContext';
import ShowPopup from '../partials/ShowPopup';
import ExploreCategoriesLink from '../partials/ExploreCategoriesLink';

function Navigation({ updateUsername }) {
  const { updateLocation } = useContext(LocationContext);
  const { location, detectLocation } = useContext(LocationContext);
  const { city } = location;
  const [isScrolled, setIsScrolled] = useState(false);
  const path = useLocation();
  const isHomePage = path.pathname === '/';
  const isPostAdPage = path.pathname === '/';
  const [selectedCity, setSelectedCity] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [username, setUsername] = useState('');
  const [LoggedInUser, setLoggedInUser] = useState(false);



  const openPopup = () => {
    setShowPopup(true);
  };

  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const exploreDropdownRef = useRef(null);
  let timeoutRef = null;

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

  function openLocationPopup() {
    const location = prompt('Enter a location:');
    if (location) {
      searchLocation(location);
    }
  }

  async function searchLocation(location) {
    try {
      const response = await fetch(`https://api.geolocation.com/?location=${location}`);
      const data = await response.json();

      // Assuming the API response contains an array of search results
      const results = data.results;
      console.log(searchResults);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching for location:', error);
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
        <Container>
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
            <Nav className={`ml-auto ${navigation.navbarNav} ${navigation.navbarNavLocation} ${!isPostAdPage ? navigation.postAdPageLocationNav : ''}`}>
              {location.city ? (
                <Nav.Link
                  className={`${navigation.locationLink} ${navigation.navbarNavNavLink}`}
                >
                  <span className={navigation.navbarNavItemContent}><FontAwesomeIcon icon={faLocationPin} />&nbsp;<span className='d-none'>{city}</span></span>
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link
                    onClick={detectLocation}
                    className={`${navigation.locationLink} ${navigation.navbarNavNavLink} ${navigation.exploreLink} }`}
                  >
                    <span className={navigation.navbarNavItemContent}>Detect Location</span>
                  </Nav.Link>

                  <Nav.Link
                    onClick={detectLocation}
                    className={`${navigation.locationLink} ${navigation.navbarNavNavLink} ${navigation.exploreLink} }`}
                  >
                    <span className={navigation.navbarNavItemContent} onClick={openLocationPopup}>Change Location</span>
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Nav className={`ml-auto ${navigation.navbarNav} ${!isPostAdPage ? navigation.postAdPage : ''}`}>
              {location.city ? (
                <Nav.Link
                  className={`${isHomePage ? 'd-none' : ''} ${navigation.locationLink} ${navigation.navbarNavNavLink} }`}
                >
                  <span className={navigation.navbarNavItemContent}><FontAwesomeIcon icon={faLocationPin} /></span>
                </Nav.Link>
              ) : (
                <>
                  <Nav.Link
                    onClick={detectLocation}
                    className={`${isHomePage ? 'd-none' : ''} ${navigation.locationLink} ${navigation.navbarNavNavLink} }`}
                  >
                    <span className={navigation.navbarNavItemContent}>Detect Location</span>
                  </Nav.Link>

                  <Nav.Link
                    onClick={detectLocation}
                    className={`${isHomePage ? 'd-none' : ''} ${navigation.locationLink} ${navigation.navbarNavNavLink} ${navigation.exploreLink} }`}
                  >
                    <span className={navigation.navbarNavItemContent} onClick={openLocationPopup}>Change Location</span>
                  </Nav.Link>
                </>
              )}
              


<ExploreCategoriesLink />

              <Nav.Link as={Link} className={`${navigation.navbarNavNavLink}`}>
                <span className={navigation.navbarNavItemContent} onClick={openPopup}>
                  {LoggedInUser ? LoggedInUser : <FontAwesomeIcon icon={faUser} />}
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
        </Container>
      </Navbar>
      <ShowPopup isOpen={showPopup} onClose={setShowPopup} setUsername={setLoggedInUser} />
    </>
  );
}
export default Navigation;
