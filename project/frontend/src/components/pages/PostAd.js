import React, { useState } from 'react';
import postad from './PostAd.module.css';
import wideImage from '../../images/wideImage.jpg'; // Import your logo image
import { Form, Button } from 'react-bootstrap';
import AdForm from '../partials/AdForm';
import art from '../../images/art.png'; // Import your logo image
import { useLocation, Link } from 'react-router-dom';

function PostAd() {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isPostAdPage = location.pathname === '/post-ad/';
    return (
        <div>
            <section className={`${postad.mySection} ${postad.postAd} ${isPostAdPage ? postad.myPostAdSection : ''}`}>
                <div className={`${postad.backgroundContainer}`}></div>
                <div className={`${postad.backgroundContainer} ${postad.backgroundContainer2}`}></div>
                <div className={`${postad.backgroundContainer} ${postad.backgroundContainer3}`}></div>
                <div class="container">
                    <div class="row">
                        <div className={`col-lg-6 ${postad.postAd}`}>
                        <h5>Line to target customers</h5>
                            <h1>Something extraordinary<br />that is something <span>unique</span></h1>
                            <img src={art} width='100%' />
                            
                        </div>
                        <div class="col-lg-6">
                            <AdForm />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PostAd;
