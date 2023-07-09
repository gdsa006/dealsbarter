import React, { useState, useEffect } from 'react';
import managelistings from './ManageListings.module.css';
import { Row, Table, Form, Button } from 'react-bootstrap';
import axios from 'axios';

function ManageListings({ handleEditListing }) {
  const [listings, setListings] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const baseUrl = process.env.REACT_APP_BASE_URL;
  const accessToken = localStorage.getItem('token'); // Retrieve the access token from localStorage or your preferred storage mechanism

  useEffect(() => {
    fetchListings();
  }, [currentPage]);

  const api = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Authorization': `Bearer ${accessToken}`,

    }
  });

  const fetchListings = async () => {
    try {
      const response = await api.get('/api/listings', {
        params: {
          page: currentPage,
        },
      });

      console.log(response.data);

      // Clear the listings array if it's the first page
      if (currentPage === 1) {
        setListings([]);
      }

      // Update the total number of pages
      setTotalPages(response.data.last_page);

      // Append the new listings to the existing list
      setListings((prevListings) => [...prevListings, ...response.data.data]);
    } catch (error) {
      console.error('Error fetching listings:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLoadMore = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const filteredListings = listings.filter((listing) =>
    listing.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleApprove = async (listingId, approved) => {
    try {
      const response = await api.patch(`/api/listings/${listingId}`, {
        approved: approved ? 0 : 1,
      });

      // Update the listings state with the updated listing
      setListings((prevListings) => {
        const updatedListings = prevListings.map((listing) => {
          if (listing.id === listingId) {
            return { ...listing, approved: response.data.approved };
          }
          return listing;
        });
        return updatedListings;
      });
    } catch (error) {
      console.error('Error updating listing:', error);
    }
  };

  const renderApprovalButton = (listingId, approved) => {
    if (approved) {
      return (
        <Button variant="danger" onClick={() => handleApprove(listingId, approved)}>
          Disapprove
        </Button>
      );
    } else {
      return (
        <Button variant="success" onClick={() => handleApprove(listingId, approved)}>
          Approve
        </Button>
      );
    }
  };

  return (
    <>
      <Row className="align-items-center mb-4">
        <h3 className={managelistings.title}>Manage Listings</h3>
        <Form className="ml-auto">
          <Form.Group>
            <Form.Control
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearch}
            />
          </Form.Group>
        </Form>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredListings.map((listing) => (
              <tr key={listing.id}>
                <td>{listing.title}</td>
                <td>{listing.description}</td>
                <td>
                  <Button
                    variant="primary"
                    onClick={() => handleEditListing(listing.id)}
                  >
                    Edit
                  </Button>
                  {renderApprovalButton(listing.id, listing.approved)}

                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        {currentPage < totalPages && (
          <Button variant="primary" onClick={handleLoadMore}>
            Load More
          </Button>
        )}
      </Row>
    </>
  );
}

export default ManageListings;
