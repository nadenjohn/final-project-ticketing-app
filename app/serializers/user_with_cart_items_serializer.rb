class UserWithCartItemsSerializer < ActiveModel::Serializer
  attributes :id, :username, :password
  has_many :cart_items

end
