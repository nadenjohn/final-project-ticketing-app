class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :"is_adult", :capacity, :image
  has_many :events
end
