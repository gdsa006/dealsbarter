import React from 'react';
import { Breadcrumb, Container, Col } from 'react-bootstrap';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ items }) => {
    return (
        <section className={styles.mySection}>
            <Container fluid>
                <div className='col-md-12'>
                    <Breadcrumb className={styles.customBreadcrumb}>
                        {items.map((item, index) => (
                            <Breadcrumb.Item key={index} href={item.url} active={index === items.length - 1}>
                                {item.label}
                            </Breadcrumb.Item>
                        ))}
                    </Breadcrumb>
                </div>
            </Container>
        </section>
    );
};

export default Breadcrumbs;
