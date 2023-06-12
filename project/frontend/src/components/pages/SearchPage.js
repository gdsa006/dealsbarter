import React, { useState } from 'react';
import searchpage from './SearchPage.module.css';
import { Form, Button } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

function SearchPage() {
    const location = useLocation();
    const { results, searchTerm } = location.state;
    return (
        <div>
            <section className={`${searchpage.mySection}`}>
                <div class="container">
                    <div class="row">
                        <div className={`col-lg-12`}>
                            search {searchTerm}
                        </div>
                    </div>
                </div>
            </section>
            <section className={`${searchpage.mySection}`}>
                <div class="container">
                    <div class="row">
                        <div className={`col-lg-3`}>
                            filters
                        </div>
                        <div className={`col-lg-6`}>
                            search results
                        </div>
                        <div class="col-lg-3">
                            adsense
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SearchPage;
