Rails.application.routes.draw do
  root to: "pages#home"
  post '/create_contact', to: 'pages#create_contact'
end
