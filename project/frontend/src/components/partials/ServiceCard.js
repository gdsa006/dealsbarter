import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './ServiceCard.module.css'; // Import CSS module styles

const ServiceCard = () => {
  return (
    <Card className={styles.serviceCard}>
      <div className={styles.serviceContent}>
        <div className={styles.serviceImage}>
          <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL-HsP6ax6RIUFFEH0teLXfiX2R1rAnYeJVtFJAq5FOlQF3dUZ0MsEMH0g3m6K0vlfb-j7rJ5E0wo&usqp=CAU&ec=48665701" alt="Service Image" />
        </div>
        <div className={styles.serviceBody}>
          <Card.Title className={styles.serviceTitle}>Service Title</Card.Title>
          <Card.Text className={styles.serviceDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tincidunt neque. Integer sagittis dolor
            vitae dolor interdum, ac elementum est porta.
          </Card.Text>
          <Button variant="primary">Learn More</Button>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
