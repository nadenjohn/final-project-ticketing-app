class ApplicationController < ActionController::API
  include ActionController::Cookies
  before_action :authorize
  def authorize
    auth_header = request.headers[:Authorization]

    if !auth_header
     render json: { message: "Must send token in request."}, status: :forbidden
    else
     token = auth_header.split(' ')[1]
     secret = 'this is secret'

     begin
         decoded_token = JWT.decode token, secret
         payload = decoded_token.first
         user_id = payload['used_id']
         @user = User.find_by user_id
     rescue
         render json: { message: 'Invalid token.'}, status: :forbidden
     end
    end
  end
end
