import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import editlistingformmyads from './EditListingForm.module.css';


function EditListingForm({ listing, handleSave, handleCancel }) {
    const [title, setTitle] = useState(listing.title);
    const [description, setDescription] = useState(listing.description);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Create an editedListing object with the updated values
        const editedListing = {
            id: listing.id,
            title: title,
            description: description,
        };

        // Pass the editedListing object to the handleSave function
        handleSave(editedListing);
    };
    return (
        <>
            <h3 className={editlistingformmyads.title}>Edit</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" value={title} onChange={handleTitleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={description}
                        onChange={handleDescriptionChange}
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
export default EditListingForm;
