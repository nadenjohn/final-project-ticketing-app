class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :password_digest, :age, :created_at, :updated_at
end
