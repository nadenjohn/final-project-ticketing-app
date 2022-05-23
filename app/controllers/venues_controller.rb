class VenuesController < ApplicationController
    def index 
        render json: Venue.all
    end 
    def show
        venue = Venue.find_by(params[:id])
        render json: venue
    end 
end
