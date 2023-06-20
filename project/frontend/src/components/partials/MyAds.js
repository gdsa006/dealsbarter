import React from 'react';
import myads from './MyAds.module.css';
import { Row } from 'react-bootstrap';
import ServiceCard from './ServiceCard';

function MyAds() {
  return (
    <>
      <h3 className={myads.title}>My Ads</h3>
      <Row>
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
        <ServiceCard />
      </Row>
    </>
  );
}
export default MyAds;
