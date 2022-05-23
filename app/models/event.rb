class Event < ApplicationRecord
    belongs_to :venue
    has_many :tickets
    has_many :users, through: :tickets
end
