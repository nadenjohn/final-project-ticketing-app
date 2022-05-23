class TicketSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :quantity, :total_price
end
