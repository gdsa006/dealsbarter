import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/elements/Navigation';
import Home from './components/pages/Home';
import Footer from './components/elements/Footer';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigation />
          <Routes>
            {/* Define your routes here */}
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
