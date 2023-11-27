import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './common/navbar';
import Footer from './common/footer';
import Home from './pages/home';
import Header from './common/header';
import Services from './pages/services';
import Industries from './pages/industries';
import Cases from './pages/cases';


const App = () => {
  return (
    <>
    <Router>
      <div className=" min-h-screen relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="industries" element={<Industries />} />
          <Route path="services" element={<Services />} />
        </Routes>
      </div>
    </Router>
            <Footer /></>
  );
};

export default App;
