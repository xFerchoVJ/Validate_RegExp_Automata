class Api::V1::ValidationController < ApplicationController
  def validate_expresion
    reg_exp = /^a*(b|ca*)$/
    correct_expresion = params[:string] =~ reg_exp
      if correct_expresion
        render json: { message: "La expresion ingresada es valida..." }.to_json
      else
        render json: { message: "La expresion ingresada es invalida..." }.to_json
      end
  end
  
end
