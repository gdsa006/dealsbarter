import React, { useState } from 'react';
import Breadcrumbs from '../partials/Breadcrumbs';
import { Row, Col, Nav, Container } from 'react-bootstrap';
import myaccount from './MyAccount.module.css';
import MyDashboard from '../partials/MyDashboard';
import MyDetails from '../partials/MyDetails';
import MyAds from '../partials/MyAds';
import MySettings from '../partials/MySettings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faChartBar, faUser, faAd, faCog } from '@fortawesome/free-solid-svg-icons';
import OtherPageHeader from '../partials/OtherPageHeader';

function MyAccount() {
  const [activeTab, setActiveTab] = useState('/mydashboard');

  const handleTabSelect = (selectedTab) => {
    setActiveTab(selectedTab);
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
        <Container fluid>
            <Col md={12}>
          <Row>
            <Col sm={2}>
              <Nav
                defaultActiveKey="/mydashboard"
                className="flex-column"
                activeKey={activeTab}
                onSelect={handleTabSelect}
              >
                <Nav.Link className={`${myaccount.link} ${activeTab === '/mydashboard' ? myaccount.activeLink : ''}`} eventKey="/mydashboard">
                <FontAwesomeIcon icon={faChartBar} /> My Dashboard
                </Nav.Link>
                <Nav.Link className={`${myaccount.link} ${activeTab === '/mydetails' ? myaccount.activeLink : ''}`} eventKey="/mydetails">
                <FontAwesomeIcon icon={faUser} /> My Details
                </Nav.Link>
                <Nav.Link className={`${myaccount.link} ${activeTab === '/myads' ? myaccount.activeLink : ''}`} eventKey="/myads">
                <FontAwesomeIcon icon={faAd} /> My Ads
                </Nav.Link>
                <Nav.Link className={`${myaccount.link} ${activeTab === '/mysettings' ? myaccount.activeLink : ''}`} eventKey="/mysettings">
                <FontAwesomeIcon icon={faCog} /> Settings
                </Nav.Link>
              </Nav>
            </Col>
            <Col sm={10}>
                <div className={myaccount.content}>
                {renderContent()}
                </div>
            </Col>
          </Row>
          </Col>
        </Container>
      </section>
    </div>
  );
}

export default MyAccount;
