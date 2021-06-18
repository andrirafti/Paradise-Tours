class RatingEntertainmentsController < ApplicationController
  before_action :set_rating, only:[:show,:update,:destroy]

  def index
   
    @entertainment=Entertainment.find(params[:entertainment_id])
    @ratings=RatingEntertainment.where(entertainment_id: @entertainment.id)
    render json:@ratings, include: :entertainment, status: :ok
  end
  
  # GET /users/1
  # def show
  #   render json:@ratingsuite, include: :hotel, status: :ok 
  # end
  
  # POST /users
  
  def create
    @ratingentertainment = RatingEntertainment.new(rating_params)
    if @ratingentertainment.save
    render json: @ratingentertainment,status: :created
    else
      render json: @ratingentertainment.errors ,status: :unprocessable_entity
    end
  end
  
  # PUT AKA UPDATE /users/1
  #Find the ID, and then update the id..
  #Must use params always
  def update
    
    if @ratingentertainment.update(rating_params)
    render JSON: @ratingentertainment
    else
      render JSON: @ratingentertainment.errors, status: :unprocessable_entity
  end
  end
  
  # DELETE /users/1
 
  def destroy
    
    
    @ratingentertainment.destroy
    puts "Destroyed Rating"
  
  end
  
  
  
  private
  
  def set_rating
    @ratingentertainment=RatingEntertainment.find(params[:id])
  end
  
  def rating_params
    entertainment_id = params[:entertainment_id]
   #make sure what is in require is not the same name as my stuff inside the permit area or you will run into an error//
    params.require(:rating_entertainment).permit(:name,:review,:rating).merge(entertainment_id: entertainment_id)
  end
end
