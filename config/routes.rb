Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # give this another look to make sure I did it correctly
  # Did I write the partial correctly? # is this allowing me to write nothing in some of my controller methods?
  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy]
  end  
  
  
  root "static_pages#root"
end
