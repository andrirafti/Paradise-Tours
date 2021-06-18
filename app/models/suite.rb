class Suite < ApplicationRecord
  belongs_to :hotel
  has_many :rating_suites
end
