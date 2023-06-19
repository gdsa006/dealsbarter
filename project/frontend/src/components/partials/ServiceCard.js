import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faUser, faBullseye, faExchangeAlt  } from '@fortawesome/free-solid-svg-icons';
import styles from './ServiceCard.module.css'; // Import CSS module styles

const ServiceCard = () => {
  return (
    <Card className={`${styles.serviceCard} col-md-4`}>
      <div className={styles.serviceContent}>
        <div className={styles.serviceImage}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL-HsP6ax6RIUFFEH0teLXfiX2R1rAnYeJVtFJAq5FOlQF3dUZ0MsEMH0g3m6K0vlfb-j7rJ5E0wo&usqp=CAU&ec=48665701" alt="Service Image" />
        </div>
        <div className={styles.serviceBody}>
          <h6>Category</h6>
          <Card.Title className={styles.serviceTitle}><h4>Service Title</h4></Card.Title>
          <div className={styles.meta}>
            <div className={styles.metaItem}>
              <FontAwesomeIcon icon={faBullseye} className={styles.metaIcon} />
              <span>B2B</span>
            </div>
            <div className={styles.metaItem}>
            <FontAwesomeIcon icon={faExchangeAlt} className={styles.metaIcon} />
              <span>Partial</span>
            </div>
            <div className={styles.metaItem}>
              <FontAwesomeIcon icon={faUser} className={styles.metaIcon} />
              <span>Broker</span>
            </div>
          </div>
          <Card.Text className={styles.serviceDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tincidunt neque. Integer sagittis dolor
            vitae dolor interdum, ac elementum est porta.
          </Card.Text>
          <Button variant="primary">Learn More</Button>
          <div className={styles.exchangeWith}>
                <div className={styles.wrapper}>
                    <Card.Title className={styles.serviceTitle}><h5>Service Title</h5></Card.Title>
                </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
