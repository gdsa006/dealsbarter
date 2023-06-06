import React from 'react';
import showcase from './Showcase.module.css';
import image1 from '../../images/7473709.jpg'; // Import your first image
import image2 from '../../images/proservices.jpg'; // Import your second image
import image3 from '../../images/wideImage.jpg'; // Import your third image
import CategoryImage from '../../images/pexels-photo-1547248.webp'; // Import your logo image
function Showcase() {
  return (
    <section className={`section d-none, ${showcase.mySection}`}>
      <div className="container">
        <div className={`row ${showcase.container}`}>
          <div className={`col-md-6 ${showcase.column}`}>
            <a href="#" className={showcase.clickableColumn}>
              <div className={showcase.subColumn}>
                <div className={showcase.imageContainer}>
                  <img src={image2} alt="Image 1" className={showcase.image} />
                </div>
                <div className={showcase.textContainer}>
                  <h3 className={showcase.heading}>Professional Services</h3>
                  <p className={showcase.description}>
                    Explore professional services e.g. CA, Accountant, IT Consultants, Marketing &amp; Creative team,
                    Advertising, Architect etc. exchanging their Services with Other Service, Coupon or Products
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className={`col-md-6 ${showcase.column}`}>
            <a href="#" className={showcase.clickableColumn}>
              <div className={showcase.subColumn}>
                <div className={showcase.imageContainer}>
                  <img src={image1} alt="Image 2" className={showcase.image} />
                </div>
                <div className={showcase.textContainer}>
                  <h3 className={showcase.heading}>Products</h3>
                  <p className={showcase.description}>
                    Explore Products e.g. Electronic, Furniture, Household, Automobiles, Fashion, Property, Fitness &amp;
                    Sports, Commercial &amp; Industrial, Books in Barter / Exchange with other Service, Coupon or Products
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className={`col-md-6 ${showcase.column} ${showcase.reverse}`}>
            <a href="#" className={showcase.clickableColumn}>
              <div className={showcase.subColumn}>
                <div className={showcase.imageContainer}>
                  <img src={CategoryImage} alt="Image 3" className={showcase.image} />
                </div>
                <div className={showcase.textContainer}>
                  <h3 className={showcase.heading}>Health and Wellness</h3>
                  <p className={showcase.description}>
                    Explore opportunity for exchange in Fitness, Wellness, Salon, Gym, Salon, Health in Barter /
                    Exchange with other Service, Coupon or Products
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className={`col-md-6 ${showcase.column} ${showcase.reverse}`}>
            <a href="#" className={showcase.clickableColumn}>
              <div className={showcase.subColumn}>
                <div className={showcase.imageContainer}>
                  <img src={CategoryImage} alt="Image 3" className={showcase.image} />
                </div>
                <div className={showcase.textContainer}>
                  <h3 className={showcase.heading}>Jobs</h3>
                  <p className={showcase.description}>
                    Explore Jobs, training posted directly by Company HR for Office, Field, WFH, IT, Hotel &amp; travel,
                    Education, Household, Call Centre Jobs or Services related to HR Consultant in Barter / Exchange for
                    free
                  </p>
                </div>
              </div>
            </a>
          </div>


          <div className={`col-md-6 ${showcase.column}`}>
            <a href="#" className={showcase.clickableColumn}>
              <div className={showcase.subColumn}>
                <div className={showcase.imageContainer}>
                  <img src={CategoryImage} alt="Image 1" className={showcase.image} />
                </div>
                <div className={showcase.textContainer}>
                  <h3 className={showcase.heading}>Property</h3>
                  <p className={showcase.description}>
                    Explore property services or properties of all over India exchange with other property, business
                    share, Joint Venture or any other form of Barter / Exchange.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className={`col-md-6 ${showcase.column}`}>
            <a href="#" className={showcase.clickableColumn}>
              <div className={showcase.subColumn}>
                <div className={showcase.imageContainer}>
                  <img src={CategoryImage} alt="Image 2" className={showcase.image} />
                </div>
                <div className={showcase.textContainer}>
                  <h3 className={showcase.heading}>Automobiles</h3>
                  <p className={showcase.description}>
                    Explore Automobile Services all over India exchange with other Service or Products.
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Repeat the above structure for the remaining columns */}

        </div>
      </div>
    </section>
  );
}

export default Showcase;
