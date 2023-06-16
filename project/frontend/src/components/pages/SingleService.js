import React, { useState, useEffect } from 'react';
import { Image, Container, Row, Col, Button } from 'react-bootstrap';
import styles from './SingleService.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTags, faUser, faBullseye, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import Faq from '../partials/Faq';

const SingleService = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const images = [
        'https://dummyimage.com/800x600/000/fff&text=Image+1',
        'https://dummyimage.com/800x600/000/fff&text=Image+2',
        'https://dummyimage.com/800x600/000/fff&text=Image+3',
        'https://dummyimage.com/800x600/000/fff&text=Image+4',
        // Add more image URLs as needed
    ];

    useEffect(() => {
        let interval;

        if (isPlaying) {
            interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            }, 3000);
        }

        return () => {
            clearInterval(interval);
        };
    }, [isPlaying, images.length]);

    const toggleSlideShow = () => {
        setIsPlaying((prevState) => !prevState);
    };

    return (
        <section className={styles.mySection}>
            <Container className={`${styles.bgLight} p-4`}>
                <Row>
                    <Col md={7}>
                        <div className={`${styles.positionRelative}`}>
                            <Image src={images[currentImageIndex]} fluid width='100%' />
                            <Button
                                variant="primary"
                                className={`${styles.positionAbsolute} ${styles.bottom0} ${styles.end0} ${styles.m3}`}
                                onClick={toggleSlideShow}
                            >
                                {isPlaying ? 'Pause' : 'Play'}
                            </Button>
                        </div>
                        <div className={`${styles.boldText}`}>
                            <h5>Some useful text here</h5>
                        </div>
                        <div className={`${styles.moreImages}`}>
                            <Row>
                                <Col md={6} className={styles.imageContainer}>
                                    <Image src={images[0]} fluid className={styles.squareImage} />
                                </Col>
                                <Col md={6} className={styles.imageContainer}>
                                    <Image src={images[1]} fluid className={styles.squareImage} />
                                </Col>

                                <Col md={6} className={styles.imageContainer}>
                                    <Image src={images[2]} fluid className={styles.squareImage} />
                                </Col>
                                <Col md={6} className={styles.imageContainer}>
                                    <Image src={images[3]} fluid className={styles.squareImage} />
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col md={5} className={`${styles.flexColumn} ${styles.justifyContentCenter}`}>
                        <h2 className={`${styles.title}`}>Service Title</h2>
                        <Button className='btn-block mt-4 mb-2' variant="primary">Learn More</Button>
                        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
                        <hr className='my-4' />
                        <div className={`mt-5 ${styles.description}`}>
                            <h6>
                                Description
                            </h6>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac tincidunt neque. Integer sagittis dolor vitae dolor interdum, ac elementum est porta.
                            </p>
                        </div>
                        <div className={`mt-5 ${styles.meta} `}>
                            <h6>
                                Some Text
                            </h6>
                            <div className={styles.horizontalBoxes}>
                                <div className={styles.box}>
                                    <FontAwesomeIcon icon={faTags} className={styles.icon} />
                                    <p className={styles.boxText}>Box 1</p>
                                </div>
                                <div className={styles.box}>
                                    <FontAwesomeIcon icon={faBullseye} className={styles.icon} />
                                    <p className={styles.boxText}>Box 2</p>
                                </div>
                                <div className={styles.box}>
                                    <FontAwesomeIcon icon={faExchangeAlt} className={styles.icon} />
                                    <p className={styles.boxText}>Box 3</p>
                                </div>
                            </div>
                        </div>
                        <div className={`mt-5 ${styles.faq} `}>
                            <Faq />
</div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default SingleService;
