import React from 'react';
import Slider from 'react-slick';
import slider from './ServiceSlider.module.css';
import { Container, Row, Col } from 'react-bootstrap';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
};

const ServiceCard = ({ image, serviceName }) => (
    <div className="card">
        <img src={image} alt={serviceName} />
        <h3>{serviceName}</h3>
    </div>
);

const ServiceSlider = () => {
    return (
        <section className={`section d-none, ${slider.mySection}`}>
            <Container>
                <Row>
                    <div className="col-md-10 offser-md-1">
                        <div className={slider.sliderContainer}>
                            <Slider {...settings}>
                                {/* <ServiceCard image="path/to/image1.jpg" serviceName="Service 1" />
                                <ServiceCard image="path/to/image2.jpg" serviceName="Service 2" />
                                <ServiceCard image="path/to/image3.jpg" serviceName="Service 3" />
                                <ServiceCard image="path/to/image1.jpg" serviceName="Service 1" />
                                <ServiceCard image="path/to/image2.jpg" serviceName="Service 2" />
                                <ServiceCard image="path/to/image3.jpg" serviceName="Service 3" /> */}
                                {/* Add more ServiceCard components as needed */}
                            </Slider>
                        </div>
                    </div>
                </Row>
            </Container>
        </section>
    );
};

export default ServiceSlider;
