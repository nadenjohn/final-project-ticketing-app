class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :age
end