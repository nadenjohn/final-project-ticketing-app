class UsersController < ApplicationController
    has many :tickets
    has many :events, through: :tickets
end
