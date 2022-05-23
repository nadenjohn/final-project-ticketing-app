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
  const [venues, setVenues] = useState([])



  useEffect(() => {
    fetch('/events')
    .then(res => res.json())
    .then(data => {
      setEvents(data);
    });
  }, 
  []);
  useEffect(() => {
    fetch('/venues')
    .then(res => res.json())
    .then(data => {
      setVenues(data);
    });
  }, 
  []);

  

  return (
   
      <div>
          <Header />
          <Routes>
            <Route path="/" element={<Home  events={events}/>} />
            <Route path="/myreservations" element={<MyReservations />} />
            <Route path="/ourvenues" element={<OurVenues venues={venues}/>}/>
          </Routes>
      
    </div>


)
}

export default App
