class CartItemsController < ApplicationController
  skip_before_action :authorize
    
  def index
    render json: CartItem.all           
  end

  def show
    cart_item = CartItem.find_by(id: params[:id])
    render json: cart_item
  end
    
  def user_cart
    user_cart = CartItem.where(user_id: params[:user_id], status: "in_cart").all
    render json: user_cart
  end

  def my_reservations
    my_reservations = CartItem.where(user_id: params[:user_id], status: "purchased").all
    render json: my_reservations
  end
  
  def cart_checkout
    purchased_items = CartItem.where(user_id: params[:user_id]).update_all(status: 'purchased')
    render json: purchased_items
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
    cart_item = CartItem.create!(cart_item_params)
    render json: cart_item, status: :created
  end
    
  def destroy
    cart_item = CartItem.find(params[:id])
    cart_item.destroy
    head :no_content
  end

  private
  
  def cart_item_params
    params.permit(:user_id, :quantity, :event_id, :total_price, :status)
  end
end


