import React, { useState, useEffect } from 'react';
import Breadcrumbs from '../partials/Breadcrumbs';
import { Row, Col, Nav, Container } from 'react-bootstrap';
import myaccount from './MyAccount.module.css';
import MyDashboard from '../partials/MyDashboard';
import MyDetails from '../partials/MyDetails';
import MyAds from '../partials/MyAds';
import MySettings from '../partials/MySettings';
import ManageListings from '../partials/ManageListings';
import ManageUsers from '../partials/ManageUsers';
import EditListingForm from '../partials/EditListingForm';
import axios from 'axios'; // Import axios
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChartBar, faUser, faAd, faCog } from '@fortawesome/free-solid-svg-icons';
import OtherPageHeader from '../partials/OtherPageHeader';
import NewCategory from '../partials/NewCategory';
import NewCategoryCreate from '../partials/NewCategoryCreate';

function MyAccount() {
  const [activeTab, setActiveTab] = useState('/mydashboard');
  const [selectedListing, setSelectedListing] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false); // Replace with your logic to determine if the user is an admin
  const baseUrl = process.env.REACT_APP_BASE_URL;

  useEffect(() => {
    fetchAdminStatus();
  }, []);

  const api = axios.create({
    baseURL: baseUrl,
    timeout: 5000, // Request timeout in milliseconds
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  const fetchAdminStatus = async () => {
    try {
      const accessToken = localStorage.getItem('token'); // Retrieve the access token from localStorage or your preferred storage mechanism

      const response = await api.get('/api/checkAdminStatus', {
        headers: {
          ...api.defaults.headers, // Preserve the existing headers
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const isAdmin = response.data.isAdmin;
      setIsAdmin(isAdmin);
    } catch (error) {
      console.error('Error fetching admin status:', error);
    }
  };

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
  };

  const handleCreateCategory = () => {
    setSelectedListing();
    setActiveTab('/newcategorycreate');
  };

  const handleEditListing = (listing) => {
    setSelectedListing(listing);
    setActiveTab('/editlisting');
  };

  const handleEditUser = (user) => {
    setSelectedListing(user);
    setActiveTab('/edituser');
  };

  const handleCancelEdit = () => {
    setSelectedListing(null);
    setActiveTab('/managelistings');
  };

  const handleCreateCategoryCancel = () => {
    setActiveTab('/managecategories');
  }

  const handleSaveEdit = (editedListing) => {
    // Handle the save functionality for the edited listing
    console.log('Save Edited Listing:', editedListing);
    // You can make an API request to update the listing in the backend
    // After successful update, you can navigate back to the Manage Listings tab or perform any other action
    setActiveTab('/managelistings');
  };

  const handleCategoryCreateSave = () => {
    // Handle the save functionality for the edited listing
    // You can make an API request to update the listing in the backend
    // After successful update, you can navigate back to the Manage Listings tab or perform any other action
    setActiveTab('/managecategories');
  };
  

  const renderContent = () => {
    if (activeTab === '/mydashboard') {
      return <MyDashboard />;
    } else if (activeTab === '/mydetails') {
      return <MyDetails />;
    } else if (activeTab === '/myads') {
      return <MyAds />;
    } else if (activeTab === '/mysettings') {
      return <MySettings />;
    } else if (activeTab === '/managecategories') {
      return <NewCategory listings={[]} handleCreateCategory={handleCreateCategory} />;
    } else if (activeTab === '/managelistings') {
      return <ManageListings listings={[]} handleEditListing={handleEditListing} />;
    } else if (activeTab === '/manageusers') {
      return <ManageUsers users={[]} handleEditUser={handleEditUser} />;
    } else if (activeTab === '/editlisting') {
      return (
        <>
          <EditListingForm listing={selectedListing} handleSave={handleSaveEdit} handleCancel={handleCancelEdit} />
        </>
      );
    } else if (activeTab === '/newcategorycreate') {
      return (
        <>
          <NewCategoryCreate listing={selectedListing} handleSave={handleCategoryCreateSave} handleCancel={handleCreateCategoryCancel} />
        </>
      );
    }
    return null;
  };

  const breadcrumbItems = [
    { label: 'Home', url: '#' },
    { label: 'My Account', url: '#', active: true },
  ];

  return (
    <div>
      <Breadcrumbs items={breadcrumbItems} /> {/* Render the Breadcrumbs component */}
      <OtherPageHeader title="My Account" />
      <section className={`${myaccount.myMainSection}`}>
        <Container>
          <Col md={12}>
            <Row>
              <Col sm={3}>
                <Nav
                  defaultActiveKey="/mydashboard"
                  className="flex-column"
                  activeKey={activeTab}
                  onSelect={handleTabSelect}
                >
                  <Nav.Link
                    className={`${myaccount.link} ${activeTab === '/mydashboard' ? myaccount.activeLink : ''}`}
                    eventKey="/mydashboard"
                  >
                    <FontAwesomeIcon icon={faChartBar} /> My Dashboard
                  </Nav.Link>
                  <Nav.Link
                    className={`${myaccount.link} ${activeTab === '/mydetails' ? myaccount.activeLink : ''}`}
                    eventKey="/mydetails"
                  >
                    <FontAwesomeIcon icon={faUser} /> My Details
                  </Nav.Link>
                  <Nav.Link
                    className={`${myaccount.link} ${activeTab === '/myads' ? myaccount.activeLink : ''}`}
                    eventKey="/myads"
                  >
                    <FontAwesomeIcon icon={faAd} /> My Ads
                  </Nav.Link>
                  {isAdmin && (
                    <>
                      <Nav.Link
                        className={`${myaccount.link} ${activeTab === '/managelistings' ? myaccount.activeLink : ''}`}
                        eventKey="/managelistings"
                      >
                        <FontAwesomeIcon icon={faUser} /> Manage Listings
                      </Nav.Link>
                      <Nav.Link
                        className={`${myaccount.link} ${activeTab === '/managecategories' ? myaccount.activeLink : ''} ${activeTab === '/newcategorycreate' ? myaccount.activeLink : ''}`}
                        eventKey="/managecategories"
                      >
                        <FontAwesomeIcon icon={faUser} /> New Category
                      </Nav.Link>
                      <Nav.Link
                        className={`${myaccount.link} ${activeTab === '/manageusers' ? myaccount.activeLink : ''}`}
                        eventKey="/manageusers"
                      >
                        <FontAwesomeIcon icon={faUser} /> Manage Users
                      </Nav.Link>
                    </>
                  )}
                  <Nav.Link
                    className={`${myaccount.link} ${activeTab === '/mysettings' ? myaccount.activeLink : ''}`}
                    eventKey="/mysettings"
                  >
                    <FontAwesomeIcon icon={faCog} /> Settings
                  </Nav.Link>
                </Nav>
              </Col>
              <Col sm={9}>
                <div className={myaccount.content}>{renderContent()}</div>
              </Col>
            </Row>
          </Col>
        </Container>
      </section>
    </div>
  );
}

export default MyAccount;
