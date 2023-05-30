import React, { useState } from 'react';
import postad from './PostAd.module.css';
import wideImage from '../../images/wideImage.jpg'; // Import your logo image
import { Form, Button } from 'react-bootstrap';
import AdForm from '../partials/AdForm';

function PostAd() {

    return (
        <div>
            <section className={`${postad.mySection}`}>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            text
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
