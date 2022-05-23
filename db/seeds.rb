# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


v1 = Venue.create(name: "The Chophouse", is_adult: true, capacity: 200)

e1 = Event.create(event_name: "The Scorpions", event_type: "music", venue_id: 1, event_date: "June 1 @ 9:00pm", price: 20, available_tickets: 200)
e1 = Event.create(event_name: "The Spiders", event_type: "music", venue_id: 1, event_date: "June 1 @ 9:00pm", price: 20, available_tickets: 200)
e1 = Event.create(event_name: "The Death Eaters", event_type: "music", venue_id: 1, event_date: "June 1 @ 9:00pm", price: 20, available_tickets: 200)
e1 = Event.create(event_name: "The Billygoats", event_type: "music", venue_id: 1, event_date: "June 1 @ 9:00pm", price: 20, available_tickets: 200)
e1 = Event.create(event_name: "The Herbs", event_type: "music", venue_id: 1, event_date: "June 1 @ 9:00pm", price: 20, available_tickets: 200)
e1 = Event.create(event_name: "The Scorpions", event_type: "music", venue_id: 1, event_date: "June 1 @ 9:00pm", price: 20, available_tickets: 200)