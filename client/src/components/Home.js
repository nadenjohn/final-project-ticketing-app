import React from "react";
import EventCard from "./EventCard";
   
function Home( {events} ) {
    return (
      <div >
        <h1>Welcome...</h1>
        <p>Ticket Haven</p>
        <img src="https://via.placeholder.com/1200x200" alt="site banner" />
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minima animi nulla eveniet. At non consequuntur perferendis id voluptatem sapiente dolor animi exercitationem, commodi officiis eveniet laudantium quidem dolore labore sit.</p>
        <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">{events.map((event) => <EventCard key={event.id} event={event}/>)} </div>
      </div>
    )
  }

  export default Home;