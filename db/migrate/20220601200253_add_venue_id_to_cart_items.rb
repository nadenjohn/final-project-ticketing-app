class AddVenueIdToCartItems < ActiveRecord::Migration[6.1]
  def change
    add_column :cart_items, :venue_id, :integer
  end
end
