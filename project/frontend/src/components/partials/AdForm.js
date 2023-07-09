import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import adform from './AdForm.module.css';
import CatSub from './CatSub';
import axios from 'axios';
import ShowPopup from './ShowPopup';
import Navigation from '../elements/Navigation'; // Import the updateUsername function
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AdForm() {
    const { register, handleSubmit } = useForm();
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const accessToken = localStorage.getItem('token'); // Retrieve the access token from localStorage or your preferred storage mechanism
    const [title, setTitle] = useState('');
    const [selectedSubCategory, setSelectedSubCategory] = useState('');
    const [selectedSubCategory2, setSelectedSubCategory2] = useState('');
    const [isPopupOpen, setPopupOpen] = useState(false);
    const [username, setUsername] = useState('');

    const api = axios.create({
        baseURL: baseUrl,
        timeout: 5000,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${accessToken}`,
        }
    });
    
    const onSubmit = async (formData) => {
        formData.subcategory_id = selectedSubCategory;
        formData.subcategory2_id = selectedSubCategory2;
        console.log(formData);

        const isLoggedIn = await checkUserLoggedIn(); // Replace with your authentication logic
        console.log(isLoggedIn);
        checkUserLoggedIn().then((isLoggedIn) => {
            if (isLoggedIn) {
                const formDataPayload = new FormData();

                Object.entries(formData).forEach(([key, value]) => {
                    formDataPayload.append(key, value);
                  });

                // Append uploaded images
                uploadedImages.forEach((image, index) => {
                    formDataPayload.append(`images[${index}]`, image);
                });

                api.post('/api/listings', formDataPayload).then((response) => {
                    console.log('Listing created:', response.data);
                    toast.success('Listing Created. Sent for Approval'); // Show success notification
                }).catch((error) => {
                    console.error('Error creating listing:', error);
                    toast.error('Error creating listing:', error); // Show success notification
                });
            } else {
                // Show a popup or perform any other action for non-logged-in users
                showPopup();
            }
        });
    };

    const [uploadedImages, setUploadedImages] = useState([]);

    const handleImageDrop = (acceptedFiles) => {
        setUploadedImages((prevImages) => [...prevImages, ...acceptedFiles]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleImageDrop, multiple: true });

    const handleSubCategoryChange = (subcategory) => {
        setSelectedSubCategory(subcategory);
    };

    const handleSubCategory2Change = (subcategory) => {
        setSelectedSubCategory2(subcategory);
    };

    const checkUserLoggedIn = () => {
        const accessToken = localStorage.getItem('token');

        return api
            .get('/api/checkLoginStatus', {
                headers: {
                    ...api.defaults.headers,
                    Authorization: `Bearer ${accessToken}`,
                },
            })
            .then((response) => {
                return response.data.isLoggedIn;
            })
            .catch((error) => {
                console.error('Error fetching login status:', error);
                return false;
            });
    };


    const showPopup = () => {
        setPopupOpen(true);
    };

    const closePopup = () => {
        setPopupOpen(false);
    };

    const updateUsername = (newUsername) => {
        setUsername(newUsername);
    };

    return (
        <>
            <Card className={`${adform.shadow} ${adform.card}`}>
                <Card.Body>
                    <h4 className={adform.formTitle}>Ad Form</h4>
                    <Form onSubmit={handleSubmit(onSubmit)} className="form-spacing">
                        <Form.Group className='mb-3' controlId="title">
                            <Form.Label>Ad Title</Form.Label>
                            <Form.Control placeholder="Enter a title" type="text" {...register("title", { required: true })}
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                            />
                        </Form.Group>

                        <Form.Group className='mb-3' controlId="user_type">
                            <Form.Label>Select an option</Form.Label>
                            <div className="radio-inline">
                                <Form.Check
                                    inline
                                    type="radio"
                                    name="user_type"
                                    label="Offerer"
                                    value="Offerer"
                                    checked
                                    {...register("user_type", { required: true })}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    name="user_type"
                                    label="Seeker"
                                    value="Seeker"
                                    {...register("user_type", { required: true })}
                                />
                            </div>
                        </Form.Group>

                        <Form.Group className='mb-3' controlId="business_type">
                            <div className="radio-inline">
                                <Form.Check
                                    inline
                                    type="radio"
                                    name="business_type"
                                    label="B2B"
                                    value="B2B"
                                    {...register("business_type", { required: true })}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    name="business_type"
                                    label="B2C"
                                    value="B2C"
                                    checked
                                    {...register("business_type", { required: true })}
                                />
                            </div>
                        </Form.Group>

                        <CatSub onSubCategoryChange={handleSubCategoryChange} />


                        <Form.Group className='mb-3' controlId="adImages">
                            <Form.Label>Ad Images</Form.Label>
                            <div {...getRootProps()} className={`${adform.dropzone} ${isDragActive ? 'active' : ''}`}>
                                <input {...getInputProps()} />
                                {isDragActive ? (
                                    <p>Drop the images here...</p>
                                ) : (
                                    <p>Drag and drop images here, or click to select files</p>
                                )}
                            </div>
                            {uploadedImages.length > 0 && (
                                <div>
                                    <p>Uploaded Images:</p>
                                    {uploadedImages.map((file, index) => (
                                        <img key={index} src={URL.createObjectURL(file)} alt={`uploaded-image-${index}`} className={`${adform.uploadedImage}`} />
                                    ))}
                                </div>
                            )}
                        </Form.Group>


                        <Form.Group className='mb-3' controlId="description">
                            <Form.Label>Ad Description</Form.Label>
                            <Form.Control placeholder="Enter the description of the ad" as="textarea" name='description' rows={3} {...register("description", { required: true })} />
                        </Form.Group>


                        <CatSub onSubCategoryChange={handleSubCategory2Change} />


                        <Form.Group className='mb-3' controlId="posted_by">
                            <Form.Label>Posted By</Form.Label>
                            <div className="radio-inline">
                                <Form.Check
                                    inline
                                    type="radio"
                                    name="posted_by"
                                    label="Owner"
                                    value="Owner"
                                    checked
                                    {...register("posted_by", { required: true })}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    name="posted_by"
                                    label="Agent"
                                    value="Agent"
                                    {...register("posted_by", { required: true })}
                                />
                                <Form.Check
                                    inline
                                    type="radio"
                                    name="posted_by"
                                    label="Broker"
                                    value="Broker"
                                    {...register("posted_by", { required: true })}
                                />
                            </div>
                        </Form.Group>

                        <div className="text-center">
                            <Button variant="primary" type="submit" style={{ width: "200px" }}>Accept & Post</Button>
                        </div>
                    </Form>
                </Card.Body>
            </Card>
            <ShowPopup isOpen={isPopupOpen} onClose={closePopup} setUsername={setUsername} />
            <Navigation updateUsername={updateUsername} /> {/* Pass the updateUsername function */}

        </>
    );

}

export default AdForm;
