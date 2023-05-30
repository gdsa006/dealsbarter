import React, { useState } from 'react';
import aboutus from './AboutUs.module.css';
import wideImage from '../../images/wideImage.jpg'; // Import your logo image
import { Form, Button } from 'react-bootstrap';

function Aboutus() {

    return (
        <div>
            <section className={`${aboutus.mySection}`}>
                <div className="container">
                    <div className='row'>
                        <div className={`col-md-8 offset-md-2 ${aboutus.column}`}>
                            <h3>About Us</h3>
                            <p>
                                dealsBarter.com portal is created with the vision of helping people who are involved in barter deals
                                but find it difficult to find suitable deals for themselves nearby &amp; over web.
                            </p>
                            <p>
                                We will create barter community wherein they can interact with each other for the subject, deal
                                discussions or any other requirement related to Barter.
                            </p>
                            <p>
                                Barter Deals platform will definitely be a key changer in bringing people together for information
                                related to barter deals and helping them by easing funds flows.
                            </p>
                            <p>
                                Barter system is an old method of exchange before money does not exist. Its an act of exchanging
                                goods or services between two or more parties without the use of money.  Barter relies on
                                availability &amp; consent of two or more parties for exchange of goods or service for mutual benefit. We
                                believe that basic plays an important role in all aspects and Barter system is very old, basic &amp; reliable
                                and helps in many ways to involved parties. We will play an important role here in helping people by
                                providing platform to post Barter deals or their Barter deal requirements. This will facilitate them to
                                search deals of their own choice or can post their requirement according to their requirement.
                                Barter deals will help people who are short of money but having good product, services, skills which
                                they can exchange with different goods, service or skills or partially with difference amount payment
                                along with goods or services.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Aboutus;
