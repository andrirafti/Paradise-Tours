class CreateLocations < ActiveRecord::Migration[6.1]
  def change
    create_table :locations do |t|
      t.string :name
      t.integer :distance
      t.string :imgurl
      t.integer :flyprice

      t.timestamps
    end
  end
end
