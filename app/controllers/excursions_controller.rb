class ExcursionsController < ApplicationController
  before_action :set_excursion, only:[:show,:update,:destroy]

  def index
   
    @hotel=Hotel.find(params[:hotel_id])
    @excursions=Excursion.where(hotel_id: @hotel.id)
    render json:@excursions,  status: :ok
  end
  
  # GET /users/1
  def show
    render json:@excursion, include: :hotel ,status: :ok
  end
  
  # POST /users
  
  def create
    @excursion = Excursion.new(excursion_params)
    if @excursion.save
    render json: @excursion,status: :created
    else
      render json: @excursion.errors ,status: :unprocessable_entity
    end
  end
  
  # PUT AKA UPDATE /users/1
  #Find the ID, and then update the id..
  #Must use params always
  def update
    
    if @excursion.update(excursion_params)
    render JSON: @excursion
    else
      render JSON: @excursion.errors, status: :unprocessable_entity
  end
  end
  
  # DELETE /users/1
 
  def destroy
    
    
    @excursion.destroy
    puts "Destroyed Product"
  
  end
  
  
  
  private
  
  def set_excursion
    @excursion=Excursion.find(params[:id])
  end
  
  def excursion_params
    hotel_id = params[:hotel_id]
    params.require(:excursion).permit(:name,:imgurl,:price,:description).merge(hotel_id: hotel_id)
  end
end
