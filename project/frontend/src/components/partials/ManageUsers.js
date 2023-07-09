import React, { useState, useEffect } from 'react';
import manageusers from './ManageUsers.module.css';
import { Row, Table, Form, Button } from 'react-bootstrap';
import axios from 'axios'; // Import axios

function ManageUsers({ handleEditUser }) {
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [totalPages, setTotalPages] = useState(1);
    const baseUrl = process.env.REACT_APP_BASE_URL;

    useEffect(() => {
        fetchUsers();
    }, [currentPage]);


    const api = axios.create({
        baseURL: baseUrl,
        timeout: 5000, // Request timeout in milliseconds
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    const fetchUsers = async () => {
        try {
            const response = await api.get('/api/users', {
                params: {
                    page: currentPage,
                },
            });

            console.log(response.data);

            if (currentPage === 1) {
                setUsers([]);
            }

            setTotalPages(response.data.last_page);

            setUsers((prevUsers) => [...prevUsers, ...response.data.data]);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };


    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const filteredUsers = users.filter((user) =>
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <Row className="align-items-center mb-4">
                <h3 className={manageusers.title}>Manage Users</h3>
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
                            <th>Name</th>
                            <th>Email</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers.map((user) => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>
                                    <Button
                                        variant="primary"
                                        onClick={() => handleEditUser(user.id)}
                                    >
                                        Edit
                                    </Button>
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

export default ManageUsers;
