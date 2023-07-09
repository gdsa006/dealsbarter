import React, { useState, useEffect } from 'react';
import catsub from './CatSub.module.css';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import axios from 'axios';

function CatSub({ onSubCategoryChange }) {
    const [categories, setCategories] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const baseUrl = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        fetchCategories();
    }, []);

    const api = axios.create({
        baseURL: baseUrl,
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    const fetchCategories = async () => {
        try {
            const response = await api.get('/api/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const fetchSubCategories = async (category) => {
        try {
            const response = await api.get(`/api/categories/${category}/subcategories`);
            setSubCategories(response.data);
        } catch (error) {
            console.error('Error fetching subcategories:', error);
        }
    };

    const handleCategoryChange = (event) => {
        const selectedCategory = event.target.value;
        fetchSubCategories(selectedCategory);
    };

    const handleSubCategoryChange = (event) => {
        const selectedSubCategory = event.target.value;
        onSubCategoryChange(selectedSubCategory);
    };

    return (
        <>
            <Form.Group className='mb-3' controlId="barterExchange">
                <Form.Label>Barter/Exchange with</Form.Label>
                <Row>
                    <Col>
                        <Form.Group controlId="category">
                            <Form.Label>Category</Form.Label>
                            <Form.Control as="select" onChange={handleCategoryChange}>
                                <option value="">Select Category</option>
                                {categories.map((category) => (
                                    <option key={category.id} value={category.id}>
                                        {category.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group controlId="subCategory">
                            <Form.Label>Sub Category</Form.Label>
                            <Form.Control as="select" onChange={handleSubCategoryChange}>
                                <option value="">Select Sub Category</option>
                                {subCategories.map((subcategory) => (
                                    <option key={subcategory.id} value={subcategory.id}>
                                        {subcategory.name}
                                    </option>
                                ))}
                            </Form.Control>
                        </Form.Group>
                    </Col>
                </Row>
            </Form.Group>
        </>
    );
}

export default CatSub;
