import React from 'react';
import styles from './Faq.module.css';
import { Accordion } from 'react-bootstrap';

const Faq = ({ items }) => {
  return (
    <div className={`${styles.faqSection}`}>
  <div className={styles.faqAccordion}>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Question 1?</Accordion.Header>
        <Accordion.Body>
          Answer 1.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Question 2?</Accordion.Header>
        <Accordion.Body>
          Answer 2.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Question 3?</Accordion.Header>
        <Accordion.Body>
          Answer 3.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Question 4?</Accordion.Header>
        <Accordion.Body>
          Answer 4.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4">
        <Accordion.Header>Question 5?</Accordion.Header>
        <Accordion.Body>
          Answer 5.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
</div>

  );
};

export default Faq;
