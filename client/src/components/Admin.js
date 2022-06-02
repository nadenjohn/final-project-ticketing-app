import React from "react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { useState } from 'react';
import CalendarItem from './CalenderItem'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { TimePickerComponent } from "@syncfusion/ej2-react-calendars";




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
  const {event_name, price, event_description, event_image, event_type, available_tickets, event_date, venue_id} = newEvent;
  const timeValue: Date = new Date("01/01/2021 08:30 AM");
  const minTime: Date = new Date("01/02/2021 01:00 AM");
  const maxTime: Date = new Date("01/02/2021 05:00 AM");
  const [calendar, setCalendar] = useState('')
  const [clock, setClock] = useState ('')
  console.log(events)

  function handleEventNameChange(e){
   
    setNewEvent({...newEvent,
    event_name: e.target.value,

  })

}
  function handleEventTicketsChange(e){
    setNewEvent({...newEvent,
    available_tickets: e.target.value,

  })

}
  function handleEventDescriptionChange(e){
    setNewEvent({...newEvent,
    event_description: e.target.value,

  })

}
  function handleEventPriceChange(e){
    setNewEvent({...newEvent,
    price: e.target.value,

  })

}
  function handleEventImageChange(e){
    setNewEvent({...newEvent,
    event_image: e.target.value,

  })

}
  function handleEventDateChange(e){
    setNewEvent({...newEvent,
    event_date: e.target.value,

  })

}
  function handleEventVenueIdChange(e){
    setNewEvent({...newEvent,
    venue_id: e.target.value,

  })

}
  function handleEventTypeChange(e){
    setNewEvent({...newEvent,
    event_type: e.target.value,

  })

}
const handleForm = (e) => {
  e.preventDefault();
  addEvent(newEvent);
  setNewEvent(blankAddEventForm);
  console.log(newEvent)
};

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
            <form action="#" method="POST" onSubmit={handleForm}>
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
                          value={newEvent.event_name}
                          onChange={handleEventNameChange}
                        />
                      </div>
                    </div>
                  </div>
                  <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Event Dates
                  </label>
                  <CalendarItem setCalendar={setCalendar} calendar={calendar} />
                  <TimePickerComponent placeholder="Select a time"
                   
                    value={timeValue}
                    min={minTime}
                    max={maxTime}
                    format="HH:mm"
                    step={60}>

                  </TimePickerComponent>

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
                          value={newEvent.price}
                          onChange={handleEventPriceChange}
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
                          value={newEvent.venue_id}
                          onChange={handleEventVenueIdChange}
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
                          value={newEvent.available_ticekts}
                          onChange={handleEventTicketsChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      Event Description
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Description..."
                        value={newEvent.event_description}
                        onChange={handleEventDescriptionChange}
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                      Event Image
                    </label>
                    <div className="mt-1">
                      <textarea
                        id="about"
                        name="about"
                        rows={3}
                        className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                        placeholder="Image url..."
                        value={newEvent.event_image}
                        onChange={handleEventImageChange}
                      />
                    </div>
                  </div>

                  

                  <div>
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
                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button
                  onClick={handleForm}
                    type="submit"
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save
                  </button>
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