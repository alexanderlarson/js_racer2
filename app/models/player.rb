class Player < ActiveRecord::Base
  has_many :races
  has_many :games, through: :races
  validates :name, uniqueness: true
end
