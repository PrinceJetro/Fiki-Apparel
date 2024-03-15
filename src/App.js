import logo from './logo.svg';
import './App.css';
import Home from './components/home';
import Navbar from './components/navbar';
import Footer from "./components/footer";
import Men from "./components/products";
import Details from "./components/details"

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dets/:details" element={<Details />} />
        <Route path="/:gender" element={<Men />} />
       {/*  <Route path="/movie/:src" element={<MovieDetails />} />
        <Route path="/watchnow/:title" element={<Movie />} /> */}

      </Routes>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
