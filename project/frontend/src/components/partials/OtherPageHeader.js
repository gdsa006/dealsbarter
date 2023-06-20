import React from 'react';
import otherpageheader from './OtherPageHeader.module.css';
import { Col, Container } from 'react-bootstrap';

function OtherPageHeader(props) {
    return (
        <>
            <section className={otherpageheader.mySection}>
                <Container>
                    <Col md={12}>
                        <h2>{props.title}</h2>
                    </Col>
                </Container>
            </section>
        </>
    );
}
export default OtherPageHeader;
