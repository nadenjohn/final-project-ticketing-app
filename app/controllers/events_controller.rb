class EventsController < ApplicationController
    def index 
        render json: Event.all
    end 
    def show
        dentist = Event.find_by(params[:id])
        render json: event
    end 


end
