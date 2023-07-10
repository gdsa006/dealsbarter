import React, { useState, useEffect } from 'react';
import newcategory from './NewCategory.module.css';
import { Row, Card, Button } from 'react-bootstrap';
import axios from 'axios';

function NewCategory({ handleCreateCategory }) {
    const [categories, setCategories] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const perPage = 10; // Adjust the number of categories to display per page
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
        fetchCategories();
    }, [currentPage]);

    const fetchCategories = () => {
        api.get(`/api/manage/categories?page=${currentPage}&per_page=${perPage}`)
          .then(response => {
            if (Array.isArray(response.data)) {
              setCategories(prevCategories => {
                const existingIds = prevCategories.map(category => category.id);
                const newCategories = response.data.filter(category => !existingIds.includes(category.id));
                return [...prevCategories, ...newCategories];
              });
            } else {
              const { data, last_page } = response.data;
              setCategories(prevCategories => {
                const existingIds = prevCategories.map(category => category.id);
                const newCategories = data.filter(category => !existingIds.includes(category.id));
                return [...prevCategories, ...newCategories];
              });
              setTotalPages(last_page);
            }
          })
          .catch(error => {
            console.error('Error fetching categories:', error);
          });
      };
      

    const handleLoadMore = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <>
            <Row className="align-items-center mb-4">
                <h3 className={newcategory.title}>Categories</h3>
                <Button variant="primary" className="ml-auto" onClick={handleCreateCategory}>
                    Create Category
                </Button>
            </Row>
            <Row>
                {categories.map(category => (
                    <Card key={category.id} className="col-md-3 mb-4">
                    <Card.Img variant="top" src={`${baseUrl}/storage/${category.image}`} />
                        <Card.Body>
                            <Card.Title>{category.name}</Card.Title>
                            <p>Total Subcategories: {category.subcategories.length}</p>
                            <Button variant="primary" href={`/edit-category/${category.id}`}>Edit</Button>
                        </Card.Body>
                    </Card>
                ))}
            </Row>
            {currentPage < totalPages && (
                <Button variant="primary" onClick={handleLoadMore}>
                    Load More
                </Button>
            )}
        </>
    );
}

export default NewCategory;
