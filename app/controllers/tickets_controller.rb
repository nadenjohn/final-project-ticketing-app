class TicketsController < ApplicationController
    def index
        render json: Ticket.all
    end

    def show
        ticket = Ticket.find_by(id: params[:id])
        render json: appointment
    end

    def update
        ticket = Ticket.find(params[:id])
        if ticket
            ticket.update!( ticket_params )
            render json: ticket
        else
            render json: {error: "Ticket not found"}, status: :not_found
        end
    end

      
    def create
        ticket = Ticket.create!(ticket_params)
        render json: ticket.activity, status: :created
    end
    def destroy
        ticket = Ticket.find(params[:id])
        ticket.destroy
        head :no_content
    end
private
    def ticket_params
        params.permit(:user_id, :quantity, :event_id, :total_price)
    end
end

end
