import './App.css';
import React from "react";
import { useState, useEffect, Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Header from './components/Header';
import MyReservations from  "./components/MyReservations";
import Home from "./components/Home";
import OurVenues from "./components/OurVenues";
import Admin from './components/Admin';
import LoginForm from './components/LoginForm';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const [user, setUser] = useState({});

  const [events, setEvents] = useState([]);
  const [venues, setVenues] = useState([]);
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems]=useState([]);
  const [myReservations, setMyReservations]= useState([]);

  //JWT user authentication
  useEffect(() => {
    const token = localStorage.getItem("token");
    if(token){
      fetch(`/profile`, {
        headers: {
          method: "GET",
          Authorization: `Bearer ${token}`
        }
      })
      .then(resp => resp.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
    }
  }, []);
  console.log(user.id);
  //Login handler
  const handleLogin = (user) => {
    setUser(user)
  }
  //Logout handler
  const handleLogout = () => {
    console.log(localStorage.getItem("user"));
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser({});
  }
  //Fetching reservations of the current user
  useEffect(() => {
    fetch(`/my_reservations?user_id=${user.id}`)
      .then((r) => r.json())
      .then((data) => {
        setMyReservations(data);
      });
  }, []);
  //Fetches upcoming scheduled events for homepage
  useEffect(() => {
    fetch('/events')
    .then(res => res.json())
    .then(data => {
      setEvents(data);
    });
  }, 
  []);
  
  //New Event creation for admin user
  function addEvent(obj) {
    fetch('/events', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
      })
      .then((res) => res.json())
      .then(data => {setEvents([...events, data])});
    };
  
  //Post ticket to user shopping cart
  function handlePost(obj){
    fetch('/cart_items',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body:JSON.stringify(obj)
    }).then((r) => {
      if (r.ok) {
        fetch(`/user_cart?user_id=${user.id}`) 
        .then(res=>res.json())
        .then(setCartItems);
      }
    });
  }
  //Handles remove from cart click
  function handleRemoveCartItem(id){
    fetch(`/cart_items/${id}`, {
      method: "DELETE",
      })
      .then((r) => {
      if (r.ok) {
        fetch(`/user_cart?user_id=${user.id}`) 
        .then(res=>res.json())
        .then(setCartItems)
    }
  });
}
//Check if JWT stored in local storage and redirects accourdingly
const userToken = localStorage.getItem('token');
if (!userToken) return <LoginForm handleLogin={handleLogin} user={user} setUser={setUser}/>
return (
    <div className='bg-slate-400'>
      <Header setOpen={setOpen} user={user} handleLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<Home  events={events}  setEvents={setEvents} handlePost={handlePost} user={user} setCartItems={setCartItems}/>} />
          <Route path="/myreservations" element={<MyReservations myReservations={myReservations}/>} />
          <Route path="/ourvenues" element={<OurVenues venues={venues} setVenues={setVenues}/>}/>
          <Route path="/admin" element={<Admin events={events} addEvent={addEvent} />}/>
        </Routes>
      <ShoppingCart setOpen={setOpen} cartItems={cartItems} setCartItems={setCartItems} handleRemoveCartItem={handleRemoveCartItem} setMyReservations={setMyReservations} user={user} open={open}/>
    </div>
)}

export default App;



