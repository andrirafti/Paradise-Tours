class ChangeTables < ActiveRecord::Migration[6.1]
  def change
    rename_column :hotels, :pricepernight, :price
    rename_column :locations, :flyprice, :price
  end
end
