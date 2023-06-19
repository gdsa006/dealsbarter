import React, { useState } from 'react';
import mydashboard from './MyDashboard.module.css';

function MyDashboard() {
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
            <h3>Dashboard</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstName}
                        onChange={e => setFirstName(e.target.value)}
                        className='form-control'
                    />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastName}
                        onChange={e => setLastName(e.target.value)}
                        className='form-control'
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className='form-control'
                    />
                </div>
                <div>
                    <label htmlFor="about">About</label>
                    <textarea
                        id="about"
                        value={about}
                        onChange={e => setAbout(e.target.value)}
                        className='form-control'
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="profilePhoto">Profile Photo</label>
                    <input
                        type="file"
                        id="profilePhoto"
                        accept="image/*"
                        onChange={handleFileChange}
                        className='form-control'
                    />
                </div>
                <button type="submit" className='btn btn-primary mt-3'>Submit</button>
            </form>
        </>
    );
}
export default MyDashboard;
