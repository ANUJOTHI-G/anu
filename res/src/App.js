// App.js
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Terms from './Components/terms/terms';
import About from './Components/about/about';
import Product from './Components/Product/Product';
import ThankyouMessage from './Components/Thankyou/Thankyou';

const App = () => {
  return (
    <Router>
      
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/about" element={<About/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/thankyou" element={<ThankyouMessage/>} />
        </Routes>
        <Footer/>
    </Router>
  );
};

export default App;
