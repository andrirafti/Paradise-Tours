class HotelsController < ApplicationController
  before_action :set_hotel, only:[:show,:update,:destroy]

  def index
   #the include just lets me see where that belongs too..
   #so i can see what hotel belongs to what location. to see if singular or PLURAL
   #Check out your model folder.. if has_many then plural, if belongs_to singular... 
   #in this case hotels has many excursions so its plural
    @location=Location.find(params[:location_id])
    @hotels=Hotel.where(location_id: @location.id)
    render json:@hotels, include: :ratings, status: :ok
  end
  
  # GET /users/1
  def show
    render json:@hotel, include: :location, status: :ok 
  end
  
  # POST /users
  
  def create
    @hotel = Hotel.new(hotel_params)
    if @hotel.save
    render json: @hotel,status: :created
    else
      render json: @hotel.errors ,status: :unprocessable_entity
    end
  end
  
  # PUT AKA UPDATE /users/1
  #Find the ID, and then update the id..
  #Must use params always
  def update
    
    if @hotel.update(location_params)
    render JSON: @hotel
    else
      render JSON: @hotel.errors, status: :unprocessable_entity
  end
  end
  
  # DELETE /users/1
 
  def destroy
    
    
    @hotel.destroy
    puts "Destroyed Product"
  
  end
  
  
  
  private
  
  def set_hotel
    @hotel=Hotel.find(params[:id])
  end
  
  def hotel_params
    location_id = params[:location_id]
    params.require(:hotel).permit(:name,:imgurl,:pricepernight).merge(location_id: location_id)
  end
end
