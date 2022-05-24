class RemoveEventDateColumn < ActiveRecord::Migration[6.1]
  def change
    remove_column :events, :event_date
  end
end
