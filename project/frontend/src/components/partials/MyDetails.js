import React, { useState } from 'react';
import mydetails from './MyDetails.module.css';

function MyDetails() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [about, setAbout] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form values from the component state (firstName, lastName, email, about, profilePhoto)
    // For example, you can send the form data to an API or update the state of a parent component
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setProfilePhoto(file);
  };

  return (
    <>
      <h3 className={mydetails.title}>My Details</h3>
      <form onSubmit={handleSubmit}>
        <div className={`mb-3 ${mydetails.formRow}`}>
          <div className={mydetails.formGroup}>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              className='form-control'
            />
          </div>
          <div className={mydetails.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              className='form-control'
            />
          </div>
        </div>
        <div className={`mb-3 ${mydetails.formGroup}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className='form-control'
          />
        </div>
        <div className={`mb-3 ${mydetails.formGroup} `}>
          <label htmlFor="about">About</label>
          <textarea
            id="about"
            value={about}
            onChange={e => setAbout(e.target.value)}
            className='form-control'
          ></textarea>
        </div>
        <div className={`mb-4 ${mydetails.formGroup} `}>
          <label htmlFor="profilePhoto">Profile Photo</label>
          <input
            type="file"
            id="profilePhoto"
            accept="image/*"
            onChange={handleFileChange}
            className='form-control'
          />
        </div>
        <button type="submit" className='btn btn-primary mt-3'>Save</button>
      </form>
    </>
  );
}

export default MyDetails;
