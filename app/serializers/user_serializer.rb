class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :age, :admin, :created_at, :updated_at
  has_many :tickets
  has_many :cart_items
end
