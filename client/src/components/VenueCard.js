import React from "react";


function VenueCard({venue}) {
    console.log(venue)
    return (

            <div className=" bg-neutral-300 border-r border-b border-l border-t border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                <img className="h-100 w-100 flex rounded-t lg:rounded-t-none lg:rounded-l  object-center" src={venue.image}/>
                <div className="mb-8">
                    <p className="text-sm text-gray-600 flex items-center"></p>
                    <div className="text-gray-900 font-bold text-xl mb-2">{venue.name}</div>
                    <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, Nonea! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
                </div>
        </div>

   
  
    )
  }
  
  export default VenueCard;