import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShoppingCartIcon } from '@heroicons/react/outline';
import '../App.css';

function LoginHeader({setOpen, user, handleLogout}) {
    
  return (
    <div className="bg-gray-400 font-sans leading-normal tracking-normal">
      <div className="bg-gray-800 p-2 mt-0  w-full z-10 top-0">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
            <span className="text-2xl pl-2"><i className="em em-grinning"></i>Ticket Heathen</span>
          </div>
          <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-end"></div>
        </div>
      </div>
    </div>
  )};
  
  export default LoginHeader;