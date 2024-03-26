// App.jsx
import React from 'react';
import  './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import Navbar from './pages/Navbar';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import DataAndResearch from './pages/DataAndResearch';
import Documents from './pages/Documents';
import Home from './pages/Home';
import Resources from './pages/Resources';
import TechnicalInfo from './pages/TechnicalInfo';
import Footer from './pages/Footer';

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/technical-info" element={<TechnicalInfo />} />
          <Route path="/data-and-research" element={<DataAndResearch />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
