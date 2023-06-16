import React, { useState } from 'react';
import searchpage from './SearchPage.module.css';
import { Form, Button, FormControl, Collapse, Card } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ServiceCard from '../partials/ServiceCard';
import Breadcrumbs from '../partials/Breadcrumbs';

function SearchPage() {
  const location = useLocation();
  const { results, searchTerm } = location.state;
  const [selectedCategory, setSelectedCategory] = useState(true);
  const [selectedSubcategory, setSelectedSubcategory] = useState(true);
  const [selectedOfferer, setSelectedOfferer] = useState(true);
  const [selectedSeeker, setSelectedSeeker] = useState(true);
  const [selectedFullBarter, setSelectedFullBarter] = useState(true);
  const [selectedPartialBarter, setSelectedPartialBarter] = useState(true);
  const [selectedB2C, setSelectedB2C] = useState(true);
  const [selectedB2B, setSelectedB2B] = useState(true);

  const handleCategoryChange = () => {
    setSelectedCategory((prevState) => !prevState);
  };
  
  const handleSubcategoryChange = () => {
    setSelectedSubcategory((prevState) => !prevState);
  };
  
  const handleOffererChange = () => {
    setSelectedOfferer((prevState) => !prevState);
  };
  
  const handleSeekerChange = () => {
    setSelectedSeeker((prevState) => !prevState);
  };
  
  const handleFullBarterChange = () => {
    setSelectedFullBarter((prevState) => !prevState);
  };
  
  const handlePartialBarterChange = () => {
    setSelectedPartialBarter((prevState) => !prevState);
  };
  
  const handleB2CChange = () => {
    setSelectedB2C((prevState) => !prevState);
  };
  
  const handleB2BChange = () => {
    setSelectedB2B((prevState) => !prevState);
  };

  const handleFilterApply = () => {
    // Apply the selected filters to filter the search results
    // Implement the logic to filter the results based on the selected filter values
  };

  const breadcrumbItems = [
    { label: 'Home', url: '#' },
    { label: 'Search', url: '#' },
    { label: searchTerm, url: '#', active: true },
  ];

  return (
    <div>
        <section>
        <Breadcrumbs items={breadcrumbItems} /> {/* Render the Breadcrumbs component */}
        </section>
        
      <section className={`${searchpage.myMainSection}`}>
        <div className="container-fluid">
          <div className="row">
          <div className={`col-lg-2 ${searchpage.stickyFilters}`}>
              <h5>Filter By</h5>
              <Form>
                <Form.Group className="mb-3" controlId="searchFilter">
                  <Form.Label>Search</Form.Label>
                  <div className="d-flex">
                    <FormControl type="text" value={searchTerm} placeholder="Search" className={searchpage.searchInput} />
                    <Button variant="outline-primary" className={searchpage.searchButton}>
                      <FontAwesomeIcon icon={faSearch} />
                    </Button>
                  </div>
                </Form.Group>
                <Card className={searchpage.cardHeader}>
                  <Card.Header className={searchpage.cardHeaderTitle}>
                    <h5 className="mb-0">
                      <Button variant="link" onClick={handleCategoryChange} className={searchpage.accordionButton}>
                        Category
                      </Button>
                    </h5>
                  </Card.Header>
                  <Collapse in={selectedCategory}>
                    <Card.Body className={searchpage.cardBody}>
                      <Form.Group className="mb-3">
                        <Form.Check
                          type="checkbox"
                          label="Category 1"
                          checked={selectedCategory}
                          onChange={handleCategoryChange}
                        />
                        <Form.Check
                          type="checkbox"
                          label="Category 2"
                          checked={selectedCategory}
                          onChange={handleCategoryChange}
                        />
                        <Form.Check
                          type="checkbox"
                          label="Category 3"
                          checked={selectedCategory}
                          onChange={handleCategoryChange}
                        />
                      </Form.Group>
                    </Card.Body>
                  </Collapse>
                </Card>

                <Card className={searchpage.cardHeader}>
                  <Card.Header className={searchpage.cardHeaderTitle}>
                    <h5 className="mb-0">
                      <Button variant="link" onClick={handleSubcategoryChange} className={searchpage.accordionButton}>
                        Subcategory
                      </Button>
                    </h5>
                  </Card.Header>
                  <Collapse in={selectedSubcategory}>
                    <Card.Body className={searchpage.cardBody}>
                      <Form.Group className="mb-3">
                        <Form.Check
                          type="checkbox"
                          label="Subcategory 1"
                          checked={selectedSubcategory}
                          onChange={handleSubcategoryChange}
                        />
                        <Form.Check
                          type="checkbox"
                          label="Subcategory 2"
                          checked={selectedSubcategory}
                          onChange={handleSubcategoryChange}
                        />
                        <Form.Check
                          type="checkbox"
                          label="Subcategory 3"
                          checked={selectedSubcategory}
                          onChange={handleSubcategoryChange}
                        />
                      </Form.Group>
                    </Card.Body>
                  </Collapse>
                </Card>

                <Card className={searchpage.cardHeader}>
                  <Card.Header className={searchpage.cardHeaderTitle}>
                    <h5 className="mb-0">
                      <Button variant="link" onClick={handleOffererChange} className={searchpage.accordionButton}>
                        Offerer/Seeker
                      </Button>
                    </h5>
                  </Card.Header>
                  <Collapse in={selectedOfferer || selectedSeeker}>
                    <Card.Body>
                      <Form.Group className="mb-3">
                        <Form.Check
                          type="checkbox"
                          label="Offerer"
                          checked={selectedOfferer}
                          onChange={handleOffererChange}
                        />
                        <Form.Check
                          type="checkbox"
                          label="Seeker"
                          checked={selectedSeeker}
                          onChange={handleSeekerChange}
                        />
                      </Form.Group>
                    </Card.Body>
                  </Collapse>
                </Card>

                <Card className={searchpage.cardHeader}>
                  <Card.Header className={searchpage.cardHeaderTitle}>
                    <h5 className="mb-0">
                      <Button variant="link" onClick={handleFullBarterChange} className={searchpage.accordionButton}>
                        Barter Type
                      </Button>
                    </h5>
                  </Card.Header>
                  <Collapse in={selectedFullBarter || selectedPartialBarter}>
                    <Card.Body>
                      <Form.Group className="mb-3">
                        <Form.Check
                          type="checkbox"
                          label="Full Barter"
                          checked={selectedFullBarter}
                          onChange={handleFullBarterChange}
                        />
                        <Form.Check
                          type="checkbox"
                          label="Partial Barter"
                          checked={selectedPartialBarter}
                          onChange={handlePartialBarterChange}
                        />
                      </Form.Group>
                    </Card.Body>
                  </Collapse>
                </Card>

                <Card className={searchpage.cardHeader}>
                  <Card.Header className={searchpage.cardHeaderTitle}>
                    <h5 className="mb-0">
                      <Button variant="link" onClick={handleB2CChange} className={searchpage.accordionButton}>
                        B2C/B2B
                      </Button>
                    </h5>
                  </Card.Header>
                  <Collapse in={selectedB2C || selectedB2B}>
                    <Card.Body>
                      <Form.Group className="mb-3">
                        <Form.Check
                          type="checkbox"
                          label="B2C"
                          checked={selectedB2C}
                          onChange={handleB2CChange}
                        />
                        <Form.Check
                          type="checkbox"
                          label="B2B"
                          checked={selectedB2B}
                          onChange={handleB2BChange}
                        />
                      </Form.Group>
                    </Card.Body>
                  </Collapse>
                </Card>
                <Button variant="primary" className="btn-block" onClick={handleFilterApply}>
                  Apply
                </Button>
              </Form>
            </div>
            <div className="col-lg-7 overflow-auto">
              <h5>Search Results</h5>
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />
              <ServiceCard />

            </div>
            <div className="col-lg-3">
              <h5>Adsense</h5>
              <img src="https://dummyimage.com/300x250/ccc/000" width='100%' alt="Adsense" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SearchPage;