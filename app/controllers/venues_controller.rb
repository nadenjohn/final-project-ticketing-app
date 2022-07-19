class VenuesController < ApplicationController
  skip_before_action :authorize
    
  def index 
    render json: Venue.all
  end 
    
  def show
    venue = Venue.find_by(params[:id])
    render json: venue
  end 
end
