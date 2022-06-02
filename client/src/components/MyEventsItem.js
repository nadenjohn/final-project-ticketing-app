
import React from 'react'


function MyEventsItem({reservation}) {
    return (

<div key={reservation.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
              
              <div className="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start">
                <div className="flex items-center xl:col-span-1">

                </div>

                <div className="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
                  <h3 className="text-sm font-medium text-gray-900">{reservation.event.event_name}</h3>

                  
                </div>
              </div>

              <div className="mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3">

                <img className="w-full" src={reservation.event.image} alt={reservation.event.event_name}/>
              </div>
            </div>
                )
            }
          
            export default MyEventsItem;