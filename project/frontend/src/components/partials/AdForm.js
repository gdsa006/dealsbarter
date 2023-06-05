import React, { useState } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDropzone } from 'react-dropzone';
import adform from './AdForm.module.css';

function AdForm() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        // Handle form submission
        console.log(data);
    };

    const [uploadedImages, setUploadedImages] = useState([]);

    const handleImageDrop = (acceptedFiles) => {
        setUploadedImages((prevImages) => [...prevImages, ...acceptedFiles]);
    };

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop: handleImageDrop, multiple: true });


    return (
        <Card className={`${adform.shadow} ${adform.card}`}>
            <Card.Body>
                <h4 className={adform.formTitle}>Ad Form</h4>
                <Form onSubmit={handleSubmit(onSubmit)} className="form-spacing">
                    <Form.Group className='mb-3' controlId="adTitle">
                        <Form.Label>Ad Title</Form.Label>
                        <Form.Control placeholder="Enter a title" type="text" {...register("adTitle", { required: true })} />
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="offerSeeker">
                        <Form.Label>Select an option</Form.Label>
                        <div className="radio-inline">
                            <Form.Check
                                inline
                                type="radio"
                                name="offerSeeker"
                                label="Offer"
                                value="offer"
                                checked
                                {...register("offerSeeker", { required: true })}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                name="offerSeeker"
                                label="Seeker"
                                value="seeker"
                                {...register("offerSeeker", { required: true })}
                            />
                        </div>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="b2bB2c">
                        <div className="radio-inline">
                            <Form.Check
                                inline
                                type="radio"
                                name="b2bB2c"
                                label="B2B"
                                value="b2b"
                                {...register("b2bB2c", { required: true })}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                name="b2bB2c"
                                label="B2C"
                                value="b2c"
                                checked
                                {...register("b2bB2c", { required: true })}
                            />
                        </div>
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group className='mb-3' controlId="category">
                                <Form.Label>Category</Form.Label>
                                <Form.Control as="select" {...register("category", { required: true })}>
                                    <option value="">Select Category</option>
                                    <option value="category1">Category 1</option>
                                    <option value="category2">Category 2</option>
                                    <option value="category3">Category 3</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="subCategory">
                                <Form.Label>Sub Category</Form.Label>
                                <Form.Control as="select" {...register("subCategory", { required: true })}>
                                    <option value="">Select Sub Category</option>
                                    <option value="subCategory1">Sub Category 1</option>
                                    <option value="subCategory2">Sub Category 2</option>
                                    <option value="subCategory3">Sub Category 3</option>
                                </Form.Control>
                            </Form.Group>
                        </Col>
                    </Row>


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


                    <Form.Group className='mb-3' controlId="adDescription">
                        <Form.Label>Ad Description</Form.Label>
                        <Form.Control placeholder="Enter the description of the ad" as="textarea" rows={3} {...register("adDescription", { required: true })} />
                    </Form.Group>


                    <Form.Group className='mb-3' controlId="barterExchange">
                        <Form.Label>Barter/Exchange with</Form.Label>
                        <Row>
                            <Col>
                                <Form.Group controlId="category">
                                    <Form.Label>Category</Form.Label>
                                    <Form.Control as="select" {...register("category", { required: true })}>
                                        <option value="">Select Category</option>
                                        <option value="category1">Category 1</option>
                                        <option value="category2">Category 2</option>
                                        <option value="category3">Category 3</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="subCategory">
                                    <Form.Label>Sub Category</Form.Label>
                                    <Form.Control as="select" {...register("subCategory", { required: true })}>
                                        <option value="">Select Sub Category</option>
                                        <option value="subCategory1">Sub Category 1</option>
                                        <option value="subCategory2">Sub Category 2</option>
                                        <option value="subCategory3">Sub Category 3</option>
                                    </Form.Control>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="postedBy">
                        <Form.Label>Posted By</Form.Label>
                        <div className="radio-inline">
                            <Form.Check
                                inline
                                type="radio"
                                name="postedBy"
                                label="Owner"
                                value="owner"
                                checked
                                {...register("postedBy", { required: true })}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                name="postedBy"
                                label="Agent"
                                value="agent"
                                {...register("postedBy", { required: true })}
                            />
                            <Form.Check
                                inline
                                type="radio"
                                name="postedBy"
                                label="Broker"
                                value="broker"
                                {...register("postedBy", { required: true })}
                            />
                        </div>
                    </Form.Group>

                    <div className="text-center">
                        <Button variant="primary" type="submit" style={{ width: "200px" }}>Accept & Post</Button>
                    </div>
                </Form>
            </Card.Body>
        </Card>
    );
}

export default AdForm;
