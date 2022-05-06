Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      post "/validate_expresion", to: "validation#validate_expresion"
    end
  end

end
