ActiveRecord::Schema.define(version: 2022_06_02_201114) do

  enable_extension "plpgsql"

  create_table "cart_items", force: :cascade do |t|
    t.integer "user_id"
    t.integer "quantity"
    t.integer "total_price"
    t.integer "event_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "venue_id"
    t.string "status"
  end

  create_table "events", force: :cascade do |t|
    t.string "event_name"
    t.string "event_type"
    t.integer "venue_id"
    t.integer "price"
    t.integer "available_tickets"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.datetime "event_date"
    t.string "image"
    t.string "event_discription"
  end

  create_table "tickets", force: :cascade do |t|
    t.integer "user_id"
    t.integer "quantity"
    t.integer "total_price"
    t.integer "event_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "timeslots", force: :cascade do |t|
    t.string "start_time"
    t.string "time_value"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "name"
    t.string "username"
    t.string "password_digest"
    t.integer "age"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.boolean "admin"
  end

  create_table "venues", force: :cascade do |t|
    t.string "name"
    t.boolean "is_adult"
    t.integer "capacity"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
  end

end
