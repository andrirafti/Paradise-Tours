class CreateExcursions < ActiveRecord::Migration[6.1]
  def change
    create_table :excursions do |t|
      t.string :name
      t.integer :price
      t.string :description
      t.string :imgurl
      t.references :hotel, null: false, foreign_key: true

      t.timestamps
    end
  end
end
