Rails.application.routes.draw do

  get 'mypage', to: 'boards#me'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'

  get 'boards/search', to: 'boards#search'
  get 'boards/login', to: 'boards#login'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'home#index'
  resources :boards
  resources :comments, only: %i[create destroy]
  resources :users, only: %i[new create]
end
