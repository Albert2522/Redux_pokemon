class Api::PokemonController < ApplicationController
  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find_by_id(params[:id])
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render json: @pokemon
    else
      debugger
      render json: @pokemon.errors.full_messages, status: 422
    end
  end

  private
  def pokemon_params
    params.require(:pokemon).permit(:name, :attack, :defense, :image_url, :moves, :poke_type)
  end

end
