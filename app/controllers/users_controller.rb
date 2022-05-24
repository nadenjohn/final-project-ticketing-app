class UsersController < ApplicationController
   def index
        byebug
        @users = User.all
        render json: @users, status: :ok
   end

   def create
        @user = User.create(
            username: params[:username],
            password: params[:password]
        )
        render json: @user, status: :created
    end
end
