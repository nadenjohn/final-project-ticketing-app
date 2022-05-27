Rails.application.routes.draw do
  

  resources :cart_items
  resources :venues
  resources :events
  resources :tickets
  resources :users, only: [:index, :show, :create]

  post '/login', to: 'authentication#login'
  get '/profile', to: 'users#profile'
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
