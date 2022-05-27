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

const products = [
  {
    id: 2,
    name: 'KISS',
    href: '#',
    venue: 'The Garage',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://cdn3.whatculture.com/images/2020/06/f89dc9fa7526554c-1200x675.jpg',
    imageAlt:
      'KISS pic',
  },
]
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
            <Route path="/myreservations" element={<MyReservations />} />
            <Route path="/ourvenues" element={<OurVenues venues={venues}/>}/>
            <Route path="/admin" element={<Admin events={events}/>}/>
            <Route path="/login" element={<LoginForm handleLogin={handleLogin} user={user} />}/>
          </Routes>
          <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900"> Ticket Order </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
                            {cartItems.map((cartItem) => (
                              <li key={cartItem.id} className="flex py-6">
                                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                  <img
                                    src='https://cdn3.whatculture.com/images/2020/06/f89dc9fa7526554c-1200x675.jpg'
                                    alt={cartItem.id}
                                    className="h-full w-full object-cover object-center"
                                  />
                                </div>

                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">
                                      <h3>
                                        <a href='#'> {cartItem.event_id} </a>
                                      </h3>
                                      <p className="ml-4">{cartItem.event_id}</p>
                                    </div>
                                    <p className="mt-1 text-sm text-gray-500">{cartItem.event_id}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                    <p className="text-gray-500">Qty: 1</p>

                                    <div className="flex">
                                      <button
                                        type="button"
                                        className="font-medium text-indigo-600 hover:text-indigo-500"
                                      >
                                        Remove
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                      <div className="flex justify-between text-base font-medium text-gray-900">
                        <p>Subtotal</p>
                        <p>$32.00</p>
                      </div>
                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <a
                          href="#"
                          className="flex items-center justify-center rounded-md border border-transparent bg-gray-800 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Checkout
                        </a>
                      </div>
                      {/* <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or{' '}
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => setOpen(false)}
                          >
                            Continue Shopping<span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div> */}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>

      
    </div>


)
}

export default App;



