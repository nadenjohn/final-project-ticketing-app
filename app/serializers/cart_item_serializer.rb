class CartItemSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :quantity, :total_price, :event_id

  belongs_to :event
  belongs_to :user
end
