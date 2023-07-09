import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import newcategorycreate from './NewCategoryCreate.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function NewCategoryCreate({ handleSave, handleCancel }) {
    const [name, setName] = useState('');
    const [image, setImage] = useState(null);

    const baseUrl = process.env.REACT_APP_BASE_URL;

    const api = axios.create({
        baseURL: baseUrl,
        timeout: 5000,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Create a FormData object to send the form data including the image file
        const formData = new FormData();
        formData.append('name', name);
        formData.append('image', image);

        try {
            // Send the form data to the API endpoint for creating a category
            await api.post('/api/categories', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Handle the success scenario, such as showing a success message or redirecting to another page
            console.log('Category created successfully!');
            toast.success('Category Created'); // Show success notification
            handleSave(); // Call the handleSave function passed from the parent component to update the UI
        } catch (error) {
            // Handle the error scenario, such as showing an error message to the user
            console.error('Error creating category:', error);
        }
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    return (
        <>
            <h3 className={newcategorycreate.title}>Create Category</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save
                </Button>{' '}
                <Button variant="secondary" onClick={handleCancel}>
                    Cancel
                </Button>
            </Form>
        </>
    );
}

export default NewCategoryCreate;
