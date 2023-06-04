import React, { useState } from 'react';
import contactus from './ContactUs.module.css';
import wideImage from '../../images/wideImage.jpg'; // Import your logo image
import { Form, Button } from 'react-bootstrap';

function ContactUs() {

    return (
        <div>
            <section className={`${contactus.mySection}`}>
                <div className="container">
                    <div className='row'>
                        <div className={`col-md-8 offset-md-2 ${contactus.column}`}>
                            Coming Soon...
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactUs;
