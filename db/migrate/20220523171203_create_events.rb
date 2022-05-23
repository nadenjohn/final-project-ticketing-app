class CreateEvents < ActiveRecord::Migration[6.1]
  def change
    create_table :events do |t|
      t.string :event_name
      t.string :event_type
      t.integer :venue_id
      t.datetime :event_date
      t.integer :price
      t.integer :available_tickets

      t.timestamps
    end
  end
end
