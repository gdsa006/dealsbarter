import React from 'react';
import myads from './MyAds.module.css';
import { Row } from 'react-bootstrap';
import ServiceCard from './ServiceCard';
import { Navbar, Nav, Dropdown, Form, FormControl, Button, Container } from 'react-bootstrap';

function Auth() {
    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    const switchTab = (tab) => {
        setActiveTab(tab);
    };

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        // Handle login form submission
    };

    const handleRegisterSubmit = (e) => {
        e.preventDefault();
        // Handle register form submission
    };
    return (
        <>
            {/* Popup for login/register */}
            {showPopup && (
                <div className={navigation.popup}>
                    <div className={navigation.popupContent}>
                        <button className={navigation.closeButton} onClick={closePopup}>
                            &times;
                        </button>
                        <div className={navigation.tabButtons}>
                            <button
                                className={`${navigation.tabButton} ${activeTab === 'login' ? navigation.activeTab : ''}`}
                                onClick={() => switchTab('login')}
                            >
                                Login
                            </button>
                            <button
                                className={`${navigation.tabButton} ${activeTab === 'register' ? navigation.activeTab : ''}`}
                                onClick={() => switchTab('register')}
                            >
                                Register
                            </button>
                        </div>
                        <div className={navigation.tabContent}>
                            {activeTab === 'login' && (
                                <form onSubmit={handleLoginSubmit}>
                                    <div className={`mb-3 ${navigation.formGroup}`}>
                                        <input
                                            type="text"
                                            id="login-email"
                                            placeholder="Email/Mobile"
                                            className='form-control'
                                            required
                                        />
                                    </div>
                                    <div className={`mb-3 ${navigation.formGroup}`}>
                                        <input
                                            type="password"
                                            id="login-password"
                                            placeholder="Password"
                                            className='form-control'
                                            required
                                        />
                                    </div>
                                    <div className={`mb-3 $navigation.formGroup`}>
                                        <div className={navigation.inlineFormFields}>
                                            <div className={navigation.formField}>
                                                <div className={navigation.rememberMeContainer}>
                                                    <input type="checkbox" id="rememberMe" />
                                                    <label className='mb-0' htmlFor="rememberMe">Remember me</label>
                                                </div>
                                            </div>
                                            <div className={navigation.formField}>
                                                <a href="#" className={navigation.forgotPasswordLink}>
                                                    Forgot password?
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" className={`btn btn-success ${navigation.formButton}`}>
                                        Login
                                    </button>
                                </form>
                            )}
                            {activeTab === 'register' && (
                                <form onSubmit={handleRegisterSubmit}>
                                    <div className={`mb-3 ${navigation.formGroup}`}>
                                        <div className={navigation.inlineFormFields}>
                                            <div className={navigation.formField}>
                                                <input
                                                    type="text"
                                                    id="login-first-name"
                                                    placeholder="First Name"
                                                    className='form-control'
                                                    required
                                                />
                                            </div>
                                            <div className={navigation.formField}>
                                                <input
                                                    type="text"
                                                    id="login-last-name"
                                                    placeholder="Last Name"
                                                    className='form-control'
                                                    required
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className={`mb-3 ${navigation.formGroup}`}>
                                        <input
                                            type="text"
                                            id="login-email"
                                            placeholder="Email/Mobile"
                                            className='form-control'
                                            required
                                        />
                                    </div>
                                    <div className={`mb-3 ${navigation.formGroup}`}>
                                        <input
                                            type="password"
                                            id="login-password"
                                            placeholder="Password"
                                            className='form-control'
                                            required
                                        />
                                    </div>
                                    <div className={`mb-3 ${navigation.formGroup}`}>
                                        <select className='form-control' id="howDidYouHear">
                                            <option value="">How did you hear about us?</option>
                                            <option value="friend">Friend/Colleague</option>
                                            <option value="socialMedia">Social Media</option>
                                        </select>
                                    </div>
                                    <div className={navigation.formGroup}>
                                        <p style={{ fontSize: '11px' }}>I agree to the <a href=''>Terms of Use</a>, <a href='#'>DPA</a> and <a href='#'>Privacy Notice</a> upon signup. </p>
                                    </div>
                                    <button type="submit" className={`btn btn-success ${navigation.formButton}`}>
                                        Register
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default Auth;
