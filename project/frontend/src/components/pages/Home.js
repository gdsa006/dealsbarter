import React, { useState } from 'react';
import home from './Home.module.css';
import wideImage from '../../images/wideImage.jpg'; // Import your logo image
import { Form, Button } from 'react-bootstrap';
import ServiceSlider from '../partials/Slider';
import Search from '../elements/Search';
import WhyUs from '../elements/WhyUs';

function Home() {

  return (
    <div>
      <Search />
      <ServiceSlider />

    </div>
  );
}

export default Home;
