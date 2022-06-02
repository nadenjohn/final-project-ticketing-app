class TimeslotsController < ApplicationController
    skip_before_action :authorize
    
    def index
        render json: Timeslot.all
    end

    def show
        timeslot = Timeslot.find_by(id: params[:id])
        render json: timeslot
    end

end
