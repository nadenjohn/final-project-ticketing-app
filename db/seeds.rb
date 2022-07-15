# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Venue.destroy_all
Event.destroy_all
CartItem.destroy_all
# Venue.destroy_all

# t1 = Timeslot.create(start_time: "6:00 PM", time_value: "T18:00:00.000Z")
# t1 = Timeslot.create(start_time: "7:00 PM", time_value: "T19:00:00.000Z")
# t1 = Timeslot.create(start_time: "8:00 PM", time_value: "T20:00:00.000Z")
# t1 = Timeslot.create(start_time: "9:00 PM", time_value: "T21:00:00.000Z")
# t1 = Timeslot.create(start_time: "10:00 PM", time_value: "T22:00:00.000Z")


# v1 = Venue.create(name: "The Rundown", is_adult: true, capacity: 500, image: "https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/boston/Paradise_C238045A-64BC-4AA2-B3BE11F8DC133D41_357e81be-87dd-424c-859992f2ac5050c7.jpg" )
# v2 = Venue.create(name: "The Quarry", is_adult: true, capacity: 100, image: 'https://cbdarchitects.com/wp-content/uploads/2018/12/reggies3.jpg')
# v3 = Venue.create(name: "Antonio's", is_adult: true, capacity: 300, image: 'https://www.spirit-of-metal.com/salle/BFE%20Rock%20Club%20_05b.jpg')
# v4 = Venue.create(name: "Hank's", is_adult: true, capacity: 200, image: 'https://budtransfer.com/ckfinder/userfiles/images/club%20202%20rock%20club%20budapest.jpg')
# v5 = Venue.create(name: "The Chophouse", is_adult: true, capacity: 200, image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/boston/Paradise_C238045A-64BC-4AA2-B3BE11F8DC133D41_357e81be-87dd-424c-859992f2ac5050c7.jpg')
# v6 = Venue.create(name: "The Chophouse", is_adult: true, capacity: 200, image: 'https://assets.simpleviewinc.com/simpleview/image/fetch/c_limit,q_75,w_1200/https://assets.simpleviewinc.com/simpleview/image/upload/crm/boston/Paradise_C238045A-64BC-4AA2-B3BE11F8DC133D41_357e81be-87dd-424c-859992f2ac5050c7.jpg')

e1 = Event.create(event_name: "The Bangles", event_type: "music", venue_id: 7, event_date: "2023-06-03T22:00:00.000Z", price: 20, available_tickets: 200, image:"https://totally80s.com/sites/totally80s.rock.tools/files/styles/site_width_image/public/2020-01/The%20Bangles%20II%20GettyImages-85336071.jpg?itok=91j38UPO" )
e2 = Event.create(event_name: "The Scorpions", event_type: "music", venue_id: 7, event_date: "2023-06-03T22:00:00.000Z", price: 20, available_tickets: 200, image: "https://d1epjnee0y8w64.cloudfront.net/blog/s3fs-public/2018-03/motleycrue3_copyrightmethodshop.com_resize_0.jpg" )
e3 = Event.create(event_name: "Megadeth", event_type: "music", venue_id: 7, event_date: "2023-06-04T21:00:00.000Z", price: 20, available_tickets: 200, image:"https://www.udiscovermusic.com/wp-content/uploads/2020/11/Megadeth-GettyImages-74718542.jpg" )
e4 = Event.create(event_name: "Punky and the Brain", event_type: "music", venue_id: 7, event_date: "2023-06-05T21:00:00.000Z", price: 20, available_tickets: 200, image:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1e8c1499-5540-402f-b919-0c989a5fec5e/d2nrklc-cf39e473-1f22-4722-8d5a-cb7fcc082f0e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFlOGMxNDk5LTU1NDAtNDAyZi1iOTE5LTBjOTg5YTVmZWM1ZVwvZDJucmtsYy1jZjM5ZTQ3My0xZjIyLTQ3MjItOGQ1YS1jYjdmY2MwODJmMGUuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kjZTMGuR6bOeoxCkUB3A18Rsdzzx1FJ_FTFxFBzfkCQ")
e5 = Event.create(event_name: "RnR Nightmare", event_type: "music", venue_id: 7, event_date: "2023-06-06T22:00:00.000Z", price: 20, available_tickets: 200, image: "https://townsquare.media/site/366/files/2021/03/butt_rock.jpg")
e6 = Event.create(event_name: "Call Your Mother", event_type: "music", venue_id: 7, event_date: "2023-06-06T22:00:00.000Z", price: 20, available_tickets: 200, image: "https://cms.kerrang.com/images/_1200x630_crop_center-center_82_none/Slipknot_190628_113203.jpg?mtime=1561717923" )