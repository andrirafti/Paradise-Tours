class Entertainment < ApplicationRecord
  belongs_to :hotel
  has_many :rating_entertainments
end
