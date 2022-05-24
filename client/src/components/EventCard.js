import React from "react";


function EventCard({event}) {

    const date=new Date(event.event_date).toLocaleString()
    console.log(date)

    const displayDate = date.slice(0, -6)

    return (
<div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src="https://f4.bcbits.com/img/0027801541_0" alt="Sunset in the mountains"/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{event.event_name}</div>
    <div className="font-bold text-xl mb-2">{displayDate} PM</div>
    <p className="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div className="px-6 pt-4 pb-2">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Buy Tickets</button>
  </div>
</div>
    )
  }
  
  export default EventCard;