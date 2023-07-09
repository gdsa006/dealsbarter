import React, { useState, useEffect } from 'react';
import showcase from './Showcase.module.css';
import axios from 'axios';

function Showcase() {
  const [categories, setCategories] = useState([]);

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
    fetchRandomCategories();
  }, []);

  const fetchRandomCategories = () => {
    api.get('/api/categories/home/random')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching random categories:', error);
      });
  };

  return (
    <section className={`section d-none, ${showcase.mySection}`}>
      <div className="container">
        <div className={`row ${showcase.container}`}>
          {categories.map(category => (
            <div className={`col-md-6 ${showcase.column}`} key={category.id}>
              <a href="#" className={showcase.clickableColumn}>
                <div className={showcase.subColumn}>
                  <div className={showcase.imageContainer}>
                    <img src={`http://localhost:8000/storage/${category.image}`} alt={category.name} className={showcase.image} />
                  </div>
                  <div className={showcase.textContainer}>
                    <h3 className={showcase.heading}>{category.name}</h3>
                    <p className={showcase.description}>{category.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Showcase;
