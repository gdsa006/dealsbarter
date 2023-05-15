import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/elements/Navigation';


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navigation />
          <Routes>
            {/* Define your routes here */}
            {/* <Route exact path="/" component={Home} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
