import './App.css';
import React from "react";
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header'
import MyReservations from  "./components/MyReservations"
import Home from "./components/Home"
import OurVenues from "./components/OurVenues"


function App() {

  const [events, setEvents] = useState([])



  useEffect(() => {
    fetch('/events')
    .then(res => res.json())
    .then(data => {
      setEvents(data);
    });
  }, []);

  return (
   
      <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home  events={events}/>} />
            <Route path="/myreservations" element={<MyReservations />} />
            <Route path="/ourvenues" element={<OurVenues />}/>
          </Routes>
      
    </div>


)
}

export default App
