Rails.application.routes.draw do
  

  resources :timeslots
  resources :cart_items
  resources :venues
  resources :events
  resources :tickets
  resources :users, only: [:index, :show, :create]

  post '/login', to: 'authentication#login'
  patch '/cart_checkout/', to: 'cart_items#cart_checkout'
  get '/profile', to: 'users#profile'
  get '/user_cart', to: 'cart_items#user_cart'

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
