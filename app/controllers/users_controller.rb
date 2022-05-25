class UsersController < ApplicationController
   skip_before_action :authorize, only: :create
   
    def index
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
