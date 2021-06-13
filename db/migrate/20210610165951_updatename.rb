class Updatename < ActiveRecord::Migration[6.1]
  def change
    rename_column :ratings, :rating, :reviewrating
  end
end
