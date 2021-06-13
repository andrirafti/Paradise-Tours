class RatingsController < ApplicationController
  before_action :set_rating, only:[:show,:update,:destroy]

  def index
   #the include just lets me see where that belongs too..
   #so i can see what hotel belongs to what location. to see if singular or PLURAL
   #Check out your model folder.. if has_many then plural, if belongs_to singular... 
   #in this case hotels has many excursions so its plural
    @hotel=Hotel.find(params[:hotel_id])
    @ratings=Rating.where(hotel_id: @hotel.id)
    render json:@ratings, include: :hotel, status: :ok
  end
  
  # GET /users/1
  def show
    render json:@rating, include: :hotel, status: :ok 
  end
  
  # POST /users
  
  def create
    @rating = Rating.new(rating_params)
    if @rating.save
    render json: @rating,status: :created
    else
      render json: @rating.errors ,status: :unprocessable_entity
    end
  end
  
  # PUT AKA UPDATE /users/1
  #Find the ID, and then update the id..
  #Must use params always
  def update
    
    if @rating.update(rating_params)
    render JSON: @rating
    else
      render JSON: @rating.errors, status: :unprocessable_entity
  end
  end
  
  # DELETE /users/1
 
  def destroy
    
    
    @rating.destroy
    puts "Destroyed Rating"
  
  end
  
  
  
  private
  
  def set_rating
    @rating=Rating.find(params[:id])
  end
  
  def rating_params
    hotel_id = params[:hotel_id]
   #make sure what is in require is not the same name as my stuff inside the permit area or you will run into an error//
    params.require(:rating).permit(:name, :reviewrating, :review).merge(hotel_id: hotel_id)
  end
end
