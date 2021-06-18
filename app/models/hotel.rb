class Hotel < ApplicationRecord
  belongs_to :location
  has_many :excursions
  has_many :ratings
  has_many :entertainments
  has_many :suites
end
