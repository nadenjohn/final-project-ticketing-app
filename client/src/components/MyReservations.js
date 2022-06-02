import React from 'react'

import MyEventsItem from './MyEventsItem'

function MyReservations({myReservations}) {

  
    return (
      <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-medium text-gray-900">My Reservations</h2>
        <div className="mt-6 pb-10 border-t border-b border-gray-200 divide-y divide-gray-200 space-y-10">
          {myReservations.map((reservation) => (
            <MyEventsItem key={reservation.id} reservation={reservation}/>
          ))}
        </div>
      </div>
    </div>
    )
  }

  export default MyReservations;