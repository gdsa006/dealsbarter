import React from 'react';
import showcase from './Showcase.module.css';
import image1 from '../../images/wideImage.jpg'; // Import your first image
import image2 from '../../images/wideImage.jpg'; // Import your second image
import image3 from '../../images/wideImage.jpg'; // Import your third image

function Showcase() {
  return (
    <section className={`section d-none, ${showcase.mySection}`}>
      <div className="container">
        <div className={`row ${showcase.container}`}>
          <div className={`col-md-6 ${showcase.column}`}>
            <a href="#" className={showcase.clickableColumn}>
              <div className={showcase.subColumn}>
                <div className={showcase.imageContainer}>
                  <img src={image1} alt="Image 1" className={showcase.image} />
                </div>
                <div className={showcase.textContainer}>
                  <h3 className={showcase.heading}>Title 1</h3>
                  <p className={showcase.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum eros sed urna tristique,
                    ac ullamcorper mi malesuada. Nullam varius dolor id enim tincidunt, eu ullamcorper lectus lobortis.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className={`col-md-6 ${showcase.column}`}>
            <a href="#" className={showcase.clickableColumn}>
              <div className={showcase.subColumn}>
                <div className={showcase.imageContainer}>
                  <img src={image2} alt="Image 2" className={showcase.image} />
                </div>
                <div className={showcase.textContainer}>
                  <h3 className={showcase.heading}>Title 2</h3>
                  <p className={showcase.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum eros sed urna tristique,
                    ac ullamcorper mi malesuada. Nullam varius dolor id enim tincidunt, eu ullamcorper lectus lobortis.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className={`col-md-6 ${showcase.column} ${showcase.reverse}`}>
            <a href="#" className={showcase.clickableColumn}>
              <div className={showcase.subColumn}>
                <div className={showcase.imageContainer}>
                  <img src={image3} alt="Image 3" className={showcase.image} />
                </div>
                <div className={showcase.textContainer}>
                  <h3 className={showcase.heading}>Title 3</h3>
                  <p className={showcase.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum eros sed urna tristique,
                    ac ullamcorper mi malesuada. Nullam varius dolor id enim tincidunt, eu ullamcorper lectus lobortis.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className={`col-md-6 ${showcase.column} ${showcase.reverse}`}>
            <a href="#" className={showcase.clickableColumn}>
              <div className={showcase.subColumn}>
                <div className={showcase.imageContainer}>
                  <img src={image3} alt="Image 3" className={showcase.image} />
                </div>
                <div className={showcase.textContainer}>
                  <h3 className={showcase.heading}>Title 3</h3>
                  <p className={showcase.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum eros sed urna tristique,
                    ac ullamcorper mi malesuada. Nullam varius dolor id enim tincidunt, eu ullamcorper lectus lobortis.
                  </p>
                </div>
              </div>
            </a>
          </div>


          <div className={`col-md-6 ${showcase.column}`}>
            <a href="#" className={showcase.clickableColumn}>
              <div className={showcase.subColumn}>
                <div className={showcase.imageContainer}>
                  <img src={image1} alt="Image 1" className={showcase.image} />
                </div>
                <div className={showcase.textContainer}>
                  <h3 className={showcase.heading}>Title 1</h3>
                  <p className={showcase.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum eros sed urna tristique,
                    ac ullamcorper mi malesuada. Nullam varius dolor id enim tincidunt, eu ullamcorper lectus lobortis.
                  </p>
                </div>
              </div>
            </a>
          </div>

          <div className={`col-md-6 ${showcase.column}`}>
            <a href="#" className={showcase.clickableColumn}>
              <div className={showcase.subColumn}>
                <div className={showcase.imageContainer}>
                  <img src={image2} alt="Image 2" className={showcase.image} />
                </div>
                <div className={showcase.textContainer}>
                  <h3 className={showcase.heading}>Title 2</h3>
                  <p className={showcase.description}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum eros sed urna tristique,
                    ac ullamcorper mi malesuada. Nullam varius dolor id enim tincidunt, eu ullamcorper lectus lobortis.
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
