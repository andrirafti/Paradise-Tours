class CreateRatings < ActiveRecord::Migration[6.1]
  def change
    create_table :ratings do |t|
      t.integer :rating
      t.string :name
      t.string :review
      t.references :hotel, null: false, foreign_key: true

      t.timestamps
    end
  end
end
