import React, { useState } from 'react';
import postad from './PostAd.module.css';
import wideImage from '../../images/wideImage.jpg'; // Import your logo image
import { Form, Button } from 'react-bootstrap';
import AdForm from '../partials/AdForm';

function PostAd() {

    return (
        <div>
            <section className={`${postad.mySection} ${postad.postAd}`}>
                <div className={`${postad.backgroundContainer}`}></div>
                <div className={`${postad.backgroundContainer} ${postad.backgroundContainer2}`}></div>
                <div className={`${postad.backgroundContainer} ${postad.backgroundContainer3}`}></div>
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6">
                            <h1>Something extraordinary<br />that is something <span>unique</span></h1>
                            <h5>Line to target customers</h5>
                            <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                            </p>
                            <p>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </p>
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
