import React from "react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid'
import CalendarItem from './CalenderItem'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { format } from 'date-fns';




function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
   
function Admin( {addEvent, events} ) {
  const blankAddEventForm = {
    event_name: "",
    price: "",
    event_type: "",

    venue_id: ""

  };
  const [newEvent, setNewEvent] = useState(blankAddEventForm)
  const {event_name, price, event_description, image, event_type, available_tickets, event_date, venue_id} = newEvent;
  const timeValue: Date = new Date("01/01/2021 08:30 AM");
  const minTime: Date = new Date("01/02/2021 01:00 AM");
  const maxTime: Date = new Date("01/02/2021 05:00 AM");
  const [calendar, setCalendar] = useState('')
  const [timeSlots, setTimeSlots] = useState ([])
  const [timeSlot, setTimeSlot] = useState ({})
  const [timeOption, setTimeOption] = useState('')
  const [eventName, setEventName] = useState('')
  const [eventPrice, setEventPrice]= useState('')
  const [eventDescription, setEventDescription]= useState('')
  const [eventImage, setEventImage]= useState('')
  const [availableTickets, setAvailableTickets] = useState('')
  const [venueId, setVenueId] = useState('')
  
  console.log(eventName)

  const id = timeOption
 
 

  const dateItem = `${timeSlot.time_value} + ${calendar}`
 

  useEffect(() => {
    fetch("/timeslots")
      .then((r) => r.json())
      .then(setTimeSlots);
  }, []);

  useEffect(() => {
    fetch(`/timeslots/${id}`)
      .then((r) => r.json())
      .then((timeSlot)=>
      setTimeSlot(timeSlot));
  }, [id]);




//   function handleEventNameChange(e){
   
//     setNewEvent({...newEvent,
//     event_name: e.target.value,

//   })

// }
//   function handleEventTicketsChange(e){
//     setNewEvent({...newEvent,
//     available_tickets: e.target.value,

//   })

// }
//   function handleEventDescriptionChange(e){
//     setNewEvent({...newEvent,
//     event_description: e.target.value,

//   })

// }
//   function handleEventPriceChange(e){
//     setNewEvent({...newEvent,
//     price: e.target.value,

//   })

// }
//   function handleEventImageChange(e){
//     setNewEvent({...newEvent,
//     image: e.target.value,

//   })

// }
//   function handleEventDateChange(e){
//     console.log(e.target.value)

//     setNewEvent({...newEvent,
//     event_date: e.target.value,

//   })

// }
//   function handleEventVenueIdChange(e){
//     setNewEvent({...newEvent,
//     venue_id: e.target.value,

//   })

// }
//   function handleEventTypeChange(e){
//     setNewEvent({...newEvent,
//     event_type: e.target.value,

//   })

// }
const onSubmit = (e) => {
  e.preventDefault();
  const event = {
    event_date: dateItem,
    event_name: eventName,
    price: eventPrice,
    image: eventImage,
    available_tickets: availableTickets,
    venue_id: venueId,
    event_discription: eventDescription
  }
    addEvent(event)

  }


    return (
      <>
      <div>
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              <h3 className="text-lg font-medium leading-6 text-gray-900">Add a new event...</h3>
              <p className="mt-1 text-sm text-gray-600">
                
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <form action="#" method="POST" onSubmit={onSubmit}>
              <div className="shadow sm:rounded-md sm:overflow-hidden">
                <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Event Name
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                       
                        <input
                          type="text"
                          name="event-description"
                          id="event-description"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="write event name here..."
                        
                          onChange={(e) => setEventName(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Event Dates
                  </label>
                  <CalendarItem setCalendar={setCalendar} calendar={calendar} />
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Event Time
                      </label>
                      <select value={timeOption} onChange={(e) => setTimeOption(e.target.value)}>
                  <option value="">Select Time</option>
                  {timeSlots.map((timeSlot) => (
                    <option key={timeSlot.id} value={timeSlot.id}>
                      {timeSlot.star_time}
                    </option>
                  ))}

                </select>
                    </div>
                    </div>


                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Event Price
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                       
                        <input
                          type="text"
                          name="event-description"
                          id="event-description"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="write event price here..."
                    
                          onChange={(e) => setEventPrice(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Venue
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                       
                        <input
                          type="text"
                          name="event-description"
                          id="event-description"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="write event venue here..."
                    
                          onChange={(e) => setVenueId(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Number of Available Tickets
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                       
                        <input
                          type="text"
                          name="event-description"
                          id="event-description"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="write number of tickets here..."
                
                          onChange={(e) => setAvailableTickets(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Event Description
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                       
                        <input
                          type="text"
                          name="event-description"
                          id="event-description"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="event description..."
                
                          onChange={(e) => setEventDescription(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Event Image
                      </label>
                      <div className="mt-1 flex rounded-md shadow-sm">
                       
                        <input
                          type="text"
                          name="event-description"
                          id="event-description"
                          className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                          placeholder="image url..."
                
                          onChange={(e) => setEventImage(e.target.value)}
                        />
                      </div>
                    </div>
                  </div>

                 
                  

                  

                  {/* <div>
                    <label className="block text-sm font-medium text-gray-700">Event photo</label>
                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <svg
                          className="mx-auto h-12 w-12 text-gray-400"
                          stroke="currentColor"
                          fill="none"
                          viewBox="0 0 48 48"
                          aria-hidden="true"
                        >
                          <path
                            d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                          >
                            <span>Upload a file</span>
                            <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <input
                
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> 
      <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-lg font-medium text-gray-900">Upcoming Events</h2>
        <div className="mt-6 pb-10 border-t border-b border-gray-200 divide-y divide-gray-200 space-y-10">
          {events.map((event) => (
            <div key={event.event_id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-start-5 lg:col-span-8 xl:col-start-4 xl:col-span-9 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:items-start">
                <div className="flex items-center xl:col-span-1">

                  <p className="ml-3 text-sm text-gray-700">
                    {event.price}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                </div>

                <div className="mt-4 lg:mt-6 xl:mt-0 xl:col-span-2">
                  <h3 className="text-sm font-medium text-gray-900">{event.event_name}</h3>

                  
                </div>
              </div>

              <div className="mt-6 flex items-center text-sm lg:mt-0 lg:col-start-1 lg:col-span-4 lg:row-start-1 lg:flex-col lg:items-start xl:col-span-3">
                <p className="font-medium text-gray-900">{event.price}</p>
                <time
                  dateTime={event_name}
                  className="ml-4 border-l border-gray-200 pl-4 text-gray-500 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                >
                  {event_date}
                </time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
    )
  }

  export default Admin;