import React, { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import PrimaryButton from '../partials/PrimaryButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLocationPin } from '@fortawesome/free-solid-svg-icons';
import { faLock, faEnvelope, faMobile, faSearch, faAngleLeft } from '@fortawesome/free-solid-svg-icons';
import showPopupStyles from './ShowPopup.module.css';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ShowPopup({ isOpen, onClose, setUsername }) {
    const [activeTab, setActiveTab] = useState('login');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [howDidYouHear, setHowDidYouHear] = useState(''); // Fixed typo here
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [showPopup, setShowPopup] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // New isLoggedIn state

    const closePopup = () => {
        onClose(false);
    };

    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    const api = axios.create({
        baseURL: 'http://localhost:8000',
        timeout: 5000, // Request timeout in milliseconds
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    useEffect(() => {
        // Check if user is already logged in
        const token = localStorage.getItem('token');
        const username = localStorage.getItem('username');
        if (token && username) {
            setIsLoggedIn(true);
            setUsername(username);
        }
    }, []);

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: loginEmail,
            password: loginPassword,
        };
        api
            .post('/api/login', data)
            .then((response) => {
                if (response.data.api_token) {
                    console.log('Login successful');
                    console.log(response.data);
                    localStorage.setItem('token', response.data.api_token);
                    localStorage.setItem('username', response.data.username);
                    localStorage.setItem('userId', response.data.id);
                    setUsername(response.data.username); // Replace 'JohnDoe' with the actual username
                    setIsLoggedIn(true); // Set isLoggedIn to true when login is successful
                    navigate('/'); // Redirect to the homepage
                    onClose(false);
                } else {
                    console.log('Login failed');
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };


    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        if (!firstName || !lastName || !email || !password || !howDidYouHear) {
            return;
        }
        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
            how_hear_about_us: howDidYouHear,
        };
        api
            .post('/api/register', data)
            .then((response) => {
                if (response.data.api_token) {
                    alert('Registration successful');
                    console.log('Registration successful');
                    console.log(response.data);
                } else if (response.data.error) {
                    console.log('Registration failed');
                    alert('Registration failed');
                    console.log(response.data.error);
                }
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleLogout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('username');
        localStorage.removeItem('userId');
        setIsLoggedIn(false);
        setUsername('');
        navigate('/');
        onClose(false)
    };

    return (
        <>
            {isOpen && (
                <div className={showPopupStyles.popup}>
                    <div className={showPopupStyles.popupContent}>
                        <button className={showPopupStyles.closeButton} onClick={closePopup}>
                            &times;
                        </button>
                        {isLoggedIn ? (
                            <div className={showPopupStyles.profilePopupContent}>
                                <button>Edit Profile</button>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        ) : (
                            <>
                                <div className={showPopupStyles.tabButtons}>
                                    <button
                                        className={`${showPopupStyles.tabButton} ${activeTab === 'login' ? showPopupStyles.activeTab : ''}`}
                                        onClick={() => switchTab('login')}
                                    >
                                        Login
                                    </button>
                                    <button
                                        className={`${showPopupStyles.tabButton} ${activeTab === 'register' ? showPopupStyles.activeTab : ''}`}
                                        onClick={() => switchTab('register')}
                                    >
                                        Register
                                    </button>
                                </div>
                                <div className={showPopupStyles.tabContent}>
                                    {activeTab === 'login' && (
                                        <form onSubmit={handleLoginSubmit}>
                                            <div className={`mb-3 ${showPopupStyles.formGroup}`}>
                                                <input
                                                    type="text"
                                                    id="login-email"
                                                    placeholder="Email/Mobile"
                                                    className='form-control'
                                                    value={loginEmail}
                                                    onChange={(e) => setLoginEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className={`mb-3 ${showPopupStyles.formGroup}`}>
                                                <input
                                                    type="password"
                                                    id="login-password"
                                                    placeholder="Password"
                                                    className='form-control'
                                                    value={loginPassword}
                                                    onChange={(e) => setLoginPassword(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <button type="submit" className={`btn btn-success ${showPopupStyles.formButton}`}>
                                                Login
                                            </button>
                                        </form>
                                    )}
                                    {activeTab === 'register' && (
                                        <form onSubmit={handleRegisterSubmit}>
                                            <div className="mb-3">
                                                <div className={showPopupStyles.inlineFormFields}>
                                                    <div className="form-field">
                                                        <input
                                                            type="text"
                                                            id="login-first-name"
                                                            placeholder="First Name"
                                                            className="form-control"
                                                            value={firstName}
                                                            onChange={(e) => setFirstName(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                    <div className="form-field">
                                                        <input
                                                            type="text"
                                                            id="login-last-name"
                                                            placeholder="Last Name"
                                                            className="form-control"
                                                            value={lastName}
                                                            onChange={(e) => setLastName(e.target.value)}
                                                            required
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    type="text"
                                                    id="login-email"
                                                    placeholder="Email/Mobile"
                                                    className="form-control"
                                                    value={email}
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    type="password"
                                                    id="login-password"
                                                    placeholder="Password"
                                                    className="form-control"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <select
                                                    className="form-control"
                                                    id="howDidYouHear"
                                                    value={howDidYouHear}
                                                    onChange={(e) => setHowDidYouHear(e.target.value)}
                                                >
                                                    <option value="">How did you hear about us?</option>
                                                    <option value="friend">Friend/Colleague</option>
                                                    <option value="socialMedia">Social Media</option>
                                                </select>
                                            </div>
                                            <button type="submit" className="btn btn-success">
                                                Register
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            )}
        </>
    );
}

export default ShowPopup;
