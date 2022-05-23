class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :"is_adult", :capacity
end
