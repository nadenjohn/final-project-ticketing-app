class CartItemsController < ApplicationController

    def index
        render json: CartItem.all
    end

    def show
        cart_item = CartItem.find_by(id: params[:id])
        render json: appointment
    end

    def update
        ticket = CartItem.find(params[:id])
        if ticket
            ticket.update!( ticket_params )
            render json: ticket
        else
            render json: {error: "Ticket not found"}, status: :not_found
        end
    end

      
    def create
        ticket = CartItem.create!(cart_item_params)
        render json: cart_item.activity, status: :created
    end
    def destroy
        cart_item = CartItem.find(params[:id])
        cart_item.destroy
        head :no_content
    end
private
    def cart_item_params
        params.permit(:user_id, :quantity, :event_id :total_price)
    end
end

end
end
