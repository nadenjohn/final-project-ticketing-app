class TicketsController < ApplicationController
    belongs_to :user
    belongs_to :event
end
