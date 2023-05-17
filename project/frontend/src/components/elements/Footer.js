import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import footerStyles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Container>
        <Row>
          <Col md={4}>
            <h4>About Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vestibulum magna ut risus pulvinar, ac laoreet orci consequat.</p>
            <div className={footerStyles.socialIcons}>
              <FontAwesomeIcon icon={faFacebookF} />
              <FontAwesomeIcon icon={faTwitter} />
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <div className={footerStyles.contactInfo}>
              <div className={footerStyles.icon}>
                <FontAwesomeIcon icon={faMapMarkerAlt} />
              </div>
              <div>
                <p>123 Street, City</p>
                <p>State, Country</p>
              </div>
            </div>
            <div className={footerStyles.contactInfo}>
              <div className={footerStyles.icon}>
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <div>
                <p>info@example.com</p>
                <p>support@example.com</p>
              </div>
            </div>
            <div className={footerStyles.contactInfo}>
              <div className={footerStyles.icon}>
                <FontAwesomeIcon icon={faPhone} />
              </div>
              <div>
                <p>+1234567890</p>
                <p>+0987654321</p>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <h4>Quick Links</h4>
            <ul className={footerStyles.quickLinks}>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#properties">Menu</a></li>
              <li><a href="#contact">Menu</a></li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className={footerStyles.footerBottom}>
        <Container>
          <p>&copy; 2023 DealsBarter. All rights reserved.</p>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
