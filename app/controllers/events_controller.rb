class EventsController < ApplicationController
    skip_before_action :authorize
    
    def index 
        events = Event.where('event_date >= ?', Date.today)
        render json: events.all.order(event_date: :asc)
    end 
    def show
        dentist = Event.find_by(params[:id])
        render json: event
    end 


end
