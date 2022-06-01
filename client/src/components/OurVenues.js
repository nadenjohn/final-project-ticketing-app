import VenueCard from "./VenueCard";
import React from "react";
import { useState, useEffect } from 'react';


function OurVenues({venues, setVenues}) {
  useEffect(() => {
    fetch('/venues')
    .then(res => res.json())
    .then(data => {
      setVenues(data);
    });
  }, 
  []);

  console.log({venues})
    return (
        <div className="p-10">
        <div class=" w-full lg:max-w-full lg:flex">{venues.map((venue) => <VenueCard key={venue.id} venue={venue}/>)}</div>
      </div>
    )
  }

  export default OurVenues;