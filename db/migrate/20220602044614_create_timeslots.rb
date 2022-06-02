class CreateTimeslots < ActiveRecord::Migration[6.1]
  def change
    create_table :timeslots do |t|
      t.string :start_time
      t.string :time_value

      t.timestamps
    end
  end
end
