import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import footerStyles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={footerStyles.footer}>
      <Container>
        <Row>
          <Col md={4}>
            <h4>About Us</h4>
            <p>dealsBarter.com portal is created with the vision of helping people who are involved in barter deals but find it difficult to find suitable deals for themselves nearby &amp; over web.</p>
            <div className={footerStyles.socialIcons}>
              <a href="https://www.facebook.com/profile.php?id=100092649663821" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="https://twitter.com/barter_deals" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/dealsbarter/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://www.youtube.com/channel/UC6OVubPy4Z0wCzTAHKdDN2w" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </Col>
          <Col md={4}>
            <h4>Contact Us</h4>
            <ul className={footerStyles.quickLinks}>
              <li><a href="/">Home</a></li>
              <li><a href="/about-us/">About Us</a></li>
              <li><a href="/contact-us/">Contact Us</a></li>
              <li><a href="#properties">Menu</a></li>
              <li><a href="#contact">Menu</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Quick Links</h4>
            <ul className={footerStyles.quickLinks}>
              <li><a href="/">Home</a></li>
              <li><a href="/about-us/">About Us</a></li>
              <li><a href="/contact-us/">Contact Us</a></li>
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
