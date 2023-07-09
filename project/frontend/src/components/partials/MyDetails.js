import React, { useState, useEffect } from 'react';
import mydetails from './MyDetails.module.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function MyDetails() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [about, setAbout] = useState('');
  const [profilePhoto, setProfilePhoto] = useState(null);

  const baseUrl = process.env.REACT_APP_BASE_URL;
  const accessToken = localStorage.getItem('token'); // Retrieve the access token from localStorage or your preferred storage mechanism

  const api = axios.create({
    baseURL: baseUrl,
    timeout: 5000, // Request timeout in milliseconds
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  });

  useEffect(() => {
    fetchUserData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await api.get('/api/users/me', {
        headers: {
          ...api.defaults.headers, // Preserve the existing headers
          Authorization: `Bearer ${accessToken}`,
        }
      });
      const userData = response.data;

      setFirstName(userData.first_name);
      setLastName(userData.last_name);
      setEmail(userData.email);
      setAbout(userData.about);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the form values from the component state (firstName, lastName, email, about, profilePhoto)
    // For example, you can send the form data to an API or update the state of a parent component

    // Create a FormData object to send the form data including the profile photo file
    const formData = new FormData();
    formData.append('first_name', firstName);
    formData.append('last_name', lastName);
    formData.append('email', email);
    formData.append('about', about);
    formData.append('profile_photo', profilePhoto);

    try {
      // Send the form data to the API endpoint for updating the user data
      await api.post('/api/users/update', formData, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'multipart/form-data'
        }
      });

      // Handle the success scenario, such as showing a success message or redirecting to another page
      console.log('User data updated successfully!');
      toast.success('Profile Updated'); // Show success notification
    } catch (error) {
      // Handle the error scenario, such as showing an error message to the user
      console.error('Error updating user data:', error);
      toast.error('Error updating user data:', error); // Show success notification

    }
  };

  const handleFileChange = (e) => {
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
              onChange={(e) => setFirstName(e.target.value)}
              className="form-control"
            />
          </div>
          <div className={mydetails.formGroup}>
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="form-control"
            />
          </div>
        </div>
        <div className={`mb-3 ${mydetails.formGroup}`}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
          />
        </div>
        <div className={`mb-3 ${mydetails.formGroup} `}>
          <label htmlFor="about">About</label>
          <textarea
            id="about"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
            className="form-control"
          ></textarea>
        </div>
        <div className={`mb-4 ${mydetails.formGroup} `}>
          <label htmlFor="profilePhoto">Profile Photo</label>
          <input
            type="file"
            id="profilePhoto"
            accept="image/*"
            onChange={handleFileChange}
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary mt-3">
          Save
        </button>
      </form>
    </>
  );
}

export default MyDetails;
