import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import styles from './Breadcrumbs.module.css';

const Breadcrumbs = ({ items }) => {
  return (
    <Breadcrumb className={styles.customBreadcrumb}>
      {items.map((item, index) => (
        <Breadcrumb.Item key={index} href={item.url} active={index === items.length - 1}>
          {item.label}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default Breadcrumbs;
