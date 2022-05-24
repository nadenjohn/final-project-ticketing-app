# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Venue.destroy_all
Event.destroy_all



v2 = Venue.create(name: "The Rundown", is_adult: true, capacity: 500)
v2 = Venue.create(name: "The Quarry", is_adult: true, capacity: 100)
v2 = Venue.create(name: "Antonio's", is_adult: true, capacity: 300)
v2 = Venue.create(name: "Hank's", is_adult: true, capacity: 200)
v2 = Venue.create(name: "The Chophouse", is_adult: true, capacity: 200)
v2 = Venue.create(name: "The Chophouse", is_adult: true, capacity: 200)

e1 = Event.create(event_name: "The Scorpions", event_type: "music", venue_id: 1, event_date: "2022-06-11T21:08:58.594Z", price: 20, available_tickets: 200)
e1 = Event.create(event_name: "The Spiders", event_type: "music", venue_id: 1, event_date: "2022-05-01T21:08:58.594Z", price: 20, available_tickets: 200)
e1 = Event.create(event_name: "The Death Eaters", event_type: "music", venue_id: 1, event_date: "2022-05-29T21:08:58.594Z", price: 20, available_tickets: 200)
e1 = Event.create(event_name: "The Billygoats", event_type: "music", venue_id: 1, event_date: "2022-05-23T21:08:58.594Z", price: 20, available_tickets: 200)
e1 = Event.create(event_name: "The Herbs", event_type: "music", venue_id: 1, event_date: "2022-06-30T21:08:58.594Z", price: 20, available_tickets: 200)
e1 = Event.create(event_name: "The Scorpions", event_type: "music", venue_id: 1, event_date: "2022-07-02T21:08:58.594Z", price: 20, available_tickets: 200)