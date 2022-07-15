import React from "react";
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { useState, useEffect } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import CalendarItem from './CalenderItem';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import UpcomingEventItem from './UpcomingEventItem';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}
   
function Admin( {addEvent, events} ) {
  const [newEvent, setNewEvent] = useState(blankAddEventForm);
  const [calendar, setCalendar] = useState('');
  const [timeSlots, setTimeSlots] = useState ([]);
  const [timeSlot, setTimeSlot] = useState ({});
  const [timeOption, setTimeOption] = useState('');
  const [eventName, setEventName] = useState('');
  const [eventPrice, setEventPrice]= useState('');
  const [eventDescription, setEventDescription]= useState('');
  const [eventImage, setEventImage]= useState('');
  const [availableTickets, setAvailableTickets] = useState('');
  const [venueId, setVenueId] = useState('');
  const timeValue: Date = new Date("01/01/2021 08:30 AM");
  const minTime: Date = new Date("01/02/2021 01:00 AM");
  const maxTime: Date = new Date("01/02/2021 05:00 AM");
  // console.log(eventName);
  const id = timeOption;
  const dateItem = `${timeSlot.time_value} + ${calendar}`;
  const {event_name, price, event_description, image, event_type, available_tickets, event_date, venue_id} = newEvent;

  const blankAddEventForm = {
    event_name: "",
    price: "",
    event_type: "",
    venue_id: ""
  };

  //GET request, available time slots for event scheduling at venue
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

//Handle submission of new event form
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
    };
    addEvent(event);
  }

    return (
      <div >
        <div className=" mt-5 md:mt-0 md:col-span-2">
          <form action="#" method="POST" onSubmit={onSubmit}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-slate-400 space-y-6 sm:p-6">
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
                      {timeSlot.start_time}
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
            </div>
            <div className="px-4 py-3 bg-slate-400'text-right sm:px-6">
              <input                
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              />
            </div>
          </div>
        </form>
      </div>
      <div className="bg-slate-400">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-lg font-medium text-gray-900">Upcoming Events</h2>
          <div className="mt-6 pb-10 border-t border-b border-gray-200 divide-y divide-gray-200 space-y-10">
            {events.map((event) => (
            <UpcomingEventItem key={event.id} event={event}/>
            ))}
          </div>
        </div>
      </div>
    </div>
    )}

  export default Admin;