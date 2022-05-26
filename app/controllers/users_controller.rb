class UsersController < ApplicationController
   skip_before_action :authorize, only: :create
   
    def index
        @users = User.all
        render json: @users, status: :ok
    end
    def show
        current_user = User.find(params[:id])
        render json: current_user
    end 

    def profile
        render json: @user
    end

   def create
        @user = User.create(
            username: params[:username],
            password: params[:password]
        )
        render json: @user, status: :created
    end
end
