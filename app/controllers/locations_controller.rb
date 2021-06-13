class LocationsController < ApplicationController
  before_action :set_location, only:[:show,:update,:destroy]

  def index
    #simple due to no nesting
    @locations=Location.all
    render json:@locations, include: :hotels, status: :ok
  end
  
  # GET /users/1
  # use include to INCLUDE stuff into the postman... 
  #since i did include hotels inside postman we will see the HOTEL for each specefic ID
  def show
    render json:@location, include: :hotels, status: :ok

  end
  
  # POST /users
  
  def create
    @location = Location.new(location_params)
    if @location.save
    render json: @location,status: :created
    else
      render json: @location.errors ,status: :unprocessable_entity
    end
  end
  
  # PUT AKA UPDATE /users/1
  #Find the ID, and then update the id..
  #Must use params always
  def update
    
    if @location.update(location_params)
    render JSON: @location
    else
      render JSON: @location.errors, status: :unprocessable_entity
  end
  end
  
  # DELETE /users/1
 
  def destroy
    
    
    @location.destroy
    puts "Destroyed Product"
  
  end
  
  
  
  private
  
  def set_location
    @location=Location.find(params[:id])
  end
  
  def location_params
    params.require(:location).permit(:name,:distance,:imgurl,:flyprice)
  end
end
