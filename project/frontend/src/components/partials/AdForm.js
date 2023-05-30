import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

function AdForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <Card className="shadow">
      <Card.Body>
      <Form onSubmit={handleSubmit(onSubmit)} className="form-spacing">
          <Form.Group controlId="adTitle">
            <Form.Label>Ad Title</Form.Label>
            <Form.Control type="text" {...register("adTitle", { required: true })} />
          </Form.Group>

          <Form.Group controlId="offerSeeker">
            <Form.Label>Select an option</Form.Label>
            <div className="radio-inline">
              <Form.Check
                inline
                type="radio"
                name="offerSeeker"
                label="Offer"
                value="offer"
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

          <Form.Group controlId="b2bB2c">
            <Form.Label>Select an option</Form.Label>
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
                {...register("b2bB2c", { required: true })}
              />
            </div>
          </Form.Group>

          <Form.Group controlId="category">
            <Form.Label>Category</Form.Label>
            <Form.Control as="select" {...register("category", { required: true })}>
              <option value="">Select Category</option>
              <option value="category1">Category 1</option>
              <option value="category2">Category 2</option>
              <option value="category3">Category 3</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="subCategory">
            <Form.Label>Sub Category</Form.Label>
            <Form.Control as="select" {...register("subCategory", { required: true })}>
              <option value="">Select Sub Category</option>
              <option value="subCategory1">Sub Category 1</option>
              <option value="subCategory2">Sub Category 2</option>
              <option value="subCategory3">Sub Category 3</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="adDescription">
            <Form.Label>Ad Description</Form.Label>
            <Form.Control as="textarea" rows={3} {...register("adDescription", { required: true })} />
          </Form.Group>

          <Form.Group controlId="postedBy">
            <Form.Label>Posted By</Form.Label>
            <div className="radio-inline">
            <Form.Check
            inline
              type="radio"
              name="postedBy"
              label="Owner"
              value="owner"
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

          <Button variant="primary" type="submit">Submit</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default AdForm;
