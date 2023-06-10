import React, { useState } from 'react';
import contactus from './ContactUs.module.css';
import wideImage from '../../images/contact-us.jpg'; // Import your logo image
import { Card, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function ContactUs() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        // You can access the form field values using the state variables (firstName, lastName, email, phoneNumber)
        // Example: console.log(firstName, lastName, email, phoneNumber);
        // Reset the form fields after submission if needed
        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setMessage('');
    };

    return (
        <div>
            <section className={`${contactus.myHeader}`}>
                <img src={wideImage} className={`${contactus.imageShape} ${contactus.myHeaderImage}`} />
                <div className={`container ${contactus.myHeaderContainer}`}>
                    <div className={`row align-items-center ${contactus.myHeaderContainer}`}>
                        <div className={`col-md-6 ${contactus.column}`}>
                            <h3>Get in touch</h3>
                            <p>Want to get in touch? We'd love to hear from you.</p>
                        </div>

                    </div>
                </div>
            </section>
            <section className={`${contactus.mySection}`}>
                <div className="container">
                    <div className='row'>
                        <div className={`col-md-6 ${contactus.leftColumn}`}>
                            <Card className={`${contactus.customCard}`}>
                                <Card.Body>
                                    <div className={`${contactus.callSection}`}>
                                        <div className={`col-md-3 `}>
                                            <FontAwesomeIcon icon={faPhone} className={`${contactus.callIcon}`} />
                                        </div>
                                        <div className={`col-md-9 `}>
                                            <div>
                                                <p className={`${contactus.callText}`}>Call Us directly at</p>
                                                <p className={`${contactus.phoneNumber}`}>123-456-7890</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <div className={`${contactus.cardOverlay}`}></div>
                            </Card>
                            <Card className={`${contactus.customCard}`} style={{ 'marginTop': '2.2rem' }}>
                                <Card.Body>
                                    <div className={`${contactus.callSection}`}>
                                        <div className={`col-md-3 `}>
                                            <FontAwesomeIcon icon={faCommentDots} className={`${contactus.callIcon}`} />
                                        </div>
                                        <div className={`col-md-9 `}>
                                            <div>
                                                <p className={`${contactus.callText}`}>Email Us</p>
                                                <p className={`${contactus.phoneNumber}`}>abcd@gmail.com</p>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <div className={`${contactus.cardOverlay}`}></div>
                            </Card>
                            <Card className={`${contactus.customCard} ${contactus.customCardSocial}`} style={{ 'marginTop': '2.2rem' }}>
                                <Card.Body>
                                    <div className={`${contactus.callSection}`}>

                                        <div className={`col-md-12 `}>
                                            <div className={contactus.socialIcons}>
                                                <a href="https://www.facebook.com/profile.php?id=100092649663821" target="_blank" rel="noopener noreferrer" className={contactus.facebook}>
                                                    <FontAwesomeIcon icon={faFacebookF} />
                                                </a>
                                                <a href="https://twitter.com/barter_deals" target="_blank" rel="noopener noreferrer" className={contactus.twitter}>
                                                    <FontAwesomeIcon icon={faTwitter} />
                                                </a>
                                                <a href="https://www.instagram.com/dealsbarter/" target="_blank" rel="noopener noreferrer" className={contactus.instagram}>
                                                    <FontAwesomeIcon icon={faInstagram} />
                                                </a>
                                                <a href="https://www.youtube.com/channel/UC6OVubPy4Z0wCzTAHKdDN2w" target="_blank" rel="noopener noreferrer" className={contactus.youtube}>
                                                    <FontAwesomeIcon icon={faYoutube} />
                                                </a>
                                                <a href="https://www.linkedin.com/in/barter-deals-39b573275/" target="_blank" rel="noopener noreferrer" className={contactus.linked}>
                                                    <FontAwesomeIcon icon={faLinkedin} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </Card.Body>
                                <div className={`${contactus.cardOverlay}`}></div>
                            </Card>
                        </div>
                        <div className={`col-md-6 ${contactus.rightColumn}`}>
                            <Card className={`${contactus.customCard} ${contactus.customCardForm}`}>
                                <Card.Body>
                                    <div className={`${contactus.contactForm}`}>
                                        <h3>Contact Us</h3>
                                        <p>We can help. Our team is on hand to answer your questions.</p>
                                        <form onSubmit={handleSubmit} >
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="firstName">First Name</label>
                                                    <input type="text" id="firstName" value={firstName} className='form-control' onChange={(e) => setFirstName(e.target.value)} />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="lastName">Last Name</label>
                                                    <input type="text" id="lastName" value={lastName} className='form-control' onChange={(e) => setLastName(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="email">Email</label>
                                                    <input type="email" id="email" value={email} className='form-control' onChange={(e) => setEmail(e.target.value)} />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="phoneNumber">Phone Number</label>
                                                    <input type="tel" id="phoneNumber" value={phoneNumber} className='form-control' onChange={(e) => setPhoneNumber(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-12">
                                                    <label htmlFor="message">Message</label>
                                                    <textarea type="message" rows={6} id="message" value={message} className='form-control' onChange={(e) => setMessage(e.target.value)} />
                                                </div>
                                            </div>
                                            <div className="text-center">
                                                <button type="submit" className='btn btn-primary'>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactUs;
