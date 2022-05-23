class User < ApplicationRecord
    has many :tickets
    has many :events, through: :tickets
end
