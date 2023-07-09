import React, { useState, useEffect } from 'react';
import singlesubcategory from './SingleSubCategory.module.css';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios
import ServiceCard from '../partials/ServiceCard';
import { Row, Col, Nav, Container } from 'react-bootstrap';

function SingleSubCategory() {
    const { category, subcategory } = useParams();
    const [listings, setListings] = useState([]);
    const baseUrl = process.env.REACT_APP_BASE_URL;

    const api = axios.create({
        baseURL: baseUrl,
        timeout: 5000, // Request timeout in milliseconds
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    useEffect(() => {
        fetchListings();
    }, [subcategory]);

    const fetchListings = async () => {
        try {
            const response = await api.get(`/api/category/listings/${subcategory}`);
            setListings(response.data);
            console.log('->->');
            console.log(listings);
        } catch (error) {
            console.error('Error fetching listings:', error);
        }
    };

    return (
        <div>
            <section className={singlesubcategory.mySection}>
                <Container className={`${singlesubcategory.bgLight} p-4`}>
                    <Row>
                        {listings.map((listing) => (
                            <ServiceCard column='col-md-4' key={listing.id} image={listing.images[0].image} title={listing.title} slug={listing.slug} description={listing.description} categorySlug={category} subcategorySlug={subcategory} subcategoryID={listing.subcategory_id} />
                        ))}
                    </Row>
                </Container>
            </section>
        </div>
    );
}

export default SingleSubCategory;
