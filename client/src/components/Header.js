import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Header() {
    return (
        <div className="shadow-md w-full fixed top-0 left-0 md:flex bg-white h-70">
            <img className = "object-cover h-70 w-96"src="https://f4.bcbits.com/img/0027801541_0"/>
            <div className="float-right">
                        
                        <h1>Ticket Haven</h1>
                        <Link to="/">Home</Link>
                        <Link to="/myreservations"> My Reservations</Link>
                      <Link to="/ourvenues"> Our Venues</Link>
            </div>
      </div>
    )
  }
  
  export default Header;