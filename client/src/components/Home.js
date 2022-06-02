import React from "react";
import EventCard from "./EventCard";
import FilterShows from "./FilterShows";
import { useState, useEffect, } from 'react';
   
function Home( {events, handlePost, user, setCartItems} ) {
  



    return (
      <div >
        <FilterShows />
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">{events.map((event) => <EventCard key={event.id} event={event} date={event.event_date} handlePost={handlePost} user={user}/>)} </div>
      </div>
    )
  }

  export default Home;