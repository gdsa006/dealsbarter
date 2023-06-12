import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import search from './Search.module.css';
import wideImage from '../../images/wideImage.jpg';
import { Form, Button } from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faWrench, faGift, faHashtag, faCrown, faRibbon, faSearch } from '@fortawesome/free-solid-svg-icons';

function Search() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [showResultsDropdown, setShowResultsDropdown] = useState(false);
  const [selectedResult, setSelectedResult] = useState(null); // Newly added state

  const navigate = useNavigate();
  const searchInputRef = useRef(null);
  const dropdownRef = useRef(null);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleSearchTermChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    setShowResultsDropdown(term !== '');
  };

  const handleSearch = () => {
    performSearch();
  };

  const performSearch = () => {
    // Perform search based on selected category and search term
    const filteredResults = filterResults(searchTerm, selectedCategory);
    console.log(filteredResults);

    // Redirect to the search page component along with the filtered search results
    navigate('/search-page', { state: { results: filteredResults, searchTerm } });
  };

  const filterResults = (term, category) => {
    // Assuming you have a static array of search results
    const searchResults = [
      {
        id: 1,
        name: 'Result 1',
        description: 'Result 1 Description',
      },
      {
        id: 2,
        name: 'Result 2',
        description: 'Result 2 Description',
      },
      {
        id: 3,
        name: 'Result 3',
        description: 'Result 3 Description',
      },
    ];

    // Filter the search results based on the selected category and search term
    const filteredResults = searchResults.filter((result) => {
      return (
        (category === '' || result.category === category) &&
        (term === '' ||
          result.name.toLowerCase().includes(term.toLowerCase()) ||
          result.description.toLowerCase().includes(term.toLowerCase()))
      );
    });

    return filteredResults;
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
    setSearchTerm(result.name);
    setShowResultsDropdown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setShowResultsDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      performSearch();
    }
  };

  return (
    <div>
      <div className={`${search.skewedContainer} ${search.imageContainer}`}>
        <img src={wideImage} alt="Header Image" className={search.image} />
        <div className={search.searchBox}>
          <h2>Looking for Something?</h2>
          <p></p>
          <div className={search.searchContainer}>
            <div className={search.searchRow}>
              <Form className={search.searchForm}>
                <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange} className={search.categoryDropdown}>
                  <option value="">Select Category</option>
                  <option value="category1">Category 1</option>
                  <option value="category2">Category 2</option>
                  <option value="category3">Category 3</option>
                </Form.Control>
                <div className={search.searchInputContainer}>
                  <Form.Control
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                    onKeyPress={handleKeyPress} // Added key press event handler
                    className={`mr-sm-2 ${search.searchInput}`}
                    ref={searchInputRef}
                  />
                  {showResultsDropdown && (
                    <div className={search.searchResults} ref={dropdownRef}>
                      {filterResults(searchTerm, selectedCategory).map((result) => (
                        <div key={result.id} className={search.searchResultItem} onClick={() => handleResultClick(result)}>
                          {result.name}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <Button variant="primary" onClick={handleSearch} className={search.searchButton}>
                  <FontAwesomeIcon icon={faSearch} />
                </Button>
              </Form>
            </div>
          </div>
        </div>
        <div className={search.trustedContainer}>
          <Container fluid>
            <Row className={search.columnRow}>
              <Col className={`text-center ${search.column}`}>
                <FontAwesomeIcon icon={faWrench} />
                <p>Services</p>
              </Col>
              <Col className={`text-center ${search.column}`}>
                <FontAwesomeIcon icon={faGift} />
                <p>Coupons</p>
              </Col>
              <Col className={`text-center ${search.column}`}>
                <FontAwesomeIcon icon={faHashtag} />
                <p>Influencer</p>
              </Col>
              <Col className={`text-center ${search.column}`}>
                <FontAwesomeIcon icon={faCrown} />
                <p>Clubs</p>
              </Col>
              <Col className={`text-center ${search.column}`}>
                <FontAwesomeIcon icon={faRibbon} />
                <p>Cause</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default Search;
