class EventSerializer < ActiveModel::Serializer
  attributes :id, :image, :event_name, :event_type, :venue_id, :event_date, :price, :available_tickets, :created_at, :updated_at
end
