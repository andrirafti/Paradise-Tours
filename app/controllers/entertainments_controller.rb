class EntertainmentsController < ApplicationController
  before_action :set_entertainment, only:[:show,:update,:destroy]

  def index
   
    @hotel=Hotel.find(params[:hotel_id])
    @entertainments=Entertainment.where(hotel_id: @hotel.id)
    render json:@entertainments,  status: :ok
  end
  
  # GET /users/1
  def show
    render json:@entertainment, include: :hotel ,status: :ok
  end
  
  # POST /users
  
  def create
    @entertainment = Entertainment.new(entertainment_params)
    if @entertainment.save
    render json: @entertainment,status: :created
    else
      render json: @entertainment.errors ,status: :unprocessable_entity
    end
  end
  
  # PUT AKA UPDATE /users/1
  #Find the ID, and then update the id..
  #Must use params always
  def update
    
    if @entertainment.update(entertainment_params)
    render JSON: @entertainment
    else
      render JSON: @entertainment.errors, status: :unprocessable_entity
  end
  end
  
  # DELETE /users/1
 
  def destroy
    
    
    @entertainment.destroy
    puts "Destroyed Product"
  
  end
  
  
  
  private
  
  def set_entertainment
    @entertainment=Entertainment.find(params[:id])
  end
  
  def entertainment_params
    hotel_id = params[:hotel_id]
    params.require(:entertainment).permit(:name,:imgurl,:price,:description).merge(hotel_id: hotel_id)
  end
end
