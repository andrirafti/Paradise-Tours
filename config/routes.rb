Rails.application.routes.draw do
  resources :locations do
    resources :hotels do 
      resources :ratings 
      resources :excursions
      resources :entertainments do
        resources :rating_entertainments
      end
      resources :suites do
        resources :rating_suites
      end
      
    end
  end
  #when i do hotels do ratings excursions what it means is that HOTELS
  #can have BOTH ratings and excursions into it! 
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
