class User < ApplicationRecord
    has_secure_password
    has_many :tickets
    has_many :cart_items
    has_many :events, through: :tickets
    has_many :events, through: :cart_items
end
