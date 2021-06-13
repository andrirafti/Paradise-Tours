class Hotel < ApplicationRecord
  belongs_to :location
  has_many :excursions
  has_many :ratings
end
