import React, { useState, useEffect } from 'react';
import explorecategorieslink from '../elements/Navigation.module.css';
import { Nav, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

function ExploreCategoriesLink({ onSubCategoryChange }) {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState(null);
  const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        !event.target.classList.contains(explorecategorieslink.exploreLink) &&
        !event.target.closest(`.${explorecategorieslink.exploreLink}`) &&
        !event.target.classList.contains('dropdown-item')
      ) {
        setShowCategoriesDropdown(false);
      }
    };

    const handleWindowScroll = () => {
      setShowCategoriesDropdown(false);
    };

    document.addEventListener('click', handleDocumentClick);
    window.addEventListener('scroll', handleWindowScroll);

    return () => {
      document.removeEventListener('click', handleDocumentClick);
      window.removeEventListener('scroll', handleWindowScroll);
    };
  }, []);

  const api = axios.create({
    // Configure the base URL of your API
    baseURL: baseUrl, // Replace with your actual API URL
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
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

  const handleCategoryClick = (category, slug) => {
    setSelectedCategorySlug(slug);
    setSelectedCategory(category);
    setShowCategoriesDropdown(true);
    fetchSubCategories(category);
  };

  const handleBackButtonClick = () => {
    setSelectedCategory(null);
    setSubCategories([]);
  };

  const handleSubCategoryChange = (categoryslug, subcategoryslug) => {
    window.location.pathname = '/service/' + categoryslug + '/' + subcategoryslug;
  };

  return (
    <>
      <Nav.Link
        onClick={() => setShowCategoriesDropdown((prevValue) => !prevValue)}
        className={`${explorecategorieslink.navbarNavNavLink} ${explorecategorieslink.exploreLink} ${showCategoriesDropdown ? explorecategorieslink.NavLinkActive : ''
          }`}
      >
        <span className={explorecategorieslink.navbarNavItemContent}>Explore</span>
      </Nav.Link>
      {showCategoriesDropdown && (
        <Dropdown.Menu
          show={showCategoriesDropdown}
          align="end"
          drop="down"
          style={{ left: 'auto', right: 'auto', marginLeft: '-42px' }}
          menuProps={{ style: { left: 'auto' } }}
          className={explorecategorieslink.dropdown}
        >
          <Dropdown.Item disabled className="d-none">
            Categories
          </Dropdown.Item>
          {!selectedCategory ? (
            categories.map((category) => (
              <Dropdown.Item key={category.id} onClick={() => handleCategoryClick(category.id, category.slug)}>
                {category.name}
              </Dropdown.Item>
            ))
          ) : (
            <>
              <Dropdown.Item onClick={handleBackButtonClick}>
                <FontAwesomeIcon icon={faAngleLeft} /> Back to Categories
              </Dropdown.Item>
              {subCategories.map((subcategory) => (
                <Dropdown.Item key={subcategory.id} onClick={() => handleSubCategoryChange(selectedCategorySlug, subcategory.slug)}>
                  {subcategory.name}
                </Dropdown.Item>
              ))}
            </>
          )}
        </Dropdown.Menu>
      )}
    </>
  );
}

export default ExploreCategoriesLink;
