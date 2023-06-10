import React from 'react';
import { useNavigate } from 'react-router-dom';
import pageheader from './PageHeader.module.css';
import wideImage from '../../images/contact-us.jpg'; // Import your logo image

function PageHeader(props) {
    const imageStyle = {
        objectPosition: props.imagePosition,
    };

    return (
        <section className={`${pageheader.myHeader}`}>
            <img src={props.image} className={`${pageheader.imageShape} ${pageheader.myHeaderImage}`} style={imageStyle} />
            <div className={`container ${pageheader.myHeaderContainer}`}>
                <div className={`row align-items-center ${pageheader.myHeaderContainer}`}>
                    <div className={`col-md-6 ${pageheader.column}`}>
                    <h3 style={{ marginTop: props.mode === '0' ? '0px' : '-20px' }}>{props.title}</h3>
                        <p>{props.text}</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PageHeader;
