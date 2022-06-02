class AddStatusToCartItems < ActiveRecord::Migration[6.1]
  def change
    add_column :cart_items, :status, :string
  end
end
