class CreateHotels < ActiveRecord::Migration[6.1]
  def change
    create_table :hotels do |t|
      t.string :name
      t.string :imgurl
      t.integer :pricepernight
      t.references :location, null: false, foreign_key: true

      t.timestamps
    end
  end
end
