import React from "react";

function EventCard({event, handlePost, user}) {

    const date=new Date(event.event_date).toLocaleString();
    const displayDate = date.slice(0, -6);

    function handleClick(e){
      e.preventDefault();
      const cartItem = {
        user_id: user.id,
        quanitiy: 1,
        total_price: event.price,
        event_id: event.id,
        status: "in_cart"
      };
      handlePost(cartItem);
      console.log(cartItem);
    }

  return (
    <div className="bg-neutral-300 max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={event.image} alt={event.event_name}/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{event.event_name}</div>
        <div className="font-bold text-xl mb-2">{displayDate} PM</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-red-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Buy Tickets</button>
      </div>
    </div>
  )}
  
  export default EventCard;