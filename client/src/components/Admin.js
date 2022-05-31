import React from "react";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import CalendarItem from './CalenderItem'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
   
function Admin( {addEvent} ) {
  const blankAddEventForm = {
    event_name: "",
    price: "",
    event_type: "",

    venue_id: ""

  };
  const [newEvent, setNewEvent] = useState(blankAddEventForm)
  const {event_name, price, event_description, event_image, event_type, available_tickets, event_date, venue_id} = newEvent;

  function handleEventNameChange(e){
    setNewEvent({...newEvent,
    event_name: e.target.value,

  })
  console.log(newEvent)
}
  function handleEventTicketsChange(e){
    setNewEvent({...newEvent,
    available_tickets: e.target.value,

  })
  console.log(newEvent)
}
  function handleEventDescriptionChange(e){
    setNewEvent({...newEvent,
    event_description: e.target.value,

  })
  console.log(newEvent)
}
  function handleEventPriceChange(e){
    setNewEvent({...newEvent,
    price: e.target.value,

  })
  console.log(newEvent)
}
  function handleEventImageChange(e){
    setNewEvent({...newEvent,
    event_image: e.target.value,

  })
  console.log(newEvent)
}
  function handleEventDateChange(e){
    setNewEvent({...newEvent,
    event_date: e.target.value,

  })
  console.log(newEvent)
}
  function handleEventVenueIdChange(e){
    setNewEvent({...newEvent,
    venue_id: e.target.value,

  })
  console.log(newEvent)
}
  function handleEventTypeChange(e){
    setNewEvent({...newEvent,
    event_type: e.target.value,

  })
  console.log(newEvent)
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
                  <CalendarItem />
                  <div className="grid grid-cols-3 gap-6">
                  
                  
                    <div className="col-span-3 sm:col-span-2">
                      <label htmlFor="company-website" className="block text-sm font-medium text-gray-700">
                        Event Time
                      </label>
                      <Menu as="div" className=" p-0 relative inline-block text-left">
                      <div>
                        <Menu.Button id ="event-description" name="event-description" className=" inline-flex w-full rounded-none border rounded-r-md border-gray-300 shadow-sm px-2 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500">
                          Event Time
                          <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  Music
                                </a>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                  active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                  'block px-4 py-2 text-sm'
                                )}
                              >
                                All Ages
                              </a>
                            )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <a
                                  href="#"
                                  className={classNames(
                                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                    'block px-4 py-2 text-sm'
                                  )}
                                >
                                  Comedy
                                </a>
                              )}
                            </Menu.Item>
                            <form method="POST" action="#">
                              <Menu.Item>
                                {({ active }) => (
                                  <button
                                    type="submit"
                                    className={classNames(
                                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                      'block w-full text-left px-4 py-2 text-sm'
                                    )}
                                  >
                                    Burlesque
                                </button>
                              )}
                            </Menu.Item>
                          </form>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
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
    </>
    )
  }

  export default Admin;