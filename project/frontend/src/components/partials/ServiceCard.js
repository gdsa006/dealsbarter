import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faUser, faBullseye, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import styles from './ServiceCard.module.css'; // Import CSS module styles
import { useHistory } from 'react-router-dom';

const ServiceCard = (props) => {

  const handleCardClick = (slug) => {
    window.location.pathname = '/service/' + props.categorySlug + '/' + props.subcategorySlug + '/' + slug;
  };

  const baseUrl = process.env.REACT_APP_BASE_URL;
  console.log(props.image);
  const imageLink = baseUrl + '/storage/' + props.image;


  // ...
  

  return (
    <Card className={`${styles.serviceCard} ${props.column}`} onClick={() => handleCardClick(props.slug)}>
      <div className={styles.serviceContent}>
        <div className={`${styles.serviceImage} col-md-10`}>
          <Card.Img
            variant="top"
            src={imageLink}
            alt="Service Image"
          />
          <h5 className={`${styles.adTitle}`}>{props.title}</h5>
        </div>
        <div className={`${styles.serviceInfo} col-md-2`}>
          <div className={styles.verticalBox}>
            <FontAwesomeIcon icon={faTags} className={styles.verticalIcon} />
            <span>Category</span>
          </div>
          <div className={styles.verticalBox}>
            <FontAwesomeIcon icon={faBullseye} className={styles.verticalIcon} />
            <span>B2B</span>
          </div>
          <div className={styles.verticalBox}>
            <FontAwesomeIcon icon={faUser} className={styles.verticalIcon} />
            <span>Broker</span>
          </div>
        </div>
        <div className={`${styles.serviceBody} col-md-12`}>
          <Card.Title className={styles.serviceTitle}>
            <h4>Service Title</h4>
          </Card.Title>
          <Card.Text className={styles.serviceDescription}>
            {props.description}
          </Card.Text>
          {/* <Button variant="primary">Learn More</Button> */}
          <div className={styles.exchangeWith}>
            <div className={styles.wrapper}>
              <Card.Title className={styles.serviceTitle}>
                <h5>Service Title</h5>
              </Card.Title>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
