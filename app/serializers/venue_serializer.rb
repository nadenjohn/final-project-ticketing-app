class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :"is_adult", :capacity

  has_many :events
end
