class CreateCartItems < ActiveRecord::Migration[6.1]
  def change
    create_table :cart_items do |t|
      t.integer :user_id
      t.integer :quantity
      t.integer :total_price
      t.integer :event_id

      t.timestamps
    end
  end
end
