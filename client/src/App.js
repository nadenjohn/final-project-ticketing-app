import './App.css';
import React from "react";
import { useState, useEffect, Fragment } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Dialog, Transition } from '@headlessui/react'
import { XIcon } from '@heroicons/react/outline'

import Header from './components/Header'
import MyReservations from  "./components/MyReservations"
import Home from "./components/Home"
import OurVenues from "./components/OurVenues"
import Admin from './components/Admin'
import LoginForm from './components/LoginForm'
import ShoppingCart from './components/ShoppingCart'
import Signup from './components/Signup'


function App() {

  const [events, setEvents] = useState([])
  const [venues, setVenues] = useState([])
  const [open, setOpen] = useState(false)
  const [cartItems, setCartItems]=useState([])



    const [user, setUser] = useState({})
    const [form, setForm] = useState("")

  
    useEffect(() => {
      const token = localStorage.getItem("token")
      if(token){
        fetch(`/profile`, {
          headers: {
            method: "GET",
            Authorization: `Bearer ${token}`
          }
        })
        .then(resp => resp.json())
        .then((data) => {
          setUser(data)
          setCartItems(data.cart_items)
          // console.log(data)
        })
      }
    }, [])
    const handleLogin = (user) => {
      setUser(user)
    }
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
  
const handleLogout = () => {
  setUser({})
  localStorage.removeItem("token")
}
function handleRemoveCartItem(id){
  fetch(`/cart_items/${id}`, {
    method: "DELETE",
  }).then((r) => {
    if (r.ok) {
      setCartItems((cartItems) =>
      cartItems.filter((cartItem) => cartItem.id !== id)
      )
    }
  });
}



function handlePost(obj){
  fetch('/cart_items',{
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body:JSON.stringify(obj)
  })
  .then (res => res.json())
  .then(data => {setCartItems([...cartItems,data])})
}
console.log(cartItems)
  return (
   
      <div>
          <Header setOpen={setOpen} user={user} handleLogout={handleLogout}/>
          <Routes>
            <Route path="/" element={<Home  events={events} handlePost={handlePost} user={user}/>} />
            <Route path="/myreservations" element={<MyReservations events={events}/>} />
            <Route path="/ourvenues" element={<OurVenues venues={venues}/>}/>
            <Route path="/admin" element={<Admin events={events} addEvent={addEvent} />}/>
            <Route path="/login" element={<LoginForm handleLogin={handleLogin} user={user} setUser={setUser}/>}/>
            <Route path="/signup" element={<Signup handleLogin={handleLogin} user={user} setUser={setUser}/>}/>

          </Routes>
          <ShoppingCart setOpen={setOpen} cartItems={cartItems} handleRemoveCartItem={handleRemoveCartItem} open={open}/>
       

      
    </div>


)
}

export default App;



