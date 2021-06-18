class SuitesController < ApplicationController
  before_action :set_suite, only:[:show,:update,:destroy]

  def index
   
    @hotel=Hotel.find(params[:hotel_id])
    @suites=Suite.where(hotel_id: @hotel.id)
    render json:@suites,  status: :ok
  end
  
  # GET /users/1
  def show
    render json:@suite, include: :hotel ,status: :ok
  end
  
  # POST /users
  
  def create
    @suite = Suite.new(suite_params)
    if @suite.save
    render json: @suite,status: :created
    else
      render json: @suite.errors ,status: :unprocessable_entity
    end
  end
  
  # PUT AKA UPDATE /users/1
  #Find the ID, and then update the id..
  #Must use params always
  def update
    
    if @suite.update(suite_params)
    render JSON: @suite
    else
      render JSON: @suite.errors, status: :unprocessable_entity
  end
  end
  
  # DELETE /users/1
 
  def destroy
    
    
    @suite.destroy
    puts "Destroyed Product"
  
  end
  
  
  
  private
  
  def set_suite
    @suite=Suite.find(params[:id])
  end
  
  def suite_params
    hotel_id = params[:hotel_id]
    params.require(:suite).permit(:name,:imgurl,:price,:description).merge(hotel_id: hotel_id)
  end
end
