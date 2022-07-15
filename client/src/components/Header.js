import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/outline';
import '../App.css';

function Header({setOpen, user, handleLogout}) {
  console.log(user)
  
  return (
      <div className="bg-gray-400 font-sans leading-normal tracking-normal">
        <div className="bg-gray-800 p-2 mt-0  w-full z-10 top-0">
            <div className="container mx-auto flex flex-wrap items-center">
              <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
                <span className="text-2xl pl-2"><i className="em em-grinning"></i>Ticket Heathen</span>
              </div>
              <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end">
                <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
                  <li className="mr-3">
                    <a className="inline-block py-2 px-4 text-white no-underline" href="#"><Link to="/">Home</Link></a>
                  </li>
                  <li className="mr-3">
                    <a className="inline-block text-gray-200 no-underline hover:text-gray-100 hover:text-underline py-2 px-4" href="#"><Link to="/myreservations"> My Reservations</Link></a>
                  </li>
                  <li className="mr-3">
                    <a className="inline-block text-gray-200 no-underline hover:text-gray-100 hover:text-underline py-2 px-4" href="#"><Link to="/ourvenues"> Our Venues</Link></a>
                  </li>
                  <li className="mr-3">
                    {user.admin ? <a className="inline-block text-gray-200 no-underline hover:text-gray-100 hover:text-underline py-2 px-4 " href="#"><Link to="/admin" className='diabled-link'>Admin</Link></a> : <div></div>}
                  </li>

                  <li className="mr-3">
                    <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={handleLogout}
                          >Logout
                          
                            
                          </button>
                  </li>
                  <li className="mr-3">
                    <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                           
                            onClick={() => setOpen(true)}
                          >
                          
                            <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                  </li>
                </ul>
              </div>
            </div>
        </div>
      </div>
    )
  }
  
  export default Header;
  
