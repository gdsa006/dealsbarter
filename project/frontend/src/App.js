import logo from './logo.svg';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigation from './components/elements/Navigation';
import Home from './components/pages/Home';
import Footer from './components/elements/Footer';
import AboutUs from './components/pages/AboutUs';
import PostAd from './components/pages/PostAd';
import ContactUs from './components/pages/ContactUs';
import WebFont from 'webfontloader';
import { LocationProvider } from './LocationContext';
import SearchPage from './components/pages/SearchPage';
import SingleService from './components/pages/SingleService';
import MyAccount from './components/pages/MyAccount';
import ShowPopup from './components/partials/ShowPopup';
import SingleSubCategory from './components/pages/SingleSubCategory';


function App() {

  const [showPopup, setShowPopup] = useState(false);

  const checkIfUserIsLoggedIn = () => {
    const token = localStorage.getItem('token');
    return !!token;
  };

  const isLoggedIn = checkIfUserIsLoggedIn();

  useEffect(() => {
    WebFont.load({
      google: {
        families: ['Playfair Display:400'],
      },
    });
  }, []);

  const handleLoginRedirect = () => {
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };
  return (
    <div className="App">
      <LocationProvider>
        <Router>
          <div>
            <Navigation />
            <Routes>
              {/* Define your routes here */}
              <Route path="/" element={<Home />} />
              <Route path="/about-us/" element={<AboutUs />} />
              <Route path="/contact-us/" element={<ContactUs />} />
              <Route path="/post-ad/" element={<PostAd />} />
              <Route path="/search-page/" element={<SearchPage />} />
              <Route path="/service/:category/:subcategory" element={<SingleSubCategory />} />
              <Route path="/service/:category/:subcategory/:listing" element={<SingleService />} />
              <Route
                path="/my-account"
                element={
                  isLoggedIn ? (
                    <MyAccount />
                  ) : (
                    <ShowPopup isOpen={true} onClose={handlePopupClose} setUsername={() => { }} />
                  )
                }
              />
            </Routes>
            <Footer />
          </div>
        </Router>
      </LocationProvider>
    </div>
  );
}

export default App;
