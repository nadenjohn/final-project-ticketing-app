class UsersController < ApplicationController
   skip_before_action :authorize, only: :create
   rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
   
    def index
        @users = User.all
        render json: @users, status: :ok
    end
    def show
        current_user = User.find(params[:id])
        render json: @user
    end 

    def profile
        render json: @user
    end

   def create

        user = User.create!(user_params)
        render json: user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :admin)
    end
    def render_unprocessable_entity_response(invalid)
        render json: { errors: invalid.record.errors }, status: :unprocessable_entity
      end

end
