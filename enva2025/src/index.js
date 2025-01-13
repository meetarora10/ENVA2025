import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Events from './Components/Events';
import Sponsors from './Components/Sponsor';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Navbar />
      <Home />
      <About />
      <Events />
      <Sponsors />
      <Contact />
      <Footer />
    </div>
  </React.StrictMode>
);

reportWebVitals();