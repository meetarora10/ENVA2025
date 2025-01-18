import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Events from './Components/Events';
import Sponsors from './Components/Sponsor';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import EventDetails from './Components/EventDetails';

// Create a MainPage component to hold all the sections
const MainPage = () => {
  return (
    <>
      <Home />
      <About />
      <Events />
      <Sponsors />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/event/:eventId" element={<EventDetails />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;