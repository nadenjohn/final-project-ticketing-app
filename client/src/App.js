import './App.css';
import React from "react";
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header'
import MyReservations from  "./components/MyReservations"
import Home from "./components/Home"
import OurVenues from "./components/OurVenues"


function App() {
  return (
    <div id="page-container">
      <div className="bg-indigo-600 w-full h-screen">
          <Header />

        <div id="main-area">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/myreservations" element={<MyReservations />} />
            <Route path="/ourvenues" element={<OurVenues />}/>
          </Routes>
        </div>
    </div>
  </div>

)
}

export default App
