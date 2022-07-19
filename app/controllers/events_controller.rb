class EventsController < ApplicationController
  skip_before_action :authorize
    
  def index 
    events = Event.where('event_date >= ?', Date.today)
    render json: events.all.order(event_date: :asc)
  end 
  
  def show
    event = Event.find_by(params[:id])
    render json: event
  end 

  def create
    event = Event.create!(event_params)
    render json: event, status: :created
  end
  
  private
    
  def event_params
    params.permit(:event_name, :price, :event, :event_date, :event_type, :available_tickets, :venue_id, :image)
  end

end
