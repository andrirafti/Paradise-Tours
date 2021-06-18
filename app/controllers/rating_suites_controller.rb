class RatingSuitesController < ApplicationController
  before_action :set_rating, only:[:show,:update,:destroy]

  def index
   #the include just lets me see where that belongs too..
   #so i can see what hotel belongs to what location. to see if singular or PLURAL
   #Check out your model folder.. if has_many then plural, if belongs_to singular... 
   #in this case hotels has many excursions so its plural
    @suite=Suite.find(params[:suite_id])
    @ratings=RatingSuite.where(suite_id: @suite.id)
    render json:@ratings, include: :suite, status: :ok
  end
  
  # GET /users/1
  # def show
  #   render json:@ratingsuite, include: :suite, status: :ok 
  # end
  
  # POST /users
  
  def create
    @ratingsuite = RatingSuite.new(rating_params)
    if @ratingsuite.save
    render json: @ratingsuite,status: :created
    else
      render json: @ratingsuite.errors ,status: :unprocessable_entity
    end
  end
  
  # PUT AKA UPDATE /users/1
  #Find the ID, and then update the id..
  #Must use params always
  def update
    
    if @ratingsuite.update(rating_params)
    render JSON: @ratingsuite
    else
      render JSON: @ratingsuite.errors, status: :unprocessable_entity
  end
  end
  
  # DELETE /users/1
 
  def destroy
    
    
    @ratingsuite.destroy
    puts "Destroyed Rating"
  
  end
  
  
  
  private
  
  def set_rating
    @ratingsuite=RatingSuite.find(params[:id])
  end
  
  def rating_params
    suite_id = params[:suite_id]
   #make sure what is in require is not the same name as my stuff inside the permit area or you will run into an error//
    params.require(:rating_suite).permit(:name,:review,:rating).merge(suite_id: suite_id)
  end
end
