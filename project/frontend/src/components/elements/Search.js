import React, { useState } from 'react';
import search from './Search.module.css';
import wideImage from '../../images/wideImage.jpg'; // Import your logo image
import { Form, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';

function Search() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    const handleLocationChange = (event) => {
        setSelectedLocation(event.target.value);
    };

    const handleDetectLocation = () => {
        // Add your logic to detect the location here
        // You can use browser APIs or external services to determine the user's location
        // Update the state or perform any additional actions based on the detected location
        // Example:
        console.log('Detecting location...');
    };

    const handleSearch = () => {
        // Implement search functionality based on selected category, location, and search term
    };

    return (
        <div>
            <div className={`${search.skewedContainer} ${search.imageContainer}`}>
                <img src={wideImage} alt="Header Image" className={search.image} />
                <div className={search.searchBox}>
                    <div className={search.searchContainer}>
                        <div className={search.searchRow}>
                            <Form className={search.searchForm}>
                                <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange} className={search.categoryDropdown}>
                                    <option value="">Select Category</option>
                                    <option value="category1">Category 1</option>
                                    <option value="category2">Category 2</option>
                                    <option value="category3">Category 3</option>
                                </Form.Control>
                                <Form.Control type="text" placeholder="Search" className={`mr-sm-2 ${search.searchInput}`} />
                                <Form.Control as="select" value={selectedLocation} onChange={handleLocationChange} className={search.locationDropdown}>
                                    <option value="">Select Location</option>
                                    <option value="category1">Punjab</option>
                                    <option value="category2">Maharashtra</option>
                                </Form.Control>
                                <Button variant="primary" onClick={handleSearch} className={search.searchButton}>
                                    Search
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
                <div className={search.trustedContainer}>
                    <Container fluid>
                        <Row className={search.columnRow}>
                            <Col className={`text-center ${search.column}`}>
                                <FontAwesomeIcon icon={faTools} />
                                <p>Icon 1</p>
                            </Col>
                            <Col className={`text-center ${search.column}`}>
                                <FontAwesomeIcon icon={faTools} />
                                <p>Icon 2</p>
                            </Col>
                            <Col className={`text-center ${search.column}`}>
                                <FontAwesomeIcon icon={faTools} />
                                <p>Icon 3</p>
                            </Col>
                            <Col className={`text-center ${search.column}`}>
                                <FontAwesomeIcon icon={faTools} />
                                <p>Icon 4</p>
                            </Col>
                            <Col className={`text-center ${search.column}`}>
                                <FontAwesomeIcon icon={faTools} />
                                <p>Icon 5</p>
                            </Col>
                        </Row>
                    </Container>
                </div>


            </div>
        </div>
    );
}

export default Search;
